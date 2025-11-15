import { Request, Response, NextFunction } from "express";
import asyncHandler from "express-async-handler";
import { Contact } from "../models/Contact";
export const submitContactForm = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    const { name, email, phone, subject, message } = req.body;
    if (!name || !email || !subject || !message) {
        res.status(400);
        throw new Error("Please provide all required fields");
    }
    const contact = await Contact.create({
        name,
        email,
        phone,
        subject,
        message,
        status: "pending"
    });
    res.status(201).json({
        message: "Contact form submitted successfully. We will get back to you soon!",
        result: {
            id: contact._id,
            name: contact.name,
            email: contact.email,
            status: contact.status
        }
    });
});
export const getAllContacts = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    const page = parseInt(req.query.page as string) || 1;
    const limit = parseInt(req.query.limit as string) || 10;
    const status = req.query.status as string;
    const query: any = {};
    if (status) {
        query.status = status;
    }
    const skip = (page - 1) * limit;
    const contacts = await Contact.find(query)
        .sort({ createdAt: -1 })
        .skip(skip)
        .limit(limit);
    const totalContacts = await Contact.countDocuments(query);
    res.status(200).json({
        message: "Contacts fetched successfully",
        result: contacts,
        pagination: {
            totalItems: totalContacts,
            totalPages: Math.ceil(totalContacts / limit),
            currentPage: page,
            limit
        }
    });
});
export const getContactById = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;
    const contact = await Contact.findById(id);
    if (!contact) {
        res.status(404);
        throw new Error("Contact not found");
    }
    res.status(200).json({
        message: "Contact fetched successfully",
        result: contact
    });
});
export const updateContactStatus = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;
    const { status } = req.body;
    if (!["pending", "reviewed", "resolved"].includes(status)) {
        res.status(400);
        throw new Error("Invalid status value");
    }
    const contact = await Contact.findByIdAndUpdate(
        id,
        { status },
        { new: true }
    );
    if (!contact) {
        res.status(404);
        throw new Error("Contact not found");
    }
    res.status(200).json({
        message: "Contact status updated successfully",
        result: contact
    });
});
export const deleteContact = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;
    const contact = await Contact.findByIdAndDelete(id);
    if (!contact) {
        res.status(404);
        throw new Error("Contact not found");
    }
    res.status(200).json({
        message: "Contact deleted successfully"
    });
});