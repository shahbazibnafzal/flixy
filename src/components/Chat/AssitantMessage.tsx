import React from "react";
import { cn } from "~/lib/utils";
import FormattedMarkdown from "./FormattedMarkdown";

const AssistantMessage = ({ content }: { content: string }) => {
  return (
    <div className="flex justify-start">
      <div
        data-testid="assistant-message"
        className={cn(
          "rounded-2xl rounded-bl-none",
          "bg-background-secondary p-2",
          "max-w-[75%]",
          "animate-fade-in shadow",
        )}
      >
        <FormattedMarkdown>{content}</FormattedMarkdown>
      </div>
    </div>
  );
};

export default AssistantMessage;
