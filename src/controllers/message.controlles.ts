import { RequestHandler } from 'express';
import ContactMessageModel from '../models/ContactMessage';

// CREATE MESSAGE
export const createMessage: RequestHandler = async (req, res, next) => {
    try {
        const { name, email, message } = req.body;

        // Validate Request Body
        if (!name || !email || !message) {
            return res.status(400).json({ message: 'Missing required fields.' });
        }

        // Basic email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return res.status(400).json({ message: 'Invalid email format.' });
        }

        // Create a new message instance
        const newMessage = new ContactMessageModel({
            name,
            email,
            message
        });

        // Save the message to the Database
        const savedMessage = await newMessage.save();

        // Send success response
        res.status(201).json({ message: 'Message created successfully', contactMessage: savedMessage });
    } catch (error) {
        console.error('Error creating message:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};



// GET MESSAGES
export const getMessages: RequestHandler = async (req, res, next) => {
    try{
        const messages = await ContactMessageModel.find();

        res.status(200).json({messages});
    } catch(error){
        console.log('Error fetching messages:', error);
        res.status(500).json({message: 'Internal server error'});
    }
};