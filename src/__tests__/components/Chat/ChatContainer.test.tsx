import { render, screen } from "@testing-library/react";
import ChatContainer from "~/components/Chat/ChatContainer";

const mockMessages = [
  { id: "1", role: "user", content: "Hello" },
  { id: "2", role: "assistant", content: "Hi! How can I help?" },
];

// Mock hooks
jest.mock("../../../hooks/useChatActions", () => ({
  useChatActions: jest.fn(() => ({
    messages: mockMessages,
  })),
}));

jest.mock("../../../hooks/useScroll", () => ({
  useScroll: jest.fn(() => ({
    messageEndRef: null,
    chatContainerRef: null,
  })),
}));

// Mock the UserMessage and AssiatantMessage components
jest.mock("../../../components/Chat/UserMessage", () => {
  const MockUserMessage = ({ content }: { content: string }) => (
    <div data-testid="user-message">{content}</div>
  );
  MockUserMessage.displayName = "MockUserMessage";
  return MockUserMessage;
});

jest.mock("../../../components/Chat/AssitantMessage", () => {
  const MockAssitantMessage = ({ content }: { content: string }) => (
    <div data-testid="assistant-message">{content}</div>
  );
  MockAssitantMessage.displayName = "MockAssistantMessage";
  return MockAssitantMessage;
});

describe("ChatContainer Component", () => {
  test("renders chat container", () => {
    render(<ChatContainer />);
    expect(screen.getByTestId("chat-container")).toBeInTheDocument();
  });

  test("renders user and assistant messages correctly", () => {
    render(<ChatContainer />);

    expect(screen.getByTestId("user-message")).toHaveTextContent("Hello");
    expect(screen.getByTestId("assistant-message")).toHaveTextContent(
      "Hi! How can I help?",
    );
  });
});
