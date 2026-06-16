import { useNavigate } from 'react-router-dom';
import { Avatar, IconButton } from '../components/ui';
import { ChartIcon, GearIcon } from '../components/icons';
import styles from './BoardGameMenuPage.module.css';

/**
 * Issue #13 — Board game "show all menu" (812x375). Full landscape board view:
 * profile + assets panels (left), board with dice/tokens (center), rank + chat
 * panels (right), and a bottom action bar. Static placeholder game state only.
 */
const RANKS = [
  { rank: 1, name: 'Player 1', score: '5.000' },
  { rank: 2, name: 'Player 2', score: '4.200' },
  { rank: 3, name: 'Player 3', score: '3.800' },
  { rank: 4, name: 'Player 4', score: '3.200' },
];

const CHAT = [
  { user: 'P1', text: 'Hello!' },
  { user: 'P2', text: 'Good luck' },
  { user: 'P3', text: 'Nice move' },
];

const STORE_ITEMS = ['Savings', 'Insurance', 'Property'];
const TILE_COUNT = 24;

export default function BoardGameMenuPage() {
  const navigate = useNavigate();

  return (
    <div className={styles.shell}>
      <div className={styles.artboard}>
        {/* Top bar */}
        <header className={styles.topbar}>
          <div className={styles.topbarLeft}>
            <Avatar size={32} iconSize={20} background="var(--color-white)" />
            <div className={styles.profileText}>
              <span className={styles.profileName}>You</span>
              <span className={styles.profileMoney}>Rp 6.100.000</span>
            </div>
          </div>
          <div className={styles.topbarRight}>
            <span className={styles.badge}>Menu</span>
            <span className={styles.badge}>Amalan</span>
            <IconButton
              label="Settings"
              className={styles.topbarIcon}
              onClick={() => navigate('/home/settings')}
            >
              <GearIcon size={18} color="var(--color-white)" />
            </IconButton>
          </div>
        </header>

        <main className={styles.main}>
          {/* Left: assets / cards */}
          <aside className={styles.colLeft}>
            <div className={styles.panel}>
              <div className={styles.panelHead}>Cards</div>
              <ul className={styles.list}>
                <li>
                  <span className={`${styles.dot} ${styles.dotRed}`} />
                  Insurance
                </li>
                <li>
                  <span className={`${styles.dot} ${styles.dotRed}`} />
                  IOU
                </li>
                <li>
                  <span className={`${styles.dot} ${styles.dotRed}`} />
                  Plan
                </li>
              </ul>
            </div>
            <div className={styles.panel}>
              <div className={styles.panelHead}>Stocks</div>
              <ul className={styles.list}>
                <li>
                  <span className={`${styles.dot} ${styles.dotGold}`} />
                  Bloom Co. <span className={styles.up}>+2.4%</span>
                </li>
                <li>
                  <span className={`${styles.dot} ${styles.dotGold}`} />
                  Mining Inc. <span className={styles.down}>-1.1%</span>
                </li>
              </ul>
            </div>
          </aside>

          {/* Center: board */}
          <section className={styles.board}>
            <div className={styles.boardGrid}>
              {Array.from({ length: TILE_COUNT }).map((_, i) => (
                <div
                  key={i}
                  className={`${styles.tile} ${i === 0 ? styles.tileStart : ''} ${
                    i === TILE_COUNT - 1 ? styles.tileFinish : ''
                  }`}
                >
                  {i === 0 ? 'Start' : i === TILE_COUNT - 1 ? 'Finish' : ''}
                </div>
              ))}
            </div>
            <div className={styles.center}>
              <div className={styles.dice}>
                <span className={styles.pip} />
                <span className={styles.pip} />
                <span className={styles.pip} />
                <span className={styles.pip} />
                <span className={styles.pip} />
              </div>
              <span className={styles.diceLabel}>Roll</span>
              <div className={styles.tokens}>
                <span className={`${styles.token} ${styles.tokenRed}`} />
                <span className={`${styles.token} ${styles.tokenBlue}`} />
                <span className={`${styles.token} ${styles.tokenGreen}`} />
                <span className={`${styles.token} ${styles.tokenGold}`} />
              </div>
            </div>
          </section>

          {/* Right: rank + chat */}
          <aside className={styles.colRight}>
            <div className={styles.panel}>
              <div className={`${styles.panelHead} ${styles.panelHeadRed}`}>
                <ChartIcon size={14} />
                <span>Leaderboard</span>
              </div>
              <ul className={styles.rankList}>
                {RANKS.map((r) => (
                  <li key={r.rank} className={styles.rankRow}>
                    <span className={styles.rankNum}>{r.rank}</span>
                    <span className={styles.rankName}>{r.name}</span>
                    <span className={styles.rankScore}>{r.score}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className={styles.panel}>
              <div className={`${styles.panelHead} ${styles.panelHeadRed}`}>Chat</div>
              <ul className={styles.chatList}>
                {CHAT.map((c, i) => (
                  <li key={i}>
                    <span className={styles.chatUser}>{c.user}:</span> {c.text}
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </main>

        {/* Bottom action bar */}
        <footer className={styles.bottombar}>
          {STORE_ITEMS.map((item) => (
            <button key={item} className={styles.action}>
              {item}
            </button>
          ))}
          <button className={`${styles.action} ${styles.actionPrimary}`}>Store</button>
        </footer>
      </div>
    </div>
  );
}
