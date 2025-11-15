import { Request, Response, NextFunction } from "express";
import asyncHandler from "express-async-handler";
import { EmiPlan } from "../models/emiPlan";
export const getAllEmiPlans = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    const page = parseInt(req.query.page as string) || 1;
    const limit = parseInt(req.query.limit as string) || 10;
    const totalItems = await EmiPlan.countDocuments();
    const totalPages = Math.ceil(totalItems / limit);
    const result = await EmiPlan.find()
        .populate("productId", "name variant price")
        .skip((page - 1) * limit)
        .limit(limit)
        .sort({ createdAt: -1 });
    res.status(200).json({
        message: "EMI plans fetched successfully",
        result,
        pagination: {
            totalItems,
            totalPages,
            currentPage: page,
            limit,
        },
    });
});
export const getEmiPlansByProductId = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    const { productId } = req.params;
    const result = await EmiPlan.find({ productId }).populate("productId", "name price");
    if (!result.length) {
        res.status(404).json({ message: "No EMI plans found for this product" });
        return;
    }
    res.status(200).json({ message: "EMI plans fetched successfully", result });
});
export const createEmiPlan = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    const { productId, monthlyPayment, tenure, interestRate, cashback } = req.body;
    const result = await EmiPlan.create({
        productId,
        monthlyPayment,
        tenure,
        interestRate,
        cashback,
    });
    res.status(201).json({ message: "EMI plan created successfully", result });
});
export const updateEmiPlan = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;
    const updated = await EmiPlan.findByIdAndUpdate(id, req.body, {
        new: true,
        runValidators: true,
    });
    if (!updated) {
        res.status(404).json({ message: "EMI plan not found" });
        return;
    }
    res.status(200).json({ message: "EMI plan updated successfully", result: updated });
});
export const deleteEmiPlan = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;
    const deleted = await EmiPlan.findByIdAndDelete(id);
    if (!deleted) {
        res.status(404).json({ message: "EMI plan not found" });
        return;
    }
    res.status(200).json({ message: "EMI plan deleted successfully" });
});