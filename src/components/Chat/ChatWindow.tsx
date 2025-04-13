import { cn } from "~/lib/utils";
import PromptForm from "./PromptForm";
import { ToastContainer } from "react-toastify";
import ChatHeader from "./ChatHeader";
import ChatContainer from "./ChatContainer";
import { useScroll } from "~/hooks/useScroll";
import { IoIosArrowDown } from "react-icons/io";
import Button from "../Button";

const ChatWindow = () => {
  const {
    messageEndRef,
    chatContainerRef,
    scrollToBottom,
    showScrollToBottom,
  } = useScroll();
  return (
    <div
      className={cn(
        "flex flex-col",
        "rounded-primary shadow-primary",
        "bg-background-primary",
        "animate-fade-in-up",
        "fixed bottom-0 right-0 md:bottom-6 md:right-6",
        "h-dvh w-full md:h-[calc(100dvh-30px)]",
        "md:max-h-[430px] md:max-w-[370px]",
        "xl:max-h-[470px] xl:max-w-[390px]",
        "2xl:max-h-[560px] 2xl:max-w-[450px]",
      )}
    >
      <ChatHeader />
      <ChatContainer
        messageEndRef={messageEndRef}
        chatContainerRef={chatContainerRef}
      />
      <PromptForm />
      <ToastContainer
        containerId="toast-chat-container"
        className={"absolute left-1/2 top-16 -translate-x-1/2"}
      />
      <Button
        onClick={() => scrollToBottom("smooth")}
        variant="secondary"
        rounded={true}
        className={cn(
          "-translate-1/2 absolute bottom-20 left-1/2",
          "bg-background-secondary p-2 shadow-lg hover:bg-highlight",
          !showScrollToBottom && "hidden",
        )}
      >
        <IoIosArrowDown />
      </Button>
    </div>
  );
};

export default ChatWindow;
