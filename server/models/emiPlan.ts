import mongoose, { Document, Schema } from "mongoose";
export interface IEmiPlan extends Document {
    productId: mongoose.Types.ObjectId;
    monthlyPayment: number;
    tenure: number;
    interestRate: number;
    cashback?: string;
    createdAt?: Date;
    updatedAt?: Date;
}
const emiPlanSchema = new Schema<IEmiPlan>(
    {
        productId: {
            type: Schema.Types.ObjectId,
            ref: "Product",
            required: true,
        },
        monthlyPayment: { type: Number, required: true },
        tenure: { type: Number, required: true },
        interestRate: { type: Number, required: true },
        cashback: { type: String },
    },
    { timestamps: true }
);
export const EmiPlan = mongoose.model<IEmiPlan>("EmiPlan", emiPlanSchema);