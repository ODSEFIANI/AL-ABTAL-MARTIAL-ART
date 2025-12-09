import { GoogleGenAI, Chat } from "@google/genai";
import { AI_SYSTEM_INSTRUCTION } from '../constants';

let chatSession: Chat | null = null;

export const initializeChat = async (): Promise<void> => {
  if (!process.env.API_KEY) {
    console.warn("API Key not found, AI features will be disabled.");
    return;
  }
  
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    chatSession = ai.chats.create({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction: AI_SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
    });
  } catch (error) {
    console.error("Failed to initialize Gemini chat:", error);
  }
};

export const sendMessageToGemini = async (message: string): Promise<string> => {
  if (!chatSession) {
      await initializeChat();
      if (!chatSession) {
          return "Le système AI est actuellement indisponible. Veuillez réessayer plus tard.";
      }
  }

  try {
    const response = await chatSession.sendMessage({ message });
    return response.text || "Je n'ai pas pu générer de réponse.";
  } catch (error) {
    console.error("Error sending message to Gemini:", error);
    // Reset session on error in case of timeout/invalid state
    chatSession = null; 
    return "Désolé, une erreur est survenue. Veuillez réessayer.";
  }
};
