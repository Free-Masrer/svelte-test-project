export type MessageOrigin = "Assistant" | "User";

export type MessageStatus = "success" | "error" | "loading";

export interface Message {
  id: string;
  text: string;
  timestamp: Date;
  type: MessageOrigin;
  status?: MessageStatus;
}

export type SendMessageFunction = (text: string) => void;

export type RetryFunction = () => void;

export type DeleteFunction = () => void;
