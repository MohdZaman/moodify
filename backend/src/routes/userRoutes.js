import  express  from 'express';
import { getProfile, login, registerUser } from '../controllers/userController.js';
import authMiddleware from '../middleware/auth.middleware.js';

const userRouter = express.Router()
userRouter.post('/register',registerUser)
userRouter.post('/login',login)
userRouter.get('/profile',authMiddleware,getProfile)

export default userRouter

