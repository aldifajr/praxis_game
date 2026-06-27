import type { CSSProperties, ReactNode } from 'react';
import styles from './GameFrame.module.css';

export type GameFrameProps = {
  children: ReactNode;
  /** Backdrop color behind the centered content. Defaults to the app surface. */
  backdrop?: string;
  /** Remove the default padding for screens that fill the whole viewport. */
  fill?: boolean;
  /**
   * Fill the entire viewport with no padding and a `100dvh` height (used by
   * landscape board/gameplay screens). Implies {@link fill}.
   */
  fullscreen?: boolean;
  className?: string;
};

/**
 * The shared full-viewport backdrop that centers its child. It is the common
 * base for both layout families: {@link ModalFrame} (Modal/Lobby) and
 * {@link BoardFrame} (Board/Fullscreen) compose it so the centering, min-height,
 * padding, and backdrop logic lives in exactly one place.
 */
export function GameFrame({
  children,
  backdrop,
  fill = false,
  fullscreen = false,
  className,
}: GameFrameProps) {
  const classes = [
    styles.shell,
    fill ? styles.fill : '',
    fullscreen ? styles.fullscreen : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');
  const style = backdrop ? ({ '--frame-backdrop': backdrop } as CSSProperties) : undefined;
  return (
    <div className={classes} style={style}>
      {children}
    </div>
  );
}
