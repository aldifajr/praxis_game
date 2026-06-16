function BackChevronIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="10" fill="white" />
      <path
        d="M13.17 16.8C13.38 16.8 13.58 16.73 13.73 16.59C14.06 16.29 14.08 15.79 13.78 15.46L10.73 12.14C10.66 12.06 10.66 11.95 10.73 11.87L13.78 8.55C14.08 8.22 14.06 7.72 13.73 7.42C13.4 7.12 12.9 7.14 12.6 7.47L9.55 10.79C8.91 11.48 8.91 12.53 9.55 13.22L12.6 16.54C12.76 16.71 12.97 16.8 13.17 16.8Z"
        fill="#FF1934"
      />
    </svg>
  );
}

function CloseXIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="10" fill="#DA011C" />
      <path
        d="M15.21 9.41C14.88 9.11 14.38 9.13 14.08 9.46L12 11.82L9.92 9.46C9.62 9.13 9.11 9.11 8.79 9.41C8.46 9.71 8.44 10.21 8.74 10.54L10.91 13L8.74 15.46C8.44 15.79 8.46 16.29 8.79 16.59C8.94 16.73 9.14 16.8 9.33 16.8C9.55 16.8 9.76 16.71 9.92 16.54L12 14.18L14.08 16.54C14.24 16.71 14.45 16.8 14.67 16.8C14.86 16.8 15.06 16.73 15.21 16.59C15.54 16.29 15.56 15.79 15.26 15.46L13.09 13L15.26 10.54C15.56 10.21 15.54 9.71 15.21 9.41Z"
        fill="white"
      />
    </svg>
  );
}

function PersonIcon({ size = 24, color = 'currentColor' }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path
        d="M20.49 15.2C18.47 12.82 15.9 11.03 12.98 10.08C14.27 9.29 15.14 7.86 15.14 6.22C15.14 3.66 13.05 1.58 10.49 1.58C7.93 1.58 5.84 3.66 5.84 6.22C5.84 7.86 6.71 9.29 8.0 10.08C5.08 11.03 2.51 12.82 0.49 15.2C0.18 15.57 0.23 16.12 0.6 16.43C0.77 16.57 0.98 16.64 1.18 16.64C1.43 16.64 1.68 16.54 1.86 16.33C3.79 14.04 6.55 12.66 9.62 12.36C9.9 12.91 10.17 13.32 10.49 13.32C10.81 13.32 11.08 12.91 11.36 12.36C14.43 12.66 17.19 14.04 19.12 16.33C19.3 16.54 19.55 16.64 19.8 16.64C20.0 16.64 20.21 16.57 20.38 16.43C20.75 16.12 20.8 15.57 20.49 15.2ZM7.46 6.22C7.46 4.55 8.82 3.2 10.49 3.2C12.16 3.2 13.52 4.55 13.52 6.22C13.52 7.89 12.16 9.24 10.49 9.24C8.82 9.24 7.46 7.89 7.46 6.22Z"
        fill={color}
      />
    </svg>
  );
}

function ShareLinkIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path
        d="M11.33 4.67L8 8L11.33 11.33M4.67 8H8"
        stroke="#2B2B2B"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="13" cy="3" r="2" stroke="#2B2B2B" strokeWidth="1.2" />
      <circle cx="13" cy="13" r="2" stroke="#2B2B2B" strokeWidth="1.2" />
      <circle cx="3" cy="8" r="2" stroke="#2B2B2B" strokeWidth="1.2" />
    </svg>
  );
}

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
            <BackChevronIcon />
          </button>
          <span className="crp-header-title">Model Permania</span>
          <button className="crp-header-btn crp-close-btn" aria-label="Close">
            <CloseXIcon />
          </button>
        </div>

        {/* Body: left panel + right panel */}
        <div className="crp-body">
          {/* Left panel */}
          <div className="crp-left">
            {/* Tabs / breadcrumb row */}
            <div className="crp-tabs-row">
              <div className="crp-tab-active">
                <PersonIcon size={16} color="#2B2B2B" />
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
                <PersonIcon size={14} color="#2B2B2B" />
                <span className="crp-room-label">Model Permania</span>
                <span className="crp-host-badge">HOST</span>
                <div className="crp-action-icons">
                  <button className="crp-icon-btn" aria-label="Share">
                    <ShareLinkIcon />
                  </button>
                  <button className="crp-icon-btn" aria-label="More">
                    <ShareLinkIcon />
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
                <PersonIcon size={20} color="#2B2B2B" />
                <span className="crp-player-label">You</span>
              </div>
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="crp-player-card crp-player-empty">
                  <PersonIcon size={20} color="#AAAAAA" />
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
                    <PersonIcon size={14} color="#2B2B2B" />
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
