# Agent instructions

A single-page static portfolio site. Keep things simple, to be easily maintained and updated for a non-coder.

## Stack

- Astro 5 (static output)
- Tailwind CSS v4 (via `@tailwindcss/vite`)
- TypeScript
- npm (no pnpm, no yarn)

No React, no UI libraries. Vanilla `<script>` blocks handle the only interactive bits (work filter, play game).

## Commands

- `npm run dev` — local dev server
- `npm run build` — production build (must pass before merging)
- `npm run check` — typecheck `.astro` and `.ts` files

## Where things live

- `src/content.ts` — **all site copy.** Text changes go here, not in components.
- `src/pages/index.astro` — the only page; composes the sections.
- `src/components/` — six components (`SiteHeader`, `WorkSection`, `WorkCard`, `PlaySection`, `ConnectSection`, `SiteFooter`).
- `src/styles/global.css` — Tailwind import + theme tokens. Change colors here.
- `public/` — favicons; `public/work/` for project images.

## Conventions

- **Don't add dependencies casually.** Justify every new one.
- **Don't reintroduce React, shadcn/ui, or Radix.** This rebuild deliberately strips them.
- **Copy changes → `src/content.ts`.** Don't hardcode text in components.
- **Theme changes → `src/styles/global.css`** (the `@theme` block). Don't hardcode hex values in components — use Tailwind utility classes that reference theme tokens (`bg-background`, `text-accent`, etc.).
- TypeScript errors must be fixed, not suppressed.

## Editing flow for the owner

The owner edits `src/content.ts`. Netlify auto-deploys on push. Keep that file readable: clear keys, comments where helpful, no clever indirection.

To add a project image: drop the file into `public/work/`, then set `image: "/work/your-file.png"` on the matching item in `content.ts`. Leaving `image: ""` shows a placeholder card with the title.
