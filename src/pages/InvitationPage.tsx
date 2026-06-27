import { useNavigate } from 'react-router-dom';
import { Avatar, Button, ModalCard } from '../components/ui';
import { ModalFrame } from '../components/layout';
import { PlayIcon } from '../components/icons';
import styles from './InvitationPage.module.css';

/**
 * Issue #11 — Invitation popup (216x248 artboard). Compact modal shown when a
 * friend invites the player to a room. Static placeholder content only.
 */
export default function InvitationPage() {
  const navigate = useNavigate();

  return (
    <ModalFrame>
      <ModalCard
        title="Invitation"
        width={216}
        className={styles.card}
        onClose={() => navigate('/')}
      >
        <div className={styles.body}>
          <Avatar size={64} iconSize={40} />
          <p className={styles.name}>Olivia P.</p>
          <p className={styles.message}>invited you to join their room</p>

          <Button fullWidth onClick={() => navigate('/start/join-room/prepare')}>
            <PlayIcon size={18} />
            <span>Join Room</span>
          </Button>
          <Button variant="ghost" fullWidth onClick={() => navigate('/')}>
            Decline
          </Button>
        </div>
      </ModalCard>
    </ModalFrame>
  );
}
