import express from "express"
import userRouter from "./routes/userRoutes.js";
import { createMood } from "./controllers/moodController.js";
import moodRouter from "./routes/moodRoutes.js";
import journalRouter from "./routes/journalRoutes.js";
import recommendationsRouter from "./routes/recommendationsRoutes.js";

const app = express();
app.use(express.json());
app.get('/',(req,res)=>{
    res.send("Api is running")
})
app.use('/api/user',userRouter)
app.use('/api/mood',moodRouter)
app.use('/api/journal',journalRouter)
app.use('/api/recommendations',recommendationsRouter)
export default app