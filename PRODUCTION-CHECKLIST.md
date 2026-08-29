# Production QA — Vansh Cinematic Portfolio

## Required before public launch

### Visual
- Replace any synthetic/abstract case-study visuals with approved real evidence where appropriate.
- Check the supplied portrait crop on desktop, tablet and mobile.
- Verify all client/product visuals are authorized for public use.
- Confirm public wording for every project metric and ownership claim.

### Performance
- Test Lighthouse on mobile and desktop.
- Verify first contentful paint and largest contentful paint with production assets.
- Compress all videos/images before adding them.
- Keep heavy 3D/WebGL scenes lazy-loaded if introduced later.
- Verify no layout shift occurs while the portrait or case-study media loads.

### Accessibility
- Keyboard-navigate every interactive element.
- Test reduced-motion mode.
- Test screen reader headings and link labels.
- Check contrast on muted/technical text.
- Confirm skip link works.

### Conversion
- Test every CTA.
- Confirm the email/contact destination.
- Test the case-study links.
- Confirm contact form or email handoff works on mobile.

### Claims
- `BUILT` = personally owned technical work.
- `REPORTED` = metric supplied by resume/project material.
- `REFERENCE` = visual/product context.
- `PRIVATE` = never publish.
