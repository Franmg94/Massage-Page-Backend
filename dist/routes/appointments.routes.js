"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const appointments_controllers_1 = require("../controllers/appointments.controllers");
const router = (0, express_1.Router)();
// Define route for creating appointments
router.post('/', appointments_controllers_1.createAppointment);
router.get('/', appointments_controllers_1.getAppointments);
router.put('/:id', appointments_controllers_1.updateAppointment);
router.delete('/:id', appointments_controllers_1.deleteAppointment);
exports.default = router;
