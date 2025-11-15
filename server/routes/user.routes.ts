import express from "express";
import { protectedRoute } from "../utils/protected";
import * as userController from "../controllers/user.controller";
const userRouter = express.Router();
userRouter
    .post("/register", userController.registerUser)
    .post("/sign-in", userController.signInUser)
    .post("/sign-out", protectedRoute, userController.signOutUser)
    .post("/continue-with-google", userController.continueWithGoogleUser);
export default userRouter;