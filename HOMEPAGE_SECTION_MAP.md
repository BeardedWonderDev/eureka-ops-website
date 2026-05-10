# Eureka Ops Homepage Section Map

## Purpose
This document maps the approved Eureka Ops homepage strategy and copy draft onto the existing Cruip template structure in this repository.

Current homepage entrypoint:
- `app/(default)/page.tsx`

Current imported homepage components:
- `components/hero-home.tsx`
- `components/workflows.tsx`
- `components/features.tsx`
- `components/testimonials.tsx`
- `components/cta.tsx`
- plus `components/page-illustration.tsx`

---

## Current Template Shape

The template currently renders homepage sections in this order:
1. `PageIllustration`
2. `Hero`
3. `Workflows`
4. `Features`
5. `Testimonials`
6. `Cta`

This is a decent starting shell, but it does not map perfectly to the desired Eureka Ops information architecture.

---

## Recommended Homepage Mapping

### Final desired homepage order
1. Header
2. Hero
3. Problem section
4. What Eureka Ops does
5. Workflow use cases
6. How the pilot works
7. Why this instead of hiring first
8. Why Eureka Ops
9. Founder section
10. FAQ
11. Final CTA
12. Footer

---

## Component-by-Component Mapping

## 1. `components/ui/header.tsx`

### Current role
Template header with logo plus auth CTAs:
- Sign In
- Register

### Recommended Eureka Ops role
Replace with a launch-site header.

### Needed changes
- remove `Sign In`
- remove `Register`
- add simple anchor navigation for homepage sections:
  - How It Works
  - Why Eureka Ops
  - FAQ
- replace right-side CTA with:
  - **Request a Pilot Review**
- CTA should open the pilot review modal wizard, not link to `/signup`

### Notes
Keep the header minimal and premium. No SaaS-style auth framing.

---

## 2. `components/hero-home.tsx`

### Current role
Hero section with:
- product-team headline
- generic SaaS CTAs
- video thumbnail modal

### Recommended Eureka Ops role
This remains the homepage hero but needs full content replacement.

### Content to map in
Use the copy from `HOMEPAGE_COPY_DRAFT.md` section 1:
- eyebrow
- headline
- subheadline
- primary CTA
- secondary CTA
- supporting microproof

### CTA behavior
- primary CTA → open pilot review modal
- secondary CTA → scroll to `#how-it-works`

### Visual recommendation
Short term:
- keep existing visual shell if needed for speed
- remove any obviously product-demo framing

Longer term:
- replace the current video module with either:
  - a premium workflow illustration
  - an abstract systems/orchestration visual
  - a custom static panel representing operational workflows

### Notes
This is the most important section for first impression. If implementation time is limited, prioritize copy and CTA behavior over hero artwork changes.

---

## 3. `components/workflows.tsx`

### Current role
Three spotlight cards under a section called “Tailored Workflows”.

### Recommended Eureka Ops role
Repurpose this component into the **Problem section**.

### Content to map in
Use copy from `HOMEPAGE_COPY_DRAFT.md` section 2:
- section label: The Bottleneck
- heading: execution problem
- intro/supporting paragraph
- 3 or 4 pain cards

### Recommended adaptation
The current 3-card spotlight pattern can become:
- Follow-up slips
- Coordination gets messy
- The owner stays the bottleneck

If space allows, add a fourth card or move one pain into the intro paragraph.

### Notes
The current visual card treatment is a good fit for pain points if the images are removed or replaced.

---

## 4. `components/features.tsx`

### Current role
Large central section with:
- heading
- large feature image
- six small feature items

### Recommended Eureka Ops role
Use this as a combined middle-of-page strategic section block.

### Recommended split usage
This component can be reworked to carry two adjacent Eureka Ops sections:
1. **What Eureka Ops Does**
2. **How the Pilot Works**

### Option A: Keep as one large section
- heading + intro = What Eureka Ops Does
- replace six feature items with:
  - Diagnose the bottleneck
  - Design the workforce
  - Deploy and refine
  - Pilot Review
  - Deployment
  - Refinement

### Option B: Better structure
Split this component into two new components:
- `components/what-we-do.tsx`
- `components/how-it-works.tsx`

This is the cleaner long-term approach and fits the repo rules better if implementation begins.

### Recommendation
For actual implementation, prefer **Option B** even if it means adding two new focused components. The current `features.tsx` is carrying too many unrelated concerns for the Eureka Ops structure.

---

## 5. Workflow Use Cases section

### Current template coverage
No exact component match.

### Recommendation
Create a new component:
- `components/use-cases.tsx`

### Content to map in
Use `HOMEPAGE_COPY_DRAFT.md` section 4:
- heading
- intro
- 6 to 8 use case cards

### Why new component
The existing `workflows.tsx` only supports three large cards and is a better fit for the problem section. Use cases need a denser grid.

### Recommended UI pattern
Use a 2-column or 4-card grid with short titles and one-line descriptions.

---

## 6. Hiring comparison section

### Current template coverage
No exact component match.

