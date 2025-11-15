import express, { NextFunction, Request, Response } from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import morgan from "morgan";
import cron from "node-cron";
import passport from "./services/passport";
import redisClient from "./services/redisClient";
import { protectedRoute } from "./utils/protected";
import { app, server } from "./utils/socket";
import authRouter from "./routes/auth.routes";
import userRouter from "./routes/user.routes";
import productRouter from "./routes/product.routes";
import emiPlanRouter from "./routes/emiPlan.routes";
import contactRouter from "./routes/contact.routes";
dotenv.config()
app.use(express.json())
app.use(morgan("dev"))
app.use(express.urlencoded({ extended: true }))
const allowedOrigins = [
    "http://localhost:5173", "https://fi-task.vercel.app", ,
];
app.use(cors({
    origin: (origin, callback) => {
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error("Not allowed by CORS"));
        }
    },
    credentials: true
}));
app.use(passport.initialize())
app.use("/api/v1/auth", authRouter)
app.use("/api/v1/user", userRouter)
app.use("/api/v1/product", productRouter)
app.use("/api/v1/emi", emiPlanRouter)
app.use("/api/v1/contact", contactRouter)
redisClient.on("connect", () => {
    console.log('Connected to Redis');
})
app.use((req: Request, res: Response, next: NextFunction) => {
    res.status(404).json({ message: "Resource not found", });
})
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
    res.status(500).json({ message: "Something went wrong", error: err.message });
})
mongoose.connect(process.env.MONGO_URL || "").catch((err) => {
    console.error("Error connecting to MongoDB:", err);
    process.exit(1);
});
const PORT = process.env.PORT || 5000
// mongoose.connection.once("open", async () => {

//     console.log("MongoDb Connected")
//     server.listen(PORT, () => {
//         console.log(`Server is running on ${PORT}`)
//     });
// });


mongoose.connect(process.env.MONGO_URL || "")
    .then(() => console.log("MongoDB connected"))
    .catch(err => console.error("MongoDB connection error:", err));

