---
name: Tomas Bitvinskas CV
description: High-signal, bilingual AI & software engineering curriculum vitae
colors:
  page-bg: "oklch(0.95 0.014 250)"
  surface: "oklch(0.99 0.004 250)"
  surface-raised: "#fff"
  sidebar-top: "oklch(0.44 0.07 254)"
  sidebar-bottom: "oklch(0.34 0.055 253)"
  text-strong: "oklch(0.24 0.031 257)"
  text: "oklch(0.38 0.03 255)"
  text-soft: "oklch(0.5 0.027 255)"
  sidebar-text-strong: "oklch(0.99 0.004 250)"
  sidebar-text: "oklch(0.92 0.014 250)"
  sidebar-muted: "oklch(0.84 0.02 250)"
  sidebar-line: "rgba(219, 232, 247, 0.2)"
  accent: "oklch(0.61 0.15 253)"
  accent-strong: "oklch(0.49 0.12 253)"
  accent-on-dark: "oklch(0.88 0.07 253)"
  accent-tint: "oklch(0.61 0.15 253 / 0.08)"
  accent-border: "oklch(0.61 0.15 253 / 0.28)"
  rule: "oklch(0.87 0.016 252)"
  rule-strong: "oklch(0.78 0.03 252)"
  sidebar-hover: "rgba(255, 255, 255, 0.08)"
  photo-placeholder: "rgba(8, 18, 35, 0.22)"
  modal-scrim: "rgba(10, 23, 46, 0.68)"
  modal-control: "rgba(9, 18, 38, 0.72)"
  modal-control-hover: "rgba(9, 18, 38, 0.92)"
  scrollbar-thumb: "rgba(255, 255, 255, 0.22)"
  print-ink: "#000"
  print-ink-soft: "#444"
  print-rule: "#999"
  print-paper: "#fff"
typography:
  display:
    fontFamily: "'Merriweather Sans', ui-sans-serif, sans-serif"
    fontSize: "clamp(2.3rem, 5.5vw, 3.6rem)"
    fontWeight: 700
    lineHeight: 1.03
    letterSpacing: "-0.035em"
  lede:
    fontFamily: "'Inter', ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1rem, 1.5vw, 1.125rem)"
    fontWeight: 600
    lineHeight: 1.35
  title:
    fontFamily: "'Merriweather Sans', ui-sans-serif, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 700
    lineHeight: 1.3
    letterSpacing: "-0.015em"
  subtitle:
    fontFamily: "'Merriweather Sans', ui-sans-serif, sans-serif"
    fontSize: "1rem"
    fontWeight: 700
    lineHeight: 1.3
  prose:
    fontFamily: "'Inter', ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.7
  body:
    fontFamily: "'Inter', ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 400
    lineHeight: 1.65
  detail:
    fontFamily: "'Inter', ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.45
  meta:
    fontFamily: "'Inter', ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.8125rem"
    fontWeight: 400
    lineHeight: 1.45
  eyebrow:
    fontFamily: "'Merriweather Sans', ui-sans-serif, sans-serif"
    fontSize: "0.8125rem"
    fontWeight: 700
    letterSpacing: "0.14em"
    textTransform: "uppercase"
  micro:
    fontFamily: "'Inter', ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 700
    letterSpacing: "0.09em"
    textTransform: "uppercase"
rounded:
  sm: "0.25rem"
  md: "0.375rem"
  lg: "0.5rem"
  frame: "clamp(0.5rem, 1.2vw, 1rem)"
  full: "50%"
spacing:
  xs: "0.35rem"
  sm: "0.65rem"
  md: "1rem"
  lg: "1.9rem"
  xl: "clamp(2.25rem, 4vw, 3rem)"
