import mongoose, { Document, Schema } from "mongoose";
export interface IContact extends Document {
    name: string;
    email: string;
    phone?: string;
    subject: string;
    message: string;
    status: "pending" | "reviewed" | "resolved";
    createdAt?: Date;
    updatedAt?: Date;
}
const contactSchema = new Schema<IContact>(
    {
        name: { type: String, required: true, trim: true },
        email: { type: String, required: true, trim: true, lowercase: true },
        phone: { type: String, trim: true },
        subject: { type: String, required: true, trim: true },
        message: { type: String, required: true, trim: true },
        status: {
            type: String,
            enum: ["pending", "reviewed", "resolved"],
            default: "pending"
        },
    },
    { timestamps: true }
);
export const Contact = mongoose.model<IContact>("Contact", contactSchema);