import React from "react";
import { useChatActions } from "~/hooks/useChatActions";
import { cn } from "~/lib/utils";
import { SiChatbot } from "react-icons/si";
import { chatbotContent } from "~/content/chatbotContent";
import Button from "../Button";

const ChatButton = () => {
  const { openChat } = useChatActions();
  const { openChatButtonAriaLabel } = chatbotContent;
  return (
    <Button
      onClick={openChat}
      aria-label={openChatButtonAriaLabel}
      variant="primary"
      rounded={true}
      className={cn("p-[14px] text-3xl shadow-primary", "animate-fade-in-down")}
    >
      <SiChatbot />
    </Button>
  );
};

export default ChatButton;
