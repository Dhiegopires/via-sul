# Step 1: Discovery

## What happens in this step

Before touching design or code, you need to understand the client's business, diagnose their current site, and map the market. This step runs three tracks in parallel and produces two client-facing documents plus a completed intake form.

**Time required:** half a day well executed.

---

## Your job in this step

### Day 1: As soon as the project is signed

**1. Send the intake form to the client**
Open `1.1-client-form.md`, copy the questions, and send them via Google Form, Notion, or email. Ask for a response within 48 hours. Tell the client: the more specific their answers, the better the result.

**2. Run the site audit (in a new Claude chat)**
Open `1.2-site-audit.md`. Fill in the client context fields at the top: site URL, company name, industry, product, ideal client, site goal. Paste the full file into a new chat and run it. Claude will access the site and generate a branded HTML audit report.

**3. Run the market research (in another new Claude chat)**
Open `1.3-market-research.md`. Fill in the client context fields. Paste the full file into a new chat and run it in parallel with the audit. Claude will research competitors, map keywords, and generate a branded HTML market research report.

---

### When the intake form comes back

Review every answer. If anything is vague ("we want a modern site", "we have great customer service"), send it back with a specific follow-up question. Do not move forward with generic answers. They produce generic sites.

---

### Before the validation meeting

Review both HTML documents Claude generated. Check that:
- Every finding in the audit references something real from the actual site
- Every competitor in the market research is real and the H1s cited are accurate
- No keyword claim is invented. Flag estimates where needed.

Fix anything that looks hallucinated before showing the client.

**Check Block 7 of the intake form (Voice of the Customer) specifically.** Everything else in this step — the audit, the market research, the keyword map — is either heuristic/AI judgment or the client's own view of their business. Block 7 is the only point in the entire pipeline where a real end customer's words enter the project. If it comes back empty, do not silently proceed: confirm with the client whether 7.1 or 7.2 is genuinely impossible, and if so, carry the `[DATA NEEDED: no direct customer input available]` flag forward into Step 2 and Step 4. A site built entirely from the business's self-image is a known, named risk, not a silent gap.

> ✅ **CHECKPOINT — antes da reunião de validação**
> Não precisa reler os dois documentos HTML inteiros. Verifique só isto:
> - [ ] Pelo menos 3 concorrentes reais, cada um com URL, H1 real citado, e **estrutura de conversão observada** (ordem de seções, posição do CTA) — não só nome e H1
> - [ ] Nenhum keyword ou estatística sem fonte rastreável — tudo que é estimativa está marcado como tal
> - [ ] Block 7 (voz do cliente real) veio preenchido, ou está explicitamente flagueado `[DATA NEEDED]` e carregado adiante
>
> Se os 3 itens acima estão OK → leva pra reunião. Se algum falhar → corrige antes, não deixa pra depois.

---

### The validation meeting

Bring both documents to the meeting. The goal is to **validate**, not collect. You should already have the information from the intake form. Use the meeting to:
- Confirm keyword priorities
- Confirm visual direction
- Collect what's missing: metrics, logos, case study details, screenshots of their product, legal requirements, pricing direction

---

### Run the viability check (new Claude chat, after the validation meeting)

Open `1.4-viability-check-prompt.md`. Paste 1.6/1.7 from the intake form plus the site audit and market research findings. Run in a new chat.

**Why this exists:** "we generate leads" is VellumWire's differentiator. A conditional guarantee built on that differentiator (`0-briefing-master/lead-guarantee-terms.md`) only makes sense for clients whose offer has already proven demand somewhere — a website structural rebuild can remove friction and fix a broken funnel, but it cannot manufacture demand for an offer nobody has ever paid for. This check separates "the website is the problem" from "the offer is the problem" before either promise or price gets set.

Claude classifies the client GREEN, YELLOW, or RED:
- **GREEN**: proven demand exists through a channel other than the website (referral, events, repeat business). The site is the underperforming channel specifically. Eligible for the conditional guarantee.
- **YELLOW**: some demand signal, but thin or untested. Proceed, but do not offer the guarantee — say so to the client directly.
- **RED**: no evidence anyone has ever paid for this exact offer, anywhere. Flag to Dhiego before selling anything framed around lead generation — recommend `Website-checkup` or an honest conversation instead.

