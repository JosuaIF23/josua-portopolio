# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` — Start dev server at http://localhost:5173
- `npm run build` — Production build
- `npm run lint` — ESLint (flat config, v9+)
- `npm run preview` — Preview production build

No test framework is configured.

## Architecture

Single-page portfolio app: one route (`/`) rendering all sections vertically via `<Home />`.

**Component hierarchy:**
```
BrowserRouter → ThemeProvider → Layout (useLenis) → Navbar + Home
Home: Hero → About → Services → Portfolio → Contact → Footer
```

**Critical import order in `main.jsx`:**
`gsapInit.js` MUST be imported before anything else — it registers GSAP plugins (ScrollTrigger, TextPlugin) as a side effect. Any component that uses these plugins will silently fail if gsapInit hasn't run first.

## Key Patterns

**Theming:** CSS variables defined in `:root` (light) and `.dark` (dark) in `src/styles/index.css`. ThemeContext (`src/context/ThemeContext.jsx`) toggles the `.dark` class on `<html>`, persists to localStorage, falls back to `prefers-color-scheme`. Use `style={{ color: 'var(--text-primary)' }}` pattern, not hardcoded Tailwind colors.

**CSS variables:** `--bg-primary`, `--bg-secondary`, `--bg-card`, `--text-primary`, `--text-secondary`, `--border`, `--accent`, `--accent-hover`

**Smooth scroll:** Lenis is initialized in `src/hooks/useLenis.js` and bridged to GSAP ticker. `Layout.jsx` calls this hook. Do not initialize Lenis elsewhere.

**Portfolio data:** All projects live in `src/data/portfolioData.js`. Categories are auto-derived from project data. Add new projects only here.

**Reusable utilities:** `src/components/ui/` contains `SectionHeading`, `ServiceCard`, `PortfolioCard`, `FilterBar`, `Lightbox`. Tailwind component classes `.section-padding`, `.container-max`, `.btn-primary`, `.btn-outline`, `.card` are defined in `index.css`.

## Dependencies Worth Noting

- GSAP 3 + `@gsap/react` — animation; plugins imported via `src/utils/gsapInit.js`
- Lenis 1.x — smooth scroll (singleton, GSAP-synced)
- Swiper 12 — available but usage is component-level
- `yet-another-react-lightbox` — used in Portfolio section
- `@phosphor-icons/react` — icon library
- Tailwind v3 with `darkMode: 'class'`, custom fonts (Inter, Playfair Display), accent color sky-400
