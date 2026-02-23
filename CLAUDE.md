# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

A static wedding website for Becca & Alexander's wedding on September 5, 2026 in San Diego. Built with vanilla HTML, CSS, and JavaScript using Tailwind CSS via CDN.

## Development

No build system - this is a static site. To preview locally, use any HTTP server:

```bash
python -m http.server 8000
# or
npx serve
```

## Architecture

- **index.html** - Landing page with hero, countdown, and event details overview with "Learn More" button
- **details.html** - Full event details including location, schedule, dress code, and what to expect
- **photos.html** - Photo gallery page
- **rsvp.html** - RSVP form (Formspree integration with multi-guest support)
- **faq.html** - Frequently asked questions
- **script.js** - Separate countdown timer (note: index.html has its own inline countdown implementation)

Registry links to external site: https://registry.theknot.com/-september-2026-ca/70260543

## Styling

- Tailwind CSS loaded via CDN with custom config inline in each HTML file
- Custom color tokens: `skywash` (#E8F3F9), `ink` (#2A3C62), `slatey` (#4B5E88), `mist` (#99A5BF)
- Fonts: Jaldi (body), Bona Nova SC (headings) via Google Fonts
- Mobile-responsive with breakpoints at 640px (sm) and 768px (md)

## Key Features

- RSVP form (on rsvp.html) submits to Formspree (`https://formspree.io/f/xnnbgbev`)
- Multi-guest RSVP support with dynamic form fields
- Countdown timer on homepage targeting September 5, 2026 at 3 PM PDT
- Interactive emoji rain effect when clicking emojis (index.html)
- Parallax scrolling on hero image (index.html)
- Fade-in animations using IntersectionObserver
- Mobile-responsive navigation with hamburger menu
