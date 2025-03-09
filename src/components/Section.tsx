import React from "react";
import { cn } from "~/lib/utils";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  secondaryBackground?: boolean;
}

const Section = ({ children, secondaryBackground, ...props }: SectionProps) => {
  return (
    <section
      className={cn(
        "px-4 py-20 md:p-24",
        "animate-fade-in-down",
        "flex flex-col items-center gap-12",
        secondaryBackground && "bg-background-secondary",
      )}
      {...props}
    >
      {children}
    </section>
  );
};

export default Section;
