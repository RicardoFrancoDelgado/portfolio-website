# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Primary users are recruiters and hiring managers screening Ricardo Franco Delgado for full-time fullstack roles. They land on the site to quickly validate his skills, see real project work, and find an easy way to reach him (LinkedIn, GitHub, or email).

## Product Purpose

A personal portfolio/CV site for Ricardo, a fullstack developer. It exists to get him noticed and contacted for job opportunities by presenting his background, technical range, and shipped projects in a scannable single-page format.

## Positioning

Polyglot fullstack breadth: comfortable end-to-end across Java/Spring Boot, Go, Node.js, and the TypeScript ecosystem (React, Next.js, Angular). The pitch is versatility across stacks, not a single narrow specialization — reflected in the current tech list (JavaScript, Java, Spring Boot, Angular, TypeScript, Node.js, React, Next.js, Golang, SQL) and the mixed-stack project list.

## Operating Context

Single-page React (Vite) app with four scroll-anchored sections: Header (nav), About/Hero (`#inicio`, `#sobre`), Projects (`#projetos`), Contact (`#contato`). Content and UI copy are in Portuguese (Brazil). Six shipped projects are listed with live/deploy links and GitHub repo links, spanning Java/Spring Boot, Go, React, and plain HTML/CSS/SCSS work.

## Capabilities and Constraints

- Stack: React 19 + Vite, Tailwind CSS v4, `motion` (Framer Motion) for section/element animation, `lucide-react` for icons.
- No routing library — navigation is same-page anchor scrolling.
- No backend/CMS — all content (bio, tech list, project data) is hardcoded in the components.
- Contact section offers LinkedIn, GitHub, and email (with click-to-copy) as the only contact channels; no contact form.
- No downloadable CV/resume currently, and none is planned — do not add one speculatively.

## Evidence on Hand

- Real bio, tech list, and six real project entries (with live deploy URLs and GitHub URLs) are already in the code (`src/About.jsx`, `src/AboutDetails.jsx`, `src/Projects.jsx`) and confirmed accurate — treat as ground truth, do not alter the claims.
- Real project screenshot assets exist at `public/projects/*.png`.
- Real social/contact links: LinkedIn (`ricardofrancodelgado-dev`), GitHub (`RicardoFrancoDelgado`), email (`ricardodelgado693@gmail.com`).
- No testimonials, case studies, or press exist — do not fabricate any.

## Product Principles

- Content is truth: the bio, tech list, and project claims already in the code are accurate and final — future work presents them better, it doesn't invent or embellish them.
- Recruiter-speed scanning: a hiring manager should grasp who Ricardo is, what he can build, and how to reach him within a first scroll.
- Breadth is the pitch: the polyglot stack range (Java/Go/TS ecosystems) is a deliberate differentiator, not something to narrow or hide behind one specialization.
- Low-friction contact: keep LinkedIn/GitHub/email as direct, frictionless contact channels rather than gated forms.
