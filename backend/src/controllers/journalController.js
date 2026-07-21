import journalModel from "../model/journel.model.js";

// CREATE A JOURNAL
const createJournal = async (req,res)=>{
    try {
        const {title,content} = req.body
        if(!title || !content){
           return res.status(500).json({
                success:false,
                message:"title and content required"
            })
        }
    
        const journal = await journalModel.create({
            user:req.user._id,
            title,
            content
        })
        res.status(201).json({
            success:true,
            journal
        })
    } catch (error) {
        res.status(500).json({
            success:false,
            message:error.message,
        })
    }
}
// GET A JOURNAL
const getJournal = async (req,res)=>{
    try {
        const journal = await journalModel.find({
            user:req.user._id
        }).select("title content createdAt ")
        res.status(200).json({
            success:true,
            journal
        })
    } catch (error) {
        res.status(500).json({
            success:false,
            message:error.message
        })
    }
}

//UPDATE THE EXISTING JOURNAL

const updateJournal = async (req,res)=>{
   try {
     const {title,content} = req.body
     const journal = await journalModel.findOne({
         _id:req.params.id,
         user:req.user._id
     })
     if(!journal){
         return res.status(404).json({
             success:false,
             message:"Journal not found"
         })
 
     }
     journal.title = title || journal.title
     journal.content = content || journal.content
     await journal.save()
     res.status(200).json({
         success:true,
         message:"Journal updated succcessfully",
         journal
     })
   } catch (error) {
    res.status(500).json({
        success:false,
        message:error.message
    })
   }
}

//DELETE A JOURNAL
const deleteJournal = async (req,res)=>{
    try {
        const journal = await journalModel.findOneAndDelete({
            _id:req.params.id,
            user:req.user._id
        })
        if(!journal){
            return res.status(404).json({
                success:false,
                message:"Journal not found"
            })
        }
            res.status(200).json({
                success:true,
                message:"Journal deleted successfully"
            })
    } catch (error) {
        res.status(500).json({
            succcess:false,
            message:error.message
        })
    }
    
}
   

export {createJournal,getJournal,updateJournal,deleteJournal}