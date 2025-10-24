import { VoyageAIClient } from "voyageai";
import { Data } from "../model/data.model.js";

export const embedData = async (req,res)=>{

    const client = new VoyageAIClient({ apiKey: process.env.VOYAGE_API_KEY });

    const {My_Data} = req.body;

    if(!My_Data){
        return res.status(400).json({
            message:"data is required !",
            success:false
        })
    }

    try {
        const storedData = Data.findOne({text:My_Data})
        if(!storedData){
            return res.status(400).json({
                message:"the same data stored on the database!",
                success:false
            })
        }

        const embeddingResponse = await client.embed({
            input: [My_Data],
            model: 'voyage-3'
        });

        const embedding = embeddingResponse.data[0].embedding

        const embeddedData = await Data.create({
            text:My_Data,
            embedding
        })

        return res.status(201).json({
            message:"the text is embeddid successfully!",
            embeddedData
        })

    } catch (error) {
        
    }

    return res.status(201).json({
        message:"it's working !",
        success:true
    })
}