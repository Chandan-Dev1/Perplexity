
import { ChatGoogleGenerativeAI } from "@langchain/google-genai";
import {
    HumanMessage,
    SystemMessage,
    AIMessage
} from "langchain";


// Gemini Model
const geminiModel = new ChatGoogleGenerativeAI({
    model: "gemini-flash-latest",
    apiKey: process.env.GEMINI_API_KEY
});


// Generate AI Response
export async function generateResponse(messages) {

    console.log(messages);

    const response = await geminiModel.invoke([
        new SystemMessage(`
            You are a helpful and precise assistant for answering questions.

            If you don't know the answer, say you don't know.
        `),

        ...messages.map(msg => {

            if (msg.role === "user") {
                return new HumanMessage(msg.content);
            }

            if (msg.role === "ai") {
                return new AIMessage(msg.content);
            }

            return null;

        }).filter(Boolean)
    ]);

    return response.text;
}


// Generate Chat Title
export async function generateChatTitle(message) {

    const response = await geminiModel.invoke([
        new SystemMessage(`
            You are a helpful assistant that generates concise
            and descriptive titles for chat conversations.

            Generate a title in 2-4 words.
            The title should be clear, relevant and engaging.
            Do not use quotation marks.
        `),

        new HumanMessage(`
            Generate a title for a chat conversation based on
            the following first message:

            "${message}"
        `)
    ]);

    return response.text;
}

