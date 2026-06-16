import { Link, Navigate, Route, Routes } from 'react-router-dom';
import WelcomeScreenPage from './pages/WelcomeScreen';
import CreateRoomPrepareEmpty from './pages/CreateRoomPrepareEmpty';
import BoardGameMenuV2 from './pages/BoardGameMenuV2';
import HomePageSetting from './pages/HomePageSetting';

type ScreenDefinition = {
  path: string;
  title: string;
  issue: number;
  asset: string;
  artboard: string;
  phase: string;
};

const screens: ScreenDefinition[] = [
  { path: '/verify-otp', title: 'Verify OTP', issue: 1, asset: 'assets/images/Verify OTP.svg', artboard: '812x375', phase: 'Authentication' },
  { path: '/welcome', title: 'Welcome Screen', issue: 2, asset: 'assets/images/Welcome Screen.svg', artboard: '812x375', phase: 'Onboarding' },
  { path: '/start/join-room', title: 'Start / Join Room', issue: 3, asset: 'assets/images/Start _ Join room.svg', artboard: '611x284', phase: 'Session Setup' },
  { path: '/start/create-room/prepare-empty', title: 'Create Room Prepare — Empty', issue: 4, asset: 'assets/images/Start _ Create room _ Prepare-1.svg', artboard: '611x288', phase: 'Session Setup' },
  { path: '/start/create-room/prepare', title: 'Create Room Prepare', issue: 5, asset: 'assets/images/Start _ Create room _ Prepare.svg', artboard: '611x288', phase: 'Session Setup' },
  { path: '/start/join-room/prepare', title: 'Join Room Prepare', issue: 6, asset: 'assets/images/Start _ Join room _ Prepare ....svg', artboard: '216x172', phase: 'Session Setup' },
  { path: '/loading-game', title: 'Loading Game', issue: 7, asset: 'assets/images/Loading game.svg', artboard: '812x375', phase: 'Session Setup' },
  { path: '/leaderboard/server-empty', title: 'Leaderboard Server Empty State', issue: 8, asset: 'assets/images/Leaderboad _ Server-1.svg', artboard: '508x312', phase: 'Social' },
  { path: '/leaderboard/server', title: 'Leaderboard Server', issue: 9, asset: 'assets/images/Leaderboad _ Server.svg', artboard: '508x312', phase: 'Social' },
  { path: '/join-request', title: 'Join Request', issue: 10, asset: 'assets/images/Join Request.svg', artboard: '216x232', phase: 'Social' },
  { path: '/invitation', title: 'Invitation', issue: 11, asset: 'assets/images/Invitation.svg', artboard: '216x248', phase: 'Social' },
  { path: '/home/settings', title: 'Home Page Settings', issue: 12, asset: 'assets/images/Home Page Setting.svg', artboard: '392x256', phase: 'Settings' },
  { path: '/board-game/menu', title: 'Board Game Show All Menu', issue: 13, asset: 'assets/images/Board game _ show all menu.svg', artboard: '812x375', phase: 'In-Game' },
  { path: '/board-game/menu-v2', title: 'Board Game Show All Menu v2', issue: 14, asset: 'assets/images/Board game _ show all menu v2.svg', artboard: '812x375', phase: 'In-Game' },
];

function Home() {
  return (
    <main className="app-shell">
      <section className="hero-panel">
        <p className="eyebrow">Praxis Game</p>
        <h1>React UI implementation queue</h1>
        <p className="hero-copy">
          This project has been reset as a React + Vite + TypeScript app. The routes below are placeholders for the queued UI screens in GitHub issues.
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
      <Link className="back-link" to="/">← Back to queue</Link>
      <section className="placeholder-card">
        <span className="issue-pill">Issue #{screen.issue}</span>
        <h1>{screen.title}</h1>
        <dl>
          <div>
            <dt>Preview route</dt>
            <dd><code>{screen.path}</code></dd>
          </div>
          <div>
            <dt>Reference asset</dt>
            <dd><code>{screen.asset}</code></dd>
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
          Placeholder only. Implement this screen from the linked GitHub issue using React components and CSS, not by displaying the full reference SVG as one image.
        </p>
      </section>
    </main>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/welcome" element={<WelcomeScreenPage />} />
      <Route path="/start/create-room/prepare-empty" element={<CreateRoomPrepareEmpty />} />
      <Route path="/board-game/menu-v2" element={<BoardGameMenuV2 />} />
      <Route path="/home/settings" element={<HomePageSetting />} />
      {screens
        .filter(
          (s) =>
            s.path !== '/welcome' &&
            s.path !== '/start/create-room/prepare-empty' &&
            s.path !== '/board-game/menu-v2' &&
            s.path !== '/home/settings',
        )
        .map((screen) => (
          <Route key={screen.path} path={screen.path} element={<ScreenPlaceholder screen={screen} />} />
        ))}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
