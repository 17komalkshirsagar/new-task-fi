import { Request, Response, NextFunction } from "express";
import asyncHandler from "express-async-handler";
import { Product } from "../models/product";
import { EmiPlan } from "../models/emiPlan";
import { startOfWeek, endOfWeek, startOfMonth, endOfMonth, startOfYear, endOfYear } from "date-fns";
import { createProductRules, updateProductRules } from "../rules/product.rules";
import { customValidator } from "../utils/validator";
export const getAllProducts = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    const page = parseInt(req.query.page as string) || 1;
    const limit = parseInt(req.query.limit as string) || 10;
    const search = (req.query.search as string) || "";
    // Filter parameters
    const minPrice = req.query.minPrice ? parseInt(req.query.minPrice as string) : undefined;
    const maxPrice = req.query.maxPrice ? parseInt(req.query.maxPrice as string) : undefined;
    const category = req.query.category as string;
    const brand = req.query.brand as string;
    const maxDownpayment = req.query.maxDownpayment ? parseInt(req.query.maxDownpayment as string) : undefined;
    const minTenure = req.query.minTenure ? parseInt(req.query.minTenure as string) : undefined;
    const query: any = {};
    const andConditions: any[] = [];
    // Search filter
    if (search) {
        andConditions.push({
            $or: [
                { name: { $regex: search, $options: "i" } },
                { variant: { $regex: search, $options: "i" } },
            ]
        });
    }
    if (minPrice !== undefined || maxPrice !== undefined) {
        query.price = {};
        if (minPrice !== undefined) query.price.$gte = minPrice;
        if (maxPrice !== undefined) query.price.$lte = maxPrice;
    }
    if (category) {
        const categories = category.split(",").map(c => c.trim());
        const categoryConditions = categories.map(cat => ({
            $or: [
                { name: { $regex: cat, $options: "i" } },
                { variant: { $regex: cat, $options: "i" } }
            ]
        }));
        if (categoryConditions.length === 1) {
            andConditions.push(categoryConditions[0]);
        } else {
            andConditions.push({ $or: categoryConditions });
        }
    }
    if (brand) {
        const brands = brand.split(",").map(b => b.trim());
        const brandConditions = brands.map(b => ({
            name: { $regex: b, $options: "i" }
        }));
        if (brandConditions.length === 1) {
            andConditions.push(brandConditions[0]);
        } else {
            andConditions.push({ $or: brandConditions });
        }
    }
    if (maxDownpayment !== undefined) {
        query.price = query.price || {};
        query.price.$lte = maxDownpayment * 3; 
    }
    if (andConditions.length > 0) {
        query.$and = andConditions;
    }
    const totalItems = await Product.countDocuments(query);
    const totalPages = Math.ceil(totalItems / limit);
    const result = await Product.find(query)
        .sort({ createdAt: -1 })
        .skip((page - 1) * limit)
        .limit(limit);
    res.status(200).json({
        message: "Products fetched successfully",
        result,
        pagination: {
            totalItems,
            totalPages,
            currentPage: page,
            limit,
        },
    });
});
export const getProductById = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;
    const result = await Product.findById(id);
    if (!result) {
        res.status(409).json({ message: "Product not found" });
        return;
    }
    res.status(200).json({ message: "Prodcuct by id successfully", result });
});
export const getProductBySlug = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    const { slug } = req.params;
    const product = await Product.findOne({ slug });
    if (!product) {
        res.status(404).json({ message: "Product not found" });
        return;
    }
    const emiPlans = await EmiPlan.find({ productId: product._id });
    res.status(200).json({
        message: "Product fetched successfully",
        result: {
            product,
            emiPlans
        }
    });
});
export const createProduct = asyncHandler(async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const { name, slug, variant, mrp, price, image } = req.body;
    const { isError, error } = customValidator(req.body, createProductRules);
    if (isError) {
        res.status(422).json({ message: "Validation errors", error });
        return;
    }
    const result = await Product.create({ name, slug, variant, mrp, price, image });
    res.status(201).json({ message: "Product created successfully", result });
}
);
export const updateProduct = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;
    const data = req.body;
    const { isError, error } = customValidator(data, updateProductRules);
    if (isError) {
        res.status(422).json({ message: "Validation errors", error });
        return;
    }
    const result = await Product.findByIdAndUpdate(id, data, {
        new: true,
        runValidators: true,
    });
    if (!result) {
        res.status(404).json({ message: "Product not found" });
        return;
    }
    res.status(200).json({ message: "Product updated successfully", result });
}
);
export const deleteProduct = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;
    const result = await Product.findByIdAndDelete(id);
    if (!result) {
        res.status(404).json({ message: "Product not found" });
        return;
    }
    res.status(200).json({ message: "Product deleted successfully", result });
});
export const getProductDashboardStats = asyncHandler(
    async (req: Request, res: Response, next: NextFunction) => {
        const { type = "monthly" } = req.query;
        let startDate: Date;
        let endDate: Date = new Date();
        let groupFormat: string;
        switch (type) {
            case "daily":
                startDate = new Date();
                startDate.setHours(0, 0, 0, 0);
                groupFormat = "%Y-%m-%d";
                break;
            case "weekly":
                startDate = startOfWeek(new Date());
                endDate = endOfWeek(new Date());
                groupFormat = "%Y-%m-%d";
                break;
            case "monthly":
                startDate = startOfMonth(new Date());
                endDate = endOfMonth(new Date());
                groupFormat = "%Y-%m-%d";
                break;
            case "yearly":
                startDate = startOfYear(new Date());
                endDate = endOfYear(new Date());
                groupFormat = "%Y-%m";
                break;
            default:
                res.status(400).json({ message: "Invalid type provided" });
                return;
        }
        const result = await Product.aggregate([
            {
                $match: {
                    createdAt: { $gte: startDate, $lte: endDate },
                },
            },
            {
                $group: {
                    _id: { $dateToString: { format: groupFormat, date: "$createdAt" } },
                    totalProducts: { $sum: 1 },
                    totalRevenue: { $sum: { $multiply: ["$price", 1] } },
                },
            },
            { $sort: { _id: 1 } },
        ]);
        res.status(200).json({ message: "Stats fetched successfully", result });
    }
);