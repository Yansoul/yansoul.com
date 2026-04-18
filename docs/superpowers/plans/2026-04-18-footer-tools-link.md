# Footer Tools Link Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add one low-visibility, site-wide footer external tool link for `Time Overlay` without mixing it into the main footer navigation.

**Architecture:** Keep internal footer navigation and external tool promotion separate in both config and rendering. Add a dedicated footer tool config object in `siteConfig.ts`, then render a muted secondary row under the existing footer nav in `Footer.tsx` only when that config is present. Verify with lint and manual footer QA because this repo does not currently have a focused component test setup for this UI slice.

**Tech Stack:** Next.js App Router, React 18, TypeScript, Tailwind CSS

---

### Task 1: Add Dedicated Footer Tool Config

**Files:**
- Modify: `src/config/siteConfig.ts`

- [ ] **Step 1: Add a dedicated footer tool config shape**

Use a dedicated object instead of pushing the external URL into `footerItems`.

```ts
type FooterToolLink = {
  label: string
  name: string
  href: string
}

export const footerToolLink: FooterToolLink = {
  label: 'Tool:',
  name: 'Time Overlay',
  href: 'https://timeoverlay.co',
}
```

- [ ] **Step 2: Keep the existing footer nav data untouched**

Confirm that `footerItems` still contains only internal routes:

- `/`
- `/about`
- `/projects`
- `/blogs`
- `/friends`
- `/changelog`

Expected: no external tool URLs are mixed into the internal nav array.

- [ ] **Step 3: Run lint after the config change**

Run: `npm run lint`
Expected: lint completes without TypeScript or import errors from `siteConfig.ts`

### Task 2: Render the Secondary Tool Row in the Footer

**Files:**
- Modify: `src/components/layout/Footer.tsx`
- Read for context: `src/components/home/SocialLinks.tsx`

- [ ] **Step 1: Import the dedicated footer tool config**

Update the existing import so the footer can read both the internal nav items and the tool link:

```ts
import { footerItems, footerToolLink } from '@/config/siteConfig'
```

- [ ] **Step 2: Render the tool row under the internal nav row**

Keep the main nav exactly where it is, and add a second row below it.

```tsx
<div>
  <div className="flex flex-wrap justify-center gap-x-6 gap-y-1 text-sm font-medium">
    {footerItems.map((item) => (
      <NavLink key={item.name} href={item.href}>
        {item.name}
      </NavLink>
    ))}
  </div>

  {footerToolLink ? (
    <p className="mt-3 text-xs text-muted-foreground">
      <span className="mr-2 uppercase tracking-[0.18em] text-muted-foreground/70">
        {footerToolLink.label}
      </span>
      <a
        href={footerToolLink.href}
        className="transition hover:text-primary"
      >
        {footerToolLink.name}
      </a>
    </p>
  ) : null}
</div>
```

- [ ] **Step 3: Keep the row visually quiet**

Tune the classes so the row stays lower-emphasis than the main nav:

- smaller text than the nav
- muted default color
- modest top spacing
- no icon, badge, border, or button treatment

Expected: `Time Overlay` is clearly clickable, but the row still reads as footer metadata.

- [ ] **Step 4: Decide and apply final external-link semantics**

If opening in the same tab:

```tsx
<a href={footerToolLink.href}>...</a>
```

If opening in a new tab:

```tsx
<a
  href={footerToolLink.href}
  target="_blank"
  rel="noopener noreferrer"
>
  ...
</a>
```

Expected: the final markup remains do-follow by avoiding `nofollow`, `ugc`, and `sponsored`.

- [ ] **Step 5: Run lint after the footer render change**

Run: `npm run lint`
Expected: lint completes without JSX, import, or Tailwind class issues.

### Task 3: Verify Global Footer Behavior

**Files:**
- Verify in browser: `src/components/layout/Layout.tsx`
- Verify rendered footer from: `src/components/layout/Footer.tsx`

- [ ] **Step 1: Start the local dev server**

Run: `npm run dev`
Expected: Next.js dev server starts successfully and serves the site locally.

- [ ] **Step 2: Check the footer on at least three page types**

Open:

- `/`
- `/about`
- `/blogs`

Expected on each page:

- the footer still renders
- the new tool row appears below the internal nav
- `Time Overlay` links to `https://timeoverlay.co`

- [ ] **Step 3: Check mobile-width behavior**

Use responsive mode around a narrow mobile width.

Expected:

- the footer stacks cleanly
- the tool row stays attached to the nav block
- the right-side copyright, theme toggle, and social links remain readable

- [ ] **Step 4: Sanity-check the final visual hierarchy**

Compare the footer after the change against the design intent:

- internal nav is still primary
- `Tool:` reads like a quiet label
- `Time Overlay` is discoverable but not promotional

- [ ] **Step 5: Final verification**

Run: `npm run lint`
Expected: PASS

Optional manual note to capture in PR or handoff:

- verified desktop footer balance
- verified mobile footer balance
- verified do-follow external link markup
