import React from "react";
import { cn } from "~/lib/utils";
import ReactMarkdown from "react-markdown";
const FormattedMarkdown = ({ children }: { children: string }) => {
  return (
    <ReactMarkdown
      components={{
        code({ children, className }) {
          return (
            <code
              className={cn(
                className,
                "whitespace-pre-wrap break-words",
                "rounded-md px-1 py-0.5 text-sm",
              )}
            >
              {children}
            </code>
          );
        },
        pre({ children }) {
          return (
            <pre
              className={cn(
                "w-full overflow-x-auto p-2",
                "text-content-light bg-gray-500",
                "rounded-lg text-sm",
              )}
            >
              {children}
            </pre>
          );
        },
      }}
    >
      {children}
    </ReactMarkdown>
  );
};

export default FormattedMarkdown;
