import { NextFunction, Request, Response } from "express";
import asyncHandler from "express-async-handler";
import bcryptjs from "bcryptjs";
import crypto from "crypto";
import { OAuth2Client } from "google-auth-library";
import dotenv from "dotenv";
import { customValidator } from "../utils/validator";
import { userRegisterRules, signInRules } from "../rules/auth.rules";
import { generateToken } from "../utils/generateToken";
import { User, IUser } from "../models/User";
dotenv.config({});
export const registerUser = asyncHandler(async (req: Request, res: Response, next: NextFunction): Promise<any> => {
    const { firstName, lastName, email, phone, password, confirmPassword } = req.body;
    const { isError, error } = customValidator(req.body, userRegisterRules);
    if (isError) {
        return res.status(422).json({ message: "Validation errors", error });
    }
    if (password !== confirmPassword) {
        return res.status(400).json({ message: "Passwords do not match" });
    }
    const existingUser = await User.findOne({ $or: [{ email }, { phone }] });
    if (existingUser) {
        return res.status(400).json({ message: "User already exists with this email or phone" });
    }
    const hashedPassword = await bcryptjs.hash(password, 10);
    const newUser = await User.create({
        firstName,
        lastName,
        email,
        phone,
        password: hashedPassword,
        role: "user",
        status: "active",
    });
    const token = generateToken({ adminId: newUser._id, role: newUser.role });
    return res.status(201).json({
        message: "User registered successfully",
        result: {
            _id: newUser._id,
            firstName: newUser.firstName,
            lastName: newUser.lastName,
            email: newUser.email,
            phone: newUser.phone,
            role: newUser.role,
            status: newUser.status,
            token
        },
    });
});
export const signInUser = asyncHandler(async (req: Request, res: Response, next: NextFunction): Promise<any> => {
    const { email, password }: IUser = req.body;
    const { isError, error } = customValidator(req.body, signInRules);
    if (isError) {
        return res.status(422).json({ message: "Validation errors", error });
    }
    const user = await User.findOne({ email }).select("-__v -updatedAt -createdAt").lean();
    if (!user) {
        return res.status(401).json({ message: "Invalid Credential - Email not found" });
    }
    const verifyPassword = await bcryptjs.compare(password, user.password);
    if (!verifyPassword) {
        return res.status(401).json({ message: "Invalid Credential - Password do not match" });
    }
    if (user.status === "inactive") {
        return res.status(403).json({ message: "Your account has been deactivated. Contact support." });
    }
    const token = generateToken({ adminId: user._id, role: user.role });
    const result = {
        _id: user._id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        profile: user.profile,
        role: user.role,
        token
    };
    res.status(200).json({ message: "Logged in successfully", result });
});
export const signOutUser = asyncHandler(async (req: Request, res: Response, next: NextFunction): Promise<any> => {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) {
        return res.status(401).json({ message: "No token provided" });
    }
    if (!(req as any).admin) {
        return res.status(401).json({ message: "Unauthorized" });
    }
    const { adminId } = (req as any).admin;
    await User.findByIdAndUpdate(adminId, { sessionToken: null });
    res.status(200).json({ message: "Logged out successfully" });
});
export const continueWithGoogleUser = asyncHandler(async (req: Request, res: Response, next: NextFunction): Promise<any> => {
    const { credential } = req.body;
    const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);
    let ticket;
    try {
        ticket = await client.verifyIdToken({
            idToken: credential,
            audience: process.env.GOOGLE_CLIENT_ID,
        });
    } catch (error) {
        return res.status(400).json({ message: "Invalid Google token" });
    }
    const payload = ticket.getPayload();
    if (!payload || !payload.email) {
        return res.status(400).json({ message: "Google login failed, email not found in payload" });
    }
    const { email, name, picture } = payload;
    let user = await User.findOne({ email });
    if (!user) {
        user = await User.create({
            firstName: name?.split(" ")[0] || "",
            lastName: name?.split(" ")[1] || "",
            email,
            phone: Math.floor(1000000000 + Math.random() * 9000000000),
            password: await bcryptjs.hash(crypto.randomBytes(10).toString("hex"), 10),
            profile: picture || "",
            role: "user",
            status: "active",
        });
    }
    if (user.status === "inactive") {
        return res.status(403).json({ message: "Your account has been deactivated. Contact support." });
    }
    const token = generateToken({ adminId: user._id, role: user.role });
    res.status(200).json({
        message: "Login successful",
        result: {
            _id: user._id,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            role: user.role,
            token,
        },
    });
});