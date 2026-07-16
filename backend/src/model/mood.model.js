import mongoose from "mongoose";

const moodSchema = new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user",
        required:true,
    },
    emotions:{
        type:String,
        enum:["happy","sad","excited","neutral","angry","surprised","fearful","disgusted"],
        required:true,

    },
    confidence:{
        type: Number,
        required: true

    },
   
},{timestamps:true})

const moodModel = mongoose.model("mood",moodSchema)
export default moodModel