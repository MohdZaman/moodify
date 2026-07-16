import mongoose from 'mongoose';

const dbConnect  = async ()=>{
    try{
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("MongoDb connected successfully");
    }catch(error){
        console.error("MongoDb connection failed",error.message);
        process.exit(1);
    }
}

export default dbConnect;