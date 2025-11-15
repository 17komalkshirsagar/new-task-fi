import express from "express"
import { protectedRoute } from "../utils/protected"
import * as authController from "../controllers/auth.controller"
const authRouter = express.Router()
authRouter
    .post("/sign-in", authController.signIn)
    .post("/sign-out", protectedRoute, authController.signOut)
    .post("/send-otp", authController.sendOTP)
    .post("/verify-otp", authController.verifyOTP)
    .post("/forgot-password", authController.forgotPassword)
    .put("/reset-password", authController.resetPassword)
    .post("/continue-with-google", authController.continueWithGoogle);
export default authRouter