import { Link } from 'react-router-dom';
import { screens, type ScreenDefinition } from '../screens';

/**
 * Developer-only catalogue of every queued UI screen. Lives at /dev/screens
 * (the real product home now owns "/"). Renders one card per entry in the
 * screen registry plus a metadata placeholder for any not-yet-built screen.
 */
export default function DevScreensPage() {
  return (
    <main className="app-shell">
      <section className="hero-panel">
        <p className="eyebrow">Praxis Game · Dev</p>
        <h1>React UI implementation queue</h1>
        <p className="hero-copy">
          This is the developer screen catalogue. The routes below are the queued UI screens tracked
          in GitHub issues. The product home page lives at{' '}
          <Link to="/">
            <code>/</code>
          </Link>
          .
        </p>
      </section>

      <section className="screen-grid" aria-label="Queued screen routes">
        {screens.map((screen) => (
          <Link className="screen-card" key={screen.path} to={screen.path}>
            <span className="issue-pill">Issue #{screen.issue}</span>
            <h2>{screen.title}</h2>
            <p>{screen.phase}</p>
            <code>{screen.path}</code>
          </Link>
        ))}
      </section>
    </main>
  );
}

/**
 * Fallback rendered for any registry entry without an implemented component.
 * Kept alongside the dev catalogue because it is purely a development aid.
 */
export function ScreenPlaceholder({ screen }: { screen: ScreenDefinition }) {
  return (
    <main className="preview-page">
      <Link className="back-link" to="/dev/screens">
        ← Back to queue
      </Link>
      <section className="placeholder-card">
        <span className="issue-pill">Issue #{screen.issue}</span>
        <h1>{screen.title}</h1>
        <dl>
          <div>
            <dt>Preview route</dt>
            <dd>
              <code>{screen.path}</code>
            </dd>
          </div>
          <div>
            <dt>Reference asset</dt>
            <dd>
              <code>{screen.asset}</code>
            </dd>
          </div>
          <div>
            <dt>Original artboard</dt>
            <dd>{screen.artboard}</dd>
          </div>
          <div>
            <dt>Flow phase</dt>
            <dd>{screen.phase}</dd>
          </div>
        </dl>
        <p className="implementation-note">
          Placeholder only. Implement this screen from the linked GitHub issue using React
          components and CSS, not by displaying the full reference SVG as one image.
        </p>
      </section>
    </main>
  );
}
