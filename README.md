# 🧠 Task Sorter (AI-Powered Brain Dump)

**"Brain RAM Management for High-Performance Engineers."**

A minimalist task management tool powered by **Next.js** and **Google Gemini API**.
It takes your chaotic brain dump (raw text) and instantly sorts it into three strategic categories: **Memory Release**, **Core Work**, and **Maintenance**.

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Next.js](https://img.shields.io/badge/Next.js-14-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.0-38b2ac)
![Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-000000)

## 🚀 Concept

High-performing individuals often suffer from "Open Loop" syndrome—where minor administrative tasks consume working memory, preventing deep focus on core projects.

This tool acts as an external **Garbage Collector** for your brain:
1.  **Dump:** Input raw, unorganized tasks.
2.  **Process:** AI analyzes context and urgency.
3.  **Sort:** Returns a structured action plan.

## 🛠 Tech Stack

- **Framework:** [Next.js 14](https://nextjs.org/) (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **AI Model:** Google Gemini 1.5 Flash (via `@google/generative-ai`)
- **Deployment:** Vercel

## 📂 Features

- **Categorization Logic:**
  - 📂 **A. Memory Release:** Admin tasks, chores, quick wins (to clear RAM).
  - ⚔️ **B. Core Work:** Deep work, self-actualization, major projects (High CPU usage).
  - 🔋 **C. Maintenance:** Rest, hobbies, sleep (Fuel & Cooling).
- **Zero-Friction UI:** Dark mode, terminal-like aesthetics, keyboard-first design.
- **Privacy-First:** API keys are handled server-side (Next.js API Routes).

## 🏁 Getting Started

### Prerequisites
- Node.js 18+
- Google AI Studio API Key (Gemini)

### Installation

1. **Clone the repository**
   ```bash
   git clone [https://github.com/your-username/task-sorter.git](https://github.com/your-username/task-sorter.git)
   cd task-sorter
Install dependencies

Bash

npm install
Environment Setup Create a .env.local file in the root directory:

Bash

GEMINI_API_KEY=your_gemini_api_key_here
Run Development Server

Bash

npm run dev
Open http://localhost:3000 with your browser.

🤖 Prompt Engineering
The core logic resides in app/api/sort/route.ts. The AI is instructed to act as a "Personal Engineering Task Manager", prioritizing tasks not just by urgency, but by cognitive load and energy management.

☁️ Deployment
The easiest way to deploy is using Vercel.

Push your code to GitHub.

Import the project in Vercel.

Add GEMINI_API_KEY to Environment Variables.

Deploy.

🤝 Contribution
Feel free to fork and submit PRs if you want to add features like:

Notion API integration

Linear / Jira export

Voice input support

📝 License
This project is licensed under the MIT License.