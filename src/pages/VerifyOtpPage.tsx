import { useNavigate } from 'react-router-dom';
import { GameFrame } from '../components/layout';
import { Button } from '../components/ui';
import { ShareIcon, SocialIcon, LinkIcon } from '../components/icons';
import styles from './VerifyOtpPage.module.css';

/**
 * Issue #1 — Verify OTP (812x375 landscape split). Brand/illustration panel on
 * the left, six-cell OTP entry card on the right. Inputs are static placeholders.
 */
const OTP_DIGITS = ['4', '2', '9', '', '', ''];

export default function VerifyOtpPage() {
  const navigate = useNavigate();

  return (
    <GameFrame>
      <div className={styles.artboard}>
        {/* Left brand panel */}
        <aside className={styles.brand}>
          <div className={styles.brandContent}>
            <div className={styles.logo} aria-hidden="true">
              P
            </div>
            <h1 className={styles.brandTitle}>Praxis</h1>
            <p className={styles.brandTagline}>Play, Learn, and Grow Together</p>
          </div>
          <div className={styles.socialRow}>
            <span className={styles.socialIcon}>
              <ShareIcon size={18} color="var(--color-white)" />
            </span>
            <span className={styles.socialIcon}>
              <SocialIcon size={18} color="var(--color-white)" />
            </span>
            <span className={styles.socialIcon}>
              <LinkIcon size={18} color="var(--color-white)" />
            </span>
          </div>
        </aside>

        {/* Right OTP card */}
        <section className={styles.panel}>
          <div className={styles.card}>
            <h2 className={styles.cardTitle}>Verify OTP</h2>
            <p className={styles.cardCopy}>
              Enter the 6-digit code we sent to your registered number.
            </p>

            <div className={styles.otpRow}>
              {OTP_DIGITS.map((digit, i) => (
                <div key={i} className={`${styles.otpCell} ${digit ? styles.otpCellFilled : ''}`}>
                  {digit}
                </div>
              ))}
            </div>

            <Button fullWidth onClick={() => navigate('/welcome')}>
              Verify
            </Button>
            <p className={styles.resend}>
              Didn&apos;t get a code? <span className={styles.resendLink}>Resend</span>
            </p>
          </div>
        </section>
      </div>
    </GameFrame>
  );
}
