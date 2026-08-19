<div align="center">

# Akash Debbarma — Developer Portfolio

**An interactive, code-editor-inspired portfolio for an Aspiring AI Engineer.**

[![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)

[View Live Demo](https://akash-portfolio-iotarosy.vercel.app/) • [Report Bug](https://github.com/akashdebbarma06/akash-portfolio-new/issues) • [Request Feature](https://github.com/akashdebbarma06/akash-portfolio-new/issues)

</div>

---

## 📺 Live Demo & Preview

> **Note to self:** Add a GIF screen recording of the terminal typing animation and smooth scrolling navigation here (`./public/demo.gif`).

![Portfolio Preview Placeholder](./public/demo.gif)

---

## 🏗️ Project Architecture

```mermaid
graph TD
    Client((Client Browser))
    
    subgraph "Next.js App Router (app/)"
        Layout[layout.tsx]
        Page[page.tsx]
        GlobalCSS[globals.css]
    end
    
    subgraph "UI Components (components/)"
        Header[Header.tsx]
        Hero[TerminalHero.tsx]
        Projects[ProjectCard.tsx]
        Skills[Skills.tsx]
        Resume[Resume.tsx]
        Contact[Contact.tsx]
        StatusBar[StatusBar.tsx]
    end
    
    subgraph "Data & Types"
        JSON[(data/projects.json)]
        TS[types/project.ts]
    end
    
    subgraph "Utilities"
        Utils[lib/utils.ts]
    end

    Client -->|Loads| Layout
    Layout --> Page
    Layout --> GlobalCSS
    
    Page --> Header
    Page --> Hero
    Page --> Projects
    Page --> Skills
    Page --> Resume
    Page --> Contact
    Page --> StatusBar
    
    Header -.->|Uses| Utils
    Hero -.->|Uses| Utils
    
    Projects -.->|Reads| JSON
    Projects -.->|Strict typing| TS
```

---

## 🗺️ Navigation Flow

```mermaid
flowchart LR
    Home((Home))
    Nav[Header Tabs]
    
    SecHero[Terminal Hero]
    SecProj[Projects Section]
    SecSkill[Skills Section]
    SecRes[Resume Section]
    SecCont[Contact HTML]
    
    Home --> Nav
    Nav -- "#home" --> SecHero
    Nav -- "#projects" --> SecProj
    Nav -- "#skills" --> SecSkill
    Nav -- "#resume" --> SecRes
    Nav -- "#contact" --> SecCont
    
    SecHero -.->|Intersection Observer| Nav
    SecProj -.->|Intersection Observer| Nav
    SecSkill -.->|Intersection Observer| Nav
    SecRes -.->|Intersection Observer| Nav
    SecCont -.->|Intersection Observer| Nav
```

---

## ✨ Features

| Feature | Description | Status |
|---------|-------------|--------|
| **Terminal Hero** | Bash-style typing animation mirroring an interactive shell. | 🟢 Active |
| **Hash Navigation** | Smooth auto-scrolling with `IntersectionObserver` active state highlighting. | 🟢 Active |
| **IDE Aesthetics** | Strict Obsidian-style dark mode, monospace typography, and sharp edges. | 🟢 Active |
| **Dynamic Cards** | Project showcase featuring mock IDE file-tabs (e.g., `.ts`, `.py`). | 🟢 Active |
| **Resume Preview** | LaTeX-editor inspired split-screen view for the live resume. | 🟢 Active |
| **Interactive HTML** | Contact section formatted as a clickable, copyable `contact.HTML` file. | 🟢 Active |

---

## 🛠️ Tech Stack

| Category | Technology | Purpose |
|----------|------------|---------|
| **Framework** | [Next.js (App Router)](https://nextjs.org/) | Server-side rendering, routing, and fast initial loads. |
| **Language** | [TypeScript](https://www.typescriptlang.org/) | Strict type-safety, specifically for project data structures. |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com/) | Rapid utility-first styling without external component libraries. |
| **Fonts** | [next/font](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) | Self-hosted, optimized `Inter` (Sans) and `IBM Plex Mono` (Code). |
| **Deployment**| [Vercel](https://vercel.com/) | Edge network hosting with seamless CI/CD integration. |

---

## 🚀 Getting Started

### Project Structure
```text
akash-portfolio/
├── app/
│   ├── globals.css      # Core theme, variables, animations
│   ├── layout.tsx       # Root HTML structure, font loading
│   └── page.tsx         # Main single-page composition
├── components/          # Reusable UI sections
│   ├── Contact.tsx
│   ├── Container.tsx
│   ├── Header.tsx
│   ├── ProjectCard.tsx
│   ├── Resume.tsx
│   ├── Skills.tsx
│   ├── StatusBar.tsx
│   └── TerminalHero.tsx
├── data/
│   └── projects.json    # Static project content
├── lib/
│   └── utils.ts         # Shared logic (scrollToSection)
├── public/              # Static assets (PDFs, Images, Favicon)
└── types/
    └── project.ts       # TypeScript interfaces
```

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/akashdebbarma06/akash-portfolio-new.git
   cd akash-portfolio-new
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## ☁️ Deployment (Vercel)

This project is optimized for deployment on Vercel. 

1. Push your code to a GitHub repository.
2. Go to the [Vercel Dashboard](https://vercel.com/new).
3. Import the repository and leave the framework preset as **Next.js**.
4. Click **Deploy**.

> *There are currently no required environment variables (`.env`) for this static portfolio.*

---

## 📫 Contact

[![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)](https://github.com/akashdebbarma06)
[![LinkedIn](https://img.shields.io/badge/linkedin-%230077B5.svg?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/akashdebbarma06/)
[![LeetCode](https://img.shields.io/badge/LeetCode-000000?style=for-the-badge&logo=LeetCode&logoColor=#d16c06)](https://leetcode.com/u/akashdebbarma06/)

