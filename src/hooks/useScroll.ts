import { useEffect, useRef } from "react";
import { useChatActions } from "./useChatActions";
import { debounce } from "~/lib/utils";

export const useScroll = () => {
  const { messages } = useChatActions();
  const messageEndRef = useRef<HTMLDivElement | null>(null);
  const chatContainerRef = useRef<HTMLDivElement | null>(null);

  const scrollToBottom = (behavior: ScrollBehavior) => {
    messageEndRef.current?.scrollIntoView({ behavior });
  }

  // Optimize scrolling by debouncing rapid calls
  const scrollToBottomEfficiently = debounce(()=>scrollToBottom("smooth"), 300)

  // Auto scroll to bottom when the new message streams.
  useEffect(() => {
    scrollToBottomEfficiently()
  }, [messages, scrollToBottomEfficiently]);

  // Scroll instantly when component mounts
  useEffect(() => {
    scrollToBottom("instant")
  }, []);

  return { messageEndRef, chatContainerRef };
};
