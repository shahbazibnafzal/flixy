import { cn } from "~/lib/utils";
import AssitantMessage from "./AssitantMessage";
import { useChatActions } from "~/hooks/useChatActions";
import { useScroll } from "~/hooks/useScroll";
import TypingAnimation from "./TypingAnimation";
import UserMessage from "./UserMessage";

const ChatContainer = () => {
  const { messages, status } = useChatActions();
  const { messageEndRef, chatContainerRef } = useScroll();

  return (
    <div
      ref={chatContainerRef}
      data-testid="chat-container"
      className={cn(
        "slick-scrollbar overflow-y-auto",
        "flex flex-1 flex-col gap-2",
        "animate-fade-in",
        "relative h-full p-2 text-sm",
      )}
    >
      {messages.map((message) => (
        <div key={message.id} className="whitespace-pre-wrap">
          {message.role === "user" ? (
            <UserMessage content={message.content} />
          ) : (
            <AssitantMessage content={message.content} />
          )}
        </div>
      ))}
      <div>
        {status === "submitted" && <TypingAnimation />}
        <div ref={messageEndRef} />
      </div>
    </div>
  );
};

export default ChatContainer;
