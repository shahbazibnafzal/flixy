import React from "react";
import { cn } from "~/lib/utils";
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  rounded?: boolean;
  className?: string;
  children?: React.ReactNode;
}

const Button = ({
  variant = "primary",
  rounded = false,
  className,
  children,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={cn(
        "flex items-center justify-center",
        rounded ? "rounded-full" : "rounded-primary",
        variant === "primary"
          ? "text-content-light bg-primary px-4 py-2 transition-transform duration-200 ease-in-out hover:scale-105"
          : "hover:bg-background-secondary p-1",
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
