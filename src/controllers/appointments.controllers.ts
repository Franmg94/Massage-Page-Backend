import express, { Request, RequestHandler, Response } from 'express';
import AppointmentModel from '../models/Appointment';


// CREATE APPOINTMENT
export const createAppointment: RequestHandler = async (req, res, next) => {
    try {
      const { service, date, time, location, duration, client } = req.body;
  
      // Validate request body
      if (!service || !date || !time || !location || !duration || !client) {
        return res.status(400).json({ message: 'Missing required fields.' });
      }
  
      // Create a new appointment instance
      const newAppointment = new AppointmentModel({
        service,
        date,
        time,
        location,
        duration,
        client
      });
  
      // Save the appointment to the database
      const savedAppointment = await newAppointment.save();
  
      // Send success response
      res.status(201).json({ message: 'Appointment created successfully', appointment: savedAppointment });
    } catch (error) {
      console.error('Error creating appointment:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  };


//  GET APPOINTMENTS
export const getAppointments: RequestHandler = async (req, res, next) => {
    try {
        // Fetch appointments from the database
        const appointments = await AppointmentModel.find();

        // Send the appointments as a response
        res.status(200).json({appointments});
    } catch(error){
        console.log('Error fetching appointments:', error);
        res.status(500).json({message: 'Internal server error'});
    }
};

// UPDATE APPOINTMENT
export const updateAppointment: RequestHandler<{id: string}> = async (req, res, next) => {

    try{
        const appointmentId = req.params.id;
        const updatedAppointmentData = req.body;

        // Check if appointment ID is provided
        if(!appointmentId) {
            return res.status(400).json({message: 'Appointment ID is missing.'});
        }

        //Update appointment in the database
        const updatedAppointment = await AppointmentModel.findByIdAndUpdate(appointmentId, updatedAppointmentData, {new: true});

        // Check if appointment exists
        if(!updatedAppointment){
            return res.status(400).json({message: 'Appointment not found.'});
        }

        // Send success response with updated appointment
        res.status(200).json({message: 'Appointment updated successfully', appointment: updatedAppointment});
    } catch (error) {
        console.log('Error updating appointment:', error);
        res.status(500).json({message: 'Internal server error'});
    }
};

// DELETE APPOINTMENT
export const deleteAppointment: RequestHandler<{id: string}> = async (req, res, next) => {
    try{
        const appointmentId = req.params.id;

        // Check if appointment ID is provided
        if(!appointmentId) {
            return res.status(400).json({message: 'Appointment ID is missing.'});
        }

        const appointmentDeleted = await AppointmentModel.findByIdAndDelete(appointmentId);

        if(!appointmentDeleted) {
            return res.status(404).json({message: 'Appointment not found'});
        }

        return res.status(200).json({message: 'Appointment deleted successfully.'});
    } catch (error){
        console.log('Error deleting appointment:', error);
        return res.status(500).json({message: 'Internal server error.'});
    }
}