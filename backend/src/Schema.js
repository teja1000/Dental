"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Appointment = void 0;
var mongoose_1 = require("mongoose");
// Define the Appointment schema
var appointmentSchema = new mongoose_1.default.Schema({
    name: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    gender: { type: String, enum: ['male', 'female', 'other'], required: true },
    age: { type: Number, required: true, min: 1, max: 120 },
    date: { type: Date, required: true },
    time: { type: String, required: true },
    createdAt: { type: Date, default: Date.now }
});
// Create and export the Appointment model
exports.Appointment = mongoose_1.default.model('Appointment', appointmentSchema);
