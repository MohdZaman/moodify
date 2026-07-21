import mongoose from "mongoose"

const journalSchema = new mongoose.Schema({
    user:{
       type:mongoose.Schema.Types.ObjectId,
       ref:"user",
       required:true
    },
    title:{
        type:String,
        required:true,
    },
    content:{
        type:String,
        required:true,
    }
},{timestamps:true})

const journalModel = mongoose.model("journal",journalSchema)
export default journalModel