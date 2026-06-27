import styles from './RotateDevicePrompt.module.css';

export type RotateDevicePromptProps = {
  /** Headline shown above the guidance text. */
  title?: string;
  /** Supporting guidance text. */
  message?: string;
};

/**
 * Full-viewport guidance overlay shown only on small screens held in portrait.
 * Board/gameplay screens are designed for landscape, so rather than render a
 * microscopic, squeezed board we cover the screen with a "rotate your device"
 * hint. Visibility is purely CSS-driven (orientation + width media query), so
 * the component can be rendered unconditionally — it costs nothing in landscape
 * or on larger screens.
 */
export function RotateDevicePrompt({
  title = 'Rotate your device',
  message = 'This screen plays best in landscape. Turn your device sideways to continue.',
}: RotateDevicePromptProps) {
  return (
    <div className={styles.prompt} role="alert" aria-live="polite">
      <div className={styles.inner}>
        <svg
          className={styles.icon}
          width="56"
          height="56"
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden="true"
        >
          <rect x="7" y="2" width="10" height="20" rx="2" stroke="currentColor" strokeWidth="1.6" />
          <path d="M10.5 19h3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          <path
            d="M19.5 8.5a7 7 0 0 1 1.8 3.2"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
          <path
            d="M21.6 8l-.4 2.6-2.5-.7"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <p className={styles.title}>{title}</p>
        <p className={styles.message}>{message}</p>
      </div>
    </div>
  );
}
