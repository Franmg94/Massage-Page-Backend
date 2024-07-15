"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const appointments_1 = require("../controllers/appointments");
const router = (0, express_1.Router)();
// Define route for creating appointments
router.post('/', appointments_1.createAppointment);
router.get('/', appointments_1.getAppointments);
router.put('/:id', appointments_1.updateAppointment);
router.delete('/:id', appointments_1.deleteAppointment);
exports.default = router;
