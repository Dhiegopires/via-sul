# VellumWire Design System
> Version 1.0 · Julho 2026
> This file is the single source of truth for all client-facing document generation.
> Every prompt that produces an HTML deliverable must reference and apply this file in full.

---

## Fonts

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Archivo:ital,wght@0,700;1,700&family=Syne:wght@400;500;600;700&family=DM+Mono:ital,wght@0,400;0,500;1,400&display=swap" rel="stylesheet">
```

---

## CSS Tokens

Paste this block exactly into `:root` of every generated HTML file. Do not alter values.

```css
:root {
  /* Backgrounds — warm dark, never cool dark */
  --color-bg-base:      #0c0b09;
  --color-bg-raised:    #141310;
  --color-bg-surface:   #1c1a17;
  --color-bg-overlay:   #242220;

  /* Borders — always rgba, never solid opaque */
  --color-border-subtle:  rgba(255,255,255,0.06);
  --color-border-mid:     rgba(255,255,255,0.12);
  --color-border-strong:  rgba(255,255,255,0.22);

  /* Text */
  --color-text-primary:   #ede9e2;
  --color-text-secondary: #8a8680;
  --color-text-muted:     #4a4845;

  /* Accent — lime, the only brand color */
  --color-accent:        #c6f135;
  --color-accent-dim:    rgba(198,241,53,0.10);
  --color-accent-border: rgba(198,241,53,0.22);

  /* Status — danger */
  --color-danger:        #f87171;
  --color-danger-dim:    rgba(248,113,113,0.08);
  --color-danger-border: rgba(248,113,113,0.20);

  /* Status — warning */
  --color-warn:          #fbbf24;
  --color-warn-dim:      rgba(251,191,36,0.08);
  --color-warn-border:   rgba(251,191,36,0.20);

  /* Typography */
  --font-display: 'Archivo', Georgia, serif;
  --font-ui:      'Syne', sans-serif;
  --font-mono:    'DM Mono', monospace;

  /* Spacing — base 4px */
  --sp-1: 4px;  --sp-2: 8px;   --sp-3: 12px;
  --sp-4: 16px; --sp-5: 20px;  --sp-6: 24px;
  --sp-8: 32px; --sp-10: 40px; --sp-12: 48px;
  --sp-16: 64px; --sp-20: 80px;

  /* Radius */
  --radius-sm: 2px;
  --radius-md: 4px;
  --radius-lg: 8px;

  /* Grid */
  --grid-color: rgba(255,255,255,0.04);

  /* Easing */
  --ease-out: cubic-bezier(0.22, 1, 0.36, 1);

  /* Layout */
  --max-w: 1120px;
  --gutter: 48px;
}
```

---

## Typography Rules

| Element | Font | Size | Weight | Style | Color |
|---|---|---|---|---|---|
| Page title / hero | Archivo (weight 700) | clamp(32px,5vw,56px) | 400 | italic | text-primary |
| Section title | Archivo (weight 700) | 32px | 400 | normal | text-primary |
| Persona name / card title (display) | Archivo (weight 700) | 20–24px | 400 | italic | text-primary |
| Body copy | Syne | 15px | 400 | normal | text-secondary |
| UI labels / card titles | Syne | 13–15px | 600 | normal | text-primary |
| Section numbers | DM Mono | 11px | 400 | normal | text-muted |
| Tags / pills / badges | DM Mono | 9px | 500 | normal | varies |
| URLs / code / metrics | DM Mono | 11–13px | 400 | normal | accent or secondary |
| Table headers | DM Mono | 9px | 400 | normal | text-muted |

**Rules:**
- Never use font-weight above 700
- Never use font-weight 400 on a heading: use italic Archivo (weight 700) instead
- Letter-spacing on DM Mono labels: 0.1em uppercase
- Line-height body: 1.65. Line-height display: 1.1

---

## Color Rules

- `#c6f135` is the only brand accent. It is lime/yellow-green. Use for: active states, positive findings, links, highlights, opportunity markers, CTA labels
- Never use purple, blue, indigo, violet, or teal anywhere in any document
- `#f87171` danger: critical issues, drop-off risks, blockers only
- `#fbbf24` warn: medium-priority findings, hesitation points, attention needed
- Background layers must stay warm. `#0c0b09` has a warm brownish cast, not a cool blue cast. If a background looks even slightly blue or grey-blue, it is wrong

---

## Border & Radius Rules

- `--radius-sm: 2px` → tags, pills, inline badges
- `--radius-md: 4px` → inputs, small UI elements
- `--radius-lg: 8px` → cards, sections, wrappers
- **Never use border-radius above 8px.** No rounded corners, no pill-shaped cards
- `border-radius: 50%` only on dot indicators 4×4px or smaller
- All borders must use rgba values from the token list. Never use solid opaque hex borders
- Status indicator on cards: `border-left: 2px solid [status-color]` (not border-top, not background color fill)

---

## Backgrounds & Depth

Use the four background layers to create depth. Lighter = more elevated:

```
bg-base (#0c0b09)      → page background, hero sections
bg-raised (#141310)    → cards, nav, primary containers
bg-surface (#1c1a17)   → nested elements, table headers, rec boxes
bg-overlay (#242220)   → dropdowns, code blocks, deeply nested elements
```

Never invert this order. Never use a darker value on a visually elevated element.

---

## Grid Line Background

Apply only to the page header section. Not on cards or body sections.

