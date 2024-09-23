

import express from 'express';
import { Appointment } from './Schema';

const router = express.Router();

router.get('/available-slots', async (req, res) => {
  const { date } = req.query;
  if (!date) {
    return res.status(400).json({ message: 'Date is required' });
  }

  try {
    const bookedSlots = await Appointment.find({ date: new Date(date as string) })
      .select('time -_id')
      .lean();

    const bookedTimes = bookedSlots.map(slot => slot.time);
    const allSlots = generateTimeSlots('09:30', '13:30')
      .concat(generateTimeSlots('17:00', '21:00'));
    const availableSlots = allSlots.filter(slot => !bookedTimes.includes(slot));

    res.json({ availableSlots });
  } catch (error) {
    console.error('Error fetching available slots:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// POST route for booking appointment
router.post('/book-appointment', async (req, res) => {
  const { name, phoneNumber, gender, age, date, time } = req.body;

  try {
    const existingAppointment = await Appointment.findOne({ date, time });
    if (existingAppointment) {
      return res.status(409).json({ message: 'This time slot is already booked' });
    }

    const newAppointment = new Appointment({
      name,
      phoneNumber,
      gender,
      age,
      date,
      time
    });

    await newAppointment.save();

    res.status(201).json({ message: 'Appointment booked successfully', id: newAppointment._id });
  } catch (error) {
    console.error('Error booking appointment:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

function generateTimeSlots(start: string, end: string): string[] {
  const slots: string[] = [];
  const [startHour, startMinute] = start.split(':').map(Number);
  const [endHour, endMinute] = end.split(':').map(Number);

  let current = new Date(2000, 0, 1, startHour, startMinute);
  const endTime = new Date(2000, 0, 1, endHour, endMinute);

  while (current <= endTime) {
    slots.push(current.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true }));
    current.setMinutes(current.getMinutes() + 30);
  }

  return slots;
}


export default router;