import Link from "next/link";
import Section from "~/components/Section";
import TextGroup from "~/components/TextGroup";
import { notFoundPageContent } from "~/content/notFoundPageContent";
import { cn } from "~/lib/utils";

export default function NotFound() {
  const { heading, paragraph, returnToHomeLink, returnToHomeText } =
    notFoundPageContent;
  return (
    <Section>
      <TextGroup heading={heading} paragraph={paragraph} />
      <Link
        className={cn(
          "rounded-full bg-primary text-content-light",
          "px-4 py-2",
        )}
        href={returnToHomeLink}
      >
        {returnToHomeText}
      </Link>
    </Section>
  );
}
