import {Schema, model, Document} from "mongoose";

// Define an interface for the Admin schema
interface IAdmin extends Document {
  email: string;
  password: string;
}

const adminSchema = new Schema<IAdmin>(
  {
    email:{
      type: String,
      required: [true, 'Email is required.'],
      unique: true,
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      required: [true, 'Password is required']
    }
  },
  {
     // this second object adds extra properties: `createdAt` and `updatedAt`
     timestamps: true
  }
);

const Admin = model<IAdmin>("Admin", adminSchema);

export default Admin;