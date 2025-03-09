import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import Button from "~/components/Button";

describe("Button Component", () => {
  test("renders primary button with default props", () => {
    render(<Button>Click Me</Button>);
    const button = screen.getByRole("button", { name: /click me/i });

    expect(button).toBeInTheDocument();
    expect(button).toHaveClass(
      "flex items-center justify-center text-content-light bg-primary px-4 py-2 transition-transform duration-200 ease-in-out hover:scale-105",
    );
  });

  test("renders secondary variant", () => {
    render(<Button variant="secondary">Secondary</Button>);
    const button = screen.getByRole("button", { name: /secondary/i });

    expect(button).toHaveClass("hover:bg-background-secondary p-1");
  });

  test("applies rounded styles when rounded is true", () => {
    render(<Button rounded>Rounded</Button>);
    const button = screen.getByRole("button", { name: /rounded/i });

    expect(button).toHaveClass("rounded-full");
  });

  test("applies custom className", () => {
    render(<Button className="custom-class">Custom</Button>);
    const button = screen.getByRole("button", { name: /custom/i });

    expect(button).toHaveClass("custom-class");
  });

  test("renders children correctly", () => {
    render(<Button>Test Button</Button>);
    const button = screen.getByText(/test button/i);

    expect(button).toBeInTheDocument();
  });

  test("handles click event", () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click Me</Button>);
    const button = screen.getByRole("button", { name: /click me/i });

    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
