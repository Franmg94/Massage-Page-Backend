import { Document } from 'mongoose';
interface IContactMessage extends Document {
    name: string;
    email: string;
    message: string;
}
declare const ContactMessageModel: import("mongoose").Model<IContactMessage, {}, {}, {}, Document<unknown, {}, IContactMessage> & IContactMessage & Required<{
    _id: unknown;
}>, any>;
export default ContactMessageModel;
//# sourceMappingURL=ContactMessage.d.ts.map