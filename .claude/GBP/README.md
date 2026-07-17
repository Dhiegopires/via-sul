# Google Business Profile Management: Master Plan
> New VellumWire offering. Not yet on vellumwire.com. Adapted from a first draft, fact-checked against primary sources before anything here became process — see "What changed from the first draft" below.

---

## What this tier actually is

Not a website build. A recurring service: set up a client's Google Business Profile correctly once, then keep it active every week and every month so it keeps ranking and keeps generating calls. Closer in shape to `After launch/Hold/` (recurring, data-driven, reported monthly) than to `Full-website/` (one build, one launch) — but it has its own prospecting and setup phases that a retainer-on-an-existing-site doesn't need.

**Time required:**
- Setup (one client, one time): 3-5 business days
- Monthly management per client: 4-6h (basic tier) / 5-8h (complete tier), dropping to 2-3h once templates and Claude-assisted drafting are running (see `3-monthly-management/`)

---

## Folder structure

```
GBP/
├── README.md                                  ← this file
│
├── 0-briefing/
│   └── 0.1-client-intake-checklist.md         ← due diligence before accepting a client (suspension-risk screening)
│
├── 1-prospecting/
│   ├── 1.1-niche-viability-prompt.md          ← AI prompt: score a niche/city combo before prospecting it
│   └── 1.2-prospect-audit-prompt.md           ← AI prompt: score an individual business's profile + draft cold email
│
├── 2-setup/
│   └── 2.1-onboarding-setup-checklist.md      ← the one-time setup, field by field
│
├── 3-monthly-management/
│   ├── 3.1-google-posts-prompt.md             ← AI prompt: batch-generate weekly posts
│   ├── 3.2-review-response-prompt.md          ← AI prompt: batch-draft review responses
│   └── 3.3-monthly-report-prompt.md           ← AI prompt: generate the client-facing monthly report
│
├── 4-risk-protocol.md                         ← suspension prevention — read before touching a live client profile
│
├── 5-measurement/
│   └── 5.1-baseline-and-geogrid.md            ← baseline capture, geo-grid scans, attribution setup
│
└── 6-site-positioning/
    └── 6.1-service-page-copy-prompt.md        ← AI prompt: write the vellumwire.com service page for this offering
```

---

## What changed from the first draft

The original plan (written by AI, unreviewed) was fact-checked against primary sources — Whitespark's own site, BrightLocal's actual current survey, Sterling Sky's actual published suspension playbook, Google's own support docs — before any of it became process. Four things were wrong or fabricated and matter enough to flag here so nobody re-introduces them later:

1. **The 42%/28%/17% suspension-cause breakdown was fabricated.** No such percentage breakdown exists anywhere in Sterling Sky's published material. The real, documented causes are different — see `4-risk-protocol.md`, which uses Sterling Sky's actual list.
2. **"87% of consumers used Google to evaluate local businesses" is stale and the trend direction is wrong.** BrightLocal's current survey shows Google's share at 83% in 2025, **dropping to 71% in 2026** — the real story is a declining share, not a stable high number. Consumers are checking more platforms, not just Google. This changes the pitch: Google still matters most, but "Google is the only thing that matters" is no longer accurate and shouldn't be said to a client.
3. **The "214-point penalty" for wrong primary category has no findable source** — it only appears in SEO content-mill articles that don't cite Whitespark directly. Dropped. The underlying fact (wrong primary category hurts ranking) is real and well-corroborated; the specific number is not.
4. **"Google Guaranteed" (the LSA trust badge) was retired by Google in October 2025**, replaced by a unified "Google Verified" badge (the $2,000 guarantee behind it was also discontinued). Any client-facing material mentioning Local Services Ads must say "Google Verified."

Everything else in the files below either matched a primary source directly or is marked with the confidence level the research actually supports — several stats (photo-count impact, the 4.2–4.5 star "sweet spot," review-recency thresholds) are real studies but from specific years, not universal constants; they're kept because the underlying direction is well-supported, with the source year noted so nobody cites them as "2026 data" by mistake.

---

## The service, in one sentence for you (not the client)

Set up and maintain a client's Google Business Profile so it shows up in the Map Pack for the searches that turn into calls, using only what's actually confirmed to move ranking — not myths, not busywork.

## The three pillars that actually move Map Pack ranking (confirmed: Whitespark 2026, 47 experts/187 factors — whitespark.ca/local-search-ranking-factors/)

**Relevance** — does the profile match what was searched. **Distance** — how close the business is to the searcher (not controllable). **Prominence** — how active, reviewed, and trusted the business looks (controllable, and where almost all of your work happens).

