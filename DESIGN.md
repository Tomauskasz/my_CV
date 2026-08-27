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
  rail-flow-near: "oklch(0.55 0.11 253 / 0.5)"
  rail-flow-far: "oklch(0.5 0.1 262 / 0.45)"
  rail-flow-deep: "oklch(0.47 0.09 246 / 0.4)"
  rule: "oklch(0.87 0.016 252)"
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
    fontFamily: "'IBM Plex Sans', ui-sans-serif, system-ui, sans-serif"
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
    fontFamily: "'IBM Plex Sans', ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.7
  body:
    fontFamily: "'IBM Plex Sans', ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 400
    lineHeight: 1.65
  detail:
    fontFamily: "'IBM Plex Sans', ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.45
  meta:
    fontFamily: "'IBM Plex Sans', ui-sans-serif, system-ui, sans-serif"
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
    fontFamily: "'IBM Plex Sans', ui-sans-serif, system-ui, sans-serif"
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
- The document is flat; the *surface* is not. Ink, rules and spacing stay hairline-plain,
  and every effect sits behind or around them — the rail, the frame, the pointer.
- Emphasis comes from weight, size, and colour — never from gradients, glows or shadows on text.
- One accent hue, used for section eyebrows, bullet markers, tags, the active language, the
  research panel, the frame ring and the rail's flow.
- Hairline rules and whitespace carry structure where a card would be the lazy answer.
- The page is alive. See **Motion** — it is a system here, not a garnish.

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

### Rail flow
- **Flow near / far / deep** `oklch(0.55 0.11 253)`, `oklch(0.5 0.1 262)`, `oklch(0.47 0.09 246)`
  at low alpha — the drifting aurora behind the rail, and the fallback wherever WebGL
  will not run. They exist only as gradient stops, so the alpha is part of the token.
  The shader's own palette is the same family, bounded by the lightest-frame rule.

### Accent
- **Accent** `oklch(0.61 0.15 253)` — bullet markers, focus rings, selection.
- **Accent strong** `oklch(0.49 0.12 253)` — section eyebrows, company names, project tags, active language.
- **Accent on dark** `oklch(0.88 0.07 253)` — sidebar eyebrows and institution names.

### The dark palette

One block, `:root[data-theme="dark"]`, set by an inline script in `<head>` before the
first paint. Only colour moves — rhythm, type, motion and the boot timeline are the same
page in both themes.

The usual arrangement carries the palette twice, once under `@media (prefers-color-scheme:
dark)` and once under the attribute, and lets the two copies drift. Here the script reads
`localStorage` then `prefers-color-scheme` and writes one attribute, so there is one copy.
That trades a no-script dark mode for a single source of truth, and this page already
renders no content at all without script — the cost was spent long ago.

- **Ground** `oklch(0.15 0.017 258)`, **stage** `oklch(0.225 0.021 257)`, **cards**
  `oklch(0.27 0.024 256)`.
- **Ink** `0.97 / 0.87 / 0.73` at low chroma.
- **Accent climbs.** `--accent-strong` goes `0.49 → 0.79`: it is the eyebrow and
  company-name ink on the reading stage, and at its light value it disappears into a
  `0.225` surface.
- **`--on-accent` inverts.** The ink on an accent fill was a literal `#fff` at its one
  use site — the active language pill. In dark the fill lightens, so white on it fails.
  It is a token now, and it is the one hard-coded colour on this page that actually
  broke a theme.
- **Shadows shrink to near-black.** There is no light on a dark ground for a shadow to
  subtract; depth comes from the surface steps instead.

**The rail keeps its material, not its lightness rank.** In light the columns separate on
lightness. In dark that lever is gone, so separation moves to hue: measured, the rail
composites to `rgb(24,35,59)` against the stage's `rgb(21,28,38)` — barely lighter, much
more chromatic. Dimming it far enough to be strictly darker merges it into the stage and
the two-column structure stops reading.

**The shader is dimmed after its clamp, never before.** `--rail-dim` (1 in light, 0.6 in
dark) multiplies the fragment colour *after* `min(colour, vec3(0.21, 0.28, 0.52))`, so the
lightest-frame ceiling still bounds the rail and the dimming can only ever subtract.
`motion.js` reads the token off the computed style rather than holding a copy. Measured in
dark: brightest rail pixel `rgb(33,44,82)`, holding `--sidebar-muted` at **8.87:1**.

