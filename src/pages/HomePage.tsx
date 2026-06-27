import { useNavigate } from 'react-router-dom';
import { BoardFrame } from '../components/layout';
import { Button, IconButton } from '../components/ui';
import { ChartIcon, GearIcon, PlayIcon, UserIcon, ChevronDownIcon } from '../components/icons';
import styles from './HomePage.module.css';

/**
 * Product home / lobby at "/" — first-pass implementation of
 * assets/images/Home Page.svg (812x375 landscape). Built from reusable React +
 * CSS (BoardFrame + shared icons/buttons), not a single full-screen SVG. The
 * brand lockup, top nav, hero illustration band, and quick-start panel mirror
 * the reference layout; all actions route into the existing screen flow.
 */
const QUICK_ACTIONS = [
  { label: 'Start a game', hint: 'Create or join a room', icon: PlayIcon, to: '/start/join-room' },
  {
    label: 'Leaderboard',
    hint: "See this server's ranks",
    icon: ChartIcon,
    to: '/leaderboard/server',
  },
  { label: 'Settings', hint: 'Sound, language & more', icon: GearIcon, to: '/home/settings' },
];

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <BoardFrame className={styles.artboard}>
      {/* Top bar: brand lockup + nav */}
      <header className={styles.topbar}>
        <div className={styles.brand}>
          <span className={styles.brandBadge} aria-hidden="true">
            P
          </span>
          <span className={styles.brandWord}>Praxis</span>
          <span className={styles.brandDot} aria-hidden="true" />
        </div>
        <nav className={styles.nav} aria-label="Home">
          <IconButton
            label="Leaderboard"
            className={styles.navBtn}
            onClick={() => navigate('/leaderboard/server')}
          >
            <ChartIcon size={18} color="var(--color-brand-red)" />
          </IconButton>
          <IconButton
            label="Settings"
            className={styles.navBtn}
            onClick={() => navigate('/home/settings')}
          >
            <GearIcon size={18} color="var(--color-brand-red)" />
          </IconButton>
          <IconButton
            label="Profile"
            className={styles.navBtn}
            onClick={() => navigate('/home/settings')}
          >
            <UserIcon size={18} color="var(--color-brand-red)" />
          </IconButton>
        </nav>
      </header>

      <main className={styles.main}>
        {/* Hero */}
        <section className={styles.hero}>
          <p className={styles.eyebrow}>Welcome back</p>
          <h1 className={styles.title}>Praxis</h1>
          <p className={styles.tagline}>Play, learn, and grow your financial future — together.</p>

          <div className={styles.heroActions}>
            <Button onClick={() => navigate('/start/join-room')}>
              <PlayIcon size={18} />
              <span>Start a Game</span>
            </Button>
            <Button variant="ghost" onClick={() => navigate('/start/join-room')}>
              Join with a code
            </Button>
          </div>

          <div className={styles.dots} aria-hidden="true">
            <span className={`${styles.dot} ${styles.dotActive}`} />
            <span className={styles.dot} />
            <span className={styles.dot} />
          </div>
        </section>

        {/* Quick-start panel */}
        <aside className={styles.panel}>
          <div className={styles.panelHead}>Jump back in</div>
          <ul className={styles.actionList}>
            {QUICK_ACTIONS.map(({ label, hint, icon: Icon, to }) => (
              <li key={to}>
                <button className={styles.actionRow} onClick={() => navigate(to)}>
                  <span className={styles.actionIcon}>
                    <Icon size={18} color="var(--color-brand-red)" />
                  </span>
                  <span className={styles.actionText}>
                    <span className={styles.actionLabel}>{label}</span>
                    <span className={styles.actionHint}>{hint}</span>
                  </span>
                  <span className={styles.actionChevron}>
                    <ChevronDownIcon size={14} color="var(--color-grey-400)" />
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </aside>
      </main>

      <footer className={styles.footer}>
        <span>Amalan · Praxis</span>
        <button className={styles.devLink} onClick={() => navigate('/dev/screens')}>
          Browse all screens →
        </button>
      </footer>
    </BoardFrame>
  );
}
