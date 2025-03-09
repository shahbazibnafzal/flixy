"use client";

import dynamic from "next/dynamic";
import TypingLottie from "../../../public/typing-lottie.json";

// Lazy loading lottie-react to client side since its not ssr compatible

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

const TypingAnimation = () => {
  return <Lottie animationData={TypingLottie} className="h-14 w-14" />;
};

export default TypingAnimation;
