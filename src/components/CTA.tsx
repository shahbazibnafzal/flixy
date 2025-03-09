"use client";
import React from "react";
import Button from "./Button";
import { useChatActions } from "~/hooks/useChatActions";

const CTA = ({ text }: { text: string }) => {
  const { openChat } = useChatActions();
  return (
    <Button
      onClick={openChat}
      className="font-medium shadow-primary"
      rounded
      variant="primary"
    >
      {text}
    </Button>
  );
};

export default CTA;
