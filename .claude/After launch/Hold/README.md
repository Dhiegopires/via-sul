# After Launch — Hold / Build: Monthly Plan

## What happens in this tier

The project delivered (from `Full-website/` or any other tier). Now it runs. This is not a project step with a start and end — it is a recurring monthly cycle that starts after launch and runs for as long as the client is on a monthly plan.

Every month has the same skeleton: pull data, read it, act on it, report it. The AI does the reading and reporting. You do the judgment calls. Afonso does the implementation.

**Time required per month:**
- Hold: ~2 hours (data pull + report generation + fixes)
- Build: ~6–8 hours (data pull + analysis + A/B brief + one design delivery + report + implementation)

---

## The two tiers

### Hold — $400/month

The site stays healthy and accurate. No surprises.

**What's included:**
- Uptime monitoring (instant alert if the site goes down)
- Up to 2 hours of edits: text, images, contact info, hours, prices
- Monthly backup, verified
- Form and CTA check — are submissions arriving?
- 1-page monthly report: traffic, top sources, conversion rate

**What's not included:** new sections, A/B tests, new pages, new copy. Any request outside the 2 hours is scoped and quoted before starting.

### Build — $800/month

The site improves every cycle based on what the data shows.

**What's included (everything in Hold, plus):**
- 1 A/B test per month — headline, CTA, or identified friction point
- Copy refinement based on scroll depth and heatmap behavior
- 1 design delivery — new section, campaign landing page, or page update
- Monthly 30-min alignment call
- Data-backed recommendation: one specific action with one clear reason

**What's not included:** full page redesigns, new technical functionality, new identity work. Any out-of-scope request becomes a separate project with its own quote.

---

## Your job each month

### Week 1: Data pull

**See "GA4 + Hotjar: where to find things and what they mean" below if you don't already know exactly where each number lives in the GA4/Hotjar UI** — bounce rate and conversion rate are not shown by default in GA4 and trip up almost everyone.

Pull from the client's Google Analytics and Hotjar (Build only). You need:

- Sessions, users, bounce/engagement rate vs. previous month
- Top traffic sources (organic, direct, referral, paid)
- Top landing pages by sessions
- Conversion events: `generate_lead` (confirmed leads), `cta_click` (diagnostic only, not the lead count), form submissions, phone clicks
- Hotjar: scroll depth on key pages, click heatmap on CTAs (Build only)

No access? Contact the client. Do not generate the report without real data.

### Week 1: Generate the monthly report

Open `8.2-monthly-report-prompt.md`. Paste the data. Run in a new Claude chat. Review before sending — every number in the report must be traceable to the raw data you pulled.

For Build: run `8.4-monthly-analysis-prompt.md` first. It reads the data and surfaces the recommendation. Use its output to inform the A/B brief and the design delivery decision.

> ✅ **CHECKPOINT — antes de mandar o relatório pro cliente**
> Não precisa reler o relatório inteiro linha por linha todo mês. Verifique só isto:
> - [ ] Todo número no relatório existe nos dados brutos que você colou — nenhum estimado, nenhum arredondado
> - [ ] A linha de "leads confirmados" (`generate_lead`) e a linha de "cliques de CTA" (`cta_click`) estão separadas, não combinadas numa só
> - [ ] Se leads confirmados = 0 e sessions > 0: isso vira a recomendação do mês, não uma linha perdida na tabela
> - [ ] Uma recomendação só (Build) — se o rascunho tem mais de uma, corta até sobrar a mais importante
>
> Se os itens acima batem → manda. Não precisa mais nada.

### Week 2: Act on the data (Build only)

Fill out `8.3-ab-test-brief.md`. One test, one variable, one metric. Brief Afonso using the standard component request template from `../../Full-website/5-development/5.2-component-request-template.md`.

Define the one design delivery for the month. Brief Afonso.

### Week 3: Implement (Afonso)

Afonso implements the A/B test variant and the design delivery. Both go to staging first. You review. Then deploy.

