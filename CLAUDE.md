# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal website and tech blog at sashwat.dev. Built with Astro (static output), deployed to Cloudflare Workers via Wrangler.

## Commands

```bash
npm run dev      # local dev server
npm run build    # build to dist/
npm run preview  # preview the built output
```

Deployment is triggered automatically by pushing to `main` — Cloudflare runs `npx wrangler deploy` which uploads `dist/` as static assets.

## Architecture

- **Framework**: Astro 5, static output (`output: "static"` in `astro.config.ts`)
- **Layout**: Single shared layout at `src/layouts/BaseLayout.astro` — accepts `title`, `description`, and `canonicalURL` props
- **Blog**: Markdown files in `src/content/blog/` are loaded via Astro's Content Collections (glob loader). Schema defined in `src/content.config.ts` — required frontmatter: `title`, `date`, `description`; optional: `tags[]`, `draft` (defaults false)
- **Routing**: `src/pages/blog/[...slug].astro` generates one static page per post using `post.id` as the slug
- **Styling**: Single global stylesheet at `src/styles/global.css`; JetBrains Mono loaded from Google Fonts
- **Syntax highlighting**: Shiki with `tokyo-night` theme (configured in `astro.config.ts`)

## Adding a Blog Post

Create `src/content/blog/<slug>.md` with frontmatter:

```md
---
title: "Post Title"
date: 2026-01-01
description: "One-line description"
tags: ["tag1"]
draft: false
---
```

Posts with `draft: true` are still built — filter them out in the blog index if needed.

## Deployment

- **Cloudflare Worker name**: `sashwatdev` (matches `wrangler.toml`)
- **Build output**: `dist/` (Astro default)
- **Custom domain**: `sashwat.dev` (DNS managed by Cloudflare; Worker record proxied)

## License

CC0 1.0 Universal (public domain).
