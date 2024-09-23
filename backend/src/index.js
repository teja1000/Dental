"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require('express');
var cors = require('cors');
var mongoose_1 = require("mongoose");
var dotenv_1 = require("dotenv");
var Appointment_1 = require("./Appointment");
dotenv_1.default.config();
var app = express();
var PORT = process.env.PORT || 3200;
// Middleware
app.use(cors());
app.use(express.json());
// Connect to MongoDB
mongoose_1.default.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/dental_clinic')
    .then(function () { return console.log('Connected to MongoDB'); })
    .catch(function (err) { return console.error('Failed to connect to MongoDB:', err); });
// Routes
app.use('/', Appointment_1.default);
// Start server
app.listen(PORT, function () {
    console.log("Server running on port ".concat(PORT));
});