**Print is one palette.** `@media print` re-declares the ground and ink tokens, so a
visitor printing from dark mode gets the same sheet as everyone else rather than a black
rectangle wherever a token slipped past the literals.

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
**Body:** `IBM Plex Sans` 400–700 — everything else.

Both faces are loaded as **variable** fonts: `IBM Plex Sans` `wght 400..700` and
`Merriweather Sans` `wght 300..800`. Merriweather's range is wider than any static
weight the page sets, because the name's entrance animates the axis itself — see
**Motion**. No italic axis is loaded, because nothing on the page is italic, and no
optical-size axis is requested because Plex has none.

### Why IBM Plex Sans

The body face was Inter, and Inter is the default every generated interface converges
on — it carries no argument. Plex is an engineering-documentation face, which is what
this document actually is. Three properties made it the pick over the alternatives,
and any replacement has to clear the same three:

1. **Lithuanian coverage.** `ąčęėįšųūž` must be in the face itself, not a fallback.
2. **Real tabular figures.** `font-variant-numeric: tabular-nums` must actually equalise
   digit widths — the metric counters tick inside running prose, and a face without
   working `tnum` reflows the paragraph on every frame. This eliminated Commissioner.
3. **Weight contrast that carries emphasis.** Emphasis on this page is weight and colour,
   never gradient or glow. Measured over a full 15px line, 400→700 moves Plex by 22.9px;
   Hanken Grotesk moves by 8.6px and Public Sans by 11.1px, which is not enough
   separation for `.metric-highlight` to outrank the prose around it.

Plex sets ~4% narrower than Inter over a full line, but its digit and lowercase widths are
close enough that the measure barely moved: the profile paragraph reads 72.2ch inside the
same `46rem`, against 72ch before. The 65–75ch rule needed no adjustment.

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
- **Rhythm:** `--stage-gap` `clamp(2.25rem, 4vw, 3rem)` between sections, `--rail-gap`
  `1.9rem` between rail blocks, `0.65rem` between bullets.

### Named rules

**The two columns agree on three lines, and none of them is a tuned pixel.** The rail's
identity block sets the photo's top edge, its centre, and the top of the first section
below it; the stage matches all three by construction. Both shells open on
`--rail-pad-top`. The hero's box is given `--photo-size` and centres its own lines inside
it, so the name/role/lede group balances on the photo's axis whatever it weighs. The
stage's gap is the wider of the two, so the hero returns the difference —
`calc(var(--rail-gap) - var(--stage-gap))`. Every one of those values scales on its own
curve, which is exactly why they are tokens: a hand-measured offset would hold at one
viewport and drift at every other.

**Above `1100px` only.** The alignment needs the language switch out of the flow — in flow
it is the stage's first child and pushes the hero down by its own height. Overlaid, it runs
into the name at about `980px`. So the whole block starts at `1100px`, where the name
clears it by 81px. Between `960px` and `1100px` the layout is still two columns, but the
switch keeps its own row and the columns do not line up. That is the degradation, and it is
the right one: a colliding name is worse than an unaligned heading.

**`clip`, never `hidden`.** `#pageContent` uses `overflow: clip`. `overflow: hidden`
makes the frame the nearest scrollport, which silently disables `position: sticky` on
the rail — the failure this design previously shipped with.

## Elevation & Depth

Depth is spent on the container and the pointer, never on the text.

- **Page frame** `0 32px 64px -40px rgba(15, 34, 68, 0.28)` — the ambient shadow the
  document sits on.
- **Raised** `0 12px 24px -16px rgba(18, 39, 74, 0.26)` — the language pill.
- **Lifted** `0 26px 44px -26px rgba(18, 39, 74, 0.42)` — a card under the pointer.
- **Photo hover** `0 8px 20px -8px rgba(5, 15, 31, 0.55)`.

Everything else separates with a 1px rule or with space.

### Named rules

**No zero-offset halos.** A shadow must carry both an offset and a blur. A ring of
colour at `0 0 0 Npx` is decoration, not depth, and is not used.

**Real depth is 3D, or it is a shadow.** The project and research cards rotate under the
pointer on a `perspective(900px)`; that is what makes them read as objects. A card that
only changes its border colour on hover reads as a broken link instead — which is why
the previous version of this page shipped with no card hover at all.

**The modal's own fade yields to the morph.** When the photo morphs into the dialog via
a view transition, script adds `.is-morphing`, which zeroes the dialog's opacity and
transform transition. Two arrival animations running at once on the same element read
as a stutter. Without view transitions the class is never added and the fade is the
whole effect.

