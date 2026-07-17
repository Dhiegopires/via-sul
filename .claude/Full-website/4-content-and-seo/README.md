# Step 4: Copy & SEO

## What happens in this step

This step produces all the words that go on the site and all the SEO decisions that make Google find them. It runs in two phases. Phase A defines the SEO structure per page (the technical layer). Phase B writes the actual copy for each page (the human layer). Both must be approved before development starts.

**Why SEO structure before copy:**
Writing copy without knowing the keyword and heading structure is like building a house without a blueprint. The H1 must contain the primary keyword. The H2s must follow from the page intent. If copy is written first and structure second, one of them has to be redone. Do it in order.

**Time required:** 3–5 hours plus client review.

---

## Your job in this step

### Before you start

Make sure you have from previous steps:
- Approved sitemap with URLs and primary keyword per page (Step 2)
- Approved conversion architecture: awareness level, formula, mandatory section sequence, CTA placement rules, and attention ratio per page (Step 2.3) — this drives H2 order in Phase A, what each section's copy must do in Phase B, and what Phase C verifies
- Keyword map from market research (Step 1)
- Client intake form responses, especially: their tone preferences, words to avoid, data and metrics (Step 1)
- Approved visual direction: the mood informs the copy tone (Step 3)

---

### Phase A: SEO structure

Open `4.1-seo-structure-prompt.md`. Paste the approved sitemap and keyword map. Run in a new chat.

Claude generates a VellumWire-branded HTML document showing for every page:
- Meta title (max 60 chars)
- Meta description (max 155 chars)
- H1
- H2 structure
- Schema type
- Internal links in and out

Review this output against the keyword map. Check that every primary keyword appears in the right position. Check that no two pages target the same keyword. Send to client for approval. This is a strategic document, not just technical.

---

### Phase B: Page copy

Only run after SEO structure is approved.

Open `4.2-page-copy-prompt.md`. Paste the approved SEO structure plus all real data from the client (metrics, client names, cases, differentiators, quotes). Run in a new chat: one page at a time for complex sites, all pages in one run for simpler ones.

Claude generates all copy per page: eyebrow, H1, subtitle, section headlines, feature descriptions, testimonials, FAQs, CTAs. Output is a structured HTML document for client review with copy clearly separated by page and section.

Review for:
- AI language: remove any instance of "crucial", "leverage", "holistic", "seamless", "cutting-edge"
- Generic claims: every claim must be backed by a real number or fact from the intake form
- Tone consistency: all pages should sound like the same person wrote them
- CTA specificity: "Book a 15-min call" not "Contact us"

Send to client. Get approval before handing off to development.

---

### Phase C: Layout & composition preview

Only run after copy is approved.

Open `4.3-layout-preview-prompt.md`. Paste the approved conversion architecture from Step 2.3, the approved copy from Phase B, and the spacing/type tokens from `DESIGN_SYSTEM.md`. Run in a new chat.

Claude generates a structural preview — real copy, real section order, neutral wireframe blocks, no visual styling — for the 2–3 highest-priority pages, plus two hard checks: does the required CTA actually land inside the first viewport once real copy is assembled (375px mobile first, then desktop), and does the attention ratio still match what Step 2.3 approved. This is the first and only point before full development where the client sees the conversion architecture, copy, and structure assembled together.

**Why this exists:** the conversion architecture is approved in Step 2.3, the visual direction in Step 3, the copy in Phase B. None of those approvals cover what happens when real copy of real length gets poured into the approved section order — a CTA that was supposed to sit above the fold can still get pushed below it once the actual hero subtitle is three lines instead of the one assumed during planning. Without this checkpoint, the first time anyone sees the real, assembled page is after Claude Code has already built it in Step 5 — the exact point where a buried CTA and a missing decision path went undetected on a real client site until a month of live traffic proved it.

Send to client. Get sign-off on structure, section order, and the CTA fold check specifically — not on visual design (Step 3) and not on whether the architecture itself is right (Step 2.3, already locked). If the fold check fails, the page does not move to Step 5 until it's fixed — this is a blocker, not feedback for later.

> ✅ **CHECKPOINT — antes de aprovar o layout preview (4.3)**
> Você não precisa ler todo o wireframe seção por seção. Verifique só isto:
> - [ ] O documento diz explicitamente `✅ CTA aparece na primeira viewport` para cada página — se disser `❌ BLOQUEIO`, não aprova, volta pro 4.3 até resolver
> - [ ] A contagem de attention ratio ainda bate com o número aprovado no 2.3 (não precisa recontar, só conferir que o número é o mesmo)
> - [ ] O painel "Questões abertas" foi lido — se tiver algo lá, isso é a parte que precisa da sua decisão, o resto do documento é só registro
> - [ ] Se a página tem qualquer elemento com estado padrão via JS (carrossel, seletor de segmento): está anotado explicitamente que isso precisa ser reverificado no Step 6.8 depois do build
>
> Se os 4 itens acima estão OK → aprova. Não precisa reler a composição inteira de novo.

---

## The anti-slop rule for this step

Every piece of copy must contain at least one specific, verifiable data point from the client's actual business. If a section has no real data to anchor it, flag it and ask the client before inventing something plausible. Plausible is not the same as true.

---

## Recursos de referência

Para apoiar a Fase B (escrita de copy):

- [UX Writing Library](https://www.uxwritinglibrary.com) — exemplos reais de microcopy por categoria (erros, onboarding, CTAs).
- [Good Microcopy](https://goodmicrocopy.com/) — banco de exemplos de microcopy testada.
- [Style Manual](http://stylemanual.org/) — referência de tom e estilo de escrita.
- [Improve Validation Errors with Adaptive Messages](https://baymard.com/blog/adaptive-validation-error-messages) — como escrever mensagens de erro em formulários.

Biblioteca completa: [`resources/design-resources-library.md`](../../resources/design-resources-library.md).

---

## Step completion checklist

Do not open `5-development/` until every item is checked:

- [ ] SEO structure generated and reviewed
- [ ] No two pages targeting the same primary keyword
- [ ] All meta titles under 60 characters
- [ ] All meta descriptions under 155 characters
- [ ] SEO structure approved by client
- [ ] Page copy generated for all pages
- [ ] AI language removed from all copy
- [ ] All claims backed by real data
- [ ] Copy approved by client
- [ ] Copy document saved for Claude Code reference
- [ ] Layout preview generated for priority pages
- [ ] CTA fold check passed for every previewed page (375px mobile first, then desktop) — fix and re-run before proceeding if any failed
- [ ] Attention ratio confirmed unchanged from Step 2.3's approved budget once real copy was assembled
- [ ] Layout preview approved by client (structure, section order, and CTA fold signed off before full build)

---

## Files in this step

| File | For | What it does |
|---|---|---|
| `4.1-seo-structure-prompt.md` | You → Claude | Generates SEO structure per page as HTML |
| `4.2-page-copy-prompt.md` | You → Claude | Generates all page copy as HTML for review |
| `4.3-layout-preview-prompt.md` | You → Claude | Generates a structural wireframe preview of priority pages, verifies the CTA fold check and attention ratio, for composition sign-off |

---

## What feeds into Step 5

Take these into `5-development/`:
- Approved conversion architecture from Step 2.3 (mandatory section sequence, CTA rules, attention ratio) — Claude Code builds from this, not from improvisation
- Approved SEO structure document
- Approved copy document
- Approved layout preview (structure, section order, and CTA fold check signed off)
- `DESIGN_SYSTEM.md` from Step 3 (already in Claude Code context)
