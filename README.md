# Asgard University

A Marvel-inspired university marketing website built with **Next.js 15**, **TypeScript**, and **Tailwind CSS**. Features six academic "realms," a file-based MDX news blog, and a Vercel-ready static deployment.

## Getting Started

### Prerequisites

- Node.js 18.18 or later
- npm, yarn, or pnpm

### Install & Run

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Production Build

```bash
npm run build
npm start
```

## Project Structure

- `app/` — Pages and routes (App Router)
- `components/` — UI, layout, and page sections
- `content/blog/` — MDX news articles with frontmatter
- `data/` — Static content (realms, alumni, campus, admissions)
- `lib/blog.ts` — Blog post loader and parser
- `public/` — Static assets (OG image, patterns)

## Adding Blog Posts

Create a new `.mdx` file in `content/blog/`:

```mdx
---
title: "Your Post Title"
date: "2025-06-01"
excerpt: "Short summary for listings."
category: "Campus"
author: "Press Office"
---

Your content here...
```

Posts appear automatically on `/news` and at `/news/[slug]`.

## Deploy to Vercel

1. Push this repository to GitHub.
2. Go to [vercel.com/new](https://vercel.com/new) and import the repo.
3. Framework preset: **Next.js** (auto-detected).
4. No environment variables required for v1.
5. Click **Deploy**.

Preview deployments are created for every pull request.

### Custom Domain

In your Vercel project: **Settings → Domains** → add your domain.

Update `siteConfig.url` in `data/site.ts` to match your production URL for correct sitemap and Open Graph metadata.

## Contact Form (Future)

The contact form is UI-only in v1. To enable real submissions, add an API route at `app/api/contact/route.ts` and integrate [Resend](https://resend.com) or [Formspree](https://formspree.io).

## License

Fictional university project for demonstration purposes.
