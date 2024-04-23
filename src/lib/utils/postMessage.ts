import type { Message, UIMessage } from "../types/message.js";

type MessageResponse = [Message, Message | undefined];

export async function postMessage(
  message: UIMessage
): Promise<MessageResponse> {
  const userMessage: Message = {
    ...message,
    id: "placeholder",
    timestamp: new Date().toString(),
  };

  const response: MessageResponse = [userMessage, undefined];

  await fetch("http://localhost:3000/message", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ message: message.text }),
  })
    .then((response) => response.json())
    .then((data) => {
      if (data && Array.isArray(data)) {
        if (data.every(isAiMessageResponse)) {
          const [userMessage, aiMessage] = data;
          const userMessageWithId: Message = {
            ...userMessage,
            type: "User",
            status: "success",
          };
          const networkResponseMessage: Message = {
            ...aiMessage,
            type: "Assistant",
            status: "success",
          };
          response[0] = userMessageWithId;
          response[1] = networkResponseMessage;
        } else {
          throw new Error("Invalid response from server");
        }
      }
    })
    .catch((error) => {
      console.error("Error:", error);
      response[0] = { ...response[0], id: "error", status: "error" };
    });

  return response;
}

function isAiMessageResponse(data: any): data is Message {
  return data && data.id && data.text && data.timestamp;
}
