# Tomas Bitvinskas | CV & Proof Constellation

Interactive, responsive, single-page bilingual Curriculum Vitae and Executive Evidence Dossier for **Tomas Bitvinskas** — Applied AI & Automation Engineer, Vilnius TECH AI student, and NNCODE AI Engineer.

## Key Features

- **Executive Evidence Dossier**: Structured chapter hierarchy for commercial practice (@ NNCODE), signature thesis research, production systems, and academic foundation.
- **Proof Constellation**: Interactive SVG graph mapping connections between commercial roles, thesis research, production systems, and technical competencies.
- **Bilingual Localization**: Instant client-side switching between English (`EN`) and Lithuanian (`LT`) with full parity across all text and graph nodes.
- **Resilient Delivery**: Complete English CV content available in semantic HTML5 with zero JavaScript required.
- **Theme System**: Light, Dark, and System modes with instant persistence and WCAG AA compliant contrast.
- **Print-Optimized**: Dedicated `@media print` stylesheet producing a compact, elegant 2-page black-and-white CV without UI chrome.
- **Zero Build Step**: Pure static architecture delivered via standard HTML5, CSS3, and vanilla JavaScript.

## Quick Start (Local Preview)

Serve the repository root using Python's built-in HTTP server:

```bash
python -m http.server 8000
```

Open [http://127.0.0.1:8000/index.html](http://127.0.0.1:8000/index.html) in your browser.

## Validation & Automated Checks

```bash
# Verify JavaScript syntax
node -c lang.js

# Verify translation dictionary and DOM target parity
node scripts/parity-check.js
```

## Documentation & Architecture

- [AGENTS.md](AGENTS.md) — Agent workflows, operational commands, and editing rules.
- [CONTEXT.md](CONTEXT.md) — Domain architecture, data dictionary, invariants, and UI contracts.
- [CODING_STANDARDS.md](CODING_STANDARDS.md) — Baseline code quality and engineering standards.
- [docs/agents/](docs/agents/) — Agent skill configurations (issue tracker, triage labels, domain docs).