components:
  lang-switch:
    backgroundColor: "{colors.surface-raised}"
    border: "1px solid {colors.rule}"
    rounded: "{rounded.md}"
    padding: "0.15rem"
  lang-option-active:
    backgroundColor: "{colors.accent-strong}"
    textColor: "#fff"
    rounded: "{rounded.sm}"
  contact-link:
    backgroundColor: "transparent"
    textColor: "{colors.sidebar-text}"
    rounded: "{rounded.md}"
    padding: "0.35rem 0.5rem"
  experience-entry:
    backgroundColor: "transparent"
    separator: "1px solid {colors.rule}"
  research-panel:
    backgroundColor: "{colors.accent-tint}"
    border: "1px solid {colors.accent-border}"
    rounded: "{rounded.lg}"
    padding: "1.15rem 1.25rem"
  project-card:
    backgroundColor: "{colors.surface-raised}"
    border: "1px solid {colors.rule}"
    rounded: "{rounded.lg}"
    padding: "1rem 1.1rem"
  skill-tag:
    backgroundColor: "{colors.surface-raised}"
    border: "1px solid {colors.rule}"
    textColor: "{colors.text}"
    rounded: "{rounded.sm}"
    padding: "0.1rem 0.45rem"
  project-tag:
    backgroundColor: "{colors.accent-tint}"
    textColor: "{colors.accent-strong}"
    rounded: "{rounded.sm}"
    padding: "0.1rem 0.42rem"
---

# Design System: Tomas Bitvinskas CV

## Overview

**North star: the evidence reads first.**

This CV carries unusually specific proof — days cut to minutes, 6.3K expert decisions,
3–4 FPS to 15 FPS, 98 laps out of 100. The design has exactly one job: get those
numbers into a recruiter's head inside 45 seconds, then get out of the way. Every
surface that competes with the evidence has been removed.

The page is a two-pane document: a deep navy identity rail carrying photo, contacts,
education and languages, and a light reading stage carrying profile, skills, experience,
research and projects. The rail is sticky, so contact details never leave the screen.

**Key characteristics**
- Flat by default. Elevation is spent on the page frame and nothing else.
- Emphasis comes from weight, size, and colour — never from gradients, glows or shadows on text.
- One accent hue, used for section eyebrows, bullet markers, tags, the active language, and the research panel.
- Hairline rules and whitespace carry structure where a card would be the lazy answer.

## Colors

A near-neutral blue-grey ground, a deep navy rail, and a single sapphire accent.

### Ground
- **Page** `oklch(0.95 0.014 250)` — the field the document frame sits on.
- **Surface** `oklch(0.99 0.004 250)` — the reading stage.
- **Surface raised** `#fff` — project cards and skill tags only.
- **Rail** `oklch(0.44 0.07 254)` → `oklch(0.34 0.055 253)` — vertical gradient.

### Ink
- **Strong** `oklch(0.24 0.031 257)` — the name, headings, emphasised metrics.
- **Body** `oklch(0.38 0.03 255)` — prose and bullets.
- **Soft** `oklch(0.5 0.027 255)` — dates, employment type, specialisation line.
- **Rail strong / body / muted** `oklch(0.99 / 0.92 / 0.84)` at low chroma.

### Accent
- **Accent** `oklch(0.61 0.15 253)` — bullet markers, focus rings, selection.
- **Accent strong** `oklch(0.49 0.12 253)` — section eyebrows, company names, project tags, active language.
- **Accent on dark** `oklch(0.88 0.07 253)` — sidebar eyebrows and institution names.

### Named rules

**The lightest-stop rule.** Every ink used on the rail is verified against
`--sidebar-top`, the *lightest* point of the gradient, not its average. That is why
the rail is a deep navy rather than a mid blue: it buys the muted ink enough contrast
to clear 4.5:1 everywhere. Measured floor in the shipped page is 4.78:1.

**No colour on text without a contrast check.** Accent-coloured text exists only at
`accent-strong` on light and `accent-on-dark` on the rail. Any new accent text pairing
must be measured before it ships.

## Typography

**Display:** `Merriweather Sans` 700 — the name, section eyebrows, and every entry title.
**Body:** `Inter` 400–700 — everything else.

Only the weights actually used are requested: `Inter` 400–700 roman, `Merriweather Sans` 700.
No italic axis is loaded, because nothing on the page is italic.

### Ramp

A seven-step ramp on a 16px root, plus two fluid steps for the hero.

| Step | Size | Used for |
|---|---|---|
| micro | 0.75rem / 12px | institution names, project tags |
| meta | 0.8125rem / 13px | section eyebrows, dates, skill labels and tags, language switch |
| detail | 0.875rem / 14px | contact links, project descriptions, card meta |
| body | 0.9375rem / 15px | bullets, card titles, specialisation |
| subtitle | 1rem / 16px | project titles |
| prose | 1.0625rem / 17px | the profile paragraph |
| title | 1.125rem / 18px | role and research titles |
| lede | clamp(1rem, 1.5vw, 1.125rem) | the role line under the name |
| display | clamp(2.3rem, 5.5vw, 3.6rem) | the name |

