import { useCallback, useEffect, useRef, useState } from "react";
import { useChatActions } from "./useChatActions";
import { debounce } from "~/lib/utils";

export const useScroll = () => {
  const { messages } = useChatActions();
  const messageEndRef = useRef<HTMLDivElement | null>(null);
  const chatContainerRef = useRef<HTMLDivElement | null>(null);
  const [showScrollToBottom, setShowScrollToBottom] = useState(false)
  const SCROLL_THRESHOLD = 100;

  const scrollToBottom = (behavior: ScrollBehavior) => {
    messageEndRef.current?.scrollIntoView({ behavior });
  }

  const handleScroll = () => {
    const chatContainer = chatContainerRef.current
    if (!chatContainer) return;
    const { scrollHeight, scrollTop, clientHeight} = chatContainer
    const isAtBottom = scrollHeight - scrollTop - clientHeight < SCROLL_THRESHOLD
    setShowScrollToBottom(!isAtBottom)
  }

  // Optimize scrolling by debouncing rapid calls
  const scrollToBottomEfficiently = useCallback(debounce(()=>scrollToBottom("smooth"), 300), []) 

  // Auto scroll to bottom when the new message streams.
  useEffect(() => {
    scrollToBottomEfficiently()
  }, [messages, scrollToBottomEfficiently]);

  // Scroll instantly when component mounts
  useEffect(() => {
    scrollToBottom("instant");
  
    const chatContainer = chatContainerRef.current;
    if (!chatContainer) return;
  
    chatContainer.addEventListener("scroll", handleScroll);
  
    return () => {
      chatContainer.removeEventListener("scroll", handleScroll);
    };
  }, []);  

  return { messageEndRef, chatContainerRef, scrollToBottom, showScrollToBottom };
};
