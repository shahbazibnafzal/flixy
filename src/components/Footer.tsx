import React from "react";
import { cn } from "~/lib/utils";
import { landingPageContent } from "~/content/landingPageContent";
import Link from "next/link";

const Footer = () => {
  const { companyName, footerCopyrightText, footerLinks } =
    landingPageContent.footerSection;
  const currentYear = new Date().getFullYear();
  return (
    <footer
      className={cn(
        "px-4 pb-2 pt-16 md:p-20 md:pb-2",
        "animate-fade-in-down",
        "flex flex-col items-center gap-10",
        "bg-background-secondary",
      )}
    >
      <div className={cn("w-full", "grid grid-cols-2 gap-4 md:grid-cols-4")}>
        {footerLinks.map((category, index) => (
          <div className="flex flex-col gap-1" key={index}>
            <h3 className="font-semibold">{category.title}</h3>
            <ul className={cn("text-sm text-content-secondary")}>
              {category.links.map((link, linkIndex) => (
                <li
                  key={linkIndex}
                  className="py-[3px] hover:text-content-primary"
                >
                  <Link href={link.url}>{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="mt-6 w-full border-t py-2 text-center text-sm text-content-secondary">
        {`© ${currentYear} ${companyName}. ${footerCopyrightText}`}
      </div>
    </footer>
  );
};

export default Footer;
