---
name: Tomas Bitvinskas | CV
description: Bilingual recruiter-facing CV for an AI automation specialist.
colors:
  page-bg: "oklch(0.96 0.017 250)"
  page-surface: "rgba(243, 248, 255, 0.86)"
  sidebar-top: "oklch(0.5 0.072 254)"
  sidebar-bottom: "oklch(0.4 0.058 253)"
  sidebar-text-strong: "rgba(249, 252, 255, 0.98)"
  sidebar-text: "rgba(229, 237, 246, 0.9)"
  accent: "oklch(0.61 0.15 253)"
  accent-strong: "oklch(0.49 0.12 253)"
  border-soft: "rgba(84, 118, 171, 0.26)"
  text-strong: "oklch(0.24 0.031 257)"
  text: "oklch(0.38 0.03 255)"
typography:
  display:
    fontFamily: "Merriweather Sans, sans-serif"
    fontSize: "clamp(3rem, 7vw, 4.9rem)"
    fontWeight: 400
    lineHeight: 0.96
    letterSpacing: "-0.045em"
  headline:
    fontFamily: "Merriweather Sans, sans-serif"
    fontSize: "clamp(1.35rem, 2.2vw, 1.75rem)"
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: "-0.02em"
  body:
    fontFamily: "Inter, sans-serif"
    fontSize: "1.01rem"
    fontWeight: 400
    lineHeight: 1.74
  label:
    fontFamily: "Inter, sans-serif"
    fontSize: "0.97rem"
    fontWeight: 600
    lineHeight: 1.58
    letterSpacing: "0.02em"
rounded:
  shell: "clamp(1.25rem, 2vw, 2rem)"
  card: "1.1rem"
  modal: "1.4rem"
  pill: "999px"
spacing:
  base: "0.25rem"
  section-gap: "clamp(2rem, 4vw, 3rem)"
  shell-inline: "clamp(1.2rem, 5vw, 3.4rem)"
components:
  language-toggle:
    backgroundColor: "{colors.page-surface}"
    textColor: "{colors.text-strong}"
    rounded: "{rounded.pill}"
    padding: "0.72rem 1rem"
  project-card:
    backgroundColor: "#ffffff"
    textColor: "{colors.text-strong}"
    rounded: "{rounded.card}"
    padding: "1.2rem 1.25rem 1.15rem"
  sidebar-card:
    backgroundColor: "rgba(8, 18, 35, 0.16)"
    textColor: "{colors.sidebar-text}"
    rounded: "{rounded.card}"
    padding: "1.05rem 1.08rem"
  language-chip:
    backgroundColor: "rgba(8, 18, 35, 0.14)"
    textColor: "{colors.sidebar-text}"
    rounded: "{rounded.pill}"
    padding: "0.58rem 0.92rem"
---

# Design System: Tomas Bitvinskas | CV

## Overview

**Creative North Star: "Technical Signal Deck"**

This is a composed professional brief, not a generic CV template. A recruiter should immediately see a technically capable person with current, credible experience, then move through projects and contact paths without visual friction. The asymmetrical light-main and deep-blue-side layout keeps proof and personal context visibly distinct.

The current system is polished rather than ornamental: translucent light surfaces, cool-blue gradients, soft floating depth, and a concise sans-serif pairing. It should feel calm, precise, and ambitious. Light mode is the implemented system. Dark mode is a requested future extension and must preserve the same information hierarchy and blue-led identity rather than introduce a different visual language.

**Key Characteristics:**

- Recruiter scanning leads every layout decision.
- Blue is structural, not decorative.
- Cards carry evidence; the page shell carries atmosphere.
- Motion is subtle feedback, never a content dependency.

## Colors

The palette moves from an ice-paper main surface to a deep slate-blue sidebar, with a vivid blue accent used to direct attention and establish continuity.

### Primary

- **Signal Blue:** the active accent for section rules, bullets, focus treatment, and card highlights.
- **Deep Signal Blue:** the stronger accent state for emphasis where the regular accent is insufficient.

### Neutral

