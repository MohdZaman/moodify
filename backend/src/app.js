import express from "express"
import userRouter from "./routes/userRoutes.js";

const app = express();
app.use(express.json());
app.get('/',(req,res)=>{
    res.send("Api is running")
})
app.use('/api/user',userRouter)
export default app