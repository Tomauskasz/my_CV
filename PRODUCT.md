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
- **Arrival is authored, and it costs a metric.** The page boots as a sequence: the name, then the identity rail, then the reading stage at `--boot-stage` (3300ms), then the figures. Stage content in the first viewport is therefore held at `opacity: 0` until 3.3s by a `backwards` fill, which puts Largest Contentful Paint above the 2.5s Core Web Vitals threshold on a foreground load. This is a chosen trade, not an oversight: a recruiter who watches the evidence arrive is the point of the page. Two paths opt out and render immediately — `prefers-reduced-motion`, and any load that starts in a background tab, where `playEntrance()` defers arming. Retiring the trade means changing `--boot-stage`, not patching around it.
- **High-Density Scanability:** Clear visual hierarchy, structured project bullet points, chronological education/experience blocks, and accessible interactive touchpoints.
- **Accessibility:** Keyboard-navigable language toggles, ARIA labeling, semantic structure, high color contrast, and responsive layout scaling.

## Brand Commitments

- **Tone & Identity:** Professional, modern, technically sharp, polished, and authentic.
- **Visual Clarity:** Crisp typography (Inter / Merriweather Sans), balanced contrast, structured information grouping, and clean modern aesthetics.

## Evidence on Hand

- Current codebase in index.html, lang.js (complete bilingual copy dictionary), and output.css.
- Profile photograph (profile.jpg).
- Verified academic record: Vilnius TECH (2022–present), 9/10 GPA.
- Commercial & applied experience: NNCODE (AI Engineer), BeamNG autonomous driving pipeline, CareerCopilot assistant, and practical automation pipelines.

## Product Principles

1. **Proof Over Fluff:** Highlight concrete technical tools, real project architectures, and measurable results.
2. **Instant Scanability:** Enable recruiters to absorb core qualifications within seconds.
3. **Bilingual Parity:** Ensure complete semantic and visual parity across LT and EN views.
4. **Zero-Lag Performance:** Keep the footprint lightweight, responsive, and robust across all devices.