```css
.header {
  background-color: var(--color-bg-base);
  background-image:
    linear-gradient(var(--grid-color) 1px, transparent 1px),
    linear-gradient(90deg, var(--grid-color) 1px, transparent 1px);
  background-size: 64px 64px;
}
```

---

## Scroll Reveal Animation

Apply to all major elements. Use delay classes for staggered children.

```css
.reveal {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.8s var(--ease-out), transform 0.8s var(--ease-out);
}
.reveal.in { opacity: 1; transform: none; }
.d1 { transition-delay: 0.06s; }
.d2 { transition-delay: 0.12s; }
.d3 { transition-delay: 0.18s; }
.d4 { transition-delay: 0.24s; }
```

```js
const obs = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add('in'); obs.unobserve(e.target); }
  });
}, { threshold: 0.06, rootMargin: '0px 0px -24px 0px' });
document.querySelectorAll('.reveal').forEach(el => obs.observe(el));
```

---

## Standard Components

### Header
```
- Background: bg-base + grid-line pattern
- Border-bottom: 1px border-subtle
- Label above title: DM Mono 11px uppercase, color accent, preceded by a 20px accent horizontal line
- Title: Archivo (weight 700) italic, clamp(32px,5vw,56px), weight 400
- Accent word inside title: <em> styled font-style:normal, color:var(--color-accent)
- Subtitle: Syne 15px secondary, max-width 560px, line-height 1.6
- Meta row: padding-top sp-8, border-top subtle, flex row with gap sp-8
  - Each meta item: label in DM Mono 10px muted uppercase, value in DM Mono 15px primary or status color
```

### Section Header
```
- Display: flex, align-items baseline, gap sp-4
- Section number: DM Mono xs muted, e.g. "01 /"
- Title: Archivo (weight 700) 32px weight 400, not italic
- Subtitle below: Syne 13px secondary
- Border-bottom: 1px border-subtle, padding-bottom sp-6
```

### Card (standard)
```
- Background: bg-raised
- Border: 1px border-subtle
- Border-left: 2px solid [status or priority color]
- Border-radius: radius-lg
- Padding: sp-5 sp-6
- No box-shadow, no gradient fill
- Hover: border-color → border-mid (optional, only on interactive cards)
```

### Tag / Badge
```
- Font: DM Mono 9px uppercase, letter-spacing 0.1em
- Padding: 2px 8px
- Border-radius: radius-sm
- Background: [color]-dim
- Border: 1px solid [color]-border
- Colors: use accent, danger, warn, or muted variants
```

### Table
```
- Wrapper: border border-subtle, radius-lg, overflow hidden
- thead: background bg-surface
- th: DM Mono 9px muted uppercase, padding sp-4 sp-5, border-bottom subtle
- td: Syne 13–15px, padding sp-3 sp-5, border-bottom subtle
- tr:last-child td: no border-bottom
- tr:hover td: background rgba(255,255,255,0.015)
```

### Recommendation / Info Box
```
- Background: bg-surface
- Border: 1px border-subtle
- Border-radius: radius-md
- Padding: sp-3 sp-4
- Font: Syne 12–13px secondary
- Strong text inside: color accent, weight 500
```

### Opportunity / Positive Callout
```
- Background: color-accent-dim
- Border: 1px color-accent-border
- Border-radius: radius-lg
- Label: DM Mono 9px uppercase accent
- Body: Syne 14px secondary
```

### Risk / Critical Callout
```
- Background: color-danger-dim
- Border: 1px color-danger-border
- Border-radius: radius-lg
- Label: DM Mono 9px uppercase danger
- Body: Syne 14px secondary
```

### Footer
```
- Border-top: 1px border-subtle
- Padding: sp-8 var(--gutter)
- Left: DM Mono xs muted: "[Document type] · [Client] × VellumWire"
- Right: DM Mono xs muted: date and document descriptor
- Display: flex, justify-content space-between
```

---

## What Never To Do

| ❌ Never | ✅ Instead |
|---|---|
| Purple, blue, indigo, teal anywhere | Lime `#c6f135` as the only accent |
| Border-radius above 8px | Max radius-lg (8px) |
| Cool dark backgrounds (#0a0a0f with blue cast) | Warm dark (#0c0b09) |
| box-shadow with spread/blur on dark bg | border-left 2px for elevation/status |
| Gradient fills on cards | Flat bg-raised with subtle border |
| font-weight 800 or 900 | italic Archivo (weight 700) for display emphasis |
| Solid opaque borders (#2a2a35) | rgba borders from token list |
| AI copy: "crucial", "leverage", "holistic", "in today's landscape" | Direct, specific, results-framed language |
| Generic stock photo references | Real product screenshots, real data |
| Padding with multiple fills and shadows | One background layer, one border, clean |

---

## Voice & Tone (applies to all copy inside generated documents)

VellumWire documents are direct, specific, and confident. Every line earns its place.

**The brand IS:**
- Direct: names the problem without softening it
- Specific: cites exact failure modes, real URLs, real numbers
- Confident: states the diagnosis, earns the prescription
- Results-framed: every feature and finding described by its outcome

**The brand is NOT:**
- Warm and vague: "We care deeply about your success"
- Over-qualified: "This could potentially help improve..."
- Jargon-first: leading with acronyms or technical terms
- AI-sounding: "it is crucial", "it is worth noting", "in today's digital landscape", "leverage", "holistic", "synergy", "ecosystem"

---

## Updating This File

When the VellumWire DS changes (new token values, new component patterns, new voice rules), update this file only. All prompts that reference `../vellumwire-ds.md` will automatically use the updated version on the next run. Do not update DS values inside individual prompt files.