- **Ice Paper:** the page field behind the elevated CV shell.
- **Translucent Paper:** the shell surface that keeps the main column light without becoming stark.
- **Graphite Ink:** the main reading color in the light column.
- **Slate Ink:** secondary copy that supports hierarchy without disappearing.
- **Midnight Panel:** the sidebar gradient that groups identity, contact, education, and experience.
- **Frosted Sidebar Text:** the high-contrast light text used inside the blue panel.

**The Blue Carries Structure Rule.** Use the accent to mark hierarchy, interaction, and evidence. Keep large text areas neutral so the page remains easy to scan.

## Typography

**Display Font:** Merriweather Sans

**Body Font:** Inter

**Character:** The type system is contemporary and engineered: the display face gives the name and section headings a compact, deliberate presence, while Inter keeps dense qualifications and project evidence readable.

### Hierarchy

- **Display:** the candidate name only; large, centered, and compact in line-height.
- **Headline:** section names; weighty enough to partition a fast scan.
- **Body:** qualifications, project evidence, and experience descriptions; comfortable multi-line reading.
- **Label:** navigation, contacts, language controls, and supporting metadata; confident without visual noise.

**The Proof Stays Readable Rule.** Use display typography only for identity and major wayfinding. Evidence stays in the body hierarchy.

## Layout

The CV is one stacked column on narrow screens and a two-column composition from the desktop breakpoint onward. On desktop, the blue personal-information sidebar sits left and remains sticky while the white main column carries the candidate narrative, skills, and projects. On mobile, the composition becomes a continuous edge-to-edge document with the decorative diagonal layers removed.

The main column has a centered hero and a restrained reading width. The sidebar centers its profile image and metadata cards. Section rhythm is deliberately generous so recruiters can pause at any proof point without losing the visual thread.

## Elevation & Depth

Depth is atmospheric, not material. The outer shell floats lightly above the page field, white project cards lift subtly above the main surface, and sidebar cards rely on translucent dark overlays with a fine internal highlight. Hover states rise only slightly; they should communicate availability, not perform.

**The Quiet Lift Rule.** Apply elevation to group information and confirm interaction. Do not stack heavy shadows or turn every surface into a floating card.

## Shapes

The page shell has broad, gently curved corners. Evidence cards are softer rectangles, while language controls, chips, and close controls are fully pill-shaped. Thin, cool borders hold the edges together. Diagonal translucent cuts create a technical signature at desktop sizes, but never affect the mobile reading flow.

## Components

### Language Toggle

- **Character:** a floating utility control, not a navigation bar.
- **Shape:** pill form with a globe mark and compact label.
- **State:** a slight upward lift, brighter surface, and stronger blue edge on hover, focus, or expansion.

### Project Cards

- **Character:** concise proof blocks with a blue signal line at the top.
- **Shape:** softly rounded white cards with a fine border.
- **State:** a small lift and a fuller shadow on hover or focus within.

### Sidebar Cards

- **Character:** quiet, glass-like containers on the blue panel.
- **Shape:** rounded, dark translucent surfaces with restrained borders.
- **State:** use the same slight lift as project cards without a high-contrast flash.

### Contact Links

- **Character:** direct action rows that remain legible over the sidebar gradient.
- **Shape:** full-width rounded cards with icon and label aligned centrally.
- **State:** retain a clear focus indicator and a slightly denser dark surface on interaction.

### Language Chips

- **Character:** compact supporting metadata.
- **Shape:** pill labels that wrap naturally on narrow screens.

### Profile Dialog

- **Character:** a focused image inspection state, not a gallery.
- **Shape:** a large rounded image over a blurred blue-black scrim, with a circular close control.
- **State:** fade and settle into view; respect reduced-motion preferences.

## Do's and Don'ts

### Do:

- **Do** prioritize current professional evidence and direct contact paths.
- **Do** preserve the light-main, blue-sidebar composition when extending the existing identity.
- **Do** treat mobile as a complete reading experience, not a compressed desktop panel.
- **Do** maintain visible keyboard focus and reduced-motion behavior as baseline interaction quality.
- **Do** make a future dark mode a role-preserving counterpart to light mode.

### Don't:

- **Don't** replace the blue identity with unrelated accent colors.
- **Don't** let decorative diagonals, gradients, or shadows compete with qualifications and project proof.
- **Don't** turn the CV into a dense dashboard or a playful portfolio.
- **Don't** present stale education or employment content as current.
