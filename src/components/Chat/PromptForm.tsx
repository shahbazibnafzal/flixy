import React, { useState } from "react";
import { cn } from "~/lib/utils";
import { IoMdSend } from "react-icons/io";
import { useEnterSubmit } from "~/hooks/useEnterSubmit";
import { useChatActions } from "~/hooks/useChatActions";
import Button from "../Button";
import { chatbotContent } from "~/content/chatbotContent";

const PromptForm = () => {
  const { handleInputChange, handleSubmit, input } = useChatActions();
  const { formRef, handleKeyDown } = useEnterSubmit();
  const [isFormInFocus, setIsFormInFocus] = useState(false);
  const { promptFormPlaceholder, sendMessageButtonAriaLabel } = chatbotContent;
  return (
    <form
      role="form"
      onSubmit={handleSubmit}
      ref={formRef}
      className={cn(
        "m-[10px] mt-0 p-[2px] pr-0",
        "bg-light relative",
        "rounded-primary shadow-secondary",
        isFormInFocus && "ring-2 ring-highlight",
      )}
    >
      <textarea
        className={cn(
          "slick-scrollbar h-10 w-full overflow-y-auto",
          "rounded-primary outline-none",
          "resize-none whitespace-pre-wrap",
          "p-1 pr-12 pt-[10px]",
        )}
        placeholder={promptFormPlaceholder}
        value={input}
        onFocus={() => setIsFormInFocus(true)}
        onBlur={() => setIsFormInFocus(false)}
        onKeyDown={handleKeyDown}
        onChange={handleInputChange}
      ></textarea>
      {input && (
        <Button
          data-testid="send-message"
          aria-label={sendMessageButtonAriaLabel}
          type="submit"
          variant="primary"
          className={cn(
            "absolute bottom-1 right-1",
            "p-1 text-[1.7rem]",
            "animate-fade-in",
          )}
        >
          <IoMdSend />
        </Button>
      )}
    </form>
  );
};

export default PromptForm;
