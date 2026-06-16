function AvatarIcon({ size = 40 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path
        d="M21.817 15.2C20 12.8167 17.6 10.9333 14.867 9.75C14.384 9.55 14.217 9.11667 14.167 8.9C14.067 8.46667 14.167 8 14.467 7.65C16.267 5.48333 17.35 2.63333 17.35 0.0166667C17.35 -5.13333 13.167 -9.31667 9.017 -9.31667C4.867 -9.31667 0.683667 -5.13333 0.683667 0.0166667C0.683667 2.63333 1.767 5.48333 3.567 7.65C3.85 8 3.967 8.46667 3.867 8.9C3.817 9.13333 3.65 9.55 3.167 9.75C0.433667 10.9333 -1.983 12.8167 -3.79967 15.2C-4.24967 15.7833 -4.133 16.6167 -3.54967 17.0667C-3.29967 17.25 -3.01633 17.3333 -2.74967 17.3333C-2.34967 17.3333 -1.94967 17.15 -1.683 16.8C-0.149667 14.7833 1.883 13.1833 4.21633 12.1833C5.34933 11.7 6.16633 10.7167 6.44933 9.5C6.74933 8.25 6.44933 6.91667 5.61633 5.91667C4.21633 4.23333 3.34933 1.96667 3.34933 0.0166667C3.34933 -3.7 6.33333 -6.68333 10.0163 -6.68333C13.6993 -6.68333 16.6833 -3.7 16.6833 0.0166667C16.6833 1.96667 15.8163 4.23333 14.4163 5.91667C13.1163 7.46667 11.5663 8.31667 10.0163 8.31667C9.28333 8.31667 8.68333 8.91667 8.68333 9.65C8.68333 10.3833 9.28333 10.9833 10.0163 10.9833C11.2993 10.9833 12.5663 10.6167 13.7333 9.93333C14.0993 10.9333 14.8163 11.75 15.8163 12.1667C18.1333 13.1667 20.1663 14.7667 21.7163 16.7833C21.9833 17.1333 22.3833 17.3167 22.7833 17.3167C23.0663 17.3167 23.3493 17.2333 23.5833 17.05C24.1663 16.6 24.2833 15.7667 23.8333 15.1833L21.817 15.2Z"
        fill="currentColor"
        transform="translate(2.5 12)"
      />
    </svg>
  );
}

function HeaderAvatar() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="10" fill="white" />
      <path
        d="M10.1701 16.8C9.9801 16.8 9.7801 16.73 9.6301 16.59C9.3001 16.29 9.2801 15.79 9.5801 15.46L12.6301 12.14C12.7001 12.06 12.7001 11.95 12.6301 11.87L9.5801 8.55C9.2801 8.22 9.3001 7.72 9.6301 7.42C9.9601 7.12 10.4601 7.14 10.7601 7.47L13.8101 10.79C14.4501 11.48 14.4501 12.53 13.8101 13.22L10.7601 16.54C10.6001 16.71 10.3901 16.8 10.1701 16.8Z"
        fill="#FF1934"
      />
    </svg>
  );
}

export default function JoinRoomPreparePage() {
  return (
    <div className="join-prepare-shell">
      <div className="join-prepare-card">
        {/* Red header */}
        <div className="join-prepare-header">
          <div className="join-prepare-header-left">
            <div className="join-prepare-avatar-btn">
              <HeaderAvatar />
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
    </div>
  );
}
