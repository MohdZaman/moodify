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

const getMood = async (req,res)=>{
    try {
        const mood = await moodModel.find({
            user:req.user._id
        }).select("emotions confidence createdAt -_id")
        res.status(200).json({
            success:true,
            count:mood.length,
            mood
        })
    } catch (error) {
         res.status(500).json({
            success:false,
           message:"Internal server error"
        })
    }
}

export {createMood,getMood}