### Week 4: Report and alignment

Send the monthly report to the client. Schedule the 30-min call (Build only). On the call: review what the data showed, what was done, what's planned for next month. One recommendation per call — not a list of ideas.

---

## GA4 + Hotjar: where to find things and what they mean

Read this before pulling data for `8.2-monthly-report-prompt.md`, the Launch Week Check, or any month's data pull. Verified against Google's own Analytics Help documentation and Hotjar's own Documentation site — links below, not cited from memory.

### What should already be set up (built in Step 5, verified in Step 6)

Before any of this is useful, confirm these exist — they're built during development, not during analysis:

- GA4 property created and linked to the site (`../../Full-website/5-development/README.md`)
- Events firing correctly, with the naming this whole methodology depends on:
  - `generate_lead` — fires only on a **confirmed completion** (Calendly's `calendly.event_scheduled`, a form's actual submit, a thank-you page load). Never on a click alone.
  - `cta_click` — a separate, lower-tier event for the click itself, kept for funnel diagnosis
  - `form_submit`, `phone_click` — if applicable to the client's site
- Hotjar installed on: homepage, primary product/service page, contact/lead capture page (see the onboarding checklist above)

If any of this is missing, there's nothing to read yet — go fix Step 5/6 first.

### GA4 — where to actually find each number

GA4's interface hides two of the most-needed numbers by default. This trips up almost everyone coming from the old Universal Analytics.

**Sessions, Users, Top traffic sources:** Reports → Life cycle → Acquisition → Traffic acquisition. Default report, no customization needed. Group by "Session default channel group" for organic/direct/referral/paid split.

**Top landing pages:** Reports → Life cycle → Engagement → Pages and screens. Change the dimension to "Landing page" to see sessions per entry page.

