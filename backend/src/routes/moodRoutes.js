import moodModel from "../model/mood.model.js";
import { createMood, getMood } from "../controllers/moodController.js";
import authMiddleware from "../middleware/auth.middleware.js";
import express from "express"

const moodRouter = express.Router()
moodRouter.post('/',authMiddleware,createMood)
moodRouter.get('/',authMiddleware,getMood)

export default moodRouter