### Recommendation
Create a new component:
- `components/capacity-comparison.tsx`

### Content to map in
Use `HOMEPAGE_COPY_DRAFT.md` section 6:
- heading
- intro/supporting copy
- Traditional path vs Eureka Ops path comparison
- generalized illustrative pricing/value lines

### Recommended UI pattern
Two-column comparison cards with a short supporting paragraph beneath.

### Notes
This deserves its own section because it supports premium pricing logic and category definition.

---

## 7. `components/testimonials.tsx`

### Current role
Large testimonial masonry layout with fake logos, fake people, and category filters.

### Recommended Eureka Ops role
Do **not** keep this as a testimonials section in its current form.

### Reason
We should not use fake proof, fake brands, or invented testimonials.

### Recommended replacement role
Repurpose or replace this component with the **Why Eureka Ops** section and/or **Founder section**.

### Best implementation options
#### Option A: Repurpose into “Why Eureka Ops”
- remove all logos, faces, and filter buttons
- convert masonry cards into differentiator cards

#### Option B: Replace with two new components
- `components/why-eureka-ops.tsx`
- `components/founder.tsx`

### Recommendation
Prefer **Option B** for actual implementation. The current testimonial masonry structure is too tied to fake proof patterns and should not survive the rewrite.

---

## 8. FAQ section

### Current template coverage
No dedicated component.

### Recommendation
Create a new component:
- `components/faq.tsx`

### Content to map in
Use `HOMEPAGE_COPY_DRAFT.md` section 9.

### Recommended UI pattern
Simple accordion or stacked Q&A list.

### Notes
Because this is a launch site, a simple static FAQ list is sufficient. No need for fancy interaction unless it is already easy within the template.

---

## 9. `components/cta.tsx`

### Current role
Final conversion section with generic product CTA copy.

### Recommended Eureka Ops role
Use as the final CTA section.

### Content to map in
Use `HOMEPAGE_COPY_DRAFT.md` section 10:
- heading
- body copy
- primary CTA
- optional supporting line

### CTA behavior
- primary CTA opens pilot review modal
- optional secondary CTA can scroll back to How It Works or be removed entirely

### Recommendation
For Eureka Ops, one primary CTA is enough here. Remove generic second button unless there is a clear reason to keep it.

---

## 10. `components/ui/footer.tsx`

### Current role
Generic product/site footer with fake nav taxonomy.

### Recommended Eureka Ops role
Replace with a simple consulting-site footer.

### Needed changes
Replace footer columns with minimal real links:
- About
- Founder
- Privacy Policy
- Contact

Replace brand copy with:
- **Eureka Ops**
- **Custom AI workforce systems for founder-led service businesses.**

Remove:
- fake content library links
- fake company links
- irrelevant social icons if not real

### Notes
The footer should feel sparse and intentional.

---

## Recommended New Components

To fit the approved strategy cleanly, these are the components worth adding during implementation:
- `components/problem.tsx`
- `components/what-we-do.tsx`
- `components/use-cases.tsx`
- `components/how-it-works.tsx`
- `components/capacity-comparison.tsx`
- `components/why-eureka-ops.tsx`
- `components/founder.tsx`
- `components/faq.tsx`
- `components/pilot-review-modal.tsx`

This is more maintainable than trying to force all content into the original SaaS-specific sections.

---

## Recommended `app/(default)/page.tsx` Structure After Refactor

Suggested homepage assembly:

```tsx
<PageIllustration />
<HeroHome />
<Problem />
<WhatWeDo />
<UseCases />
<HowItWorks />
<CapacityComparison />
<WhyEurekaOps />
<Founder />
<Faq />
<Cta />
```

If speed matters more than structural cleanliness for the first pass, an intermediate implementation can temporarily repurpose the existing components before splitting them.

---

## Pilot Review Modal Mapping

### Requirement
All primary CTAs should open a modal wizard.

### Recommended component
- `components/pilot-review-modal.tsx`

### Required UX flow
#### Step 1: Contact form
Collect at minimum:
- full name
- business name
- email
- phone
- website or business type
- short description of the operational bottleneck

#### Step 2: Appointment booking
After form completion:
- submit or store lead details
- load Go High Level calendar booking view
- allow user to schedule the pilot review immediately

### Integration notes
- validate form inputs before advancing
- do not expose raw API credentials client-side
- handle Go High Level API through server-side endpoints or server actions
- capture both lead submission and booking state clearly

### CTA hooks
These buttons should open the modal:
- hero primary CTA
- header CTA
- final CTA
- any mid-page pilot CTA buttons

---

## Implementation Priority

If coding starts immediately, the best order is:
1. rewrite header
2. rewrite hero
3. add pilot review modal shell
4. replace fake testimonials/proof sections
5. add problem / what-we-do / use-cases / FAQ sections
6. clean footer

---

## Non-Negotiables

- do not use fake testimonials
- do not use fake client logos
- do not use invented social proof
- do not make the site sound like a SaaS product
- do not make the CTA feel generic; it must clearly point to the pilot review flow
