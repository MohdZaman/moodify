import express from "express"
import { getRecommendations } from "../controllers/recommendationsController.js"
import authMiddleware from "../middleware/auth.middleware.js"

const recommendationsRouter = express.Router()
recommendationsRouter.get('/:emotions',authMiddleware,getRecommendations)

export default recommendationsRouter