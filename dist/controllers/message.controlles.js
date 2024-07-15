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
exports.getMessages = exports.createMessage = void 0;
const ContactMessage_1 = __importDefault(require("../models/ContactMessage"));
// CREATE MESSAGE
const createMessage = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
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
        const newMessage = new ContactMessage_1.default({
            name,
            email,
            message
        });
        // Save the message to the Database
        const savedMessage = yield newMessage.save();
        // Send success response
        res.status(201).json({ message: 'Message created successfully', contactMessage: savedMessage });
    }
    catch (error) {
        console.error('Error creating message:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});
exports.createMessage = createMessage;
// GET MESSAGES
const getMessages = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const messages = yield ContactMessage_1.default.find();
        res.status(200).json({ messages });
    }
    catch (error) {
        console.log('Error fetching messages:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});
exports.getMessages = getMessages;
