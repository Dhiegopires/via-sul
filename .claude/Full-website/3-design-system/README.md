# Step 3: Design System

## What happens in this step

This step defines the visual identity of the client's site before a single line of code is written. It runs in two phases. Phase A produces a visual direction document the client approves. Phase B produces the `DESIGN_SYSTEM.md` that Claude Code reads during development.

**Why two phases and not one:**
Jumping straight from discovery to code is where visual identity goes wrong. The client has not approved colors, fonts, or tone yet. Claude Code has no reference to work from. The result is generic. Two phases fix this. The client approves the direction first, then Claude Code builds from an approved foundation.

**Time required:** 2–4 hours plus client approval.

---

## Your job in this step

### Phase A: Visual direction document

Open `3.1-visual-direction.md`. Fill in the client context and paste:
- Their visual references (sites they like) from the intake form
- Their anti-references (sites they don't want to look like)
- The competitor visual analysis from the market research document
- Their industry and ideal client profile

Run it in a new chat. Claude will generate a branded HTML document showing:
- Proposed color palette with swatches and usage rules
- Proposed typography pairing with specimens
- Overall mood and visual direction rationale
- What differentiates this visually from competitors

**Review this carefully before sending to the client.** Check:
- The palette makes sense for the industry and target audience
- The fonts are distinctive, not the same Inter/Space Grotesk every SaaS uses
- The visual direction is genuinely different from at least 2 of the 3 main competitors
- Nothing looks like it was pulled directly from a reference site

Send the document to the client. Get explicit approval on colors and typography before moving to Phase B. Changes to visual direction after Phase B cost significant rework.

> ✅ **CHECKPOINT — antes de mandar a direção visual pro cliente**
> - [ ] Cor de destaque + tipografia diferem visivelmente de pelo menos 2 dos 3 concorrentes citados no Step 1
> - [ ] Nenhuma fonte é Inter/Space Grotesk/Plus Jakarta Sans "padrão SaaS" sem justificativa
> - [ ] Cada decisão tem uma frase de justificativa específica, não "moderno e limpo"
>
> Se os 3 itens acima estão OK → manda pro cliente.

---

### Phase B: Client Design System for Claude Code

Only run this after the client has approved the visual direction from Phase A.

Open `3.2-client-ds-prompt.md`. Paste the approved colors, fonts, and direction from the Phase A output. Run it in a new chat.

Claude will generate the `DESIGN_SYSTEM.md`: the file Claude Code reads at the start of every development session. It contains the complete token set, component patterns, spacing rules, and anti-patterns specific to this client's site.

Save the output as `DESIGN_SYSTEM.md` in the project root. This file goes into the Claude Code project context.

---

## Recursos de referência

**Tipografia e cor (Fase A):**
- [Best Free Typefaces for UI Design](https://www.adhamdannaway.com/blog/ui-design/free-typefaces) — fontes distintas, fora do padrão Inter/Space Grotesk.
- [Fontshare](https://www.fontshare.com/) e [Typewolf](http://typewolf.com/) — pareamento e inspiração tipográfica.
- [Color Designer](https://colordesigner.io/) — gerar e testar paletas de cor.

**Design system (Fase B):**
- [How to Build a Design System](https://www.adhamdannaway.com/blog/design-systems/how-to-build-a-design-system) — guia direto para estruturar o `DESIGN_SYSTEM.md`.
- [Component Gallery](https://component.gallery) — referência de nomenclatura e padrões de componente.
- [Design Systems Database](https://designsystems.surf/) — exemplos reais de design systems para comparar abordagens.

**Ícones e marca:**
- [Phosphor Icons](https://phosphoricons.com/) e [Tabler Icons](https://tabler-icons.io/) — sets de ícone open-source consistentes.
- [Brand Guidelines](https://www.brandguidelines.net/) — exemplos de manuais de marca, útil quando o cliente já tem identidade parcial.

Biblioteca completa: [`resources/design-resources-library.md`](../../resources/design-resources-library.md).

---

## The reference problem: how to avoid it

The most common mistake: sending reference site DS files directly to Claude Code and asking it to "do something different." The output ends up too similar (Claude follows the reference too closely) or too incoherent (Claude randomly deviates without direction).

The fix is this step. Phase A forces a creative decision (specific colors, specific fonts, specific differentiation rationale) before any reference file touches Claude Code. When Claude Code sees the `DESIGN_SYSTEM.md`, it builds from a defined identity, not from imitation.

**Do not send reference site files to Claude Code.** Send only the `DESIGN_SYSTEM.md` generated in Phase B.

---

## Step completion checklist

Do not open `4-content-and-seo/` until every item is checked:

- [ ] Visual direction document generated and reviewed
- [ ] Color palette verified: works for the industry, different from competitors
- [ ] Typography verified: distinctive, not a common SaaS default
- [ ] Client has approved colors and typography explicitly
- [ ] `DESIGN_SYSTEM.md` generated from approved direction
- [ ] `DESIGN_SYSTEM.md` saved to project root and added to Claude Code context

---

## Files in this step

| File | For | What it does |
|---|---|---|
| `3.1-visual-direction.md` | You → Claude | Generates visual direction HTML for client approval |
| `3.2-client-ds-prompt.md` | You → Claude | Generates `DESIGN_SYSTEM.md` for Claude Code |

---

## What feeds into Step 4

Take these into `4-content-and-seo/`:
- Approved visual direction (informs copy tone)
- `DESIGN_SYSTEM.md` (already in Claude Code project)
- Confirmed page count and sitemap from Step 2
