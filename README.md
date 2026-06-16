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
npm run dev
npm run build
npm run preview
```

## Project structure

```text
src/                 React application source
assets/images/       SVG design references and visual assets
docs/                Product/user-flow documentation
```

## Design references

The SVG files in `assets/images/` are the source of truth for queued UI implementation issues. Screens should be rebuilt as React components/CSS; do not render an entire reference SVG as a single full-screen screenshot unless an issue explicitly allows it.
