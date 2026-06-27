import type { CSSProperties, ReactNode } from 'react';
import { GameFrame } from './GameFrame';
import { RotateDevicePrompt } from './RotateDevicePrompt';
import styles from './BoardFrame.module.css';

export type BoardFrameProps = {
  children: ReactNode;
  /** Artboard width in px; capped at 100% of the viewport. Defaults to 812. */
  width?: number;
  /** CSS aspect-ratio for the artboard (e.g. "812 / 375"). */
  aspectRatio?: string;
  /** Backdrop color behind the artboard; defaults to the app surface. */
  backdrop?: string;
  /**
   * Landscape fullscreen mode for board/gameplay screens: the artboard fills
   * the whole viewport (`100vw` × `100dvh`, safe-area padded) instead of being
   * a fixed-aspect, centered island. Leave this off for portrait-friendly
   * lobby/setup screens.
   */
  fullscreen?: boolean;
  /**
   * When {@link fullscreen}, show a rotate-to-landscape overlay on small
   * portrait screens rather than a cramped board. Defaults to true.
   */
  rotatePrompt?: boolean;
  /** Applied to the artboard element (not the backdrop). */
  className?: string;
};

/**
 * Layout family B — Board / Fullscreen. Centers a fixed-aspect "artboard" on the
 * shared {@link GameFrame} backdrop, scaling it down responsively and dropping
 * the rigid ratio on small screens. Use this for landscape, full-canvas screens
 * (home/lobby, the board game menu, the split-panel OTP/loading screens).
 *
 * Pass {@link fullscreen} for board/gameplay routes that should fill the entire
 * landscape viewport on desktop and mobile.
 */
export function BoardFrame({
  children,
  width = 812,
  aspectRatio = '812 / 375',
  backdrop,
  fullscreen = false,
  rotatePrompt = true,
  className,
}: BoardFrameProps) {
  const classes = [styles.artboard, fullscreen ? styles.fullscreen : '', className]
    .filter(Boolean)
    .join(' ');
  const style = {
    '--board-width': `${width}px`,
    '--board-ratio': aspectRatio,
  } as CSSProperties;
  return (
    <GameFrame backdrop={backdrop} fullscreen={fullscreen}>
      <div className={classes} style={style}>
        {children}
      </div>
      {fullscreen && rotatePrompt ? <RotateDevicePrompt /> : null}
    </GameFrame>
  );
}