### Named rules

**The 65–75ch rule.** Prose is capped by `.main-section { max-width: 46rem }`, which
lands the profile paragraph at 72ch on desktop. Text is left-aligned; justification is
never used, because the page ships without hyphenation and justified text at this
measure produces rivers.

**Tabular numerals for anything comparable.** Dates, GPA and thesis scores, and
`.metric-highlight` all carry `font-variant-numeric: tabular-nums` so digits align
down the page.

## Layout

- **Desktop (≥960px):** `20.5rem` rail + `minmax(0, 1fr)` stage, max frame width `76rem`.
- **Mobile (<960px):** single column, full-bleed frame, no border radius.
- **Source order is stage-then-rail.** The desktop grid moves the rail to column 1.
  This keeps the name, role and profile ahead of the contact block for screen readers
  and on mobile, where the grid does not reorder.
- **Rhythm:** `clamp(2.25rem, 4vw, 3rem)` between sections, `1.9rem` between rail blocks,
  `0.65rem` between bullets.

### Named rules

**`clip`, never `hidden`.** `#pageContent` uses `overflow: clip`. `overflow: hidden`
makes the frame the nearest scrollport, which silently disables `position: sticky` on
the rail — the failure this design previously shipped with.

## Elevation & Depth

Depth is almost absent by design.

- **Page frame** `0 32px 64px -40px rgba(15, 34, 68, 0.28)` — the only ambient shadow.
- **Photo hover** `0 8px 20px -8px rgba(5, 15, 31, 0.55)` — the only interactive lift.

Everything else separates with a 1px rule or with space.

### Named rules

**No zero-offset halos.** A shadow must carry both an offset and a blur. A ring of
colour at `0 0 0 Npx` is decoration, not depth, and is not used.

**The modal's opacity transition is load-bearing.** `closeModal()` waits for
`transitionend` on `#profileModal`'s `opacity` before it hides the element and
releases `inert`. Never set that transition to `0s` and never remove it — a
zero-duration transition fires no event, so the modal would stay open and the
page would stay inert. The reduced-motion block deliberately leaves it alone and
drops only the `.modal-content` transform.

## Shapes

- **Small** `0.25rem` — tags.
- **Medium** `0.375rem` — contact links, the language switch, focus rings.
- **Large** `0.5rem` — project cards, the research panel, the modal image.
- **Frame** `clamp(0.5rem, 1.2vw, 1rem)` — the page container.
- **Circle** `50%` — the photo and the modal close button.

## Components

### Language switch
A two-option segmented control, not a dropdown. Both languages are always visible, so
nobody has to discover that the other one exists. The active option is filled with
`accent-strong`; state is carried on `aria-pressed`. It sits in normal flow above the
name rather than floating over it.

### Entries
Three deliberately different treatments, because three different kinds of claim:
- **Experience** — flat, no container, separated by a 1px rule. Long-form reading.
- **Research** — a tinted panel with a hairline accent border. One entry, and the
  strongest claim on the CV; it must not be mistaken for a side project.
- **Projects** — a card grid. Parallel, comparable items; the one place a box is earned.

### Tags
- **Skill tag** — outlined, neutral. One per technology, so keyword scanning has targets.
- **Project tag** — filled with `accent-tint`. Denotes stack on a project card.

## Do's and Don'ts

### Do
- Verify any new rail colour against `--sidebar-top`, the lightest gradient stop.
- Keep prose left-aligned and inside the 46rem measure.
- Use `overflow: clip` on any ancestor of the sticky rail.
- Give dates and scores tabular numerals.
- Keep the print stylesheet current — recruiters save this page as a PDF.

### Don't
- **Don't put a gradient on text.** `background-clip: text` with a transparent fill
  previously drove the rail headings to 1.19:1 contrast. Emphasis is weight and colour.
- **Don't add hover states to non-interactive text.** Paragraphs and list items are
  not controls.
- **Don't reach for a card.** Experience and research are flat; only the project grid
  gets a box.
- **Don't add a decorative overlay**, diagonal wash, or per-card accent bar. A signal
  applied to everything signals nothing.
- **Don't stack an override block at the end of the file.** Edit the rule where it
  lives; this stylesheet previously carried four generations of `.sidebar-shell`.
- **Don't introduce `!important`.** The only ones present are the `[hidden]` reset and
  the reduced-motion overrides.
