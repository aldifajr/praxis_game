/*
 * Shared icon library. Previously these SVGs were copy-pasted as local
 * functions inside individual page files (the same Avatar/Person/Close/Chart
 * icons were redefined in 4+ places). They now live here once.
 *
 * Icons are decorative by default (aria-hidden); the interactive element that
 * wraps them (button/link) is responsible for the accessible label.
 */
import type { SVGProps } from 'react';

export type IconProps = {
  size?: number;
  color?: string;
} & Omit<SVGProps<SVGSVGElement>, 'width' | 'height' | 'color'>;

function base(size: number, rest: Record<string, unknown>) {
  return {
    width: size,
    height: size,
    fill: 'none',
    'aria-hidden': true,
    focusable: false,
    ...rest,
  };
}

/** User silhouette (head + shoulders), solid fill. */
export function UserIcon({ size = 24, color = 'currentColor', ...rest }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...base(size, rest)}>
      <path
        d="M20.49 15.2C18.47 12.82 15.9 11.03 12.98 10.08C14.27 9.29 15.14 7.86 15.14 6.22C15.14 3.66 13.05 1.58 10.49 1.58C7.93 1.58 5.84 3.66 5.84 6.22C5.84 7.86 6.71 9.29 8.0 10.08C5.08 11.03 2.51 12.82 0.49 15.2C0.18 15.57 0.23 16.12 0.6 16.43C0.77 16.57 0.98 16.64 1.18 16.64C1.43 16.64 1.68 16.54 1.86 16.33C3.79 14.04 6.55 12.66 9.62 12.36C9.9 12.91 10.17 13.32 10.49 13.32C10.81 13.32 11.08 12.91 11.36 12.36C14.43 12.66 17.19 14.04 19.12 16.33C19.3 16.54 19.55 16.64 19.8 16.64C20.0 16.64 20.21 16.57 20.38 16.43C20.75 16.12 20.8 15.57 20.49 15.2ZM7.46 6.22C7.46 4.55 8.82 3.2 10.49 3.2C12.16 3.2 13.52 4.55 13.52 6.22C13.52 7.89 12.16 9.24 10.49 9.24C8.82 9.24 7.46 7.89 7.46 6.22Z"
        fill={color}
      />
    </svg>
  );
}

/** User bust outline used for avatars (scales from a 24 box). */
export function AvatarIcon({ size = 24, color = 'currentColor', ...rest }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...base(size, rest)}>
      <path
        d="M21.817 15.2C20 12.8167 17.6 10.9333 14.867 9.75C14.384 9.55 14.217 9.11667 14.167 8.9C14.067 8.46667 14.167 8 14.467 7.65C16.267 5.48333 17.35 2.63333 17.35 0.0166667C17.35 -5.13333 13.167 -9.31667 9.017 -9.31667C4.867 -9.31667 0.683667 -5.13333 0.683667 0.0166667C0.683667 2.63333 1.767 5.48333 3.567 7.65C3.85 8 3.967 8.46667 3.867 8.9C3.817 9.13333 3.65 9.55 3.167 9.75C0.433667 10.9333 -1.983 12.8167 -3.79967 15.2C-4.24967 15.7833 -4.133 16.6167 -3.54967 17.0667C-3.29967 17.25 -3.01633 17.3333 -2.74967 17.3333C-2.34967 17.3333 -1.94967 17.15 -1.683 16.8C-0.149667 14.7833 1.883 13.1833 4.21633 12.1833C5.34933 11.7 6.16633 10.7167 6.44933 9.5C6.74933 8.25 6.44933 6.91667 5.61633 5.91667C4.21633 4.23333 3.34933 1.96667 3.34933 0.0166667C3.34933 -3.7 6.33333 -6.68333 10.0163 -6.68333C13.6993 -6.68333 16.6833 -3.7 16.6833 0.0166667C16.6833 1.96667 15.8163 4.23333 14.4163 5.91667C13.1163 7.46667 11.5663 8.31667 10.0163 8.31667C9.28333 8.31667 8.68333 8.91667 8.68333 9.65C8.68333 10.3833 9.28333 10.9833 10.0163 10.9833C11.2993 10.9833 12.5663 10.6167 13.7333 9.93333C14.0993 10.9333 14.8163 11.75 15.8163 12.1667C18.1333 13.1667 20.1663 14.7667 21.7163 16.7833C21.9833 17.1333 22.3833 17.3167 22.7833 17.3167C23.0663 17.3167 23.3493 17.2333 23.5833 17.05C24.1663 16.6 24.2833 15.7667 23.8333 15.1833L21.817 15.2Z"
        fill={color}
        transform="translate(2.5 12)"
      />
    </svg>
  );
}