## Motion

Motion is a system on this page, in five acts. The invariant that holds them together:
**the default state of every element is its finished state.** Every entrance is additive.
Strip the script, the stylesheet's animation support, or the visitor's tolerance for
movement, and what remains is the complete, legible CV.

The budget: `--motion-fast: 140ms` acknowledgement, `--motion-medium: 240ms` state change,
`--motion-slow: 1250ms` arrival. Acknowledgement and state change are answers to an
input and stay quick; only the arrival is paced to be watched. Easing is `--ease-arrive` for anything arriving,
`--ease-back` for anything that should feel sprung into place, `--ease` for the rest.
`--ease-arrive` is `cubic-bezier(0.06, 0.94, 0.13, 1)` — harder than an exponential
ease-out on purpose. An arrival covers most of its distance immediately and then spends a
long time settling the last few percent: measured on the name's entrance, **69.7% of the
way at a tenth of the duration, 97.8% at half**. That long tail is the part the eye reads.
The boot timeline lives in one place, as `--boot-*` tokens.

### The acts

**I — Boot.** Three phases, in the document's reading order, the last of them settling at
~3.1s and the numbers finishing at ~4.3s. Script adds `.is-armed` to `<body>` after the
first render.

| Phase | | Starts | Ends |
|---|---|---|---|
| 0 | **Ground** — page frame, rail wipe, photo and its ring | 0ms | 1700ms |
| 1 | **Hero**, right — name, then role, then specialisation | 150ms | 2240ms |
| 2 | **Rail content**, left — heading, rule and rows, section by section | 1250ms | 3020ms |
| 3 | **Stage**, right — profile, skills, section rules, cards | 1800ms | 3100ms |
| — | **Numbers**, last of all | 2050ms | 4340ms |

Those ends are measured off the live page, not added up from the stylesheet — every one
except Ground's, whose ring draws on a pseudo-element that `getComputedStyle` will not
enumerate, and which is `ring-draw 1400ms` at `--boot-ring` 300ms.

**Phase 3's start is the page's Largest Contentful Paint.** `#about-content` is the LCP
element, and a `backwards` fill holds it at `opacity: 0` until `--boot-stage`, so LCP
cannot land before that token fires. At 3300ms the page measured **LCP 4384ms**, inside
the >4000ms *poor* band. At 1800ms it measures **2364ms median of three cold runs**
(2352 / 2364 / 2656), under the 2500ms *good* threshold, with FCP 228–496ms and CLS
0.0004–0.0029. Retune the token and re-measure; do not retune it and re-estimate.

**The rail's ground is not its content.** The dark field and the photograph are the stage
the identity stands on, so they arrive with the frame; only what is *written* on the rail
waits its turn. Wiping the whole column in at once made the left side read as popping into
existence rather than being filled in.

**A cascade needs one offset, not three sets of numbers.** `--rail-step` places each rail
section — contacts 0ms, education 290ms, languages 440ms — and that section's heading, its
drawn rule and its rows all read from it. Keeping three parallel sets of hand-written
delays in step is how a cascade drifts.

**Two statements are two beats, and the separation is a ratio.** The role line and the
specialisation under it are separate claims, and at 220ms apart against a ~1.25s duration
they overlapped by 78% and read as one block arriving. What fixes that is not a number of
milliseconds but a fraction of the lede's own duration: 31% overlap reads as two beats.
So the lede runs at an explicit **700ms** rather than `--motion-slow`, and
`--boot-lede-step` is **480ms** — the same 31%. Compressing the boot therefore did not
re-merge them. Move one and you must move the other; that is why the lede does not read
its duration from the shared token.

Phases overlap at the tails; run strictly end-to-end the sequence would pass six seconds.
The frame resolves out of a blur, the rail wipes down under a `clip-path`, an accent ring
draws around the photo by sweeping a conic stop, the name assembles character by character
with a weight wave running through the variable axis, then the lede and the rail blocks
arrive. Once per load.

**II — Live.** Continuous, and continuous means *cheap*: every ambient effect is a
transform or an opacity. A hand-written WebGL flow field paints the rail; the page frame
carries a slowly turning conic ring; a light follows the pointer across the reading
stage; contact links, tags and the photo are magnetic; the project and research cards
tilt in 3D with a specular sheen tracking the cursor.

