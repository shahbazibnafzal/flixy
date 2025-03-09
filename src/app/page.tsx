import Chatbot from "~/components/Chat/Chatbot";
import FAQ from "~/components/FAQ";
import Features from "~/components/Features";
import Hero from "~/components/Hero";

export default function HomePage() {
  return (
    <main className="bg-background-primary">
      <Hero />
      <Features />
      <FAQ />
      <Chatbot />
    </main>
  );
}
