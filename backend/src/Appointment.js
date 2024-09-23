"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var Schema_1 = require("./Schema");
var router = express_1.default.Router();
router.get('/available-slots', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var date, bookedSlots, bookedTimes_1, allSlots, availableSlots, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                date = req.query.date;
                if (!date) {
                    return [2 /*return*/, res.status(400).json({ message: 'Date is required' })];
                }
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, Schema_1.Appointment.find({ date: new Date(date) })
                        .select('time -_id')
                        .lean()];
            case 2:
                bookedSlots = _a.sent();
                bookedTimes_1 = bookedSlots.map(function (slot) { return slot.time; });
                allSlots = generateTimeSlots('09:30', '13:30')
                    .concat(generateTimeSlots('17:00', '21:00'));
                availableSlots = allSlots.filter(function (slot) { return !bookedTimes_1.includes(slot); });
                res.json({ availableSlots: availableSlots });
                return [3 /*break*/, 4];
            case 3:
                error_1 = _a.sent();
                console.error('Error fetching available slots:', error_1);
                res.status(500).json({ message: 'Internal server error' });
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); });
// POST route for booking appointment
router.post('/book-appointment', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, name, phoneNumber, gender, age, date, time, existingAppointment, newAppointment, error_2;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = req.body, name = _a.name, phoneNumber = _a.phoneNumber, gender = _a.gender, age = _a.age, date = _a.date, time = _a.time;
                _b.label = 1;
            case 1:
                _b.trys.push([1, 4, , 5]);
                return [4 /*yield*/, Schema_1.Appointment.findOne({ date: date, time: time })];
            case 2:
                existingAppointment = _b.sent();
                if (existingAppointment) {
                    return [2 /*return*/, res.status(409).json({ message: 'This time slot is already booked' })];
                }
                newAppointment = new Schema_1.Appointment({
                    name: name,
                    phoneNumber: phoneNumber,
                    gender: gender,
                    age: age,
                    date: date,
                    time: time
                });
                return [4 /*yield*/, newAppointment.save()];
            case 3:
                _b.sent();
                res.status(201).json({ message: 'Appointment booked successfully', id: newAppointment._id });
                return [3 /*break*/, 5];
            case 4:
                error_2 = _b.sent();
                console.error('Error booking appointment:', error_2);
                res.status(500).json({ message: 'Internal server error' });
                return [3 /*break*/, 5];
            case 5: return [2 /*return*/];
        }
    });
}); });
function generateTimeSlots(start, end) {
    var slots = [];
    var _a = start.split(':').map(Number), startHour = _a[0], startMinute = _a[1];
    var _b = end.split(':').map(Number), endHour = _b[0], endMinute = _b[1];
    var current = new Date(2000, 0, 1, startHour, startMinute);
    var endTime = new Date(2000, 0, 1, endHour, endMinute);
    while (current <= endTime) {
        slots.push(current.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true }));
        current.setMinutes(current.getMinutes() + 30);
    }
    return slots;
}
exports.default = router;
