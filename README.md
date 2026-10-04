# Vansh Gautam — Cinematic Portfolio v8

This build uses Vansh's supplied portrait and a purpose-built Brosa visual rather than copying third-party site imagery.

## Core promise
Bring me the problem. I'll figure out what needs to be built—and take it from there.

## Included
- cinematic opening
- founder/problem-first positioning
- interactive problem choices
- discovery → engineering → deployment methodology
- 2022→2026 origin film
- Brosa cinematic chapter
- Centura and Counsel AI proof
- case-study routes
- technical depth
- engagement model
- client-fit filter
- final conversion CTA

## Run
npm install
npm run dev

Then open http://localhost:3000.

## Contact form email

The contact form sends inquiries to `vanshgautam2005@gmail.com` through Resend. Set these server-side environment variables locally and in your deployment:

- `RESEND_API_KEY`: an API key from Resend.
- `RESEND_FROM_EMAIL`: a sender address authorized by Resend. `Portfolio <onboarding@resend.dev>` can be used for testing to your own verified address; use an address on a domain verified with Resend for production.

See `.env.example` for the variable names. Do not expose the API key through a `NEXT_PUBLIC_` variable.


## v9 focus
- Persistent cinematic chapter rail on desktop.
- Added an art-directed coding motif to the origin story.
- Added a manifesto/interlude to clarify the consulting proposition.


## v10 focus
- Added a documentary-style scroll sequence between methodology and proof.
- The sequence visually reframes the consulting method as an investigation:
  pattern → investigation → build → result.
- Added original system visualizations using DOM/CSS geometry.


## v11 focus
- Added the supplied Brosa visual as an explicit product-evidence layer on the homepage and Brosa case study.
- Added an ownership breakdown to make technical responsibility explicit.
- Kept the visual framing distinct from Brosa's site design outside the supplied evidence panel.
- Uses the supplied portrait asset for the personal trust layer.


## v12 focus
- Added original Centura pipeline visualization.
- Added original Counsel AI failure/recovery execution visualization.
- Strengthened the proof hierarchy so the three flagship cases have distinct visual signatures.


## v13 focus
- Added a dedicated architecture/decision layer.
- Communicates how Vansh decides between conventional software, automation, AI/agents, and custom models/modules.
- Makes the consulting proposition more concrete for technically serious buyers.


## v14 focus
- Added a proof/credibility ledger separating BUILT, REPORTED, REFERENCE and PRIVATE information.
- Makes the site more trustworthy for serious buyers and easier to maintain as evidence grows.
- Final CTA now reinforces honest disclosure instead of overclaiming.


## v15 focus

Production-hardening pass:
- keyboard skip link
- focus-visible states
- reduced-motion fallback
- safer responsive hero composition
- layout/paint containment on expensive scenes
- overflow/overscroll cleanup
- explicit production QA checklist


## v16 focus
- Added branded signal-button interactions for primary conversion actions.
- Added a visual method rail beneath the consulting process.
- Added a final outcome/checkpoint sequence: understand → decide → build → prove.
- Added a minimal site footer and return-to-top affordance.
