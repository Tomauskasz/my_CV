# Domain Context

## Purpose

This repository hosts the static personal CV web application for Tomas Bitvinskas. It presents his profile, commercial AI engineering experience, signature bachelor's thesis research, production projects, and technical capabilities to recruiters and engineering leaders.

## Core Domain Concepts

### 1. Localization & Translations
- **`translations`**: Client-side data dictionary in `lang.js` structured by locale code (`LT`, `EN`). Each entry contains all strings, lists, structured objects, and Proof Constellation graph nodes for commercial experience, signature thesis research, production projects, education, competencies, and languages.
- **`CVApp.setLanguage(lang)`**: Central state transition function in `lang.js` that synchronizes `<html lang="...">`, page title, meta description, and all dynamic DOM text nodes and lists.

### 2. Layout & Presentation (Executive Evidence Dossier)
- **`SiteHeader` (`.site-header`)**: Sticky utility bar providing identity preview, locale switcher (`LT` / `EN`), theme switcher (`Light` / `Dark` / `System`), and immediate contact action.
- **`DossierHero` (`.dossier-hero`)**: Recruiter-first opening with direct-contract offer, academic baseline, and instant action pills (Email, LinkedIn, GitHub, Phone).
- **`ProofConstellation` (`#constellationSection`)**: Interactive SVG evidence graph linking commercial experience (`NNCODE`), signature thesis research (`BeamNG`), production projects, and capability groups.
- **`EvidenceChapters` (`.dossier-chapter`)**:
  - **Chapter 01**: Commercial Experience @ NNCODE (`#chapter1`, `#experienceList`)
  - **Chapter 02**: Signature Research & Thesis (`#chapter2`, `#researchList`)
  - **Chapter 03**: Production Systems Portfolio (`#chapter3`, `#projectsList`)
  - **Chapter 04**: Credentials & Technical Capabilities (`#chapter4`, `#competenciesGrid`)

### 3. Theme & Print System
- **`ThemeController`**: Supports `light`, `dark`, and `system` modes with `localStorage` persistence and `prefers-color-scheme` media query listeners.
- **`PrintStyles` (`@media print`)**: Compact, 2-page black-and-white print output hiding interactive controls and UI chrome.

## System Invariants & Contracts

1. **Static Delivery & Zero-JS Fallback**: Pure static delivery without runtime frameworks or build steps. Complete English CV content is present directly in semantic HTML before JavaScript runs.
2. **Translation Completeness & Parity**: Every key, array, and constellation node in `translations.EN` must have an exact equivalent in `translations.LT`. Validated via `scripts/parity-check.js`.
3. **Style Source of Truth**: `output.css` is the sole production stylesheet containing design tokens, component classes, themes, and print rules.
4. **Design Principles**: Follows `.impeccable.md` guidance — cool blue palette foundation, clean card hierarchy, WCAG AA contrast standards (≥ 4.5:1 text), and recruiter-optimized scannability.

## Ownership & Maintenance Triggers

| Component | Source of Truth | Maintenance Trigger |
| --- | --- | --- |
| CV Content & Translations | `lang.js` | Adding/editing projects, roles, skills, or biography details |
| Semantic HTML Skeleton | `index.html` | Adding new layout sections, modifying landmarks, or altering metadata |
| Visual Styling & Themes | `output.css` | Adjusting typography, colors, layout breakpoints, or print styles |
| Integrity Validator | `scripts/parity-check.js` | Verifying translation parity and DOM element bindings |
| Agent Workflows | `AGENTS.md` | Updating tool instructions, commands, or agent skill configurations |