> ✅ **CHECKPOINT — antes de definir escopo e preço com o cliente**
> - [ ] Classificação GREEN/YELLOW/RED está no documento, com a evidência (não "provavelmente têm clientes")
> - [ ] Se RED: conversa honesta teve lugar antes de vender qualquer coisa com "geramos lead" no meio
> - [ ] Se GREEN: `lead-guarantee-terms.md` preenchido e conversado com o cliente antes de assinar
> - [ ] Se YELLOW: cliente sabe explicitamente que o site é o primeiro teste de mercado da oferta, não uma correção de canal
>
> Isso não é burocracia — é a diferença entre prometer algo que dá pra cumprir e prometer algo que depende de coisa que ninguém no projeto controla.

---

## Recursos de referência

Para embasar o site audit e a pesquisa de mercado:

- [Laws of UX](https://lawsofux.com/) — heurísticas rápidas para sustentar os achados do audit.
- [UX Research Cheat Sheet (NN/g)](https://www.nngroup.com/articles/ux-research-cheat-sheet/) — referência de métodos para a reunião de validação.
- [UX Checklists For Interface Designers](https://www.smashingmagazine.com/2022/09/ux-checklists-for-interface-designers/) — checklist de usabilidade para o site audit.
- [UX Research Field Guide](https://www.userinterviews.com/ux-research-field-guide) — guia completo se o form de intake não for suficiente.

Biblioteca completa: [`resources/design-resources-library.md`](../../resources/design-resources-library.md).

---

## Step completion checklist

Do not open `2-architecture/` until every item is checked:

- [ ] Intake form returned with specific answers in every field
- [ ] Validation meeting done
- [ ] Site audit reviewed, corrected if needed, and approved
- [ ] Market research reviewed, corrected if needed, and approved
- [ ] Real data confirmed: metrics, client names, differentiators
- [ ] Voice-of-customer received (Block 7) or explicitly flagged `[DATA NEEDED]` and carried forward
- [ ] Keyword map validated with client
- [ ] Conversion structure captured for at least the top 2-3 competitors (section order, CTA position, attention ratio) — required input for Step 2.3, not optional detail
- [ ] Tech stack confirmed: HTML/CSS/JS, domain, hosting, integrations needed
- [ ] Deadline confirmed
- [ ] Approvers confirmed (who signs off before go-live)
- [ ] Product screenshots and brand assets requested from client
- [ ] Viability check run and classified GREEN/YELLOW/RED — scope and price conversation with the client reflects the classification, not assumed automatically

---

## Files in this step

| File | For | What it does |
|---|---|---|
| `1.1-client-form.md` | You → Client | Questions to send to the client before the meeting |
| `1.2-site-audit.md` | You → Claude | Paste into a new chat to generate the site audit HTML |
| `1.3-market-research.md` | You → Claude | Paste into a new chat to generate the market research HTML |
| `1.4-viability-check-prompt.md` | You → Claude | Classifies GREEN/YELLOW/RED — whether a lead-generation guarantee is defensible for this client |

---

## What feeds into Step 2

Take these into `2-architecture/`:
- The completed intake form responses
- The voice-of-customer answers from Block 7 (or the `[DATA NEEDED]` flag if none exists)
- The keyword map from the market research
- The site audit findings
- The competitor analysis and opportunity map — **including each competitor's conversion structure** (section order, CTA position, attention ratio) captured in 1.3 Part 2. This is what Step 2.3 grounds the persuasion formula and CTA placement decisions in. If it wasn't captured here, Step 2.3 will stall on a `[DATA NEEDED]` flag — cheaper to get it now, while the competitor's page is already open in a new Claude chat.
- The GREEN/YELLOW/RED viability classification — carries forward into `0-briefing-master/lead-guarantee-terms.md` if GREEN, and into how expectations are set with the client regardless of tier
