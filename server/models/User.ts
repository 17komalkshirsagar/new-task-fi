import mongoose, { Document, Schema } from "mongoose";
export interface IUser extends Document {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    phone: number;
    confirmPassword?: string;
    profile?: string;
    role: 'user';
    status: 'active' | 'inactive';
    sessionToken: string | null;
    token?: string;
}
const userSchema = new Schema<IUser>({
    firstName: { type: String, required: true, trim: true },
    lastName: { type: String, required: true, trim: true },
    email: { type: String, required: true, unique: true, trim: true },
    phone: { type: Number, required: true, unique: true, trim: true },
    password: { type: String, required: true, trim: true },
    profile: { type: String, trim: true },
    role: {
        type: String,
        enum: ["user"],
        default: "user",
        required: true,
        lowercase: true
    },
    status: { type: String, default: "active", enum: ['active', 'inactive'] },
    sessionToken: { type: String, default: null },
}, { timestamps: true });
export const User = mongoose.model<IUser>("User", userSchema);
