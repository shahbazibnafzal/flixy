"use client";
import { createContext, useState } from "react";
import { useChat, type Message } from "@ai-sdk/react";
import { v4 as uuid } from "uuid";
import { toast } from "react-toastify";
import { chatbotContent } from "~/content/chatbotContent";
import type { ChatContextType } from "~/lib/types";

export const ChatContext = createContext<ChatContextType>({
  isChatOpen: false,
  openChat: () => {
    return;
  },
  closeChat: () => {
    return;
  },
  messages: [],
  input: "",
  handleInputChange: (_) => {
    return;
  },
  handleSubmit: (_) => {
    return;
  },
  status: "ready",
  startNewChat: () => {
    return;
  },
});

const initialAssistantMessage: Message = {
  id: uuid(),
  content: chatbotContent.welcomeMessage,
  role: "assistant",
};

export function ChatProvider({ children }: { children: React.ReactNode }) {
  const [isChatOpen, setisChatOpen] = useState(false);

  const {
    messages,
    input,
    handleInputChange,
    handleSubmit,
    status,
    setMessages,
  } = useChat({
    initialMessages: [{ ...initialAssistantMessage }],
    onError: (_) => {
      // Show an error message to the user
      toast.error(chatbotContent.errorMessage, {
        containerId: "toast-chat-container",
      });
    },
  });

  const openChat = () => setisChatOpen(true);
  const closeChat = () => setisChatOpen(false);
  const startNewChat = () => {
    setMessages([{ ...initialAssistantMessage, id: uuid() }]);
  };

  return (
    <ChatContext.Provider
      value={{
        isChatOpen,
        openChat,
        closeChat,
        messages,
        input,
        handleInputChange,
        handleSubmit,
        status,
        startNewChat,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
}
