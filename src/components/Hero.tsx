import React from "react";
import Section from "./Section";
import { cn } from "~/lib/utils";
import Image from "next/image";
import ChatImage from "../../public/chat.png";
import { landingPageContent } from "~/content/landingPageContent";
import TextGroup from "./TextGroup";
import CTA from "./CTA";
import { MdOutlineEmail } from "react-icons/md";
import Link from "next/link";

const Hero = () => {
  const { heroSection } = landingPageContent;
  return (
    <Section>
      <div className="flex w-full flex-col items-center gap-4">
        <span
          className={cn(
            "rounded-full bg-highlight",
            "text-center text-sm",
            "px-2 py-1",
          )}
        >
          {heroSection.welcomeMessage}
        </span>
        <TextGroup
          isTopLevelHeading
          heading={heroSection.heading}
          paragraph={heroSection.paragraph}
        />
      </div>

      <div
        className={cn(
          "flex flex-col items-center justify-center gap-2 md:flex-row",
        )}
      >
        <CTA text={heroSection.primrayCTAText} />
        <Link
          href="mailto:support@example.com"
          className={cn(
            "rounded-full hover:bg-background-secondary",
            "flex items-center gap-1",
            "px-4 py-2",
          )}
        >
          {heroSection.secondaryCTAText}
          <MdOutlineEmail />
        </Link>
      </div>

      <div
        className={cn(
          "relative my-4 rounded-primary shadow-primary",
          "w-full max-w-[700px] md:w-[80%] lg:w-[70%]",
          "aspect-[1/1]",
        )}
      >
        <Image
          src={ChatImage}
          alt={heroSection.chatImageAltText}
          fill
          className="rounded-primary object-contain"
        />
      </div>
    </Section>
  );
};

export default Hero;
