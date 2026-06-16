# Praxis Game

React + Vite + TypeScript web app for the Praxis financial literacy board game.

## Tech stack

- React
- TypeScript
- Vite
- React Router

## Scripts

```bash
npm install
npm run dev          # start the dev server
npm run build        # type-check + production build
npm run preview      # preview the production build
npm run lint         # ESLint
npm run format       # Prettier (write); format:check for CI
```

## Project structure

```text
src/
  components/
    icons.tsx        Shared SVG icon library (single source for all glyphs)
    ui/              Reusable, token-driven components (CSS Modules)
  pages/             One component per screen; co-located *.module.css
  styles/
    tokens.css       Design tokens — colors, spacing, radii, shadows, type
    base.css         Global reset + dev "screen queue" styling
  styles.css         Legacy page styles (token-backed; migrated incrementally)
  screens.ts         Screen registry (single source for routes + queue)
  App.tsx            Data-driven router built from the screen registry
assets/images/       SVG design references and visual assets
docs/                Product/user-flow documentation
```

## Conventions

- **Design tokens first.** Use the CSS custom properties in `styles/tokens.css`
  (e.g. `var(--color-brand-red)`, `var(--space-4)`) rather than raw hex/px.
- **Reuse the shared library.** Icons come from `components/icons.tsx`; buttons,
  avatars, modal cards, etc. from `components/ui`. Don't re-implement them per page.
- **New screens** get a co-located `Name.module.css` and one entry in `screens.ts`.

## Design references

The SVG files in `assets/images/` are the source of truth for queued UI implementation issues. Screens should be rebuilt as React components/CSS; do not render an entire reference SVG as a single full-screen screenshot unless an issue explicitly allows it.
