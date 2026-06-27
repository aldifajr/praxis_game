import type { CSSProperties, ReactNode } from 'react';
import { GameFrame } from './GameFrame';
import styles from './ModalFrame.module.css';

export type ModalFrameProps = {
  children: ReactNode;
  /** Optional pixel cap for the centered modal region. */
  maxWidth?: number;
  /** Backdrop color; defaults to the app surface. */
  backdrop?: string;
  className?: string;
};

/**
 * Layout family A — Modal / Lobby. Centers a card-style screen (typically a
 * {@link ModalCard}) on the shared {@link GameFrame} backdrop. Use this for
 * popups, room prepare, leaderboard, settings, invitations, and join requests.
 */
export function ModalFrame({ children, maxWidth, backdrop, className }: ModalFrameProps) {
  const classes = [styles.region, className].filter(Boolean).join(' ');
  const style = maxWidth ? ({ '--modal-max-width': `${maxWidth}px` } as CSSProperties) : undefined;
  return (
    <GameFrame backdrop={backdrop}>
      <div className={classes} style={style}>
        {children}
      </div>
    </GameFrame>
  );
}
