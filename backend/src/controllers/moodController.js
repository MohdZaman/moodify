import moodModel from "../model/mood.model.js";

const createMood = async(req,res)=>{
    try {
        const {emotions,confidence} = req.body

        const mood = await moodModel.create({
            user:req.user._id,
            emotions,
            confidence
        })

        res.status(201).json({
            success: true,
            mood
        });
    } catch (error) {
       
        res.status(500).json({
            success: false,
            message:error.message
        }); 
    }
}

export {createMood}