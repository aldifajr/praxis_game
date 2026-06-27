import { useNavigate } from 'react-router-dom';
import { ModalFrame } from '../components/layout';
import { Button, IconButton } from '../components/ui';
import { BackIcon } from '../components/icons';
import styles from './StartJoinRoomPage.module.css';

/**
 * Issue #3 — Start / Join Room (611x284). Mode tabs (Join active), a quick-join
 * CTA, and a private room-code entry. All controls are static placeholders.
 */
export default function StartJoinRoomPage() {
  const navigate = useNavigate();

  return (
    <ModalFrame>
      <div className={styles.card}>
        <header className={styles.header}>
          <IconButton label="Back" onClick={() => navigate('/')}>
            <BackIcon size={24} />
          </IconButton>
          <span className={styles.headerTitle}>Start a Game</span>
          <span className={styles.headerSpacer} />
        </header>

        <div className={styles.tabs} role="tablist" aria-label="Room mode">
          <button className={`${styles.tab} ${styles.tabActive}`} role="tab" aria-selected="true">
            Join Room
          </button>
          <button
            className={styles.tab}
            role="tab"
            aria-selected="false"
            onClick={() => navigate('/start/create-room/prepare-empty')}
          >
            Create Room
          </button>
        </div>

        <div className={styles.body}>
          <section className={styles.quickJoin}>
            <h2 className={styles.sectionTitle}>Quick Join</h2>
            <p className={styles.sectionCopy}>Get matched into an open public room instantly.</p>
            <Button fullWidth onClick={() => navigate('/start/join-room/prepare')}>
              Find a Room
            </Button>
          </section>

          <div className={styles.divider} aria-hidden="true">
            <span>or</span>
          </div>

          <section className={styles.privateJoin}>
            <h2 className={styles.sectionTitle}>Private Room</h2>
            <label className={styles.inputLabel} htmlFor="room-code">
              Room code
            </label>
            <input
              id="room-code"
              className={styles.input}
              placeholder="e.g. MOD-001"
              defaultValue=""
            />
            <Button variant="secondary" fullWidth disabled>
              Join
            </Button>
          </section>
        </div>
      </div>
    </ModalFrame>
  );
}