/** Circular "back" affordance: filled disc + chevron. */
export function BackIcon({
  size = 24,
  discColor = 'var(--color-white)',
  chevronColor = 'var(--color-brand-red)',
  ...rest
}: IconProps & { discColor?: string; chevronColor?: string }) {
  return (
    <svg viewBox="0 0 24 24" {...base(size, rest)}>
      <circle cx="12" cy="12" r="10" fill={discColor} />
      <path
        d="M13.17 16.8C13.38 16.8 13.58 16.73 13.73 16.59C14.06 16.29 14.08 15.79 13.78 15.46L10.73 12.14C10.66 12.06 10.66 11.95 10.73 11.87L13.78 8.55C14.08 8.22 14.06 7.72 13.73 7.42C13.4 7.12 12.9 7.14 12.6 7.47L9.55 10.79C8.91 11.48 8.91 12.53 9.55 13.22L12.6 16.54C12.76 16.71 12.97 16.8 13.17 16.8Z"
        fill={chevronColor}
      />
    </svg>
  );
}

/** Circular "close" affordance: filled disc + X. */
export function CloseCircleIcon({
  size = 24,
  discColor = 'var(--color-brand-red-dark)',
  xColor = 'var(--color-white)',
  ...rest
}: IconProps & { discColor?: string; xColor?: string }) {
  return (
    <svg viewBox="0 0 24 24" {...base(size, rest)}>
      <circle cx="12" cy="12" r="10" fill={discColor} />
      <path
        d="M15.21 9.41C14.88 9.11 14.38 9.13 14.08 9.46L12 11.82L9.92 9.46C9.62 9.13 9.11 9.11 8.79 9.41C8.46 9.71 8.44 10.21 8.74 10.54L10.91 13L8.74 15.46C8.44 15.79 8.46 16.29 8.79 16.59C8.94 16.73 9.14 16.8 9.33 16.8C9.55 16.8 9.76 16.71 9.92 16.54L12 14.18L14.08 16.54C14.24 16.71 14.45 16.8 14.67 16.8C14.86 16.8 15.06 16.73 15.21 16.59C15.54 16.29 15.56 15.79 15.26 15.46L13.09 13L15.26 10.54C15.56 10.21 15.54 9.71 15.21 9.41Z"
        fill={xColor}
      />
    </svg>
  );
}

/** Plain X (stroke), used for header close buttons. */
export function CloseIcon({ size = 20, color = 'var(--color-white)', ...rest }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...base(size, rest)}>
      <path d="M18 6L6 18M6 6l12 12" stroke={color} strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

/** Circular play affordance. */
export function PlayIcon({
  size = 24,
  discColor = 'var(--color-white)',
  glyphColor = 'var(--color-brand-red)',
  ...rest
}: IconProps & { discColor?: string; glyphColor?: string }) {
  return (
    <svg viewBox="0 0 24 24" {...base(size, rest)}>
      <circle cx="12" cy="12" r="10" fill={discColor} />
      <path d="M10.5 16.5L15.5 12L10.5 7.5V16.5Z" fill={glyphColor} />
    </svg>
  );
}

/** Empty-slot plus inside a dashed circle. */
export function PlusCircleIcon({ size = 24, color = 'var(--color-grey-300)', ...rest }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...base(size, rest)}>
      <circle cx="12" cy="12" r="10" stroke={color} strokeWidth="1.5" fill="none" />
      <path d="M8 12H16M12 8V16" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

/** Chart / leaderboard glyph. */
export function ChartIcon({ size = 24, color = 'var(--color-white)', ...rest }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...base(size, rest)}>
      <path
        d="M37.2 36C36.21 36 35.4 35.19 35.4 34.2V27.78C35.4 27.34 35.04 26.98 34.6 26.98C34.16 26.98 33.8 27.34 33.8 27.78V34.2C33.8 35.19 32.99 36 32 36H30.6C29.61 36 28.8 35.19 28.8 34.2V22.73C28.8 22.29 28.44 21.93 28 21.93C27.56 21.93 27.2 22.29 27.2 22.73V34.2C27.2 35.19 26.39 36 25.4 36H24C23.01 36 22.2 35.19 22.2 34.2V30.66C22.2 30.22 21.84 29.86 21.4 29.86C20.96 29.86 20.6 30.22 20.6 30.66V34.2C20.6 35.19 19.79 36 18.8 36C18.36 36 18 35.64 18 35.2C18 34.76 18.36 34.4 18.8 34.4C18.91 34.4 19 34.31 19 34.2V30.66C19 29.34 20.08 28.26 21.4 28.26C22.72 28.26 23.8 29.34 23.8 30.66V34.2C23.8 34.31 23.89 34.4 24 34.4H25.4C25.51 34.4 25.6 34.31 25.6 34.2V22.73C25.6 21.41 26.68 20.33 28 20.33C29.32 20.33 30.4 21.41 30.4 22.73V34.2C30.4 34.31 30.49 34.4 30.6 34.4H32C32.11 34.4 32.2 34.31 32.2 34.2V27.78C32.2 26.46 33.28 25.38 34.6 25.38C35.92 25.38 37 26.46 37 27.78V34.2C37 34.31 37.09 34.4 37.2 34.4C37.64 34.4 38 34.76 38 35.2C38 35.64 37.64 36 37.2 36Z"
        fill={color}
        transform="translate(-18 -18) scale(0.6667)"
      />
    </svg>
  );
}

