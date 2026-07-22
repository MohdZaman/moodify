import recommendations from "../data/recommendations.js";

const getRecommendations = async (req,res)=>{
    const {emotions} = req.params
    console.log("Controller reached");
    const data = recommendations[emotions]
    if(!data){
        return res.status(404).json({
            success:false,
            message:"Recommendations not found"
        })
       
    }
     res.status(200).json({
            success:true,
            recommendations:data
        })
}

export {getRecommendations}