**III — Scroll.** An observer reveals cards and rows as they approach the viewport, sweeps
a highlighter behind every metric, and counts the numbers up to their value. The accent bar
that draws under a section heading belongs to the rail alone: on the reading stage that
heading rule is one of the page's grey hairlines, and an accent drawn over it would single
out whichever sections happened to be on screen. Only the progress spine down the frame's leading
edge is scroll-driven, because scrubbing is what a progress indicator is.

**IV — Translate.** Nine named regions cross-fade and re-flow as a wave down the page, the
language pill slides between LT and EN, the rail's flow field takes a ripple, and every
short label decodes out of scrambled glyphs into the new language.

**V — Zoom.** The photo morphs into the modal as a shared element rather than a new
surface fading in over it.

**VI — Theme.** The palette swaps under a circle expanding from the control that was
pressed, while the rail's flow field takes the same ripple the language swap fires.

### Named rules

**A theme change is a wipe, not a cross-fade.** Every other transition on this page
cross-fades because only part of the document changed. A theme change moves every surface
at once, and cross-fading everything into everything is a dip through grey with no
direction in it. The new palette is revealed under a circle struck from the pressed
control, so the change has an origin and reads as something the visitor did. The radius
has to reach the furthest viewport corner from that origin, and CSS knows neither the
origin nor the corner — so this one animation is scripted while its staging stays in the
stylesheet. `::view-transition-old(root)` is held still underneath rather than fading;
fading both is what puts the grey dip back.

**One resting element is allowed to be invisible, and it is not content.** The theme
control holds both icons in the markup so the swap has something to animate between, which
means one of them always sits at `opacity: 0`. That is the single exception to *default
state is the finished state*, and it is safe for the reason the rule exists: the rule
protects **content** from being stranded by a script or an animation that never ran. A
two-state control showing one of its two states is its finished state. Cancel every
animation on the page and the only thing still hidden is the icon that is supposed to be.

**Tilt is a distance, not an angle.** A single angle across cards of different sizes is a
bug wearing a constant's clothes: at 12deg a 236px project card moves 31px and the 736px
research panel moves 76px. `TILT_EDGE` fixes the far edge's travel at 14px and the angle is
derived per element — 5.44deg and 2.18deg respectively — so the movement stays constant at
every breakpoint. `TILT_CEILING` caps anything small enough to want a wild angle.

**Specular strength follows what the surface is for.** A highlight belongs on an object.
The project cards are glance targets carrying a title and two lines, so they take
`--sheen-strength: 0.45`. The research panel is a reading surface, so it takes `0.16`. An
`overlay` white is not free: at 0.6 it lifted that panel's body ink from 8.92:1 to 5.18:1,
and it does that while travelling across the line being read.

**Default state is the finished state.** Boot animations use `animation-fill-mode:
backwards`, never `both`, so they leave behind no lingering filter, opacity or containing
block, and no rule anywhere states a hidden initial value. Cancel every animation on the
page and nothing is left hidden, shifted, or blurred.

**Order is a phase, not a pile of delays.** Every beat reads its start from a `--boot-*`
token, and `motion.js` reads `--boot-numbers` off the computed style rather than keeping its
own copy — a hard-coded duplicate drifts the first time either side is retuned. The rule the
phases encode: the name arrives, then the identity rail that supports it, then the evidence.
Numbers ticking up beside a name that has not finished assembling reads as two pages loading
at once.

**Keep every reveal base rule at one class of specificity.** `.on-boot` supplies the stage's
delay through a two-class selector, and the base rules use the `animation` shorthand, which
**resets `animation-delay` to 0**. So any base rule that outweighs `.reveal-run.on-boot`
silently keeps its element animating at 0ms while everything around it waits — which is what
`#about-content` (an ID) and `.project-list li` (an extra type) did. Both are now wrapped in
`:where()`, which weighs nothing. A new reveal target selected by anything heavier than a
single class must be wrapped the same way; adding a second `.on-boot` rule for it is the
wrong repair, because it duplicates the delay instead of removing the conflict.

**The entrance waits for a visible page.** `playEntrance()` defers while `document.hidden`
and re-arms on `visibilitychange`. A background tab never advances the animation clock,
so arming early would pin the page behind a fill mode nobody is watching.

**Reduced motion drops animation; it cannot cap it.** The block is `animation: none
!important`, not a `1ms` duration. A scroll-driven animation takes its progress from the
timeline rather than from time, so capping the duration leaves it running at full
strength. Dropping it outright is only safe because of the rule above — and where an
element has no finished value of its own, like the drawn heading bar, reduced motion
restates it. `motion.js` returns before it creates a GL context.

