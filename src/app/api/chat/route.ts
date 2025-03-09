import { openai } from '@ai-sdk/openai';
import { type Message, streamText } from 'ai';
import { v4 as uuid } from "uuid";

export const maxDuration = 30;

export async function POST(req: Request) {
  const { messages } = await req.json() as { messages: Message[] };

  const systemMessage: Message = {
    id: uuid(),
    role: "system",
    content: "You are a customer service chatbot named Flixy from Flix - A sustainable and affordable travel solution provider. Your primary responsibility is to solve any customer issues related to their bookings with Flix. Answer the questions related to users query in a engaging manner with emptahy. Avoid discussing subjects that are not related to your subject matter."
  };

  const result = streamText({
    model: openai("gpt-4o-mini"),
    messages: [systemMessage, ...messages],
  });

  return result.toDataStreamResponse();
}