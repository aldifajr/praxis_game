import type { CSSProperties, ReactNode } from 'react';
import { CloseIcon } from '../icons';
import { IconButton } from './IconButton';
import styles from './ModalCard.module.css';

export type ModalCardProps = {
  title: ReactNode;
  /** Optional glyph rendered to the left of the title in the red header. */
  headerIcon?: ReactNode;
  /** Optional element rendered at the far left of the header (e.g. a back button). */
  headerLeading?: ReactNode;
  /** When provided, a close button is rendered and this handler is invoked. */
  onClose?: () => void;
  /** Fixed card width in px; defaults to the design artboard width. */
  width?: number;
  className?: string;
  children: ReactNode;
};

/**
 * The rounded card + red header pattern shared by most modal-style screens
 * (leaderboard, join request, settings, invitation, room prepare).
 */
export function ModalCard({
  title,
  headerIcon,
  headerLeading,
  onClose,
  width,
  className,
  children,
}: ModalCardProps) {
  const classes = [styles.card, className].filter(Boolean).join(' ');
  const style: CSSProperties | undefined = width ? { width } : undefined;
  return (
    <div className={classes} style={style}>
      <header className={styles.header}>
        <div className={styles.headerLeft}>
          {headerLeading}
          {headerIcon ? <span className={styles.headerIcon}>{headerIcon}</span> : null}
          <span className={styles.title}>{title}</span>
        </div>
        {onClose ? (
          <IconButton label="Close" onClick={onClose} className={styles.close}>
            <CloseIcon size={20} />
          </IconButton>
        ) : null}
      </header>
      <div className={styles.body}>{children}</div>
    </div>
  );
}
