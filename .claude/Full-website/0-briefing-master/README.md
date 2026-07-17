# Step 0: Briefing Master

## What this file is

A single source of truth for every project. You fill it in once, at the start. Every AI prompt in steps 1–7 reads from it — no more copy-pasting the same client data into five different fields.

**Do not skip this step.** Every inconsistency between prompts (different company name, different ICP, different differentiator) traces back to not having a briefing master.

---

## When to fill it in

After the intake form comes back from the client. Before running any AI prompt.

If the client hasn't returned the form yet, do not fill in guesses. Leave the field blank and add `[PENDING]`. Run the audit and market research with what you have, then complete the briefing master before moving to Step 2.

---

## How to use it across steps

Every AI prompt in this methodology starts with a `## CLIENT CONTEXT` block. Instead of filling those fields manually, reference this file:

> "The full client briefing is in `0-briefing-master/briefing-master.md`. Read it before proceeding."

Paste that line at the top of any prompt, then paste the briefing master content immediately below it. The prompt's own context block becomes redundant — you can skip it.

---

## Files in this step

| File | For | What it does |
|---|---|---| 
| `briefing-master.md` | You → every AI prompt | Single client record filled once, referenced everywhere |
| `lead-guarantee-terms.md` | You + client (business/contract document, not an AI prompt) | Conditional lead-generation guarantee, offered only to clients classified GREEN in `1-discovery/1.4-viability-check-prompt.md` — filled in after Step 1, referenced again at the Launch Week Check in `6-final-checklist/README.md` |

---

> ✅ **CHECKPOINT — antes de rodar o primeiro prompt do Step 1**
> - [ ] Zero `[PENDING]` no arquivo — se tiver, ou volta pro cliente ou marca explicitamente como aceito em branco
> - [ ] Site goal e Primary CTA estão preenchidos com algo específico ("agendar call de 15min"), não genérico ("contato")
> - [ ] Arquivo salvo na raiz do projeto do cliente, junto de onde `DESIGN_SYSTEM.md` vai morar depois
>
> Se os 3 itens acima estão OK → segue pro Step 1. Não precisa reler o form inteiro campo a campo de novo depois disso.

## Step completion checklist

- [ ] All fields filled with real data (no invented answers)
- [ ] `[PENDING]` markers cleared before moving to Step 2
- [ ] File saved in the project root alongside `DESIGN_SYSTEM.md`
- [ ] Every AI prompt in steps 1–7 has briefing-master content pasted before running
