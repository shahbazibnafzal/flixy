import React from "react";
import type { FeatureItem } from "~/lib/types";
import { cn } from "~/lib/utils";

const FeatureCard = ({ title, content, icon: Icon }: FeatureItem) => {
  return (
    <div
      className={cn(
        "flex items-start gap-2",
        "bg-background-primary rounded-primary shadow-primary",
        "w-full p-4",
      )}
    >
      <div
        className={cn(
          "flex items-center justify-center",
          "rounded-full bg-highlight p-[8px] shadow",
          "text-lg text-content-primary",
        )}
      >
        <Icon />
      </div>
      <div className="flex flex-col gap-1">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-sm">{content}</p>
      </div>
    </div>
  );
};

export default FeatureCard;
