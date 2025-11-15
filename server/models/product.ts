import mongoose, { Document, Schema } from "mongoose";
export interface IProduct extends Document {
    name: string;
    slug: string;
    variant: string;
    mrp: number;
    price: number;
    image: string;
    createdAt?: Date;
    updatedAt?: Date;
}
const productSchema = new Schema<IProduct>(
    {
        name: { type: String, required: true, trim: true },
        slug: { type: String, required: true, unique: true, trim: true },
        variant: { type: String, required: true, trim: true },
        mrp: { type: Number, required: true },
        price: { type: Number, required: true },
        image: { type: String, required: true, trim: true },
    },
    { timestamps: true }
);
export const Product = mongoose.model<IProduct>("Product", productSchema);