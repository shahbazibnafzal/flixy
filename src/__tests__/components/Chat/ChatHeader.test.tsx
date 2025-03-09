import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import { chatbotContent } from "~/content/chatbotContent";
import ChatHeader from "~/components/Chat/ChatHeader";

const mockCloseChat = jest.fn();
const mockStartNewChat = jest.fn();

jest.mock("../../../hooks/useChatActions", () => ({
  useChatActions: jest.fn(() => ({
    closeChat: mockCloseChat,
    startNewChat: mockStartNewChat,
  })),
}));

describe("ChatHeader component", () => {
  test("renders chatbot name correctly", () => {
    render(<ChatHeader />);
    const chatbotName = screen.getByText(chatbotContent.chatbotName);
    expect(chatbotName).toBeInTheDocument();
  });

  test("renders minimize and new chat buttons", () => {
    render(<ChatHeader />);
    const minimizeButton = screen.getByTitle(
      chatbotContent.minimizeButtonTitle,
    );
    const newChatButton = screen.getByTitle(chatbotContent.startNewButtonTitle);
    expect(minimizeButton).toBeInTheDocument();
    expect(newChatButton).toBeInTheDocument();
  });

  test("calls closeChat when minimize button is clicked", () => {
    render(<ChatHeader />);
    const minimizeButton = screen.getByTitle(
      chatbotContent.minimizeButtonTitle,
    );
    fireEvent.click(minimizeButton);
    expect(mockCloseChat).toHaveBeenCalled();
  });

  test("calls startNewChat when new chat button is clicked", () => {
    render(<ChatHeader />);
    const newChatButton = screen.getByTitle(chatbotContent.startNewButtonTitle);
    fireEvent.click(newChatButton);
    expect(mockStartNewChat).toHaveBeenCalled();
  });
});