**Reveals drive `translate`, never `transform`.** `transform` belongs to the pointer tilt.
A reveal animation with a `both` fill would otherwise win over the tilt permanently and
freeze the cards flat.

**A reveal must not depend on there being more scroll left.** Reveals were scroll-driven
`view()` timelines, and that is unfixable rather than mistunable: a view timeline takes its
progress from scroll position, so anything sitting in the document's LAST viewport can never
reach 100%. The final row of project cards held partway through its entrance and stayed
dimmed for good. They now run on the clock, fired by an `IntersectionObserver`. Firefox,
which has no view timelines at all, gets the reveals as a side effect.

**Nothing is hidden waiting for a callback.** The observer leads the viewport by 140px, so
the animation's own `backwards` fill supplies the hidden start while the element is still
off screen. No element is ever pre-hidden by script. This is a failure-mode choice, not a
timing one: an element the observer never reaches carries no class, and no class is the
finished state, so a dead observer costs an animation rather than a blank card on a CV.

**Every displayed value is a real one — per number, and only per number.** No counter shows
an invented digit. An earlier version rolled the least significant digit to pad out the
small numbers, and it worked, but a figure on a CV that flickers through values it never
held is the wrong kind of effect on the wrong kind of page.

Know the limit of that guarantee, because it is narrower than it sounds. It holds for each
digit run in isolation. It does **not** hold for a claim built out of two of them: a range
is two independent counters sharing one progress, so `1–2 days` passes through `0–0` and
`1–1`, `3–4 FPS to ~15 FPS (4×)` passes through `0–0 FPS to ~1 FPS (0×)`, and
`98/100 laps` passes through `10/10`. Nor does the regex know a metric from a name — the
`3` in `robotic 3D house printing` is a digit run, so it counts up through `0D`, `1D`,
`2D`. Measured, not inferred. Anything that needs the guarantee at the level of the
*claim* rather than the *number* has to stop counting composites, not tune them.

**The curve is per counter, so that they finish together.** All counters run the same
`COUNT_DURATION`, but how long one *appears* to move is set by how many values it can
display: `2 200` passes through 203, `1` through two. On a single shared curve the small ones
are long finished while the large ones are still climbing. Each counter therefore gets the
ease-out exponent that lands its last visible change near `COUNT_SETTLE_FRACTION` of the
duration — `1 - (1 - t)^k` reaches the final displayed value as it passes
`(states - 0.5) / states`, which solves for `k` directly. Measured across every figure on
the page, that tightened the spread to **1.62×**; at the shipped `COUNT_DURATION` of
2287ms all but two settle at exactly 1833ms, and the whole set lands between 1150ms and
1867ms.

`k` is clamped to `[1, 5]`. Below 1 the curve becomes an ease-**in**, which would park a
number on a wrong value and then lurch to the answer. So a one-step counter is still the
first to settle, at half the duration rather than an eighth — that is arithmetic, not a
tuning choice, and the only ways past it are fake digits or fake precision.

**Never widen a counter to buy steps.** Showing `1.00 days` mid-count would add states, but
it reads as precision the figure does not have. The number of decimals is the authored
figure's own and is never extended.

**A leading zero is an invented digit, and width is not worth one.** The integer part used
to be padded to the target's digit count, which held the printed string at a constant
width. It bought that by printing digits the figure does not have: 10 rendered as `01`,
138 as `016`, `139.4s median` as `022.2s median`, and `98/100 laps` passed through
`11/011`. On a CV that reads as broken data. The padding is gone, and
`test/numbers.test.mjs` now asserts that no frame matches `/^0\d/`.

The width was the reason for the padding, so it is worth recording what losing it actually
cost: **nothing measurable**. Across a full count of the experience metrics the widest
single counter travels **9px**, the first bullet holds a constant 49.5px height, and the
document holds a constant 2947px. `tabular-nums` equalises digit *widths*, which is what
keeps the travel sub-word; it never equalised digit *counts*, so the padding was buying a
guarantee the page did not need. Anything that ever does need a stable measure must
reserve it in layout, not in the string.

**Each hold belongs to the thing being held.** The counters wait twice — once for the boot
phase, once for a language decode — and both waits live on the counters as `holdUntil`. The
scrambler reports when its last glyph resolves and the boot reads its own token; neither
reaches across to gate somebody else. A shared "quiet until" cell would be the same two
waits with three writers and no owner.

