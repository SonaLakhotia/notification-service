import { Router } from "express";
import { validate } from "../utils/validator.js";
import { handleNotification } from "../controllers/notificationController.js";

const router = Router()

// Route for POST request , notifications service
router.post('/notifications', validate, handleNotification)

export default router