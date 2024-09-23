import React, { useState, useEffect } from 'react';
import { Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

const BookingPage: React.FC = () => {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [gender, setGender] = useState('');
  const [age, setAge] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [availableSlots, setAvailableSlots] = useState<string[]>([]);
  const [bookingStatus, setBookingStatus] = useState<string | null>(null);

  const generateTimeSlots = (start: string, end: string) => {
    const slots = [];
    let current = new Date(`2000-01-01T${start}`);
    const endTime = new Date(`2000-01-01T${end}`);
    while (current <= endTime) {
      slots.push(current.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }));
      current.setMinutes(current.getMinutes() + 30);
    }
    return slots;
  };

  const morningSlots = generateTimeSlots('09:30', '13:30');
  const eveningSlots = generateTimeSlots('17:00', '21:00');
  const allSlots = [...morningSlots, ...eveningSlots];

  useEffect(() => {
    if (selectedDate) {
      fetchAvailableSlots();
    }
  }, [selectedDate]);

  const fetchAvailableSlots = async () => {
    try {
      const response = await fetch(`http://localhost:3200/available-slots?date=${selectedDate}`);
      const data = await response.json();
      setAvailableSlots(data.availableSlots);
    } catch (error) {
      console.error('Error fetching available slots:', error);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setBookingStatus(null);
    try {
      const response = await fetch('http://localhost:3200/book-appointment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          phoneNumber,
          gender,
          age: parseInt(age),
          date: selectedDate,
          time: selectedTime,
        }),
      });
      const data = await response.json();
      if (response.ok) {
        setBookingStatus('Appointment booked successfully!');
        // Reset form
        setName('');
        setPhoneNumber('');
        setGender('');
        setAge('');
        setSelectedDate('');
        setSelectedTime('');
      } else {
        setBookingStatus(`Booking failed: ${data.message}`);
      }
    } catch (error) {
      console.error('Error booking appointment:', error);
      setBookingStatus('An error occurred while booking the appointment.');
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-xl">
      <h1 className="text-2xl font-bold mb-6">Book an Appointment</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </div>
        <div>
          <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">Phone Number</label>
          <input
            type="tel"
            id="phoneNumber"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </div>
        <div>
          <label htmlFor="gender" className="block text-sm font-medium text-gray-700">Gender</label>
          <select
            id="gender"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div>
          <label htmlFor="age" className="block text-sm font-medium text-gray-700">Age</label>
          <input
            type="number"
            id="age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            required
            min="1"
            max="120"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </div>
        <div>
          <label htmlFor="date" className="block text-sm font-medium text-gray-700">Date</label>
          <div className="mt-1 relative rounded-md shadow-sm">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Calendar className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="date"
              id="date"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              required
              min={new Date().toISOString().split('T')[0]}
              className="block w-full pl-10 sm:text-sm border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
        </div>
        {selectedDate && (
          <div>
            <label htmlFor="time" className="block text-sm font-medium text-gray-700">Time</label>
            <select
              id="time"
              value={selectedTime}
              onChange={(e) => setSelectedTime(e.target.value)}
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            >
              <option value="">Select Time</option>
              {allSlots.map((slot) => (
                <option key={slot} value={slot} disabled={!availableSlots.includes(slot)}>
                  {slot} {!availableSlots.includes(slot) && '(Booked)'}
                </option>
              ))}
            </select>
          </div>
        )}
        <button
          type="submit"
          className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Book Appointment
        </button>
      </form>
      {bookingStatus && (
        <div className={`mt-4 p-4 rounded-md ${bookingStatus.includes('successfully') ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
          {bookingStatus}
          <Link to="/"><div className='text-blue-400'>Return to Home page</div></Link>
        </div>
      )}
    </div>
  );
};

export default BookingPage;