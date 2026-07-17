# Step 2: Architecture

## What happens in this step

With Discovery complete, you now define the skeleton of the site: every page that will exist, why it exists, who lands on it, what keyword it targets, and what action it drives. Then, before design or copy touches any page, you lock the persuasion sequence itself: which formula each page follows, in what order its sections must appear, and where the CTA is allowed to live. Nothing gets designed or coded until all three documents are approved by the client.

**Why the conversion architecture is decided here and not later:** a page's ability to convert is a structural decision, not a polish pass. If section order is left as a loose list, it gets built by improvisation in Step 5 and the first time anyone notices the CTA landed mid-page with no decision path behind it is after launch, with real traffic already spent. This step exists so that never happens again.

**Time required:** 3–4 hours plus client approval.

---

## Your job in this step

### Before you start

Make sure you have these outputs from Step 1:
- Completed intake form responses
- Keyword map from the market research document
- Site audit findings
- Competitor analysis and opportunity map, **including conversion structure per competitor** (section order, CTA position, attention ratio) — required for 2.3, not just the value proposition and keyword fields used by 2.1

You will paste all of this into the prompts below. The quality of the architecture output depends entirely on the quality of the Discovery inputs.

---

### Run the sitemap (new Claude chat)

Open `2.1-sitemap-prompt.md`. Fill in the client context fields and paste all Step 1 outputs into the designated section. Run it in a new chat.

Claude will generate a branded HTML document with:
- Full sitemap with proposed URLs
- Intent, goal, and primary keyword per page
- CTA logic per page
- Internal linking recommendations

Review the output. Check that every page has a reason to exist and a keyword it can realistically rank for. Remove any page that is padding. Add any page the keyword map demands that Claude missed.

---

### Run the user journeys (new Claude chat)

Open `2.2-user-journeys-prompt.md`. Fill in the personas from the intake form. Run it in a new chat.

Claude will generate a branded HTML document mapping how each persona finds the site, which pages they visit, where they drop off, and where they convert.

Review for realism. If a journey feels like a textbook example rather than how a real person actually behaves, revise it before showing the client.

---

### Run the conversion architecture (new Claude chat)

Open `2.3-conversion-architecture-prompt.md`. Paste the approved sitemap, the user journeys, and the competitor conversion structure from Step 1.3 (section order, CTA position, attention ratio observed on each competitor's live site — not just their H1 and keywords). Run it in a new chat.

Claude will assign an awareness level and a persuasion formula (PAS, BAB, StoryBrand SB7, or AIDA) to every priority page, lock the exact section order each page must follow, define where the CTA is allowed to appear and how often it must repeat, and count the attention ratio (how many other actions compete with the primary CTA above the fold) — grounded against what the real competitors in Step 1.3 actually do, not decided from frameworks alone.

This is not a restyling of the sitemap's page list — it is the decision that determines whether the page can convert at all, made before design or copy exists. Review it for two things above all: does the primary CTA actually land where a real visitor at that awareness level would be ready to see it, and does the chosen structure name which competitor it matches or deliberately breaks from — a formula assignment with no competitor reference is a guess dressed up as a framework.

**If Step 1.3's competitor analysis doesn't include conversion structure (section order, CTA position, attention ratio) for at least the top 2-3 competitors, go back and add it before running this step.** Frameworks like PAS, AIDA, or the awareness-level classification are real and useful, but applying them without checking what's actually working (or failing) in this client's specific market is exactly the kind of ungrounded decision this whole methodology exists to prevent.

**This document supersedes the loose "sections this page must contain" list from 2.1.** If they disagree, this one wins — go back and correct 2.1.

---

### Client approval

Send all three HTML documents to the client for approval. This is the last checkpoint before design begins. Changes to the sitemap or the conversion architecture after design starts cost double the time — a change to section order after Step 4.3 sign-off costs a rebuild, not an edit.

What the client needs to confirm:
- Every page in the sitemap makes sense for their business
- The primary keyword per page reflects how their clients actually search
- The CTAs match how they sell (demo, call, form, direct purchase)
- The user journeys reflect their real buyers
- The conversion architecture's section order and CTA placement make sense for how their real buyers actually decide

> ✅ **CHECKPOINT — antes de aprovar a arquitetura de conversão (2.3)**
> Você não precisa reler o documento inteiro. Verifique só isto:
> - [ ] Toda página prioritária tem uma fórmula (PAS/BAB/SB7/AIDA) e um nível de consciência atribuído, com justificativa citando um concorrente real do Step 1.3 — não uma escolha sem referência
> - [ ] O CTA primário de cada página está numa seção que faz sentido pro nível de consciência daquela persona (não "Agendar demo" na primeira frase pra um público frio)
> - [ ] O attention ratio de cada página está declarado com um número, não "parece razoável"
> - [ ] Nenhum CTA secundário aponta pro mesmo destino do CTA primário com texto diferente
>
> Se algum item falhar → volta pro `2.3-conversion-architecture-prompt.md` antes de mandar pro cliente. Não aprova "na confiança" — foi exatamente isso que gerou o caso que motivou esse step existir.

---

## Recursos de referência

Para estruturar sitemap, intenção de página e jornadas:

- [Design Principles](https://principles.design/) — princípios para embasar decisões de estrutura.
- [Product Design Methods Mind Map](https://uxplanet.org/product-design-methods-mind-map-f6511820a7d5) — mapa de métodos úteis nesta fase.
- [UX Methods and Deliverables](https://uxdesign.cc/a-comprehensive-list-of-ux-design-methods-deliverables-2021-2feb3e70e168) — referência de formatos de entrega.
- [Service Design Tools](https://servicedesigntools.org/) — ferramentas e templates para mapear jornadas.

Biblioteca completa: [`resources/design-resources-library.md`](../../resources/design-resources-library.md).

---

## Step completion checklist

Do not open `3-design-system/` until every item is checked:

- [ ] Sitemap reviewed and corrected
- [ ] User journeys reviewed and corrected
- [ ] Conversion architecture generated: awareness level, formula, section sequence, CTA rules, and attention ratio defined for every priority page
- [ ] All three documents approved by client
- [ ] URL structure confirmed (no changes after this point without scope discussion)
- [ ] Number of pages confirmed (this defines the dev scope)
- [ ] CTA logic confirmed per page
- [ ] Internal linking structure confirmed
- [ ] Primary CTA visibility confirmed for every priority page (above the fold at 375px mobile first, then desktop, or the correct lower-commitment CTA if the awareness level requires agitation first)
- [ ] Attention ratio checked: no priority page has more than 3 actions competing with the primary CTA above the fold

---

## Files in this step

| File | For | What it does |
|---|---|---|
| `2.1-sitemap-prompt.md` | You → Claude | Generates sitemap + intent + keyword map per page as HTML |
| `2.2-user-journeys-prompt.md` | You → Claude | Generates user journey maps per persona as HTML |
| `2.3-conversion-architecture-prompt.md` | You → Claude | Locks awareness level, persuasion formula, mandatory section sequence, CTA rules, and attention ratio per page |

---

## What feeds into Step 3

Take these into `3-design-system/`:
- Approved sitemap with confirmed page count
- CTA logic per page
- User journeys (inform which sections each page needs)
- Approved conversion architecture: locked section sequence, CTA placement rules, and attention ratio per page — carries forward unchanged through Step 4 and into Step 5
