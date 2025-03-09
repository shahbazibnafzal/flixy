"use client";

import React, { useState } from "react";
import Section from "./Section";
import TextGroup from "./TextGroup";
import { landingPageContent } from "~/content/landingPageContent";
import { cn } from "~/lib/utils";

const FAQ = () => {
  const { faqSection } = landingPageContent;
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Section>
      <TextGroup
        heading={faqSection.heading}
        paragraph={faqSection.paragraph}
      />

      <div className={cn("flex flex-col gap-2", "max-w-[900px] md:w-2/3")}>
        {faqSection.faqs.map((faq, index) => (
          <div
            key={index}
            className={cn("rounded-primary shadow", "px-3 py-1")}
          >
            <button
              className={cn(
                "text-left text-lg font-semibold",
                "flex items-center justify-between gap-1",
                "w-full py-2",
              )}
              onClick={() => toggleFAQ(index)}
              aria-expanded={openIndex === index}
              aria-controls={`faq-answer-${index}`}
              id={`faq-question-${index}`}
              data-testid={`faq-question-${index}`}
            >
              {faq.question}
              <span
                className={cn(
                  "rounded-primary hover:bg-background-secondary",
                  "px-2 py-1",
                )}
              >
                {openIndex === index ? "−" : "+"}
              </span>
            </button>
            <div
              data-testid={`faq-answer-${index}`}
              id={`faq-answer-${index}`}
              aria-labelledby={`faq-question-${index}`}
              className={cn(
                "overflow-hidden transition-all duration-300 ease-in-out",
                openIndex === index
                  ? "max-h-60 border-t opacity-100"
                  : "max-h-0 opacity-0",
              )}
            >
              <p className="my-2 text-sm text-content-secondary">
                {faq.answer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default FAQ;
