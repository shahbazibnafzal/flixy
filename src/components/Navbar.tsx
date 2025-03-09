"use client";

import { useState } from "react";
import Image from "next/image";
import { cn } from "~/lib/utils";
import Link from "next/link";
import { IoMenu, IoClose } from "react-icons/io5"; // Icons for mobile menu
import Flix from "../../public/flix.png";
import Button from "./Button";
import { landingPageContent } from "~/content/landingPageContent";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const {
    menu,
    ctaLink,
    ctaText,
    openMobileMenuButtonAriaLabel,
    closeMobileMenuButtonAriaLabel,
  } = landingPageContent.navbar;

  return (
    <nav
      className={cn(
        "flex items-center justify-between",
        "px-4 py-4 md:px-10",
        "bg-primary text-content-light",
      )}
    >
      {/* Logo */}
      <Image src={Flix} alt="logo" height={18} width={70} />

      {/* Desktop menu */}
      <div className="hidden items-center gap-6 md:flex">
        <ul className="flex items-center gap-6 font-semibold">
          {menu.map((menuItem, index) => (
            <li key={index}>
              <Link className="hover:text-content-primary" href={menuItem.link}>
                {menuItem.text}
              </Link>
            </li>
          ))}
        </ul>
        <Link
          target="_blank"
          rel="noopener noreferrer"
          href={ctaLink}
          className={cn(
            "bg-background-primary text-content-primary hover:bg-background-secondary",
            "rounded-full px-3 py-1",
          )}
        >
          {ctaText}
        </Link>
      </div>

      {/* Mobile menu button */}
      <Button
        variant="secondary"
        onClick={() => setIsMenuOpen(true)}
        className="md:hidden"
        aria-label={openMobileMenuButtonAriaLabel}
      >
        <IoMenu size={28} />
      </Button>

      {/* Mobile menu*/}
      <div
        className={cn(
          "bg-primary shadow-primary",
          "fixed right-0 top-0 z-20",
          "h-full w-[70%]",
          "transition-transform duration-300 ease-in-out",
          isMenuOpen ? "translate-x-0" : "translate-x-full",
        )}
      >
        {/* Close Button */}
        <Button
          variant="secondary"
          onClick={() => setIsMenuOpen(false)}
          className="absolute right-4 top-4"
          aria-label={closeMobileMenuButtonAriaLabel}
        >
          <IoClose size={28} />
        </Button>

        {/* Menu Items */}
        <ul
          className={cn(
            "ml-6 mt-16 font-semibold",
            "flex flex-col items-start gap-2",
          )}
        >
          {menu.map((menuItem, index) => (
            <li key={index}>
              <Link
                href={menuItem.link}
                className="py-2 text-lg hover:text-content-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                {menuItem.text}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile menu overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 z-10 bg-overlay"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </nav>
  );
};

export default Navbar;
