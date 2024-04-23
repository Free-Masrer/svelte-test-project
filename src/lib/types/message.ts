export type MessageOrigin = "Assistant" | "User";

export type MessageStatus = "success" | "error" | "loading";

export interface UIMessage {
  text: string;
  type: MessageOrigin;
  status: MessageStatus;
}

export interface Message extends UIMessage {
  id: string;
  timestamp: string;
}

export type SendMessageFunction = (text: string) => void;

export type RetryFunction = () => void;

export type DeleteFunction = () => void;