**One decision, one lifetime, in all three files.** `prefers-reduced-motion` is re-read every
time it is asked for — the media block is live by definition, `lang.js` queries it per call,
and `motion.js` holds the `MediaQueryList` and yields to it inside the loop. A copy that
froze at load would be the one owner able to disagree with the other two: turning the setting
on mid-session would quiet the stylesheet and the view transitions while the shader kept
painting.

**Numbers are the only part of the live layer with a test.** `numbers.js` holds how a figure
is read, counted and printed — no DOM, no GL, no clock — and `test/numbers.test.mjs` asserts
the invariants that matter on a CV: a count never displays a value the figure does not pass
through, the string never changes width, and the round trip through `describeNumber` and
`formatNumber` is exact. Run it with `node test/numbers.test.mjs`. Everything else in
`motion.js` needs a compositing browser to mean anything and is deliberately untested;
that gap is the reason the pure arithmetic was pulled out rather than left inline.

**One loop, and it schedules itself first.** `motion.js` runs a single
`requestAnimationFrame` driving the shader, the pointer field, the counters and the decode,
and a single coalesced `pointermove`. All rect reads happen in one batch before any style is
written. Five loops would each schedule their own frame and fight for the same 16ms.

The next frame is requested on the **first** line of the callback, before any work. Ask for
it last and a single throw anywhere below kills the loop permanently — and since the decode
resolves on this loop, that strands the page in glyphs. Losing one frame's work is
recoverable; losing the loop is not.

**The lightest-frame rule.** The rail's contrast floor now has a time axis. Ink on the rail
must clear 4.5:1 against the *brightest frame the shader can produce*, not against one
sampled moment. That bound is enforced in GLSL — the fragment shader ends in a `min()`
against `rgb(54, 71, 133)`, which holds `--sidebar-muted` at 5.4:1. The green channel is
capped hardest, because luminance is 71% green. Measured floor in the shipped page,
swept across the loop including a full pointer ripple: **5.38:1**.

**The cursor light has a contrast budget, and the rail has none left.** Two lights follow
the pointer: `.page-main::before` behind the prose and `#cursorHalo` above everything at
`z-index: 60`. On the reading pane their alphas compound, so both are ceilinged — 0.055 and
0.05 — which costs the body text 9.76:1 → **8.29:1** at the brightest point. Over the rail
the halo goes to `opacity: 0` instead of recolouring. The shader is clamped to spend exactly
the headroom the rail has, so any overlay on top of it breaks the floor: measured, a 0.15
halo drove `--sidebar-muted` to **3.97:1**, and even 0.09 only reached 4.48:1. The rail
already answers the pointer through the shader's own displacement, which is the better
effect and costs no contrast.

**The rail shader follows the visible slice, and must be told about scroll.** `#railCanvas`
is `display: block; position: sticky` with `height: 100vh` and `margin-bottom: -100vh`. The
rail is the whole column, past 3000px on this CV; one buffer stretched over all of it smears
the flow vertically and pays for pixels nobody sees. Two consequences:

- A `<canvas>` is an **inline replaced element** by default. Left inline it sits on a line
  box, and baseline alignment pushed it 18px down the rail — a visible strip of the flat
  gradient above the shader. `display: block` is load-bearing, not tidying.
- Pinning the canvas to the viewport removed the descent the flat gradient used to give for
  free, because the viewport slid down a column-tall gradient. `u_scroll` restores it: the
  shader multiplies toward 0.6 as the page descends. It can only darken, so the
  lightest-frame clamp still holds — measured, the brightest pixel falls from
  `rgb(54, 71, 133)` at the top to `rgb(32, 48, 82)` at the foot.

**The swap transitions; the first render does not.** `setLanguage` routes through
`document.startViewTransition` only for a user-initiated switch. The first render has
nothing to transition from and must stay synchronous.

**A skipped view transition must be caught.** `.ready` rejects whenever a transition is
superseded or aborted — a fast double-click on the switch will do it. The DOM update still
runs, so there is nothing to recover; but an uncaught rejection is a console error on a
page whose baseline is zero.

**The decode is primed before the capture and released after it.** This ordering is the
effect, not an implementation detail. `scrambler.prime()` runs synchronously inside the
view transition's own callback, so the glyphs are in the DOM when the browser captures the
new state: the transition then cross-fades the old language into gibberish, and the decode
is what reveals the new one. Releasing on `finished` alone — the first version — meant the
visitor read the new text first and then watched it scramble and re-spell itself, which is
the effect backwards.

