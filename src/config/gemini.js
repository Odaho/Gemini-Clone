
const myApiKey = import.meta.env.VITE_GOOGLE_API_KEY;

import {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
} from "@google/generative-ai"


const genAI = new GoogleGenerativeAI(myApiKey);

const model = genAI.getGenerativeModel({
    model: "gemini-1.0-pro",
});

const generationConfig = {
    temperature: 0.9,
    topP: 1,
    maxOutputTokens: 2048,
    responseMimeType: "text/plain",
};

async function runChat(promt) {
    const chatSession = model.startChat({
        generationConfig,
        history: [],
    });

    const result = await chatSession.sendMessage(promt);
    const response = result.response;
    console.log(response.text());
    return response.text();
}

export default runChat;
