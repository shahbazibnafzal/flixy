import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import TextGroup from "~/components/TextGroup";

describe("TextGroup Component", () => {
  test("renders heading and paragraph", () => {
    render(
      <TextGroup
        heading="Test Heading"
        paragraph="Test paragraph."
        isTopLevelHeading={false}
      />,
    );

    expect(screen.getByText("Test Heading")).toBeInTheDocument();
    expect(screen.getByText("Test paragraph.")).toBeInTheDocument();
  });

  test("renders h1 when isTopLevelHeading is true", () => {
    render(
      <TextGroup
        heading="Top Level Heading"
        paragraph="Sample paragraph."
        isTopLevelHeading={true}
      />,
    );

    const heading = screen.getByRole("heading", { level: 1 });
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent("Top Level Heading");
  });

  test("renders h2 when isTopLevelHeading is false", () => {
    render(
      <TextGroup
        heading="Subheading"
        paragraph="Sample text."
        isTopLevelHeading={false}
      />,
    );

    const heading = screen.getByRole("heading", { level: 2 });
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent("Subheading");
  });
});