`cv:swapped` is emitted from **both** arms of `finished`. The scrambled text is already
committed by then, so an unhandled rejection would strand the page in glyphs; and
`prime()` schedules its own release 1400ms out regardless, because unreadable text on a CV
is not allowed to depend on a promise arriving.

Jobs target text **nodes**, not elements, so the profile paragraph decodes without its
inline `<strong>` markup being rebuilt. Nodes inside `.metric-highlight` are rejected: the
counters are already writing those every frame, and two writers on one node fight. The
result is that the numbers land first and the sentence assembles around them, which is the
right way round for a page whose north star is that the evidence reads first.

**An element either re-arrives or it decodes, never both.** The rail's blocks replay their
entrance on a language change, so anything inside them would be decoding behind
`opacity: 0` — invisible work, and the reason the rail read as inconsistent with itself.
The rail is therefore absent from the decode set and the reading stage fills it, because
the stage does not re-arrive. Section headings decode: they sit outside the re-arriving
blocks.

**The rail re-arrives as one block, and half of it needs telling.** `updateContent` rebuilds
the education and language blocks, so `body.is-armed .info-card` restarts on the fresh
elements by itself — that replay was never designed, it fell out of the elements being
recreated. The contact rows are static markup in `index.html` and are never rebuilt, which
left them the one part of the rail that stayed put while everything around it left and came
back. `replayContactRows()` restarts their animation by hand in the same render that creates
the others, so the whole rail cascades in reading order: contacts 1800ms, education 2200ms,
languages 2520ms.

**Nothing else starts while a language change resolves.** The counters wait until the
decode has finished, through their own `holdUntil` — see *Each hold belongs to the thing
being held* above. Numbers ticking up underneath text that is still gibberish is two
effects competing for one glance, and the numbers lose. The hold is zero outside a
language change, so the boot is unaffected.

The viewport filter is what keeps the decode affordable — nothing off screen is ever
touched. `DECODE_MAX_CHARS` is a runaway guard set clear of real content, not a filter: the
longest node on the page is 255 characters **in Lithuanian**, so a cap of 260 would have
silently dropped the longest paragraphs in one language only.

**One view-transition name, handed over.** `profile-photo` cannot be live on the thumbnail
and the modal image at once. Script assigns it immediately before each capture and clears
it after. The sticky `.sidebar-shell` is never named: a `view-transition-name` forces a
stacking context, and the rail must keep sticking.

**A view-transition name is global, so scope it to the transition that wants it.** The nine
region names were declared unconditionally, which meant *every* transition on the page
captured nine snapshots and inherited the language wave's staggered delays — including the
photo morph, where it dimmed the rail and the reading pane at visibly different times and
made the scrim look seconds late. They now exist only under `:root.is-translating`, which
`setLanguage` adds before capture and removes on settle. Scoping also stops nine elements
carrying a permanent stacking context for a transition that runs twice in a session.

**The page stops cross-fading during the zoom.** Under `:root.is-zooming` the root's
old/new animations drop to 160ms, so the snapshot gets out of the way and the dialog's own
scrim takes over. Held at the shared duration, the page stayed frozen in a snapshot
captured *before* the backdrop had faded up — which is the whole of "the content stays
bright after I click".

**Counters read their format from the string, never the locale.** The page renders `6.3`
in English and `6,3` in Lithuanian. A single separator with one or two digits after it is
a decimal point; three digits is a thousands group. The authored string is restored
verbatim on the final frame, so no rounding can alter a published figure.

**Overshoot is for release, not for arrival.** `--ease-back` overshoots by ~10%, and the
detector flags that class of easing as dated by default. It is used here in exactly five
places, all of them an object being *released* or *snapped* into position: the language
pill, the tilt release, the contact icon, the photo, the close button. Anything that
merely arrives — sections, cards, the name, the frame — uses `--ease-arrive`, which is that
ease-out-expo shape, and decelerates smoothly. Do not spend the overshoot anywhere else.

**Pointer physics need a pointer.** Everything cursor-driven is behind
`@media (hover: hover) and (pointer: fine)` in CSS and a matching `matchMedia` guard in
script. Touch gets the flat, fast page.

**Print drops all of it.** Section 17 zeroes every animation, transform, filter and blend,
and hides every decorative pseudo-element and the canvas. Recruiters save this page as a PDF.

## Shapes

- **Small** `0.25rem` — tags.
- **Medium** `0.375rem` — contact links, the language switch, focus rings.
- **Large** `0.5rem` — project cards, the research panel, the modal image.
- **Frame** `clamp(0.5rem, 1.2vw, 1rem)` — the page container.
- **Circle** `50%` — the photo and the modal close button.

