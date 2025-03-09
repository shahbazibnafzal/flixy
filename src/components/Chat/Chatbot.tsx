"use client";
import React from "react";
import { useChatActions } from "~/hooks/useChatActions";
import ChatWindow from "./ChatWindow";
import ChatButton from "./ChatButton";

const Chatbot = () => {
  const { isChatOpen } = useChatActions();

  return (
    <div className="fixed bottom-6 right-6">
      {isChatOpen ? <ChatWindow /> : <ChatButton />}
    </div>
  );
};

export default Chatbot;
