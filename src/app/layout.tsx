import "~/styles/globals.css";
import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";
import { ChatProvider } from "~/context/chat-context";
import Navbar from "~/components/Navbar";
import { landingPageContent } from "~/content/landingPageContent";
import Footer from "~/components/Footer";

export const metadata: Metadata = {
  title: landingPageContent.metadata.title,
  description: landingPageContent.metadata.description,
  icons: [{ rel: "icon", url: "/favicon.ico" }],
  openGraph: {
    title: landingPageContent.metadata.ogTitle,
    description: landingPageContent.metadata.ogDescription,
    images: [
      {
        url: "/opengraph-image.png",
        alt: landingPageContent.metadata.ogImageAltText,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <body>
        <ChatProvider>
          <Navbar />
          {children}
          <Footer />
        </ChatProvider>
      </body>
    </html>
  );
}
