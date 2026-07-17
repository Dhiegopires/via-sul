# Full Web Rebuild: Methodology

A repeatable process for building high-ranking, human-quality websites (VellumWire's "Full Web Rebuild" tier, $3,000–$5,000, up to 6 pages). Every step produces specific deliverables. Nothing moves forward without the previous step's outputs confirmed.

For the tier index and cross-tier rules, see the [repo root README](../README.md).

---

## Folder structure

```
Full-website/
├── README.md                          ← this file
│
├── 0-briefing-master/
│   ├── README.md
│   ├── briefing-master.md             ← single client record, filled once, referenced everywhere
│   └── lead-guarantee-terms.md        ← conditional lead-gen guarantee, GREEN clients only (from Step 1.4)
│
├── 1-discovery/
│   ├── README.md                      ← human guide for this step
│   ├── 1.1-client-form.md             ← form to send to client
│   ├── 1.2-site-audit.md              ← AI prompt → auditoria-[cliente].md
│   ├── 1.3-market-research.md         ← AI prompt → pesquisa-mercado-[cliente].md
│   └── 1.4-viability-check-prompt.md  ← AI prompt → viability-check-[cliente].md (GREEN/YELLOW/RED)
│
├── 2-architecture/
│   ├── README.md
│   ├── 2.1-sitemap-prompt.md          ← AI prompt → sitemap-[cliente].md
│   ├── 2.2-user-journeys-prompt.md    ← AI prompt → user-journeys-[cliente].md
│   └── 2.3-conversion-architecture-prompt.md ← AI prompt → conversion-architecture-[cliente].md (locked before design)
│
├── 3-design-system/
│   ├── README.md
│   ├── 3.1-visual-direction.md        ← AI prompt → visual-direction-[cliente].md (aprovação)
│   └── 3.2-client-ds-prompt.md        ← AI prompt → DESIGN_SYSTEM.md (contexto Claude Code)
│
├── 4-content-and-seo/
│   ├── README.md
│   ├── 4.1-seo-structure-prompt.md    ← AI prompt → seo-structure-[cliente].md
│   ├── 4.2-page-copy-prompt.md        ← AI prompt → copy-[cliente].md (Claude Code + client review)
│   └── 4.3-layout-preview-prompt.md   ← AI prompt → layout-preview-[cliente].md (sign-off composição)
│
├── 5-development/
│   ├── README.md
│   ├── 5.1-session-start-prompt.md    ← Claude Code session opener
│   └── 5.2-component-request-template.md ← DS check + template de componente/página
│
├── 6-final-checklist/
│   ├── README.md                      ← includes the mandatory Launch Week Check
│   ├── 6.2-audit-prompt.md            ← AI prompt → varredura automática C–D–U–K–H–A (chat novo)
│   ├── 6.3-copy-signals.md            ← referência manual: copy C1–C20
│   ├── 6.4-design-signals.md          ← referência manual: visual/CSS + layout D1–D8
│   ├── 6.5-ux-code-signals.md         ← referência manual: UX + código + sinal humano
│   ├── 6.6-quick-scan.md              ← grep targets + severity + structural + keyboard checks
│   ├── 6.7-a11y-keyboard.md           ← auditoria manual: skip link, tab order, keyboard traps, ARIA
│   └── 6.8-conversion-signals.md      ← check de regressão CV1-CV6: build ainda bate com a arquitetura de conversão aprovada?
│
└── 7-post-delivery/
    ├── README.md                      ← human guide for this step
    ├── 7.1-inventory-prompt.md        ← AI prompt → mapeamento cliente → token semântico + grep commands
    └── 7.2-migration-prompt.md        ← AI prompt → HTML/CSS migrado + spec.md
```

After launch, the project moves to `../After launch/` (Hold or Build retainer) — that's a separate tier folder, not part of this one.

---

## How the steps connect

```
0-briefing-master
  │  Single client record, filled once
  │  ↓ referenced by every prompt below instead of re-pasting client context each time
1-discovery
  │  Client form + site audit + market research + viability check (GREEN/YELLOW/RED)
  │  ↓ keyword map, competitor analysis (including competitor conversion structure), real client data,
  │    and whether a lead-generation guarantee is even defensible for this client
2-architecture
  │  Sitemap + user journeys + conversion architecture
  │  ↓ approved URLs, page goals, CTAs, confirmed page count,
  │    LOCKED persuasion formula + section sequence + CTA placement + attention ratio per page
3-design-system
  │  Visual direction (client approval) + DESIGN_SYSTEM.md
  │  ↓ approved colors + fonts → DESIGN_SYSTEM.md in Claude Code context
4-content-and-seo
  │  SEO structure (H2s follow the locked sequence) + page copy (written to each section's formula stage)
  │  + layout preview (verifies the CTA still lands above the fold once real copy is assembled)
  │  ↓ locked H1s, meta tags, copy document, CTA-fold-checked composition for Claude Code
5-development
  │  Claude Code builds HTML/CSS/JS using DESIGN_SYSTEM.md + copy + the locked conversion architecture as a build contract
  │  ↓ complete site in folder/index.html structure, section order and CTA placement unchanged from what was approved
6-final-checklist
  │  AI audit + manual review + conversion architecture REGRESSION check → launch → Launch Week Check (day 5-7)
  │  ↓ launched code, confirmed converting at least once
7-post-delivery
     Asset harvesting (HTML/CSS/JS components uncoupled using semantic tokens) → Library
```

**A regra que evita o erro mais caro do método:** arquitetura de conversão (formula de persuasão, ordem de seções, posição do CTA, attention ratio) é decidida no Step 2, validada no Step 4.3 antes do development começar, e travada como contrato de build no Step 5. O Step 6 nunca é o primeiro lugar onde isso é avaliado — só confirma que o que foi aprovado sobreviveu à construção, e o Launch Week Check no fim do Step 6 confirma que sobreviveu ao tráfego real. Corrigir hierarquia de persuasão depois que o site já está construído (ou pior, depois que já rodou tráfego) é a correção mais cara que existe no método.

---

## The two types of files

**AI execution prompts**: files the AI reads and acts on directly. They contain the full instruction set, input fields to fill, and output format. You fill in the `[bracketed]` fields and paste into a new chat.

**Human guides**: the README in each folder. Written for you. Explains what to do, in what order, what to check before moving on — including the CHECKPOINT box that tells you exactly what to verify without reading the whole generated document.

---

## File naming convention

```
[step-number]-[step-name]/
├── README.md
├── [step-number].1-[deliverable].md
├── [step-number].2-[deliverable].md
└── [step-number].3-[deliverable].md   (if needed)
```

Prompts are numbered in execution order. If two prompts run in parallel, they have sequential numbers anyway. Run them in separate chats simultaneously.

---

## URL and file structure for every project

Every page is a folder with `index.html` inside. Never `page-name.html` at root level.

```
project/
├── DESIGN_SYSTEM.md         ← in Claude Code context for every session
├── index.html               → domain.com/
├── [page-slug]/
│   └── index.html           → domain.com/[page-slug]/
├── assets/
│   ├── css/style.css
│   ├── js/main.js
│   └── img/
├── sitemap.xml
└── robots.txt
```

All asset paths use root-relative format: `/assets/css/style.css`. Never use relative paths that break across folder depths.

---

## Como apresentar entregáveis ao cliente

Os prompts dos steps 1–4 geram arquivos `.md` no projeto do cliente — estruturados, sem estilo. Quando precisar apresentar ao cliente:

1. Copie os `.md` relevantes para `Github/design-system/`
2. Abra um chat novo com [`vellumwire-ds.md`](../vellumwire-ds.md) (na raiz do repo) em contexto
3. Peça para a IA converter os `.md` em um único HTML estilizado para entrega

Isso separa a geração de conteúdo (barata em tokens) da geração visual (feita uma vez só, quando necessário).

O design system do **cliente** (`DESIGN_SYSTEM.md`) é diferente:

| File | O que define | Quem lê |
|---|---|---|
| [`vellumwire-ds.md`](../vellumwire-ds.md) (raiz do repo) | Visual dos documentos VellumWire | IA na apresentação ao cliente |
| `project/DESIGN_SYSTEM.md` | O site do cliente | Claude Code no Step 5 |

---

## What "done" looks like

A project is complete when:

- [ ] Viability check run in Step 1.4, classified GREEN/YELLOW/RED, and the client conversation about expectations matched the classification
- [ ] Every priority page has an approved conversion architecture (Step 2.3): awareness level, formula, locked section sequence, CTA rules, attention ratio
- [ ] Every priority page passed the Step 4.3 CTA fold check with real copy before development started
- [ ] Every page has passed the Step 6 AI audit with zero Blockers
- [ ] Every page has passed the manual grep scan
- [ ] Every page has passed the Step 6.8 conversion architecture regression check with zero Blockers
- [ ] Lighthouse ≥ 90 on all four categories on mobile
- [ ] sitemap.xml submitted to Google Search Console
- [ ] Every navigation link goes to a real destination
- [ ] The page reads as made by a human who knows the client's business
- [ ] Launch Week Check scheduled for 5-7 days post-launch (`6-final-checklist/README.md`) — mandatory regardless of whether the client bought a monthly plan
