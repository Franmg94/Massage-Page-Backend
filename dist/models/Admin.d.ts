import { Document } from "mongoose";
interface IAdmin extends Document {
    email: string;
    password: string;
}
declare const Admin: import("mongoose").Model<IAdmin, {}, {}, {}, Document<unknown, {}, IAdmin> & IAdmin & Required<{
    _id: unknown;
}>, any>;
export default Admin;
//# sourceMappingURL=Admin.d.ts.map