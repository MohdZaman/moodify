import express from "express"
import userRouter from "./routes/userRoutes.js";
import { createMood } from "./controllers/moodController.js";
import moodRouter from "./routes/moodRoutes.js";

const app = express();
app.use(express.json());
app.get('/',(req,res)=>{
    res.send("Api is running")
})
app.use('/api/user',userRouter)
app.use('/api/mood',moodRouter)
export default app