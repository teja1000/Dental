import express, { Application } from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import appointmentRoutes from './Appointment';

// Load environment variables from the .env file
dotenv.config();

// Create an instance of Express
const app: Application = express();
const PORT = process.env.PORT || 3200;

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/dental_clini';
mongoose.connect(MONGODB_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch((err: Error) => console.error('Failed to connect to MongoDB:', err));

// Routes
app.use('/', appointmentRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
