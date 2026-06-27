import { ModalFrame } from '../components/layout';
import { AvatarIcon, BackIcon } from '../components/icons';

export default function JoinRoomPreparePage() {
  return (
    <ModalFrame>
      <div className="join-prepare-card">
        {/* Red header */}
        <div className="join-prepare-header">
          <div className="join-prepare-header-left">
            <div className="join-prepare-avatar-btn">
              <BackIcon />
            </div>
            <span className="join-prepare-header-title">Start _ Join room _ Prepare ....</span>
          </div>
        </div>

        {/* Content */}
        <div className="join-prepare-content">
          <div className="join-prepare-avatar">
            <AvatarIcon size={40} />
          </div>

          <div className="join-prepare-text-block">
            <p className="join-prepare-line">Prepare to start</p>
            <p className="join-prepare-line">Waiting for other players...</p>
            <p className="join-prepare-line">3/4 players ready</p>
          </div>
        </div>
      </div>
    </ModalFrame>
  );
}
