# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Tech/AI recruiters, hiring managers, and technical leads evaluating Tomas Bitvinskas for AI/ML engineering, robotics, and full-stack software development roles. They need rapid proof of hands-on technical competence, problem-solving capability, and educational rigor within 30–60 seconds of scanning.

## Product Purpose

Serve as a high-signal, accessible, and interactive curriculum vitae / portfolio that demonstrates both practical AI engineering depth and full-stack execution. Success is defined by visitors quickly finding relevant project outcomes, skill competencies, and contact methods to initiate interview conversations.

## Positioning

A practical end-to-end AI engineer: bridges rigorous machine learning / robotics (PyTorch, TensorFlow, ROS, Gazebo, BeamNG autonomous systems) with modern full-stack web and backend delivery (FastAPI, Node.js, React, Tailwind CSS, n8n), backed by a 9/10 GPA at Vilnius TECH.

## Operating Context

- Evaluated across desktop and mobile screens by recruiters during screening.
- Often viewed in fast scanning mode (scanning keywords, project titles, tech stack badges, and impact metrics) or in detailed reading mode.
- Operates as a fast, zero-dependency static web application hosted on GitHub Pages or static CDN.

## Capabilities and Constraints

- **Bilingual Delivery:** First-class instant language switching (Lithuanian LT and English EN) managed via clean clientside state without full-page reload.
- **Static Performance:** Pure HTML, CSS, and vanilla JS runtime with zero external runtime bundle dependencies, and no build step. Bytes arrive in well under a second.
- **Arrival is authored, and it is priced in milliseconds.** The page boots as a sequence: the name, then the identity rail, then the reading stage at `--boot-stage`, then the figures. Stage content in the first viewport is held at `opacity: 0` by a `backwards` fill until that token fires, so `--boot-stage` *is* the page's Largest Contentful Paint — the LCP element is `#about-content`, the profile paragraph. The boot ran at 3300ms and measured **LCP 4384ms**, inside the >4000ms *poor* band rather than merely past the 2500ms *good* one. It now runs at **1800ms** and measures **LCP 2364ms** (median of three cold foreground runs: 2352 / 2364 / 2656), FCP 228–496ms, CLS 0.0004–0.0029 — under the *good* threshold with the choreography and its reading order intact. Two paths still opt out and render immediately: `prefers-reduced-motion`, and any load that starts in a background tab, where `playEntrance()` defers arming. This number is measured, never estimated: changing `--boot-stage` means re-measuring LCP, not re-reasoning about it.
- **Light and Dark:** A theme toggle sits beside the language switch. The opening state is the visitor's remembered choice, or their OS `prefers-color-scheme` when they have not chosen — decided by an inline script before the first paint, so a dark-mode visitor never gets a white flash. Printing is unaffected in either theme: the print stylesheet re-declares the palette, so a CV printed from dark mode is the same sheet as one printed from light.
- **High-Density Scanability:** Clear visual hierarchy, structured project bullet points, chronological education/experience blocks, and accessible interactive touchpoints.
- **Accessibility:** Keyboard-navigable language toggles, ARIA labeling, semantic structure, high color contrast, and responsive layout scaling.

## Brand Commitments

- **Tone & Identity:** Professional, modern, technically sharp, polished, and authentic.
- **Visual Clarity:** Crisp typography (Inter / Merriweather Sans), balanced contrast, structured information grouping, and clean modern aesthetics.

## Evidence on Hand

- Current codebase in index.html, lang.js (complete bilingual copy dictionary), and output.css.
- Profile photograph (`profile.png`, 800x800). `profile-400.jpg` and `profile-full.jpg` are cut from it: the first is a head-and-shoulders crop for the rail's 152px circle, the second keeps the whole frame for the modal. Regenerate both from the master rather than editing them.
- Verified academic record: Vilnius TECH (2022–present), 9/10 GPA.
- Commercial & applied experience: NNCODE (AI Engineer), BeamNG autonomous driving pipeline, CareerCopilot assistant, and practical automation pipelines.

## Product Principles

1. **Proof Over Fluff:** Highlight concrete technical tools, real project architectures, and measurable results.
2. **Instant Scanability:** Enable recruiters to absorb core qualifications within seconds.
3. **Bilingual Parity:** Ensure complete semantic and visual parity across LT and EN views.
4. **Zero-Lag Performance:** Keep the footprint lightweight, responsive, and robust across all devices.
