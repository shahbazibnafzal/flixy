import React from "react";
import type { BaseTextGroup } from "~/lib/types";
import { cn } from "~/lib/utils";

const TextGroup = ({
  heading,
  paragraph,
  isTopLevelHeading,
}: BaseTextGroup) => {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center gap-3",
        "md:w-[80%]",
      )}
    >
      {isTopLevelHeading ? (
        <h1 className="text-center text-4xl font-bold md:text-6xl">
          {heading}
        </h1>
      ) : (
        <h2 className="text-center text-3xl font-bold">{heading}</h2>
      )}

      <p className={cn("max-w-[75%]", "text-center")}>{paragraph}</p>
    </div>
  );
};

export default TextGroup;
