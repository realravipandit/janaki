
import { GoogleGenAI, GenerateContentResponse } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const getEnergyAdvice = async (userPrompt: string, history: { role: string; parts: string }[] = []) => {
  try {
    const response: GenerateContentResponse = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: [
        { role: 'user', parts: [{ text: `User Question: ${userPrompt}` }] }
      ],
      config: {
        systemInstruction: `You are the AI Sustainability Consultant for Janaki Energy Pvt. Ltd. 
        Your knowledge is focused on Janaki Energy's core projects: Lower Janaki Hydropower Project (21.5 MW) and Middle Janaki Hydropower Project (34.2 MW). 
        You represent a firm based in Kathmandu (Tinkune) that specializes in sustainable development. 
        Keep responses professional, data-driven, and concise. 
        If asked about specific hydro projects, highlight Janaki Energy's commitment to technological excellence and environmental preservation in the Himalayan river systems.`,
        temperature: 0.6,
        topP: 0.9,
      }
    });

    return response.text || "I'm sorry, I couldn't process that request at the moment.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Our systems are undergoing maintenance. Please try again shortly.";
  }
};
