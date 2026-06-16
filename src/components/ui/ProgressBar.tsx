import styles from './ProgressBar.module.css';

export type ProgressBarProps = {
  /** Fill percentage, 0–100. */
  value: number;
  /** Show the draggable-looking knob at the fill edge. */
  knob?: boolean;
  className?: string;
};

export function ProgressBar({ value, knob = false, className }: ProgressBarProps) {
  const clamped = Math.max(0, Math.min(100, value));
  const classes = [styles.track, className].filter(Boolean).join(' ');
  return (
    <div
      className={classes}
      role="progressbar"
      aria-valuenow={clamped}
      aria-valuemin={0}
      aria-valuemax={100}
    >
      <div className={styles.fill} style={{ width: `${clamped}%` }} />
      {knob ? <div className={styles.knob} style={{ left: `${clamped}%` }} /> : null}
    </div>
  );
}
