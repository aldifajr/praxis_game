import { BackIcon, CloseCircleIcon, LinkIcon, UserIcon } from '../components/icons';

const FRIENDS: { name: string; online: boolean }[] = [
  { name: 'Olivia P.', online: true },
  { name: 'Reha A.', online: true },
  { name: 'Ahanu S.', online: true },
  { name: 'Daisuke N.', online: false },
  { name: 'Bongani D.', online: false },
  { name: 'Li W.', online: false },
];

export default function CreateRoomPreparePage() {
  return (
    <div className="crp-shell">
      <div className="crp-card">
        {/* Red header */}
        <div className="crp-header">
          <button className="crp-header-btn" aria-label="Back">
            <BackIcon />
          </button>
          <span className="crp-header-title">Model Permania</span>
          <button className="crp-header-btn crp-close-btn" aria-label="Close">
            <CloseCircleIcon />
          </button>
        </div>

        {/* Body: left panel + right panel */}
        <div className="crp-body">
          {/* Left panel */}
          <div className="crp-left">
            {/* Tabs / breadcrumb row */}
            <div className="crp-tabs-row">
              <div className="crp-tab-active">
                <UserIcon size={16} color="var(--color-text)" />
                <span>Lobby</span>
              </div>
              <div className="crp-tab-rest">
                <span>Model Permania ·&nbsp;</span>
                <span className="crp-tab-fade">Prepare</span>
              </div>
            </div>

            {/* Room info */}
            <div className="crp-room-info">
              <div className="crp-room-name-row">
                <UserIcon size={14} color="var(--color-text)" />
                <span className="crp-room-label">Model Permania</span>
                <span className="crp-host-badge">HOST</span>
                <div className="crp-action-icons">
                  <button className="crp-icon-btn" aria-label="Share">
                    <LinkIcon />
                  </button>
                  <button className="crp-icon-btn" aria-label="More">
                    <LinkIcon />
                  </button>
                </div>
              </div>
              <div className="crp-code-row">
                <div className="crp-code-wrap">
                  <span className="crp-code-text">MOD-001 · Permania</span>
                  <div className="crp-code-fade-overlay" />
                </div>
                <button className="crp-copy-pill">COPY</button>
              </div>
            </div>

            {/* Player card slots */}
            <div className="crp-players-row">
              <div className="crp-player-card crp-player-host">
                <UserIcon size={20} color="var(--color-text)" />
                <span className="crp-player-label">You</span>
              </div>
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="crp-player-card crp-player-empty">
                  <UserIcon size={20} color="var(--color-grey-400)" />
                </div>
              ))}
            </div>

            {/* Bottom area */}
            <div className="crp-left-bottom">
              <button className="crp-start-btn">Start Game</button>
            </div>
          </div>

          {/* Vertical divider */}
          <div className="crp-divider" />

          {/* Right panel — friends list */}
          <div className="crp-right">
            <div className="crp-friends-header">
              <span className="crp-friends-title">Invite friends</span>
            </div>
            <div className="crp-friends-list">
              {FRIENDS.map((friend, idx) => (
                <div key={idx} className="crp-friend-row">
                  <div className="crp-friend-avatar">
                    <UserIcon size={14} color="var(--color-text)" />
                  </div>
                  <span className="crp-friend-name">{friend.name}</span>
                  <button
                    className={`crp-invite-btn ${friend.online ? 'crp-invite-online' : 'crp-invite-offline'}`}
                    disabled={!friend.online}
                  >
                    Invite
                  </button>
                  <span
                    className={`crp-status-dot ${friend.online ? 'crp-dot-online' : 'crp-dot-offline'}`}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
