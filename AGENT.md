# Agent Guide — besimshala.dev

Personal portfolio website for Besim Shala. Single-page static site built with Astro + Tailwind CSS + TypeScript. No React, no JS frameworks in components.

## Stack

- **Astro v6** — static output, no SSR
- **Tailwind CSS v3** — config in `tailwind.config.mjs`
- **TypeScript** — strict mode
- **Deployment** — Vercel (`vercel.json` in root)

## File Structure

```
src/
  pages/index.astro        # Single page, imports all components + global.css
  components/
    Nav.astro              # Fixed top nav, hamburger on mobile
    Hero.astro             # Name, subline, body text, two CTA buttons
    About.astro            # Two-column layout (label | content + quick facts)
    Projects.astro         # 2-col card grid, project data defined inline
    Experience.astro       # Two-column: work (left) | education (right)
    Stack.astro            # Tag pills grouped by category, data defined inline
    Contact.astro          # Centered, email + GitHub/LinkedIn/Email links
  styles/global.css        # @tailwind directives, fade-up animation, cursor blink
public/
  favicon.svg
```

## Design System

All values are in `tailwind.config.mjs` as custom colors/fonts:

| Token       | Value       | Usage                        |
|-------------|-------------|------------------------------|
| `bg`        | `#0a0a0a`   | Page background              |
| `surface`   | `#111111`   | Cards                        |
| `border`    | `#27272a`   | All borders                  |
| `primary`   | `#f5f5f0`   | Primary text                 |
| `muted`     | `#71717a`   | Secondary text, labels       |
| `accent`    | `#6ee7b7`   | Teal — hover states, grades  |
| `tag`       | `#1a1a1a`   | Tag pill background          |
| `tagtext`   | `#a1a1aa`   | Tag pill text                |

**Font:** Geist Mono (Google Fonts, imported in `index.astro` head + `global.css`)

**Rules:** No gradients, no shadows, no glassmorphism. Cards use `1px border border-border`, hover transitions to `border-accent` at `duration-150`.

## Animations

- **Fade-up on scroll** — elements get `class="fade-up"`. Intersection Observer in `index.astro` adds `.visible` class. CSS in `global.css`.
- **Cursor blink** — `class="cursor-blink"` adds `::after` pseudo-element with CSS blink animation. Used on hero `<h1>`.
- **Smooth scroll** — `scroll-behavior: smooth` on `html` in `global.css`.

## Component Conventions

- All data (projects, experience entries, stack categories) is defined as typed arrays in the component frontmatter (`---` block), not in separate files.
- Section headings: `text-xs text-muted uppercase tracking-widest`
- Section spacing: `pt-10 pb-10` (tighter between sections), `pt-16 pb-10` for first section after hero
- Links in projects: `{ label: string, href: string }` — empty `href: ''` renders as muted non-clickable `<span>` (for TBD links)
- Project grades: optional `grade` field renders as `· 1.0` in accent color next to the title
- Experience entries: optional `suborg` field renders between org/period line and role (used for e.g. "Extern for BMW Group", "Allianz Group subsidiary")

## Responsive

- Mobile-first. Single column everywhere on `< md`.
- `md:` breakpoint: two-column layouts (About label/content, Experience work/education)
- `lg:` breakpoint: Projects grid goes 2-column

## Running Locally

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs to dist/
```
