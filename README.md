BrightFuture Foundation — Simple NGO site built with Next.js 16 + Tailwind CSS.

## Quick Start

Run the dev server:

```powershell
npm install
npm run dev
```

Open `http://localhost:3000`.

## Pages

- `/` — Hero landing with value props and CTAs
- `/about` — Mission and vision
- `/programs` — Program pillars and reach
- `/impact` — Metrics and outcomes snapshot
- `/donate` — Tiers and giving options
- `/contact` — Email form (mailto) and address

## Customize

- Brand: update `public/logo.svg` and text in `app/components/Navbar.tsx` and `app/components/Footer.tsx`.
- Copy: edit content blocks in each page under `app/*/page.tsx`.
- Colors: adjust gradients/tokens in `app/globals.css`.

## Deploy

- Vercel: push to GitHub; import the repo in Vercel and deploy.
- Static preview: `npm run build ; npm start` for production mode locally.
