# Agent instructions

A single-page static portfolio site. Keep things simple, to be easily maintained and updated for a non-coder.

## Stack

- Next.js 16 (static export), React 19, TypeScript
- Tailwind CSS v4
- npm (no pnpm, no yarn)

## Commands

- `npm run dev` — local dev server
- `npm run build` — production build (must pass before merging)
- `npm run lint`

## Where things live

- `content.ts` — **all site copy.** Text changes go here, not in components.
- `app/` — Next.js routes (`page.tsx`, `layout.tsx`, `globals.css`)
- `components/` — six components, all directly used by `app/page.tsx`
- `lib/utils.ts` — the `cn()` helper
- `public/` — favicons only

## Conventions

- **Don't add dependencies casually.** The repo was deliberately stripped from 50+ deps to ~14. Justify every new one.
- **Don't reintroduce shadcn/ui or Radix.** They were removed.
- **Copy changes → `content.ts`.** Don't hardcode text in JSX.
- **No unused theme tokens.** `globals.css` only defines what's used.
- TypeScript errors are not ignored (`ignoreBuildErrors` is off). Fix them.

## Editing flow for the owner

The owner edits `content.ts` Netlify auto-deploys. Keep that file readable: clear keys, comments where helpful, no clever indirection.
