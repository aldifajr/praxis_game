import { useNavigate } from 'react-router-dom';
import { ModalFrame } from '../components/layout';
import { AvatarIcon, UserIcon } from '../components/icons';

export default function JoinRequestPage() {
  const navigate = useNavigate();

  return (
    <ModalFrame>
      <div className="jr-card">
        <header className="jr-header">
          <UserIcon size={24} color="var(--color-white)" />
          <span className="jr-header-title">Join Request</span>
        </header>

        <div className="jr-body">
          <div className="jr-avatar-wrap">
            <div className="jr-avatar">
              <AvatarIcon size={40} color="var(--color-text)" />
            </div>
          </div>

          <p className="jr-name">John Doe</p>
          <p className="jr-message">wants to join your room</p>

          <button className="jr-accept-btn" onClick={() => navigate('/')}>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path
                d="M8.5 12.667C5.448 12.667 3 10.219 3 7.167C3 4.115 5.448 1.667 8.5 1.667C11.552 1.667 14 4.115 14 7.167C14 10.219 11.552 12.667 8.5 12.667Z"
                fill="var(--color-white)"
              />
              <path
                d="M8.447 9.2C8.32 9.2 8.187 9.153 8.087 9.06C7.867 8.86 7.853 8.527 8.053 8.307L10.087 6.093C10.133 6.04 10.133 5.967 10.087 5.913L8.053 3.7C7.853 3.48 7.867 3.147 8.087 2.947C8.307 2.747 8.64 2.76 8.84 2.98L10.873 5.193C11.3 5.653 11.3 6.353 10.873 6.813L8.84 9.027C8.733 9.14 8.593 9.2 8.447 9.2Z"
                fill="var(--color-brand-red)"
              />
            </svg>
            <span>Accept</span>
          </button>

          <button className="jr-decline-btn" onClick={() => navigate('/')}>
            Decline
          </button>
        </div>
      </div>
    </ModalFrame>
  );
}
