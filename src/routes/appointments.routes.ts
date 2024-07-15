import { Router } from 'express';
import { createAppointment, deleteAppointment, getAppointments, updateAppointment } from '../controllers/appointments.controllers';

const router = Router();

// Define route for creating appointments
router.post('/', createAppointment);
router.get('/', getAppointments);
router.put('/:id', updateAppointment);
router.delete('/:id', deleteAppointment);


export default router;