**Engagement rate:** shows up as a default column in the Traffic acquisition and Pages and screens reports. No customization needed. [Confirmed via Google Analytics Help](https://support.google.com/analytics/answer/12195621).

**Bounce rate — NOT shown by default, must be added:** GA4 replaced bounce rate with engagement rate as the default metric and inverted the logic (engaged session = 10+ seconds, a conversion event, or 2+ pageviews; bounce = the opposite). Bounce rate still exists as a metric, it's just hidden. To see it: open Pages and screens, click the pencil icon (Customize report) top right, go to Metrics → Add metric, search "Bounce rate," add it, Apply → Save. [Confirmed via Google Analytics Help](https://support.google.com/analytics/answer/12195621).

**Conversion rate — NOT shown by default, must be added:** same customize-report path: pencil icon → Metrics → Add metric → search "Session conversion rate" (sessions with a conversion ÷ total sessions) or "User conversion rate" (users who converted ÷ total users). Apply → Save. For a one-off deeper look, use Explore → Blank: add "Session source / medium" as a dimension, add Sessions / Conversions / Session conversion rate as metrics.

**Conversion event counts (`generate_lead`, `cta_click`, etc.):** Reports → Life cycle → Engagement → Events. To have an event count toward GA4's own "Conversions" total, mark it as a key event in Admin → Events — never do this for `cta_click`, that would make GA4's conversion count include mere clicks.

### Hotjar — where to actually find each thing

Confirmed against [Hotjar's own Documentation](https://help.hotjar.com/hc/en-us).

**Heatmaps:** from the Heatmaps page, New heatmap → pick the page URL → View heatmap. Live in about 90 seconds once enough sessions exist. Three map types:
- **Scroll map**: how far down the page visitors actually get — this is what tells you if the primary CTA's position (verified in `6.8-conversion-signals.md` CV2) is actually being seen once real visitors, not just the pre-launch test, hit the page.
- **Click map**: where visitors click, including clicks on things that aren't actually clickable.
- **Engagement zones**: clicks + scroll + mouse movement combined — use this for a fast first look before drilling into individual maps.

**Recordings:** filter by URL, device type, time on site, or rage clicks (repeated clicking/tapping on the same spot — a strong signal of a confused or frustrated visitor). Watching 5-10 recordings of sessions that did *not* fire `generate_lead` is one of the highest-value 15-minute investments in this whole process.

### Metrics glossary — what's actually normal, and what isn't verified

**Conversion rate:** cited across `../../resources/design-resources-library.md`, four independent sources disagree materially (HubSpot ~1.7%, WordStream ~2.35% cross-industry, Ruler Analytics ~5.1%, Unbounce ~6.6% for dedicated landing pages) because they measure different things. Don't compare a client's number to a single one of these as if it's the answer — compare it to the client's own baseline from the Launch Week Check, and treat the external range only as a sanity check for "is zero actually anomalous" (it is, against every one of these sources).

**Scroll depth to primary CTA:** no verified external benchmark exists for this — it depends entirely on page length, industry, and awareness level (a page correctly built for a problem-aware audience is *supposed* to require some scrolling before the primary ask). Use the client's own first-week Hotjar reading as their baseline, watch it move after each change.

**Engagement rate:** GA4's own definition is new enough that most published "benchmarks" still use pre-GA4 assumptions. Track trend over time for this client, not a claimed industry average.

### Reading GA4 + Hotjar together — a diagnosis, not just two separate numbers

| What you see | Likely diagnosis | Where to check next |
|---|---|---|
| High scroll depth to CTA + high CTA click rate + zero `generate_lead` | The page works. The problem is downstream — the external tool (Calendly availability, form notification email, WhatsApp response). This is exactly CV7's territory. | Re-run `6.8-conversion-signals.md` CV7 against the live site |
| Low scroll depth to CTA + low bounce/high engagement | Visitors are staying but not reaching the CTA — page is too long, or the content above it isn't pulling them down | Re-check CV4 and section order against `4.3-layout-preview-prompt.md` |
| High bounce + low scroll depth from the very first section | First-impression problem — the hero isn't earning the scroll | Re-check the hero against the page's assigned formula/awareness level in `2-architecture/2.3-conversion-architecture-prompt.md` |
| High CTA clicks but the click goes to a link whose destination doesn't match its text | Visitors are being told one thing and getting another | This is exactly what CV6 (link honesty) exists to catch — re-run it |
| Rage clicks clustered on one element | Visitors expect it to do something it doesn't | Watch the actual recordings filtered to that page/element, don't just read the count |

---

## Files in this tier

| File | For | What it does |
|---|---|---|
| `8.1-onboarding-checklist.md` | You | First month setup — access, tools, baselines |
| `8.2-monthly-report-prompt.md` | You → Claude | Generates the 1-page HTML monthly report |
| `8.3-ab-test-brief.md` | You → Afonso | Defines the A/B test hypothesis and success metric |
| `8.4-monthly-analysis-prompt.md` | You → Claude | Reads the month's data and generates the recommendation (Build only) |

---

## Rules that never change

- Every number in the report comes from real data. No estimates, no rounding up.
- The recommendation is one action per month. Not a list. One.
- Anything outside the 2-hour edit budget (Hold) or the defined deliverables (Build) is quoted before starting — never absorbed silently.
- If Hotjar or Analytics access is lost, pause the affected deliverable and notify the client immediately.
- Price review: annually. If scope is consistently above what was sold, the conversation happens before the next renewal — not after.

---

## Step completion checklist (monthly)

Run this at the end of every month cycle:

- [ ] Data pulled from Analytics (and Hotjar if Build)
- [ ] Report generated and reviewed for accuracy
- [ ] All numbers traceable to raw data
- [ ] Report sent to client
- [ ] A/B test implemented and live (Build only)
- [ ] Design delivery reviewed on staging and deployed (Build only)
- [ ] Alignment call done (Build only)
- [ ] Next month's recommendation documented
- [ ] Edit hours logged for the month (Hold: confirm within 2h budget)
- [ ] Any out-of-scope requests quoted in writing before starting
