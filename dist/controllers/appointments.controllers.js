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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteAppointment = exports.updateAppointment = exports.getAppointments = exports.createAppointment = void 0;
const Appointment_1 = __importDefault(require("../models/Appointment"));
// CREATE APPOINTMENT
const createAppointment = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { service, date, time, location, duration, client } = req.body;
        // Validate request body
        if (!service || !date || !time || !location || !duration || !client) {
            return res.status(400).json({ message: 'Missing required fields.' });
        }
        // Create a new appointment instance
        const newAppointment = new Appointment_1.default({
            service,
            date,
            time,
            location,
            duration,
            client
        });
        // Save the appointment to the database
        const savedAppointment = yield newAppointment.save();
        // Send success response
        res.status(201).json({ message: 'Appointment created successfully', appointment: savedAppointment });
    }
    catch (error) {
        console.error('Error creating appointment:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});
exports.createAppointment = createAppointment;
//  GET APPOINTMENTS
const getAppointments = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Fetch appointments from the database
        const appointments = yield Appointment_1.default.find();
        // Send the appointments as a response
        res.status(200).json({ appointments });
    }
    catch (error) {
        console.log('Error fetching appointments:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});
exports.getAppointments = getAppointments;
// UPDATE APPOINTMENT
const updateAppointment = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const appointmentId = req.params.id;
        const updatedAppointmentData = req.body;
        // Check if appointment ID is provided
        if (!appointmentId) {
            return res.status(400).json({ message: 'Appointment ID is missing.' });
        }
        //Update appointment in the database
        const updatedAppointment = yield Appointment_1.default.findByIdAndUpdate(appointmentId, updatedAppointmentData, { new: true });
        // Check if appointment exists
        if (!updatedAppointment) {
            return res.status(400).json({ message: 'Appointment not found.' });
        }
        // Send success response with updated appointment
        res.status(200).json({ message: 'Appointment updated successfully', appointment: updatedAppointment });
    }
    catch (error) {
        console.log('Error updating appointment:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});
exports.updateAppointment = updateAppointment;
// DELETE APPOINTMENT
const deleteAppointment = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const appointmentId = req.params.id;
        // Check if appointment ID is provided
        if (!appointmentId) {
            return res.status(400).json({ message: 'Appointment ID is missing.' });
        }
        const appointmentDeleted = yield Appointment_1.default.findByIdAndDelete(appointmentId);
        if (!appointmentDeleted) {
            return res.status(404).json({ message: 'Appointment not found' });
        }
        return res.status(200).json({ message: 'Appointment deleted successfully.' });
    }
    catch (error) {
        console.log('Error deleting appointment:', error);
        return res.status(500).json({ message: 'Internal server error.' });
    }
});
exports.deleteAppointment = deleteAppointment;
