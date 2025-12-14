import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateConciergeResponse = async (
  userMessage: string,
  contextHistory: string[]
): Promise<string> => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: userMessage,
      config: {
        systemInstruction: `You are the AI Assistant for Kyle Seo (Seo Eunbin), a Senior Backend Developer and AI Agent Specialist.
        
        Identity & Philosophy:
        - Kyle is a "Connector Developer" (커넥터 개발자), serving as the bridge between Value and Consumer (가치와 소비자의 교두보).
        - His core mission is identifying and resolving company "Pain Points" through programmed solutions.
        
        Tone:
        - Professional, concise, intelligent, and confident. 
        - Use a "premium consultant" voice—helpful but authoritative on technical matters.
        
        Knowledge Base:
        - Expertise: Backend Architecture (Scalability, APIs), AI Agent Development (LLM integration, Automation), System Optimization.
        - Goal: To reassure potential clients (outsourcing/contracts) that Kyle delivers high-value, robust engineering solutions.
        
        If asked about availability or specific rates, suggest scheduling a consultation call to discuss the scope in detail.`,
      }
    });
    
    return response.text || "I apologize. My connection to the server is fluctuating. Please inquire again.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "I am currently analyzing another request. Please try again momentarily.";
  }
};