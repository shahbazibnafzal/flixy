# Flix Customer Support Landing Page

Live URL: [Click here to preview the website](https://flixy-sk.vercel.app/)

## Overview

This project is a simulation of a customer support landing page with an AI chatbot assistant integrated to the page.
The page uses server side rendering (SSR) for better SEO and inlcudes a fully responsive and accessible layout with sections such as:

- **Navbar**: A navigation bar for easy access to different sections. (The links are just placeholders as of now)
- **Hero**: A welcoming hero section introducing Flixy - AI assiatant with a CTA (Call to action)
- **Features**: A sections showcasing key features.
- **FAQs**: Commonly asked questions and answer.
- **Footer**: Additional links and information.
- **AI Chatbot**: an AI-powered customer support chat interface.

## Tech Stack

### Frontend

- **[Next.js (App Router)](https://nextjs.org/docs)**
- **[TypeScript](https://www.typescriptlang.org/)**
- **[Tailwind CSS](https://tailwindcss.com/)**

### AI Integration

- **[Vercel AI SDK](https://sdk.vercel.ai/docs/introduction)**

### Testing

- **[Jest](https://jestjs.io/)**
- **[React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)**

### Package Manager

- **[pnpm](https://pnpm.io/)**

---

## Installation & Setup

### Prerequisites

Ensure you have the following installed:

- **Node.js (v18+)**
- **pnpm** (if not installed, run `npm install -g pnpm`)

### Clone the Repository

```sh
git clone https://github.com/shahbazibnafzal/flixy.git
cd flixy
```

### Install Dependencies

```sh
pnpm install
```

### Environment Variables

Create a `.env` file in the root directory and add openAI API key for the AI chatbot.

```env
OPENAI_API_KEY
```

### Run the Development Server

```sh
pnpm dev
```

Visit `http://localhost:3000` to view the landing page.

### Run Tests

```sh
pnpm test
```

### Build for Production

```sh
pnpm build
```

---

## AI Chatbot - Flixy

The AI chatbot is powered by the **Vercel AI SDK**, to receive streaming response from Open AI. The chatbot UI consists of:

- **Chat Header**: Displays chatbot name and controls.
- **Chat Container**: Shows the conversation.
- **Prompt Form**: Allows users to send messages.

## Disclaimer

This project is not for commercial purpose and it is not meant to infringe on any copyrights or intellectual property.
