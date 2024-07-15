import dotenv from 'dotenv';
dotenv.config();

// ℹ️ Connects to the database
import "./db/index";

// Handles HTTP requests (express is node js framework)
import express from 'express';
import { json } from 'body-parser';

import authRoutes from './routes/auth.routes';
import appointmentRoutes from './routes/appointments.routes';
import messageRoutes from './routes/message.routes';

const app = express();

// ℹ️ This function is getting exported from the config folder. It runs most pieces of middleware
import config from './config/index';
config(app);

// 👇 Apply body-parser middleware
app.use(json());

// 👇 Start handling routes here
app.use('/auth', authRoutes);
app.use('/appointments', appointmentRoutes);
app.use('/messages', messageRoutes);

// Error handling middleware
import errorHandler from './error-handling/index';
errorHandler(app);

export default app;
