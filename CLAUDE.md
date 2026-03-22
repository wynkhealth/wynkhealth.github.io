# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Marketing website for Wynk Health, a healthcare AI startup. Static site hosted on GitHub Pages at wynkhealth.com.

## Tech Stack

- **Jekyll 4.3.3** (Ruby static site generator with Liquid templates)
- **Tailwind CSS 3.4.15** via PostCSS with Autoprefixer
- **Formspree** for contact form submissions

## Build & Development Commands

```bash
npm run dev          # Start dev server with live reload (CSS watch + Jekyll serve concurrently)
npm run build        # Full production build (CSS + Jekyll)
npm run build:css    # Compile Tailwind CSS only
npm run build:jekyll # Build Jekyll only (JEKYLL_ENV=production)
bundle install       # Install Ruby gem dependencies
```

## Architecture

**Layouts** (`_layouts/`): Templates that wrap page content.
- `default.html` — Base layout with fixed header (responsive mobile menu), footer, and nav
- `home.html` — Homepage with animated hero, feature cards, hardware showcase, CTAs
- `contact.html` — Contact form (Formspree integration) + info cards
- `page.html` — Simple wrapper for markdown content pages

**Pages** (root directory): `index.html`, `about.markdown`, `contact.html`, `404.html`

**Assets**: `assets/css/main.css` (Tailwind source) → `assets/css/style.css` (compiled output). Images in `assets/images/` (SVG logos, PNG product photos).

**Config**: `_config.yml` for Jekyll settings, `tailwind.config.js` for custom theme (wynk-green color palette, Quicksand font), `postcss.config.js` for CSS pipeline.

## Styling Conventions

- All styling uses Tailwind utility classes directly in HTML — no custom CSS classes
- Brand colors: `wynk-green` (#4CAF50), `wynk-green-light` (#60c164), `wynk-green-dark` (#45a049)
- Font: Quicksand (sans-serif) loaded from Google Fonts
- Mobile-first responsive design using Tailwind `md:` breakpoints
- Common patterns: card hover effects (shadow + translate), gradient backgrounds, `py-24` section spacing
