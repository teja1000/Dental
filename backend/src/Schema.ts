

import mongoose from 'mongoose';

// Define the Appointment schema
const appointmentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  gender: { type: String, enum: ['male', 'female', 'other'], required: true },
  age: { type: Number, required: true, min: 1, max: 120 },
  date: { type: Date, required: true },
  time: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

// Create and export the Appointment model
export const Appointment = mongoose.model('Appointment', appointmentSchema);