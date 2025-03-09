import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import FAQ from "~/components/FAQ";
import { landingPageContent } from "~/content/landingPageContent";

describe("FAQ Component", () => {
  test("renders FAQ section with heading and paragraph", () => {
    render(<FAQ />);

    const { faqSection } = landingPageContent;

    expect(screen.getByText(faqSection.heading)).toBeInTheDocument();
    expect(screen.getByText(faqSection.paragraph)).toBeInTheDocument();
  });

  test("renders all FAQ questions", () => {
    render(<FAQ />);

    const { faqSection } = landingPageContent;
    faqSection.faqs.forEach((faq) => {
      expect(screen.getByText(faq.question)).toBeInTheDocument();
    });
  });

  test("initially hides all FAQ answers and toggle the visibility on click", () => {
    render(<FAQ />);

    const { faqSection } = landingPageContent;
    faqSection.faqs.forEach((faq, index) => {
      const question = screen.getByTestId(`faq-question-${index}`);
      const answer = screen.getByTestId(`faq-answer-${index}`);
      // Initially the answer should not be visible
      expect(answer).toHaveClass("opacity-0");
      // Click to see the answer
      fireEvent.click(question);
      expect(answer).toHaveClass("opacity-100");
      // Click again to hide the answer
      fireEvent.click(question);
      expect(answer).toHaveClass("opacity-0");
    });
  });

  test("only one FAQ answer is visible at a time", () => {
    render(<FAQ />);
    const firstQuestion = screen.getByTestId("faq-question-0");
    const secondQuestion = screen.getByTestId("faq-question-1");
    const firstAnswer = screen.getByTestId("faq-answer-0");
    const secondAnswer = screen.getByTestId("faq-answer-1");

    // Clicking first question should open the first answer
    fireEvent.click(firstQuestion);
    expect(firstAnswer).toHaveClass("opacity-100");
    expect(secondAnswer).toHaveClass("opacity-0");

    // Clicking second question should close first answer and opne second one
    fireEvent.click(secondQuestion);
    expect(firstAnswer).toHaveClass("opacity-0");
    expect(secondAnswer).toHaveClass("opacity-100");
  });
});
