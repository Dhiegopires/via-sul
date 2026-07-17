# Step 5: Development

## What happens in this step

The site gets built. HTML, CSS, and JS. No framework, no build step. Claude Code does the heavy lifting. You review, correct, and ship.

**Time required:** 2–4 days depending on page count.

---

## Before you start

Make sure these files exist and are approved:

- `DESIGN_SYSTEM.md`: in the project root, added to Claude Code context
- Approved conversion architecture from Step 2.3 — mandatory section sequence, CTA placement rules, attention ratio. This is a build contract, not a reference: it defines the one thing development is not allowed to improvise.
- Approved copy document from Step 4
- Approved SEO structure from Step 4
- Approved layout preview from Step 4 (`4.3-layout-preview-prompt.md`) — structure, section order, and CTA fold check signed off
- Approved sitemap from Step 2

If any of these are missing or unapproved, do not start development. Changes to copy or structure mid-development are the single biggest source of wasted time — and structural changes are exactly what the conversion architecture and layout preview exist to catch before they're expensive. Structure is not something Claude Code decides at build time; by this point it has already been decided and signed off.

---

## Claude Code project setup

### File structure to create before first session

Each page lives inside its own folder as `index.html`. This gives every URL a clean path without `.html` extension, critical for SEO canonical tags, og:url, sitemap.xml consistency, and internal linking.

```
project/
├── DESIGN_SYSTEM.md              ← Claude Code reads this every session
├── index.html                    → domain.com/
│
├── [page-slug]/                  ← one folder per page
│   └── index.html                → domain.com/[page-slug]/
│
├── solucoes/                     ← example: solution hub
│   ├── rh/
│   │   └── index.html            → domain.com/solucoes/rh/
│   └── educacao/
│       └── index.html            → domain.com/solucoes/educacao/
│
├── sobre/
│   └── index.html                → domain.com/sobre/
│
├── contato/
│   └── index.html                → domain.com/contato/
│
├── blog/
│   ├── index.html                → domain.com/blog/
│   └── [post-slug]/
│       └── index.html            → domain.com/blog/[post-slug]/
│
├── assets/
│   ├── css/
│   │   └── style.css             ← shared across all pages
│   ├── js/
│   │   └── main.js               ← shared across all pages
│   └── img/
│       ├── og-image.jpg          (1200×630)
│       └── favicon.ico
│
├── sitemap.xml
└── robots.txt
```

