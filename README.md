# Portfolio

Personal portfolio of Ezzeddine Jlassi: <https://www.jlassiezzeddine.com>

## Stack

Next.js (App Router, statically rendered) · React · TypeScript · Tailwind CSS v4 · shadcn/ui (Radix) · Lenis smooth scroll · next-themes

## Run locally

Requires Node 26 (see `.nvmrc`).

```bash
npm ci
npm run dev        # http://localhost:3000
npm run lint
npx tsc --noEmit
npm run build
```

## Updating content

| What | Where |
| --- | --- |
| Work experience | `src/shared/data/experience.ts` |
| Social links and contact details | `src/shared/data/contact.tsx` |
| Resume PDF | Generated at build time from the data files (`src/cv/CvDocument.tsx`), served at `/pdfs/EN_Ezzeddine_Jlassi_CV.pdf` |
| CV-only content: skills, education, languages | `src/shared/data/skills.ts`, `education.ts`, `languages.ts`; CV fields `highlights`, `achievements`, `location` in `experience.ts` |
| Company logos | `public/logos/` |
| Page title, description and keywords | `src/app/layout.tsx` (`metadata`) |

## Deploys

- Hosted on Vercel. Every pull request gets a preview deploy, and merging to `main` deploys to production.
- `main` is protected: changes go through a pull request and CI (lint, type check, build) must pass.
- Dependabot opens dependency updates weekly (npm) and monthly (GitHub Actions).
- AI code review (Greptile) runs only on PRs labelled `CI: Greptile review`; configured in `greptile.json`.

## Environment variables

Set these in Vercel → Project → Settings → Environment Variables.

| Name | Purpose |
| --- | --- |
| `NEXT_PUBLIC_MEASUREMENT_ID` | Google Analytics 4 measurement ID. When it's unset, GA is disabled. |

## Domain

`jlassiezzeddine.com` redirects to `www.jlassiezzeddine.com`, the official address. DNS is managed at OVH, which also handles email (MX records), so don't move DNS without recreating those records first.
