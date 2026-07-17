# Lead Generation Guarantee: Terms Template
> Fill this in per client. Only offer it to clients classified GREEN by `1-discovery/1.4-viability-check-prompt.md`.
> This file is a business/contract document for you and the client. Not an AI prompt.

**This is a proposed structure, not an established industry standard I'm citing as fact — evaluate and adjust it before using it with a client.** The general pattern (a guarantee conditioned on a defined, controllable process being followed, rather than an unconditional outcome) is common in performance marketing and CRO agencies, but the specific terms below are a first draft for VellumWire, not a verified external benchmark.

---

## Why a conditional guarantee, not a flat one

"We generate leads" as an unconditional promise means VellumWire is on the hook for things it doesn't control: whether the client's offer has real demand, whether their traffic targeting is sound, whether their sales team follows up. An unconditional guarantee either gets broken (damaging trust worse than never promising it) or gets padded with so many silent exceptions it's meaningless.

A conditional guarantee ties VellumWire's commitment to what VellumWire actually controls: whether the site itself is free of confirmed, provable conversion killers. That's a promise that can be verified and honored.

---

## Eligibility

- [ ] Client was classified **GREEN** in `1-discovery/1.4-viability-check-prompt.md` — proven demand exists through a channel other than the website. Never offer this to a YELLOW or RED client; there is no other-channel proof to point to if the site underperforms, so there is nothing anchoring the guarantee to a site-specific problem.
- [ ] Client is on a package that includes `6-final-checklist/` in full (Website-checkup alone does not qualify — there's no build to guarantee).

---

## What is guaranteed

If, after launch:
1. The page passed `6.2` (AI audit, zero Blockers), `6.8` (CV1-CV7, zero Blockers, including CV7's real end-to-end conversion test), and the pre-launch human test (Passo 7) with no unresolved hesitation, **and**
2. The Launch Week Check (`6-final-checklist/README.md`) at day 5-7 shows real sessions arriving at or above [X — set per client's expected traffic volume] **and**
3. Zero confirmed leads (`generate_lead` or equivalent, verified as a real completion per Step 5's tracking rules, not a click) have occurred after [Y sessions — a volume large enough that zero conversions is a genuine outlier, not noise; discuss the number with the client rather than picking one blind, since "how many sessions is enough" depends on their specific offer and audience]

**Then:** VellumWire rebuilds the underperforming page (structure and copy, informed by whatever the data shows about where visitors drop) at no additional cost, one time, within [timeframe — e.g. 15 business days].

---

## What is explicitly NOT covered

- Traffic quality or volume the client controls (their own ad targeting, budget, channel mix) — if sessions never arrive in meaningful volume, condition 2 above was never met and the guarantee doesn't trigger.
- Anything downstream of the click: booking calendar availability, WhatsApp response time, sales follow-up speed, CRM handling. VellumWire's `6.8` CV7 test confirms the mechanism works at launch; it can't guarantee the client's team keeps operating it correctly afterward.
- Changes made to the live site after launch that VellumWire did not review (a client-side edit, a different vendor's change, a redeploy that wasn't checked against `6.8` again).
- Any period without an active monthly plan (`After launch/Hold` or `Build`) beyond the one-time Launch Week Check — if nobody is watching the data past week one and no retainer exists, VellumWire can't be held to a guarantee it has no visibility to monitor.
- Price, positioning, or offer changes made after Step 1.4's GREEN classification that weren't re-assessed.

---

## Fill in per client

- **Client:** [NAME]
- **Package:** [Full Web Rebuild / Brand + Website / Homepage Redesign / Landing Page]
- **Viability classification:** GREEN (confirmed in `viability-check-[cliente].md`, dated [DATE])
- **Expected session volume for Launch Week Check (X):** [number, discussed with client]
- **Session threshold before "zero conversions" counts as a guarantee trigger (Y):** [number, discussed with client — should reflect the lower end of the conversion-rate range documented in `resources/design-resources-library.md`'s Conversion/CRO section, not an optimistic guess]
- **Rebuild timeframe if triggered:** [business days]
- **Signed off by (client-side):** [name, date]
- **Signed off by (VellumWire-side):** [name, date]