**Why this structure matters for ranking:**
- Clean URLs without `.html` extension (Google's preference)
- Canonical, og:url, and sitemap.xml all point to the same clean URL with no ambiguity
- Works on any static host (Vercel, Netlify, Cloudflare Pages, cPanel) without server config
- Internal links use clean paths: `href="/solucoes/rh/"` not `href="/solucoes-rh.html"`

**CSS and JS paths from subfolders:**
Pages inside folders reference shared assets with absolute paths from root:
```html
<link rel="stylesheet" href="/assets/css/style.css">
<script src="/assets/js/main.js" defer></script>
```
Always use root-relative paths (starting with `/`), not relative paths like `../../assets/` which break when folder depth changes.

### Adding context to Claude Code

Add `DESIGN_SYSTEM.md` as project context in Claude Code. It reads this at the start of every session. Do not paste it into the chat each time. Keep it as persistent context.

---

## Development workflow

### Session start

Open `5.1-session-start-prompt.md`. Fill in which page or component you are building in this session. Paste it at the start of every new Claude Code session. This re-establishes the full context so Claude Code does not drift from the design system between sessions.

### Requesting components and pages

Open `5.2-component-request-template.md`. Fill in the specific component or page you need. The template forces you to provide the exact copy, the approved SEO structure, and any specific behavior so Claude Code has everything it needs without guessing.

One component or one page per request. Do not ask for the full site in one prompt. Output quality drops significantly.

### Review checklist after every Claude Code output

Don't manually re-read all ~40 items below every single time — that's not sustainable across a whole project. Do this instead:

**Passo 1 — Automatizado, roda em segundos, não precisa ler nada:**

```bash
grep -rn 'style="' *.html **/*.html                                            # deve retornar vazio
grep -n "backdrop-filter" assets/css/style.css | grep -v "\-webkit"            # deve retornar vazio
grep -n "mask-image" assets/css/style.css | grep -v "\-webkit"                 # deve retornar vazio
grep -n "appearance:" assets/css/style.css | grep -v "\-webkit"                # deve retornar vazio
grep -rn 'tabindex="[1-9]' *.html **/*.html                                    # deve retornar vazio
grep -rnE "font-size:\s*([0-9]|1[0-5])px|outline:\s*(none|0)" assets/css/      # deve retornar vazio
grep -rn "cdn.tailwindcss.com" .                                               # deve retornar vazio
grep -rn "console.log\|href=\"#\"\|href=\"\"" assets/js/ *.html **/*.html      # deve retornar vazio
```

Qualquer hit é Blocker — corrige antes de continuar. Isso substitui reler as seções "CSS quality" e "Code quality" abaixo item por item; os greps já checaram por você.

> ✅ **CHECKPOINT — Passo 2: o que só olho humano pega**
> - [ ] Cores/fontes/spacing batem com `DESIGN_SYSTEM.md` de olho (grep pega hex hardcoded, não pega "escolheu o token errado")
> - [ ] Skip link, landmarks semânticos, `aria-label` em botão de ícone — presentes
> - [ ] Seção está na posição exata do layout preview aprovado; se é a hero, o CTA aparece na primeira viewport testado no browser real em 375px e desktop (não por estimativa)
> - [ ] Copy bate exatamente com o documento aprovado, sem paráfrase
> - [ ] Testado visualmente em 375px, 768px, 1280px — nada quebra
>
> Se os greps do Passo 1 e os 5 itens acima estão OK → aceita o output. Se algo falhar → volta pro Claude Code apontando o problema específico, não "revisa tudo de novo".

---

### Referência completa (consulte só quando algo falhar e precisar do fix exato)

**CSS quality (check before anything else — VSCode flags these as errors):**
- [ ] Zero `style=""` attributes anywhere in HTML — grep: `grep -rn 'style="' *.html **/*.html` must return nothing
- [ ] Every `backdrop-filter` in CSS has `-webkit-backdrop-filter` on the line before it
- [ ] Every `mask-image` in CSS has `-webkit-mask-image` on the line before it
- [ ] Every `appearance:` in CSS has `-webkit-appearance` on the line before it
- [ ] Every `min-height: 100vh` has `min-height: -webkit-fill-available` on the line before it (iOS Safari fix)
- [ ] No `tabindex` with positive integer value anywhere in HTML

**Visual:**
- [ ] Colors match DESIGN_SYSTEM.md tokens exactly (no hardcoded hex values)
- [ ] Fonts match: display font on headlines, body font on copy, mono on metrics and labels
- [ ] Border radius never exceeds the maximum defined in the DS
- [ ] Spacing uses the token scale (no arbitrary pixel values)

**HTML/ARIA (non-negotiable):**
- [ ] `<html lang="pt-BR">` (ou `lang="en"`) em toda página — ausência é WebAIM top-6 failure
- [ ] Skip link present as first element in `<body>`: `<a href="#main-content" class="skip-link">Pular para o conteúdo</a>`
- [ ] `<main id="main-content" tabindex="-1">` presente em toda página
- [ ] Landmarks semânticos em uso: `<header>`, `<nav>`, `<main>`, `<footer>` — sem `<div>` genérico onde existe elemento semântico
- [ ] Todo `<button>` ou `<a>` com apenas ícone tem `aria-label="..."` e o SVG interno tem `aria-hidden="true"`
- [ ] Todo `<input>`, `<select>`, `<textarea>` tem `<label for="...">` associado — placeholder não é label
- [ ] Todo dropdown/accordion trigger tem `aria-expanded="false"` (atualizado para `"true"` via JS ao abrir)
- [ ] Todo campo com mensagem de erro inline tem `aria-describedby="[id-do-erro]"` no input
- [ ] Botões disabled usam atributo `disabled` + tooltip/label explicativo — nunca só `opacity`

**Accessibility (non-negotiable — check before anything else, this is the most common Claude Code failure):**
- [ ] No body text below 16px anywhere — grep for `font-size` in the CSS, don't eyeball it
- [ ] No text of any kind below 12px
- [ ] Text/background contrast ≥4.5:1 for body text, ≥3:1 for large text (24px+/19px+ bold) — verify with a contrast checker (e.g. [webaim.org/resources/contrastchecker](https://webaim.org/resources/contrastchecker/)), not by eye. WCAG 2.1 AA SC 1.4.3.
- [ ] Icon strokes, input borders, and focus rings have ≥3:1 contrast against their background (WCAG 2.1 AA SC 1.4.11)
- [ ] Every clickable target (button, link, icon button) is at least 24×24px, with primary CTAs at 44×44px or larger (WCAG 2.2 AA SC 2.5.8)
- [ ] Visible focus-visible state on every interactive element — no `outline: none` without a replacement (WCAG 2.1 AA SC 2.4.7)

**Conversion architecture (non-negotiable — the reason this exists is on record):**
- [ ] Section order in the built page matches the approved layout preview exactly, section for section
- [ ] Primary CTA (or approved lower-commitment secondary CTA) renders inside the first viewport at 375px mobile first, then desktop — check in the actual browser, not by estimate
- [ ] No CTA, link, or button was added inside the mandatory section sequence beyond what the approved attention ratio accounts for
- [ ] No more than 3 consecutive sections pass with zero visible next step (CTA repetition cadence from Step 2.3)

**SEO:**
- [ ] H1 matches the approved SEO structure exactly
- [ ] H2s match the approved structure in order
- [ ] Meta title and description present and match approved values
- [ ] All images have descriptive alt text
- [ ] Schema JSON-LD present in `<head>` where applicable

**Copy:**
- [ ] All copy matches the approved copy document (no paraphrasing by Claude Code)
- [ ] No placeholder text left in (Lorem ipsum, "Your company name", etc.)
- [ ] No AI language in any visible text

**Code quality:**
- [ ] No inline styles: all styles in style.css using CSS variables
- [ ] Images use WebP format with width and height declared
- [ ] Images below the fold have loading="lazy"
- [ ] Hero image does not have loading="lazy"
- [ ] No unused CSS or JS

**Mobile:**
- [ ] Test at 375px: nothing overflows, nothing breaks
- [ ] Test at 768px
- [ ] Test at 1280px

---

## Page build order

Build in this order (highest priority pages first):

1. Shared components first: nav, footer, CSS variables, base styles
2. Home page
3. Primary product/solution page
4. Secondary pages in sitemap order
5. Contact page
6. GA4 tracking snippet in every page's `<head>`, with conversion events wired correctly (see below — this is not just "add gtag and a click handler")
7. sitemap.xml and robots.txt last

**Why GA4 goes in here, not in the monthly plan onboarding:** historically, analytics setup only happened for clients who signed up for the Hold/Build retainer (`../../After launch/Hold/8.1-onboarding-checklist.md`). That means every audit-only or rebuild-only client launches with zero way to verify whether the IA decisions made in Step 2 — keyword targeting, CTA placement, page goals — actually worked. GA4 is free and takes minutes to wire in; install it on every project regardless of retainer. The retainer still gates the *ongoing analysis and reporting* (that's real work, correctly priced) — it should not gate whether the data exists in the first place.

**Wiring the conversion event correctly, especially for external booking tools:** a click on a CTA is not a conversion. If the primary path hands off to a tool the site doesn't control (Calendly, Typeform, WhatsApp Business), a `generate_lead` event fired from the button's `onclick` only proves the visitor clicked — it can't tell you if they actually booked. This exact pattern was found and confirmed on a real client site during this methodology's development (the `onclick` fired `generate_lead` on a Calendly link, with no way to know if the booking itself completed) — not asserted as "the most common" mistake across every client, just a confirmed, real failure mode worth guarding against explicitly. A page can look like it's converting zero visitors when it's actually the booking flow inside the external tool that's failing, and nobody can tell the difference because the only event recorded is the click.

- **Calendly**: use the inline embed widget (`Calendly.initInlineWidget`), not a plain link, and listen for `window.addEventListener('message', e => { if (e.data.event === 'calendly.event_scheduled') { gtag('event', 'generate_lead', ...) } })`. Fire the real conversion there, not on click.
- **If an inline embed isn't feasible**: use the tool's redirect/return-URL feature to send the visitor to a `/obrigado/` thank-you page after completion, and fire the conversion event on that page's load instead of on the outbound click.
- **Keep a click event if useful for diagnosing drop-off** (e.g. `cta_click`), but never name it `generate_lead` or any other term the monthly report will read as a confirmed lead. Mixing the two makes "0 leads" impossible to diagnose: it could mean nobody clicked (a page problem, fixable here) or everybody clicked and the external tool lost them (not a page problem, invisible to a click-only event).

---

## What goes to the front-end developer

If you are splitting work with a front-end developer, define the split before development starts. Ambiguity here caused the 40h/20h imbalance on previous projects.

Suggested split:
- **You (Claude Code):** all HTML structure, all CSS, all content, SEO implementation, sitemap, robots.txt
- **Front-end dev:** performance optimisation, cross-browser testing, any custom JS interactions, deployment and DNS

Define this in writing before the project starts.

---

## Recursos de referência

Para apoiar a implementação de UI, animação e padrões de componente:

- [UI Patterns](https://ui-patterns.com/) — referência de padrões de interface por componente.
- [GSAP](https://gsap.com/) — biblioteca de animação para interações mais elaboradas.
- [Great animations](https://emilkowal.ski/ui/great-animations) — princípios de motion design aplicados a interfaces reais.
- [Fitts' Law In The Touch Era](https://www.smashingmagazine.com/2022/02/fitts-law-touch-era/) — dimensionamento de área de toque, relevante para o teste em 375px.

Biblioteca completa: [`resources/design-resources-library.md`](../../resources/design-resources-library.md).

---

## Step completion checklist

Do not open `6-final-checklist/` until every item is checked:

- [ ] All pages built and matching approved designs
- [ ] Review checklist passed on every page
- [ ] Tested on Chrome, Safari, Firefox, Opera (vendor prefix issues show up in Firefox and Opera first)
- [ ] Colorblind simulation: Chrome DevTools → Rendering → Emulate vision deficiencies → Deuteranopia, Protanopia, Achromatopsia — todos os estados de formulário e CTAs legíveis sem cor?
- [ ] Tested on real iOS and Android device
- [ ] Lighthouse score ≥ 90 on all four categories on mobile
- [ ] sitemap.xml and robots.txt in place
- [ ] All meta tags and schema present on all pages
- [ ] GA4 installed on every page, conversion events firing (verified in GA4 DebugView, not assumed)
- [ ] No placeholder content anywhere

---

## Files in this step

| File | For | What it does |
|---|---|---|
| `5.1-session-start-prompt.md` | You → Claude Code | Opens every dev session with full context |
| `5.2-component-request-template.md` | You → Claude Code | Template for requesting components and pages |
