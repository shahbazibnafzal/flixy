import { useContext } from "react";
import { ChatContext } from "~/context/chat-context";

export const useChatActions = () => useContext(ChatContext);
  