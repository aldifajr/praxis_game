import type { ButtonHTMLAttributes, ReactNode } from 'react';
import styles from './IconButton.module.css';

export type IconButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  /** Required for accessibility — icon-only buttons have no visible text. */
  label: string;
  children: ReactNode;
};

export function IconButton({
  label,
  className,
  type = 'button',
  children,
  ...rest
}: IconButtonProps) {
  const classes = [styles.iconButton, className].filter(Boolean).join(' ');
  return (
    <button type={type} className={classes} aria-label={label} {...rest}>
      {children}
    </button>
  );
}
