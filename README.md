# Tomas Bitvinskas | CV

Interactive, responsive, single-page bilingual Curriculum Vitae for Tomas Bitvinskas, AI student at Vilnius TECH and AI Engineer.

## Features

- **Bilingual Support**: Instant client-side switching between Lithuanian (`LT`) and English (`EN`) with full content localization.
- **Accessible UI**: Keyboard-navigable language menu, profile photo modal dialog with focus management, and semantic HTML5 landmarks.
- **Standout Visual Design**: Layered modern blue theme, diagonal accent styling, responsive two-column grid, and clean card hierarchy.
- **Zero Build Step**: Pure static delivery via standard HTML, CSS, and vanilla JavaScript.

## Tech Stack

- **Markup**: HTML5 semantic layout (`index.html`)
- **Logic & Localization**: Vanilla JavaScript (`lang.js`)
- **Styles**: Tailwind CSS v4 + custom components (`output.css`)

## Quick Start (Local Preview)

Serve the repository root using Python's built-in HTTP server:

```bash
python -m http.server 8000
```

Open [http://127.0.0.1:8000/index.html](http://127.0.0.1:8000/index.html) in your browser.

## Documentation & Architecture

- [AGENTS.md](AGENTS.md) — Agent workflows, operational commands, and editing rules.
- [CONTEXT.md](CONTEXT.md) — Domain architecture, data dictionary, invariants, and UI contracts.
- [CODING_STANDARDS.md](CODING_STANDARDS.md) — Baseline code quality and engineering standards.
- [docs/agents/](docs/agents/) — Agent skill configurations (issue tracker, triage labels, domain docs).
