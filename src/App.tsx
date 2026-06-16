import { Link, Navigate, Route, Routes } from 'react-router-dom';
import { screens, type ScreenDefinition } from './screens';

function Home() {
  return (
    <main className="app-shell">
      <section className="hero-panel">
        <p className="eyebrow">Praxis Game</p>
        <h1>React UI implementation queue</h1>
        <p className="hero-copy">
          This project has been reset as a React + Vite + TypeScript app. The routes below are the
          queued UI screens tracked in GitHub issues.
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

function ScreenPlaceholder({ screen }: { screen: ScreenDefinition }) {
  return (
    <main className="preview-page">
      <Link className="back-link" to="/">
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

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {screens.map((screen) => {
        const Screen = screen.component;
        return (
          <Route
            key={screen.path}
            path={screen.path}
            element={Screen ? <Screen /> : <ScreenPlaceholder screen={screen} />}
          />
        );
      })}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
