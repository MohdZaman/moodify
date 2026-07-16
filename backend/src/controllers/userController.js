import userModel from "../model/User.model.js";
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"

const createToken = (id)=>{
    return jwt.sign({id},process.env.JWT_SECRET)
}

const registerUser = async (req,res)=>{
    try {
        const {name,email,password} = req.body;
    
        // We need to check if user exists or not
        const exists = await userModel.findOne({email})
        if(exists){
            console.log("User already exists",exists.email)
            return res.status(409).json({success:false,message:"User already exists"})
        }
    
        // Hashing password
        const hashedPassword = await bcrypt.hash(password,10)
    
        const newUser = new userModel({
            name,
            email,
            password:hashedPassword
        })
        const user = await newUser.save()
        const token = createToken(user._id)
        return res.status(201).json({success:true,token})
    } catch (error) {
        console.error("User cannot be created",error.message)
        return res.status(500).json({success:false,message:"Internal Server error"})
        
    }
}

const login = async(req,res)=>{
   try {
     const {email,password} = req.body;
     const user = await userModel.findOne({email})
     if(!user){
        return res.status(404).json({success:false,message:"User not found with this email"})
     }
     const isMatch = await bcrypt.compare(password,user.password)
     if(isMatch){
        const token = createToken(user._id)
        return res.status(200).json({success:true,token,message:"User login successful"})
     }
     return res.status(400).json({success:false,message:"Invalid credentials"})
   } catch (error) {
    return res.status(500).json({success:false,message:"Internal server error"})
   }
}

const getProfile = async(req,res)=>{
    try {
        res.status(200).json({
            success:true,
            user:req.user
        })
    } catch (error) {
        res.status(500).json({
            success:false,
            message:"Internal server error"
        })
    }
}

export {registerUser,login,getProfile}