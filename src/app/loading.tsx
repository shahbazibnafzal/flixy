import Section from "~/components/Section";
import { cn } from "~/lib/utils";

export default function Loading() {
  return (
    <Section>
      <div className="flex w-full flex-col items-center gap-4">
        {/* Placeholder for Welcome Message */}
        <span
          className={cn(
            "rounded-full bg-background-secondary",
            "h-3 w-32",
            "animate-pulse",
          )}
        ></span>

        {/* Placeholder for Heading & Paragraph */}
        <div className={cn("flex flex-col items-center gap-2", "w-3/4")}>
          <div
            className={cn(
              "rounded bg-background-secondary",
              "h-8 w-3/4",
              "animate-pulse",
            )}
          ></div>
          <div
            className={cn(
              "rounded bg-background-secondary",
              "h-4 w-1/2",
              "animate-pulse",
            )}
          ></div>
        </div>
      </div>

      {/* Placeholder for CTAs */}
      <div className={"flex flex-col justify-center gap-2 md:flex-row"}>
        <div
          className={cn(
            "rounded-full bg-background-secondary",
            "h-10 w-36",
            "animate-pulse",
          )}
        ></div>
        <div
          className={cn(
            "rounded-full bg-background-secondary",
            "h-10 w-36",
            "animate-pulse",
          )}
        ></div>
      </div>

      {/* Placeholder for Image */}
      <div
        className={cn(
          "relative my-4 rounded-primary shadow-primary",
          "w-full max-w-[700px] md:w-[80%] lg:w-[70%]",
          "aspect-[1/1]",
          "animate-pulse bg-background-secondary",
        )}
      ></div>
    </Section>
  );
}
