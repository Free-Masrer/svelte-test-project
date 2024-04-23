import type { UIMessage, MessageOrigin, Message } from "../types/message.js";

export const TEMPORARY_MESSAGE_ID = "placeholder";

export function createMessage(
  text: string,
  origin: MessageOrigin = "User"
): UIMessage {
  return {
    text,
    type: origin,
    status: "loading",
  };
}

export function transformUIMessageToMessage(message: UIMessage): Message {
  return {
    ...message,
    id: TEMPORARY_MESSAGE_ID,
    timestamp: new Date().toString(),
  };
}
