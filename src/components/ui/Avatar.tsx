import { AvatarIcon } from '../icons';
import styles from './Avatar.module.css';

export type AvatarProps = {
  /** Diameter of the avatar circle in px. */
  size?: number;
  /** Glyph size in px (defaults to ~60% of the circle). */
  iconSize?: number;
  background?: string;
  color?: string;
  className?: string;
};

export function Avatar({
  size = 48,
  iconSize,
  background = 'var(--color-grey-100)',
  color = 'var(--color-text)',
  className,
}: AvatarProps) {
  const classes = [styles.avatar, className].filter(Boolean).join(' ');
  return (
    <span className={classes} style={{ width: size, height: size, background }}>
      <AvatarIcon size={iconSize ?? Math.round(size * 0.6)} color={color} />
    </span>
  );
}
