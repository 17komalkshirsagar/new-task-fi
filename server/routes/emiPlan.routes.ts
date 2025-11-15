import express from "express"
import { protectedRoute } from "../utils/protected"
import * as emiPlanController from "../controllers/emiPlan.controller"
const emiPlanRouter = express.Router()
emiPlanRouter
    .get("/get/all/emi/plan", emiPlanController.getAllEmiPlans)
    .get("/get/emi/:id", emiPlanController.getEmiPlansByProductId)
    .post("/create/plan", emiPlanController.createEmiPlan)
export default emiPlanRouter