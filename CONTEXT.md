# Domain Context

## Purpose

This repository hosts the static personal CV web application for Tomas Bitvinskas. It presents his profile, technical skills, artificial intelligence projects, work experience, education, and contact details to recruiters, hiring managers, and collaborators.

## Core Domain Concepts

### 1. Localization & Translations
- **`LanguageToggle`**: UI trigger (`#langBtn`) and dropdown (`#langMenu`) allowing users to switch between Lithuanian (`LT`) and English (`EN`).
- **`translations`**: Client-side data dictionary in `lang.js` structured by locale code (`LT`, `EN`). Each entry contains all strings, lists, and structured objects for headings, about section, skill categories, education history, language proficiency, experience summaries, and project portfolios.
- **`setLanguage(lang)`**: The central state transition function in `lang.js` that synchronizes the document language attribute (`<html lang="...">`), button label, and all dynamic DOM text nodes and lists.

### 2. Layout & Presentation
- **`PageContent` (`#pageContent`)**: Root `<main>` landmark with two-column responsive desktop layout (`page-main` and `page-sidebar`).
- **`MainSection` (`page-main`)**: Primary content area containing:
  - Hero Header (`Tomas Bitvinskas`, `#job-title`)
  - About Section (`#about-section`, `#about-content`)
  - Technical Skills (`#skills-section`, `#skills-list`)
  - Project Showcase (`#projects-section`, `#projects-content`)
- **`SidebarSection` (`page-sidebar`)**: Personal metadata column containing:
  - Profile Image (`#profileImage` with blur-up transition and click-to-enlarge modal trigger)
  - Contacts (`#contacts-section` with email, phone, LinkedIn, GitHub links)
  - Education (`#education-section`, `#education-content`)
  - Languages (`#languages-section`, `#languages-content`)
  - Experience Summary (`#experience-section`, `#experience-content`)

### 3. Interactive Modals & Accessibility
- **`ProfileModal` (`#profileModal`)**: Accessible dialog overlay displaying an enlarged portrait. Wires keyboard focus trapping, `Escape` key dismissal, backdrop click closing, and focus restoration to the portrait image on close.

## System Invariants & Contracts

1. **Static Delivery**: No Node build pipeline or dynamic backend is present. All runtime behavior is executed purely in the browser.
2. **Translation Completeness**: Every key present in `translations.LT` must have an equivalent representation in `translations.EN`.
3. **DOM ID Coupling**: Dynamic DOM injection relies on exact element IDs (`job-title`, `about-title`, `about-content`, `skills-title`, `skills-list`, `projects-title`, `projects-content`, `contacts-title`, `education-title`, `education-content`, `languages-title`, `languages-content`, `experience-title`, `experience-content`, `experience-role`, `experience-duration`, `experience-place`). Renaming or removing IDs in `index.html` requires synchronized updates in `lang.js`.
4. **Style Source of Truth**: `output.css` is the sole stylesheet source containing compiled Tailwind v4 utilities and custom project classes (`font-inter`, `blur-up`, `flag-icon`, `lang-toggle`, `modal-content`, `modal-close-btn`).
5. **Design System & Aesthetics**: Follows `.impeccable.md` guidance — cool blue palette foundation, clean card hierarchy, WCAG AA contrast standards, and recruiter-optimized scannability.

## Ownership & Maintenance Triggers

| Component | Source of Truth | Maintenance Trigger |
| --- | --- | --- |
| CV Content & Translations | `lang.js` | Adding/editing projects, roles, skills, or biography details |
| Page Skeleton & Markup | `index.html` | Adding new layout sections, modifying landmarks, or altering metadata |
| Visual Styling & Themes | `output.css` | Adjusting typography, colors, layout breakpoints, or modal styles |
| Agent Workflows | `AGENTS.md` | Updating tool instructions, commands, or agent skill configurations |