/** Five-point star; pass filled to toggle gold/grey. */
export function StarIcon({ size = 16, filled = true, ...rest }: IconProps & { filled?: boolean }) {
  return (
    <svg viewBox="0 0 16 16" {...base(size, rest)}>
      <path
        d="M8 1.5L9.5 6.5H14.5L10.5 9.5L12 14.5L8 11.5L4 14.5L5.5 9.5L1.5 6.5H6.5L8 1.5Z"
        fill={filled ? 'var(--color-gold)' : 'var(--color-grey-300)'}
      />
    </svg>
  );
}

/** Share (connected nodes) glyph. */
export function ShareIcon({ size = 16, color = 'var(--color-text)', ...rest }: IconProps) {
  return (
    <svg viewBox="0 0 16 16" {...base(size, rest)}>
      <path
        d="M12 10.8C11.5 10.8 11.05 11 10.7 11.35L5.95 8.5C6 8.34 6.03 8.17 6.03 8C6.03 7.83 6 7.66 5.95 7.5L10.68 4.66C11.04 5.02 11.5 5.23 12 5.23C13.1 5.23 14 4.33 14 3.23C14 2.13 13.1 1.23 12 1.23C10.9 1.23 10 2.13 10 3.23C10 3.4 10.03 3.57 10.08 3.73L5.35 6.57C4.99 6.21 4.53 6 4.03 6C2.93 6 2.03 6.9 2.03 8C2.03 9.1 2.93 10 4.03 10C4.53 10 4.99 9.79 5.35 9.43L10.08 12.27C10.03 12.43 10 12.6 10 12.77C10 13.87 10.9 14.77 12 14.77C13.1 14.77 14 13.87 14 12.77C14 11.67 13.1 10.8 12 10.8Z"
        fill={color}
      />
    </svg>
  );
}

/** Social / camera-circle glyph. */
export function SocialIcon({ size = 16, color = 'var(--color-text)', ...rest }: IconProps) {
  return (
    <svg viewBox="0 0 16 16" {...base(size, rest)}>
      <path
        d="M8 1C4.13 1 1 4.13 1 8C1 11.87 4.13 15 8 15C11.87 15 15 11.87 15 8C15 4.13 11.87 1 8 1ZM11.5 5.5C11.5 5.78 11.28 6 11 6C10.72 6 10.5 5.78 10.5 5.5C10.5 5.22 10.72 5 11 5C11.28 5 11.5 5.22 11.5 5.5ZM8 11.5C6.62 11.5 5.5 10.38 5.5 9C5.5 7.62 6.62 6.5 8 6.5C9.38 6.5 10.5 7.62 10.5 9C10.5 10.38 9.38 11.5 8 11.5Z"
        fill={color}
      />
    </svg>
  );
}

/** Link / share-node outline glyph. */
export function LinkIcon({ size = 16, color = 'var(--color-text)', ...rest }: IconProps) {
  return (
    <svg viewBox="0 0 16 16" {...base(size, rest)}>
      <path
        d="M11.33 4.67L8 8L11.33 11.33M4.67 8H8"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="13" cy="3" r="2" stroke={color} strokeWidth="1.2" />
      <circle cx="13" cy="13" r="2" stroke={color} strokeWidth="1.2" />
      <circle cx="3" cy="8" r="2" stroke={color} strokeWidth="1.2" />
    </svg>
  );
}

/** Settings gear glyph. */
export function GearIcon({ size = 24, color = 'var(--color-white)', ...rest }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...base(size, rest)}>
      <path d="M12 15.5A3.5 3.5 0 1 0 12 8.5a3.5 3.5 0 0 0 0 7Z" fill={color} />
      <path
        d="M19.43 12.98c.04-.32.07-.66.07-.98s-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.3-.61-.22l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65A.488.488 0 0 0 14 2h-4c-.25 0-.46.18-.5.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.23-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98s.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1.01c.52.4 1.08.73 1.69.98l.38 2.65c.05.24.25.42.5.42h4c.25 0 .46-.18.5-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1.01c.22.08.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65ZM12 15.5A3.5 3.5 0 1 1 12 8.5a3.5 3.5 0 0 1 0 7Z"
        fill={color}
      />
    </svg>
  );
}

/** Chevron pointing down (selects/dropdowns). */
export function ChevronDownIcon({ size = 10, color = 'var(--color-text)', ...rest }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...base(size, rest)}>
      <path
        d="M6 9l6 6 6-6"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
