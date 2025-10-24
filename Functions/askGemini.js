import { GoogleGenerativeAI } from "@google/generative-ai";

export const askGemini = async(userQuestion,filteredData )=>{

    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY)

    try {
        const model = genAI.getGenerativeModel({model:'gemini-2.5-flash'})
        const prompt = `based on the following context , please give the clear , short and only contextual answer
                         here is the context:${filteredData}.
                         and here is the users text ${userQuestion}.
                         please don't give response differently form the context and user text`

        const result = await model.generateContent(prompt);
        const response = await result.response;
        const AiResponse = response.candidates[0].content.parts[0].text;

        return AiResponse
        
    } catch (error) {
        return error.message
    }
}