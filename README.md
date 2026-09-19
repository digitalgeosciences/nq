#Naif Alqubalee

Build a high-performance, light-mode developer portfolio web app for a Backend Software Engineer, rigorously designed following modern UX/UI best practices, accessible interaction patterns, and clean typography.

### Architecture & Data Strategy

- Store all site content (personal details, skills, projects, certifications, contact info) inside a structured JSON file (`src/data/portfolio.json`).

- Ensure all UI components dynamically read data from this JSON file so the application compiles to a static site optimized for direct deployment on GitHub Pages.

### UX/UI & Design System Rules

- **Theme & Surfaces:** Crisp, modern Light Mode. Use off-white/warm gray background surfaces (`#F8F9FA` / `#F3F4F6`), high-contrast body text (`#111827`), elevated pure-white card containers (`#FFFFFF`) with subtle 1px borders (`#E5E7EB`), and soft multi-layered drop shadows (`box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05)`). Use an accent color like Indigo (`#4F46E5`) for key focal points.

- **Typography & Hierarchy:** Strictly avoid robotic, overly mechanical, or harsh monospace body fonts. Use humanistic, highly readable sans-serif typography (e.g., Plus Jakarta Sans, Inter, or Outfit) with strict modular scale hierarchy (Display 48px, H1 36px, H2 28px, H3 20px, Body 16px with 1.6 line-height). Keep monospace fonts contained exclusively inside visual code snippet components.

- **Accessibility (a11y) & Usability:**

  - Enforce WCAG AA contrast ratio (minimum 4.5:1 for standard text).

  - Explicit interactive states on all buttons and cards: `hover`, `active`, and a high-visibility 2px focus ring (`focus-visible:ring-2 focus-visible:ring-indigo-500`) for keyboard navigation.

  - Interactive touch targets must measure at least 44x44px.

- **Micro-Interactions & Animation:**

  - Micro-animations must adhere to standard duration thresholds: 150-300ms cubic-bezier easing (`ease-out`) for hover/focus states to avoid perceived interface lag.

  - Smooth entrance animations on scroll using Framer Motion (fade-in + 8px slide-up with `once: true` to prevent repetitive layout thrashing).

  - Respect `prefers-reduced-motion` media queries by falling back to instant opacity toggles.

### Layout & Page Sections

1. **Header / Navbar:**

   - Sticky top bar (`backdrop-blur-md bg-white/80 border-b border-gray-200/80`).

   - Accessible skip-to-content link (`sr-only focus:not-sr-only`).

   - Smooth-scroll navigation links (_About, Skills, Projects, Certifications, Contact_) with active scroll-spy state indicators.

2. **Hero Section:**

   - **Headline:** "Backend Software Engineer | Building Secure, Scalable, & Maintainable Systems"

   - **Subheadline:** "Specializing in NestJS, Node.js, TypeScript, and PostgreSQL."

   - **Visual Component:** Styled light-themed code preview panel displaying a sample NestJS controller with clean syntax highlighting and a subtle, non-distracting line reveal animation.

   - **CTAs:** Primary button "View Projects" (solid indigo, soft shadow, lift-on-hover) and Secondary outline button "Contact Me".

3. **About Section:**

   - Soft-tinted spotlight card framing core engineering philosophy: turning ideas into resilient backend systems, designing REST APIs, structuring databases, implementing JWT/RBAC security, and containerizing with Docker.

   - Micro-interaction highlight pills with clean iconography for Clean Code, Scalable Architecture, Database Security, and Continuous Learning.

4. **Tech Stack Matrix:**

   Render dynamic skill categories pulled from JSON inside modern light-mode cards using responsive auto-fit grids:

   - **Core & Languages:** TypeScript, JavaScript, Node.js

   - **Frameworks & ORMs:** NestJS, TypeORM

   - **Databases & Security:** PostgreSQL, Relational Database Design, JWT, Role-Based Access Control (RBAC)

   - **DevOps & Tools:** Docker, Git, GitHub, Postman

5. **Projects Grid:**

   Render interactive project cards from JSON featuring subtle elevation, tech tag pills, dates, and direct links with clear affordances (`aria-label` attributes on external icons):

   - **FundChain – Blockchain-Based Community Funding Platform** (Sep 2025 - Apr 2026)

   - **Commerce & Order Management Platform** (Sep 2026)

   - **Task Manager API** (Aug 2026)

   - **Contact Management API** (Aug 2026)

6. **Certifications Section:**

   Clean grid layout displaying certification badges and issuing credentials:

   - Hugging Face Agents Course — Certificate of Excellence

   - AWS Educate Machine Learning Foundations (AWS)

   - Introducing Generative AI with AWS (Udacity)

   - Relational Database V8 (freeCodeCamp)

   - Legacy Responsive Web Design V8 (freeCodeCamp)

   - Datacom Software Development Job Simulation (Forage)

   - Product Management Job Simulation (Forage)

7. **Contact & Footer:**

   - Accessible contact form with semantic `<label>` elements, floating/clear placeholder styling, real-time input validation, and explicit success/error feedback toasts.

   - Social link buttons connecting to GitHub, LinkedIn, and Email with appropriate `rel="noopener noreferrer"` tags.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
