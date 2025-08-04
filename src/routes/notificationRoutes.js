import { Router } from "express";
import { validate } from "../utils/validator.js";
import { handleNotification, welcome } from "../controllers/notificationController.js";

const router = Router()

// Route for POST request , notifications service
router.post('/notifications', validate, handleNotification)
//testing for dockerizing
router.get("/", welcome)

export default router