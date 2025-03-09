import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { chatbotContent } from "~/content/chatbotContent";
import PromptForm from "~/components/Chat/PromptForm";

const mockHandleInputChange = jest.fn();
const mockHandleSubmit = jest.fn();
const mockHandleKeyDown = jest.fn();

jest.mock("../../../hooks/useChatActions", () => ({
  useChatActions: jest.fn(() => ({
    handleInputChange: mockHandleInputChange,
    handleSubmit: mockHandleSubmit,
    input: "",
  })),
}));

jest.mock("../../../hooks/useEnterSubmit", () => ({
  useEnterSubmit: jest.fn(() => ({
    formRef: { current: null },
    handleKeyDown: mockHandleKeyDown,
  })),
}));

describe("Prompt form", () => {
  test("renders the textarea with placeholder text", () => {
    render(<PromptForm />);
    const textarea = screen.getByPlaceholderText(
      chatbotContent.promptFormPlaceholder,
    );
    expect(textarea).toBeInTheDocument();
  });

  test("does not show send button when input is empty", () => {
    render(<PromptForm />);
    const sendButton = screen.queryByRole("button");
    expect(sendButton).not.toBeInTheDocument();
  });

  test("calls handleInputChange when typing", () => {
    render(<PromptForm />);
    const textarea = screen.getByPlaceholderText(
      chatbotContent.promptFormPlaceholder,
    );
    fireEvent.change(textarea, { target: { value: "Hello" } });
    expect(mockHandleInputChange).toHaveBeenCalled();
  });

  test("calls handleSubmit when form is submitted", () => {
    render(<PromptForm />);
    const form = screen.getByRole("form");
    const textarea = screen.getByPlaceholderText(
      chatbotContent.promptFormPlaceholder,
    );
    fireEvent.change(textarea, { target: { value: "Hello" } });
    fireEvent.submit(form);
    expect(mockHandleSubmit).toHaveBeenCalled();
  });
});
