import mongoose from "mongoose";
import bcryptjs from "bcryptjs";
import dotenv from "dotenv";
import { User } from "./models/User";
dotenv.config();
async function createUser() {
    try {
        await mongoose.connect(process.env.MONGO_URL || "");
        console.log("Connected to MongoDB");
        const existingUser = await User.findOne({ email: "user@example.com" });
        if (existingUser) {
            console.log("❌ User already exists with email: user@example.com");
            console.log("Use these credentials to login:");
            console.log("Email: user@example.com");
            console.log("Password: user123");
            process.exit(0);
        }
        const hashedPassword = await bcryptjs.hash("user123", 10);
        const user = await User.create({
            firstName: "Test",
            lastName: "User",
            email: "user@example.com",
            phone: 9876543210,
            password: hashedPassword,
            role: "user",
            status: "active",
        });
        console.log("\n✅ User created successfully!");
        console.log("\n📧 Login Credentials:");
        console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━");
        console.log("Email:    user@example.com");
        console.log("Password: user123");
        console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━");
        console.log("\n🌐 Login URL: http://localhost:5173/login");
        console.log("\n⚠️  Please change the password after first login!\n");
        process.exit(0);
    } catch (error) {
        console.error("Error creating user:", error);
        process.exit(1);
    }
}
createUser();