import { Data } from "../model/data.model.js";

export const TakeData = async (req,res)=>{

    const {My_Data} = req.body;

    if(!My_Data){
        return res.status(400).json({
            message:"data is required !",
            success:false
        })
    }

    try {
        const storedData = Data.findOne({text:My_Data})
        if(storedData){
            return res.status(400).json({
                message:"the same data stored on the database!",
                success:false
            })
        }
    } catch (error) {
        
    }

    return res.status(201).json({
        message:"it's working !",
        success:true
    })
}