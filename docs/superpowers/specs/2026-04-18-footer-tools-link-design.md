# Footer Tools Link Design

## Goal

Add one site-wide external tool link in the footer for `Time Overlay` that is visible on every page but intentionally low-emphasis.

## Current Context

- The global footer lives in `src/components/layout/Footer.tsx`.
- The footer is rendered through `src/components/layout/Layout.tsx`, so any footer change is site-wide.
- Existing footer navigation links are sourced from `src/config/siteConfig.ts` via `footerItems`.
- The left side of the footer currently behaves like internal site navigation. The right side already contains copyright, theme toggle, and social links.

## Approved Direction

Use a secondary line under the existing footer navigation on the left side.

This keeps the external tool link globally visible without making it feel like part of the primary site navigation or competing with the copyright and social cluster on the right.

## Content Specification

- Label text: `Tool:`
- Link text: `Time Overlay`
- Destination: `https://timeoverlay.co`
- Link treatment: standard external link, do-follow

Do not add `nofollow`, `ugc`, or `sponsored`.

## UX Rules

- The main footer nav remains unchanged and keeps visual priority.
- The tool link sits directly below the nav as a distinct secondary row.
- The row should feel like metadata, not a CTA.
- The external link should not use a button, pill, badge, icon, or accent background.
- Hover may slightly increase contrast, but should not become louder than the main nav.

## Visual Direction

- Placement: left column, below the existing `footerItems` row
- Emphasis: one level weaker than the existing footer nav
- Typography:
  - Row size should be smaller than the main nav
  - `Tool:` should read as a soft label
  - `Time Overlay` should remain clearly clickable without becoming bold promo copy
- Color:
  - Default state should use muted foreground styling
  - Hover should only gently shift toward the site primary text color
- Spacing:
  - Add a small top gap from the main nav row
  - Keep the row visually attached to the nav block, not floating independently

## Responsive Behavior

- On small screens, the tool row should wrap naturally with the existing footer stack.
- The secondary row should stay left-aligned with the nav block even when the footer collapses vertically.
- The new row must not create a visually heavier mobile footer than the current one.

## Implementation Notes

- Keep this link separate from `footerItems`.
- Add a dedicated footer tool config object in `src/config/siteConfig.ts` rather than mixing internal and external links into one array.
- Render the tool row only when that config object exists.
- Use a normal anchor element or equivalent external-link markup so the semantics are explicit.
- If the implementation opens a new tab, use only security attributes needed for that behavior.

## Non-Goals

- No multi-tool footer directory in this change
- No homepage hero, header, or inline body promotion
- No analytics-specific instrumentation requirement for this single link
- No visual label such as “featured”, “sponsored”, or “recommended”

## Acceptance Criteria

- Every page that renders the global footer now shows one low-emphasis external tool link.
- The link appears below the internal footer nav, not inside it.
- The link text is `Time Overlay`.
- The destination resolves to `https://timeoverlay.co`.
- The markup remains do-follow.
- The footer still feels balanced on desktop and mobile.
