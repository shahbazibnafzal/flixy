import { cn } from "~/lib/utils";
import PromptForm from "./PromptForm";
import { ToastContainer } from "react-toastify";
import ChatHeader from "./ChatHeader";
import ChatContainer from "./ChatContainer";

const ChatWindow = () => {
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
      <ChatContainer />
      <PromptForm />
      <ToastContainer
        containerId="toast-chat-container"
        className={"absolute left-1/2 top-16 -translate-x-1/2"}
      />
    </div>
  );
};

export default ChatWindow;
