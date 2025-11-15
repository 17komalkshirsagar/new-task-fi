import express from "express"
import { protectedRoute } from "../utils/protected"
import * as contactController from "../controllers/contact.controller"
const contactRouter = express.Router()
contactRouter
    .post("/submit", contactController.submitContactForm)
    .get("/get-all", protectedRoute, contactController.getAllContacts)
    .get("/get-contact/:id", protectedRoute, contactController.getContactById)
    .put("/update-status/:id", protectedRoute, contactController.updateContactStatus)
    .delete("/delete/:id", protectedRoute, contactController.deleteContact);
export default contactRouter