## Components

### Page controls
Language and theme are the page's only two settings, so they travel as one cluster with
one owner for where it sits. `.page-controls` carries the position; neither control knows
anything about the corner it lives in. The cluster floats at the top right of the reading
stage where the column is wide enough to clear the name, and drops into normal flow above
the name where it is not — see **Layout**.

- **Language** — a two-option segmented control, not a dropdown. Both languages stay
  visible, so nobody has to discover that the other exists. The active option is filled
  with `accent-strong` over `--on-accent`; state is carried on `aria-pressed`.
- **Theme** — a toggle button, not a second segmented pair. There is no third theme, and
  two pills side by side would read as another language switch. Both the sun and the moon
  are in the markup at the same 1.7px stroke as the modal's close mark; the attribute
  cross-fades and counter-rotates them, so whichever is leaving turns out of the way and
  the swap has a direction. The icon shows the state that is on, matching `aria-pressed`.

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
- Verify any new rail colour against the **brightest frame the shader can produce**, not
  against `--sidebar-top`. Sweep the loop; do not sample one moment.
- Keep prose left-aligned and inside the 46rem measure.
- Use `overflow: clip` on any ancestor of the sticky rail.
- Give dates and scores tabular numerals — the metric counters depend on it.
- Keep every new entrance additive, and check it by cancelling every animation on the page.
- Keep the print stylesheet current — recruiters save this page as a PDF.

### Don't
- **Don't put a gradient on text.** `background-clip: text` with a transparent fill
  previously drove the rail headings to 1.19:1 contrast. Emphasis is weight and colour.
- **Don't add hover states to non-interactive text.** Paragraphs and list items are not
  controls. The cards are the exception, and the distinction is the point: a 3D tilt reads
  as a physical object, where a border-colour change reads as a link that goes nowhere.
  Never add the second kind.
- **Don't reveal a section, only its contents.** Cards and rows are the reveal subjects.
  A subject taller than the scrollport never completes its `entry` range.
- **Don't animate `transform` on a card.** That property belongs to the pointer tilt.
  Reveals use `translate`, `rotate`, `opacity` and `filter`.
- **Don't reach for a card.** Experience and research are flat; only the project grid
  gets a box.
- **Don't put a signal on everything.** The ambient layers — the flow field, the frame
  ring, the grain, the pointer light — sit *behind and around* the document, never on
  individual entries. A per-card accent bar or a diagonal wash across the reading stage
  still signals nothing.
- **Don't give the metric numbers ambient motion.** They are the north star. Something
  that shimmers permanently reads as decoration; the counters and the highlighter fire
  once, on arrival, and then hold.
- **Don't add a second requestAnimationFrame loop**, or a second `pointermove` listener.
  Everything continuous goes through the one in `motion.js`.
- **Don't cap animation duration for reduced motion.** Drop the animation. A scroll-driven
  timeline ignores duration entirely.
- **Don't spread `--ease-back` around.** Overshoot belongs to the five release gestures
  listed under Motion. Everything that arrives uses `--ease-arrive`.
- **Don't blur a reveal.** Entrances move and fade; they do not defocus. A blur filter on
  an entrance also costs a paint per frame where translate and opacity cost none.
- **Don't hide anything from script and rely on a callback to bring it back.**
- **Don't give two differently-sized surfaces the same tilt angle**, or the same sheen
  strength. Both are budgets in pixels and contrast, not in degrees and alpha.
- **Don't put a translucent overlay on the rail.** The shader already spends its whole
  contrast budget. Anything laid over it — a cursor light, a scrim, a tint — comes
  straight out of the ink. Give the rail a pointer response through the shader instead.
- **Don't stack an override block at the end of the file.** Edit the rule where it
  lives; this stylesheet previously carried four generations of `.sidebar-shell`.
- **Don't introduce `!important`.** The only ones present are the `[hidden]` reset, the
  reduced-motion overrides and the print block.
- **Don't hard-code a colour at its use site.** Every one that did is now a token, and the
  `#fff` on the active language pill is why: it was invisible until a second theme
  existed, and then it was a contrast failure. If a value is a colour, it is a token, even
  when there is exactly one use site.
- **Don't dim the rail by putting something over it.** The shader owns the rail's
  brightness through `--rail-dim`, applied inside GLSL after the clamp. An overlay would
  come straight out of the ink, which is the same rule the cursor light already obeys.
