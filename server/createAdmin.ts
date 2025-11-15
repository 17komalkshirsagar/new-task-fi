import mongoose from "mongoose";
import bcryptjs from "bcryptjs";
import dotenv from "dotenv";
import { Admin } from "./models/Admin";
dotenv.config();
async function createAdmin() {
    try {
        await mongoose.connect(process.env.MONGO_URL || "");
        console.log("Connected to MongoDB");
        const existingAdmin = await Admin.findOne({ email: "admin@example.com" });
        if (existingAdmin) {
            console.log("❌ Admin already exists with email: admin@example.com");
            console.log("Use these credentials to login:");
            console.log("Email: admin@example.com");
            console.log("Password: admin123");
            process.exit(0);
        }
        const hashedPassword = await bcryptjs.hash("admin123", 10);
        const admin = await Admin.create({
            firstName: "Admin",
            lastName: "User",
            email: "admin@example.com",
            phone: 9999999999,
            password: hashedPassword,
            role: "admin",
            status: "active",
        });
        console.log("\n✅ Admin user created successfully!");
        console.log("\n📧 Login Credentials:");
        console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━");
        console.log("Email:    admin@example.com");
        console.log("Password: admin123");
        console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━");
        console.log("\n🌐 Login URL: http://localhost:5173/admin/login");
        console.log("\n⚠️  Please change the password after first login!\n");
        process.exit(0);
    } catch (error) {
        console.error("Error creating admin:", error);
        process.exit(1);
    }
}
createAdmin();