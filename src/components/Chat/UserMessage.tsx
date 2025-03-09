import React from "react";
import { cn } from "~/lib/utils";
import FormattedMarkdown from "./FormattedMarkdown";

const UserMessage = ({ content }: { content: string }) => {
  return (
    <div className={"flex justify-end"}>
      <div
        data-testid="user-message"
        className={cn(
          "rounded-2xl rounded-br-none",
          "max-w-[75%] p-2",
          "bg-primary text-content-light shadow",
        )}
      >
        <FormattedMarkdown>{content}</FormattedMarkdown>
      </div>
    </div>
  );
};

export default UserMessage;
