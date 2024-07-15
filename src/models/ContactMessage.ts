import { Schema, model, Document } from 'mongoose';

interface IContactMessage extends Document {
  name: string;
  email: string;
  message: string;
}

const contactMessageSchema = new Schema<IContactMessage>({
  name: { type: String, required: true },
  email: { type: String, required: true },
  message: { type: String, required: true },
}, {
  timestamps: true
});


const ContactMessageModel = model<IContactMessage>('ContactMessage', contactMessageSchema);

export default ContactMessageModel;
