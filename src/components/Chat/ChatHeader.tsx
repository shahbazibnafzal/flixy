import React from "react";
import { cn } from "~/lib/utils";
import { MdOutlineMinimize, MdRestartAlt } from "react-icons/md";
import { useChatActions } from "~/hooks/useChatActions";
import { SiChatbot } from "react-icons/si";
import Button from "../Button";
import { chatbotContent } from "~/content/chatbotContent";

const ChatHeader = () => {
  const { closeChat, startNewChat } = useChatActions();
  const { chatbotName, minimizeButtonTitle, startNewButtonTitle } =
    chatbotContent;

  return (
    <div
      className={cn(
        "flex items-center justify-between",
        "rounded-t-primary border-b",
        "bg-background-primary p-2",
      )}
    >
      <div className="flex items-center gap-1 text-lg text-primary">
        <SiChatbot />
        <h6 className="text-h6 font-semibold">{chatbotName}</h6>
      </div>

      <div className={"flex items-center justify-end gap-[3px]"}>
        <Button
          variant="secondary"
          title={minimizeButtonTitle}
          onClick={closeChat}
        >
          <MdOutlineMinimize />
        </Button>
        <Button
          variant="secondary"
          title={startNewButtonTitle}
          onClick={startNewChat}
        >
          <MdRestartAlt />
        </Button>
      </div>
    </div>
  );
};

export default ChatHeader;
