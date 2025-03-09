import {
  IoChatboxOutline,
  IoShieldOutline,
  IoLanguageOutline,
} from "react-icons/io5";
import { IoMdTime } from "react-icons/io";
import type { LandingPageContentType } from "~/lib/types";

export const landingPageContent: LandingPageContentType = {
    metadata: {
        title: "Customer Service | Flix",
        description: "Flix is your easy and quick way to buy bus and train tickets online and travel across Europe; enjoy the free Wi-Fi onboard and stay updated with the FlixBus and FlixTrain App.",
        ogTitle: "Meet Flixy - Our Smart Customer Support AI Assistant",
        ogDescription : "Get instant travel assistance with Flixy AI Assistant! Easily find bus and train schedules, manage bookings, and get real-time updates with our AI-powered customer service.",
        ogImageAltText: "Welcome to Flix customer support center."
    },
    navbar: {
      ctaText: "Track your trip",
      ctaLink: "https://www.flixtrain.com/track",
      openMobileMenuButtonAriaLabel: "open menu",
      closeMobileMenuButtonAriaLabel: "close menu",
      menu: [
        { text: "Home", link: "/" },
        { text: "About Flix", link: "/about" },
        { text: "Flix Bus", link: "/bus" },
        { text: "Flix Train", link: "/train" },
      ]
    },
    heroSection: {
        welcomeMessage: "Welcome to our support center",
        heading: "How can we help you today?",
        paragraph: "Find answers, explore FAQs, or chat with our intelligent assistant to resolve your questions about sustainable travel solutions.",
        primrayCTAText: "Chat with AI assistant",
        secondaryCTAText: "Email us",
        chatImageAltText: "Flix customer service AI chat assistant chat illustration"
    },
    featuresSection: {
        heading: "Introducing Flixy - Our AI assistant for customer service",
        paragraph: "Our AI assistant is designed to provide quick, accurate support for all your queries - available 24/7.",
        features: [
            {
              title: "Instant Answers",
              content:
                "Receive quick responses to all your travel questions, including bookings, routes, and eco-friendly travel choices.",
              icon: IoChatboxOutline,
            },
            {
              title: "24/7 Availability",
              content:
                "Our AI assistant is here for you any time, day or night, providing reliable travel guidance whenever you need it.",
              icon: IoMdTime,
            },
            {
              title: "Personal Support",
              content:
                "For more complex issues, our AI quickly connects you with a human representative, ensuring a seamless experience.",
              icon: IoShieldOutline,
            },
            {
              title: "Multilingual Support",
              content:
                "Chat in your preferred language! Our AI assistant understands multiple languages, making travel help accessible.",
              icon: IoLanguageOutline,
            },
          ]
    },
    faqSection: {
      heading: "Find Quick Answers to Common Questions",
      paragraph: "Browse through our most frequently asked questions to find the information you need about our sustainable travel services.",
      faqs: [
        { question: "What makes your travel solutions sustainable?", answer: "Our travel solutions are sustainable because we prioritize low-carbon transportation methods, optimize routes to reduce emissions, use energy-efficient vehicles, offset carbon emissions for all journeys, and partner with eco-conscious service providers. We're committed to minimizing environmental impact while providing affordable and convenient travel options." },
        { question: "How do I use the AI assistant for help?", answer: "Our AI assistant is available 24/7 on our website and mobile app. Simply click the chat icon in the bottom-right corner of the screen to start a conversation. You can ask questions about bookings, routes, services, or any other travel-related inquiries, and receive immediate assistance." },
      ]
    },
    footerSection: {
      companyName: "Flix SE",
      footerCopyrightText: "All rights reserved.",
      footerLinks: [
        {
          title: "Flix",
          links: [
            { name: "About Flix", url: "/about" },
            { name: "Contact us", url: "/contact" },
            { name: "Jobs", url: "/jobs" },
            { name: "Press", url: "/press" },
          ],
        },
        {
          title: "Flix Train",
          links: [
            { name: "All train destinations", url: "https://www.flixtrain.com/train" },
            { name: "Find your train line", url: "https://www.flixtrain.com/train-lines" },
            { name: "Luggage", url: "https://www.flixtrain.com/service/luggage" },
            { name: "Tarrif provisions", url: "https://www.flixtrain.com/tariff-provisions" },
            { name: "Reports & documents", url: "https://www.flixtrain.com/operation-quality-report" },
            { name: "Constructions", url: "https://www.flixtrain.com/constructions" },
            { name: "T&Cs", url: "https://www.flixtrain.com/terms-and-conditions" },
          ],
        },
        {
          title: "Flix Bus",
          links: [
            { name: "All bus destinations", url: "https://global.flixbus.com/bus" },
            { name: "Bus route map", url: "https://global.flixbus.com/bus-routes" },
            { name: "General conditions for business and bookings", url: "https://global.flixbus.com/general-terms-business-and-booking-conditions" },
            { name: "General terms and conditions of carriage selection", url: "https://global.flixbus.com/general-conditions-of-carriage-selection" },
          ],
        },
        {
          title: "Best Destinations",
          links: [
            { name: "Berlin to Cologne Train", url: "https://www.flixtrain.com/train-routes/berlin-cologne" },
            { name: "Berlin to Hamburg Train", url: "https://www.flixtrain.com/train-routes/berlin-hamburg" },
            { name: "Berlin to Sttutgart Train", url: "https://www.flixtrain.com/train-routes/berlin-sttutgart" },
            { name: "Cologne to Hamburg Train", url: "https://www.flixtrain.com/train-routes/cologne-hamburg" },
            { name: "Lille to Paris Bus", url: "https://www.flixtrain.com/train-routes/lille-paris" },
            { name: "Posto to Lisbon Train", url: "https://www.flixtrain.com/train-routes/posto-lisbon" },
          ],
        },
      ]
    }
}