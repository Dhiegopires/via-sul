# VellumWire: Methodology Index

This repo covers every VellumWire service tier. Each tier is its own folder with its own README, prompts, and checklists — self-contained, so you never need to read another tier's files to run one.

---

## Tiers (matches vellumwire.com pricing)

| Folder | Service | Price | Status |
|---|---|---|---|
| [`Full-website/`](Full-website/README.md) | Full Web Rebuild — complete architecture + sales messaging restructure, up to 6 pages | $3,000–$5,000 | Built |
| [`Brand-website/`](Brand-website/) | Full Brand + Website — branding strategy + complete web build | $4,500–$8,000 | **Empty — not built yet** |
| [`Homepage Redesign/`](Homepage%20Redesign/) | Core UI Refresh — homepage + key landing page redesign for trust/lead capture | $1,500–$2,800 | **Empty — not built yet** |
| [`Landing page/`](Landing%20page/) | Single Landing Page Redesign | $750–$1,200 | **Empty — not built yet** |
| [`Website-checkup/`](Website-checkup/) | Conversion Audit — teardown + ranked fix list, no implementation | $350 | **Empty — not built yet** |
| [`GBP/`](GBP/README.md) | Google Business Profile management — new offering, not on vellumwire.com yet | $199–299 setup + $150–300/mo | Built |
| [`After launch/`](After%20launch/Hold/README.md) | Monthly retainers (Hold / Build) — runs after any tier above ships | $400–$800/mo | Built (Hold) |

**If a tier folder is empty:** do not improvise it from scratch mid-project. Flag it and adapt the closest built tier down instead — see "Cross-tier rule" below. Populating an empty tier folder properly is a scoped task on its own, not something to invent under client deadline pressure.

---

## Cross-tier rule: every tier inherits the conversion-architecture discipline

Every tier above, however small, sells a website (or a page, or a section) whose entire job is to convert. The lesson this methodology is built around: **a page's ability to convert is a structural decision made before copy or design, not a polish pass at the end.** Concretely, this means, at minimum:

1. **Persuasion structure is decided before building** — awareness level, CTA placement, attention ratio. `Full-website/2-architecture/2.3-conversion-architecture-prompt.md` is the full version; a lighter tier (a single landing page, a homepage refresh) still needs this decision made explicitly, just scoped to fewer pages.
2. **CTA links go where their text says they go.** No exceptions, no tier is too small for this rule.
3. **A CTA that hands off to an external tool (Calendly, WhatsApp, a form) fires its conversion event on actual completion, not on click.**
4. **No client launches into silence.** Every tier ends with someone actually checking, days after launch, that real traffic converts at least once — see the Launch Week Check in `Full-website/6-final-checklist/README.md`. This applies even to a $350 audit-only engagement if VellumWire touched the live site at all.
5. **Mobile-first, not optional, not a declaration to choose.** Write the mobile layout as the base CSS with no media query, add desktop via `min-width` queries — never the reverse. Two facts make this non-negotiable regardless of tier size: Google's mobile-first indexing has been 100% of all sites since July 2024 (confirmed on Google's own Search Central blog — the mobile render is the canonical version used for ranking), and mobile is just over half of global web traffic — StatCounter (~51.5%) and DataReportal's Digital 2026 report (~51.6%) independently agree on that figure as of 2026, materially lower than some secondary blog aggregators claim, but still the majority. Every CTA fold check in this repo runs mobile (375px) first, desktop second — that order is deliberate, not cosmetic, and doesn't depend on the exact percentage either way: even a slim mobile majority combined with 100% mobile-first ranking settles it.
6. **"We generate leads" is a differentiator earned through process, not an unconditional promise.** No tier guarantees a lead count — that depends on the client's offer, pricing, and traffic quality, none of which a website controls. What every tier can and must guarantee is that the site itself contains no confirmed, provable conversion killer. `Full-website/1-discovery/1.4-viability-check-prompt.md` classifies whether a client has proven demand through a channel other than the website (GREEN — eligible for the conditional guarantee in `Full-website/0-briefing-master/lead-guarantee-terms.md`) or not (YELLOW/RED — set expectations accordingly, do not promise lead generation against an unproven offer). Port this check into any tier sold on lead generation, not just Full-website.

If you're building out a new tier folder, port these five rules into it before anything else — they are what the whole investigation in this repo's history exists to protect.

---

## Checkpoint convention: what to actually verify, not what to read

Generated `.md` deliverables in this methodology can run long. You are not expected to read them end to end to approve them. Every step that produces a client- or build-facing deliverable includes a boxed **CHECKPOINT** near its approval point, formatted like this:

> ✅ **CHECKPOINT — [name]**
> Verifique só isto, não o documento inteiro:
> - [ ] Specific, concrete item
> - [ ] Specific, concrete item
> Se os itens acima estão OK → aprove e siga. Se algum falhar → [specific action, not "review more"].

If a step's README doesn't have one yet, that's a gap — add one rather than reading the full generated document from scratch every time. The checkpoint is deliberately short: 3-6 items max. If it grows past that, the step is trying to verify too many things at once and should be split.

---

## Shared resources (used across every tier)

- [`resources/`](resources/README.md) — design/UX/UI/CRO reference library, not sequential
- [`tokens/`](tokens/) — VellumWire's own design tokens (for `vellumwire-ds.md` presentation, not client projects)
- [`vellumwire-ds.md`](vellumwire-ds.md) — visual system for presenting any tier's `.md` deliverables to a client as styled HTML

---

## The one rule that runs through every tier

**Every claim must be traceable to real client data.**

A keyword must come from a keyword map. A statistic must come from the intake form. A testimonial must come from a real customer. A competitive claim must come from an actual competitor's site. If a piece of content cannot be traced to a real source, it is either flagged with `[DATA NEEDED]` or cut.

This is what separates a site that ranks and converts from one that looks good in a screenshot.

**The same rule extends to external market/industry statistics, not just client-specific data.** A market-size number, a "ranking factor" claim, an industry benchmark — these aren't invented, so anti-hallucination rules alone don't catch a wrong one. They need a second, independent source before they're stated as fact, and a source with something to sell (a tool, a course) needs extra scrutiny, not automatic trust. See `Full-website/1-discovery/1.3-market-research.md` rule 5 for the full version and the confirmed real example that prompted it.
