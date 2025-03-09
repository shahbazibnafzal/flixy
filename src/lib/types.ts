import type { Message } from "ai";
import type { IconType } from "react-icons";

interface PageMetdata {
    title: string;
    description: string;
    ogTitle: string;
    ogDescription: string;
    ogImageAltText: string;
}

export interface BaseTextGroup {
    heading: string;
    paragraph: string;
    isTopLevelHeading? : boolean
}

export interface Hero extends BaseTextGroup {
    welcomeMessage: string;
    primrayCTAText: string;
    secondaryCTAText: string;
    chatImageAltText: string;
}

export interface FeatureItem {
    title: string;
    content: string;
    icon: IconType
}

export interface Features extends BaseTextGroup {
    features: FeatureItem[];
}

export interface FAQItem {
    question: string;
    answer: string;
}

export interface FAQ extends BaseTextGroup {
    faqs: FAQItem[]
}

interface FooterCategory {
    title: string;
    links: { name: string; url: string }[];
}

interface Footer {
    companyName: string;
    footerCopyrightText: string;
    footerLinks: FooterCategory[]
}

interface MenuItem { 
    text: string;
    link: string 
}


interface Navbar {
    ctaText: string;
    ctaLink: string;
    openMobileMenuButtonAriaLabel: string
    closeMobileMenuButtonAriaLabel: string
    menu: MenuItem[];
}

export interface LandingPageContentType {
    metadata: PageMetdata;
    navbar: Navbar;
    heroSection: Hero;
    featuresSection: Features;
    faqSection: FAQ;
    footerSection: Footer;
}

export interface ChatbotContent {
    chatbotName: string;
    openChatButtonAriaLabel: string;
    startNewButtonTitle: string;
    minimizeButtonTitle: string;
    promptFormPlaceholder: string;
    sendMessageButtonAriaLabel: string;
    welcomeMessage: string;
    errorMessage: string;
}

export interface ChatContextType {
    isChatOpen: boolean;
    openChat: () => void;
    closeChat: () => void;
    messages: Message[];
    input: string;
    status: "ready" | "submitted" | "streaming" | "error";
    startNewChat: () => void;
    handleSubmit: (_: React.FormEvent) => void;
    handleInputChange: (
      _:
        | React.ChangeEvent<HTMLInputElement>
        | React.ChangeEvent<HTMLTextAreaElement>,
    ) => void;
  }

  export interface NotFoundPageContentType extends BaseTextGroup {
    returnToHomeLink: string;
    returnToHomeText: string
  }