Confirmed weight: **GBP profile signals ~32%** of Map Pack ranking, **reviews ~20%** and rising (grew from ~16% in 2023). On-page and links matter too, but the exact split claimed in the first draft (19%/15%) couldn't be verified against a primary source and isn't repeated here as a hard number — treat the profile and reviews as where the bulk of your controllable leverage sits.

**The single most load-bearing individual fact, independently confirmed:** the business being open *at the moment someone searches* is the **#5** ranking factor (Whitespark 2026, whitespark.ca/blog/7-local-search-ranking-factors-that-may-challenge-your-current-thinking/). A business can rank #1 open and drop to #4 the moment it closes for the day. **Correct, complete hours — including holiday hours — are not a nice-to-have. They are a ranking mechanism.**

---

## Pricing (VellumWire's, intentionally below market to build the first case studies)

| Tier | Setup | Monthly |
|---|---|---|
| Basic | $199–299 | $150–200/mo |
| Complete | $199–299 | $250–300/mo |

For context, not as a target to match yet: the real market for a *complete* managed tier (GBP + citations + reviews + content, bundled with broader local SEO) commonly runs $450–1,500/mo — BrightLocal's own managed service is $799–1,299/mo. VellumWire's complete tier is priced as an intro rate to land clients without a US case study yet, not a ceiling. Revisit pricing once 3-5 clients are live and there's real before/after data to point to.

---

## Rules that never change

1. **Every number that goes in front of a client (setup checklist item, ranking claim, monthly report figure) must be traceable to something real** — the client's own GBP Insights data, a source you can point to, or explicitly marked as an estimate. This is the same rule that runs through every other tier in this methodology (root `README.md`), and it's the exact rule this GBP plan violated in its first draft.
2. **Your agency account is always Manager, never Owner.** The client's own domain-email account stays primary owner. See `4-risk-protocol.md` — this single rule is what prevents one bad edit from cascading into every client you manage losing their listing at once.
3. **No more than one structural edit (name, category, address) per client per week.** Batched structural edits are the single most common trigger Sterling Sky documents for suspension.
4. **Reviews get a response within 48 hours — negative reviews always drafted by Claude, always reviewed and sent by a human.** Never automated end-to-end.
5. **Posts go out weekly, every client, no exceptions** — confirmed: Posts do not move ranking directly (Sterling Sky ran a 9-week, 441-keyword test — sterlingsky.ca/do-google-posts-impact-ranking/ — and found no ranking effect), but they do keep the profile looking active, feed AI-generated Maps summaries, and are one of the cheapest things to automate with Claude. Do them because they're nearly free, not because they move rank.
6. **No client is promised a specific lead count.** Same principle as every other tier (root `README.md`, rule 6) — you can guarantee the profile is complete, active, and free of provable mistakes. You cannot guarantee what a searcher does after finding the number.
7. **The client-facing copy for this service never uses the acronym "GBP" or the phrase "Google Business Profile" as if the reader already knows it.** Most small business owners don't. Say "your Google listing," "your profile that shows up on Google Maps," or similar — see `6-site-positioning/6.1-service-page-copy-prompt.md`.

---

## Monthly cadence (once a client is onboarded)

```
WEEKLY (every client)
[ ] 1 Google Post published — 3.1-google-posts-prompt.md drafts a batch, you review and schedule
[ ] New reviews since last check responded to within 48h — 3.2-review-response-prompt.md drafts, you personalize and send
[ ] Q&A checked for new questions

MONTHLY
[ ] 5-10 new photos added
[ ] GBP Insights pulled: calls, direction requests, website clicks, photo views
[ ] Report generated (3.3-monthly-report-prompt.md) and sent
[ ] NAP spot-checked on 2-3 major directories
[ ] Next month's holiday hours confirmed and set (see the #5-ranking-factor note above — this is not administrative busywork)

QUARTERLY
[ ] Full profile audit against 2-setup/2.1-onboarding-setup-checklist.md
[ ] Primary category re-checked against current top-3 competitors in the Map Pack
[ ] Citation sweep for new inconsistencies
[ ] Review velocity checked against the 2-5/week target
```

> ✅ **CHECKPOINT — antes de mandar o relatório mensal**
> - [ ] Todo número do relatório existe nos dados reais do GBP Insights — nada estimado
> - [ ] Se ligações/cliques caíram, o relatório nomeia uma causa provável, não só o número
> - [ ] Uma recomendação de ação por mês, não uma lista
> - [ ] Linguagem sem jargão técnico ("impressão de busca" vira "quantas vezes seu perfil apareceu")
>
> Se os itens acima batem → manda. Se não → corrige antes de mandar, não depois.

---

## Where the automatable pieces are

Everything Claude can draft (not decide, not send) lives in `1-prospecting/`, `3-monthly-management/`, and `6-site-positioning/` as standalone prompt files, same pattern as every other tier: paste the real client data in, review the output, a human sends it. Nothing here auto-publishes.
