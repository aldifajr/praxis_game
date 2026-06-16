import { useNavigate } from 'react-router-dom';

const leaderboardData = [
  {
    rank: 1,
    name: 'Player One',
    money: 'Rp 12.500.000',
    color: '#DA011C',
    textColor: '#fff',
    highlight: false,
  },
  {
    rank: 2,
    name: 'Player Two',
    money: 'Rp 10.200.000',
    color: '#D9AA16',
    textColor: '#fff',
    highlight: false,
  },
  {
    rank: 3,
    name: 'Player Three',
    money: 'Rp 8.750.000',
    color: '#008C1E',
    textColor: '#fff',
    highlight: false,
  },
  {
    rank: 4,
    name: 'Player Four',
    money: 'Rp 7.300.000',
    color: '#CCCCCC',
    textColor: '#2B2B2B',
    highlight: false,
  },
  {
    rank: 5,
    name: 'You',
    money: 'Rp 6.100.000',
    color: '#CCCCCC',
    textColor: '#2B2B2B',
    highlight: true,
  },
];

function ChartIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path
        d="M37.2 36C36.21 36 35.4 35.19 35.4 34.2V27.78C35.4 27.34 35.04 26.98 34.6 26.98C34.16 26.98 33.8 27.34 33.8 27.78V34.2C33.8 35.19 32.99 36 32 36H30.6C29.61 36 28.8 35.19 28.8 34.2V22.73C28.8 22.29 28.44 21.93 28 21.93C27.56 21.93 27.2 22.29 27.2 22.73V34.2C27.2 35.19 26.39 36 25.4 36H24C23.01 36 22.2 35.19 22.2 34.2V30.66C22.2 30.22 21.84 29.86 21.4 29.86C20.96 29.86 20.6 30.22 20.6 30.66V34.2C20.6 35.19 19.79 36 18.8 36C18.36 36 18 35.64 18 35.2C18 34.76 18.36 34.4 18.8 34.4C18.91 34.4 19 34.31 19 34.2V30.66C19 29.34 20.08 28.26 21.4 28.26C22.72 28.26 23.8 29.34 23.8 30.66V34.2C23.8 34.31 23.89 34.4 24 34.4H25.4C25.51 34.4 25.6 34.31 25.6 34.2V22.73C25.6 21.41 26.68 20.33 28 20.33C29.32 20.33 30.4 21.41 30.4 22.73V34.2C30.4 34.31 30.49 34.4 30.6 34.4H32C32.11 34.4 32.2 34.31 32.2 34.2V27.78C32.2 26.46 33.28 25.38 34.6 25.38C35.92 25.38 37 26.46 37 27.78V34.2C37 34.31 37.09 34.4 37.2 34.4C37.64 34.4 38 34.76 38 35.2C38 35.64 37.64 36 37.2 36Z"
        fill="white"
        transform="translate(-18 -18) scale(0.6667)"
      />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path
        d="M498.21 9.41C497.88 9.11 497.38 9.13 497.08 9.46L494 12.82L490.92 9.46C490.62 9.13 490.11 9.11 489.79 9.41C489.46 9.71 489.44 10.21 489.74 10.54L492.91 14L489.74 17.46C489.44 17.79 489.46 18.29 489.79 18.59C489.94 18.73 490.14 18.8 490.33 18.8C490.55 18.8 490.76 18.71 490.92 18.54L494 15.18L497.08 18.54C497.24 18.71 497.45 18.8 497.67 18.8C497.86 18.8 498.06 18.73 498.21 18.59C498.54 18.29 498.56 17.79 498.26 17.46L495.09 14L498.26 10.54C498.56 10.21 498.54 9.71 498.21 9.41Z"
        fill="white"
        transform="translate(-482 -2)"
      />
      <path
        d="M494 4C488.49 4 484 8.49 484 14C484 19.51 488.49 24 494 24C499.51 24 504 19.51 504 14C504 8.49 499.51 4 494 4ZM494 22.4C489.37 22.4 485.6 18.63 485.6 14C485.6 9.37 489.37 5.6 494 5.6C498.63 5.6 502.4 9.37 502.4 14C502.4 18.63 498.63 22.4 494 22.4Z"
        fill="white"
        transform="translate(-482 -2)"
      />
    </svg>
  );
}

function AvatarIcon({ size = 24 }: { size?: number }) {
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

function StarIcon({ filled = true }: { filled?: boolean }) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path
        d="M8 1.5L9.5 6.5H14.5L10.5 9.5L12 14.5L8 11.5L4 14.5L5.5 9.5L1.5 6.5H6.5L8 1.5Z"
        fill={filled ? '#D9AA16' : '#CCCCCC'}
      />
    </svg>
  );
}

function ShareIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path
        d="M12 10.8C11.5 10.8 11.05 11 10.7 11.35L5.95 8.5C6 8.34 6.03 8.17 6.03 8C6.03 7.83 6 7.66 5.95 7.5L10.68 4.66C11.04 5.02 11.5 5.23 12 5.23C13.1 5.23 14 4.33 14 3.23C14 2.13 13.1 1.23 12 1.23C10.9 1.23 10 2.13 10 3.23C10 3.4 10.03 3.57 10.08 3.73L5.35 6.57C4.99 6.21 4.53 6 4.03 6C2.93 6 2.03 6.9 2.03 8C2.03 9.1 2.93 10 4.03 10C4.53 10 4.99 9.79 5.35 9.43L10.08 12.27C10.03 12.43 10 12.6 10 12.77C10 13.87 10.9 14.77 12 14.77C13.1 14.77 14 13.87 14 12.77C14 11.67 13.1 10.8 12 10.8Z"
        fill="#2B2B2B"
      />
    </svg>
  );
}

function SocialIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path
        d="M8 1C4.13 1 1 4.13 1 8C1 11.87 4.13 15 8 15C11.87 15 15 11.87 15 8C15 4.13 11.87 1 8 1ZM11.5 5.5C11.5 5.78 11.28 6 11 6C10.72 6 10.5 5.78 10.5 5.5C10.5 5.22 10.72 5 11 5C11.28 5 11.5 5.22 11.5 5.5ZM8 11.5C6.62 11.5 5.5 10.38 5.5 9C5.5 7.62 6.62 6.5 8 6.5C9.38 6.5 10.5 7.62 10.5 9C10.5 10.38 9.38 11.5 8 11.5Z"
        fill="#2B2B2B"
      />
    </svg>
  );
}

export default function LeaderboardServerPage() {
  const navigate = useNavigate();

  return (
    <div className="lb-shell">
      <div className="lb-card">
        {/* Header */}
        <header className="lb-header">
          <div className="lb-header-left">
            <div className="lb-header-icon">
              <ChartIcon />
            </div>
            <span className="lb-header-title">Leaderboard</span>
          </div>
          <button className="lb-close-btn" onClick={() => navigate('/')} aria-label="Close">
            <CloseIcon />
          </button>
        </header>

        {/* Tabs */}
        <div className="lb-tabs">
          <button className="lb-tab lb-tab-active">Server</button>
          <button className="lb-tab">Global</button>
        </div>

        {/* Content */}
        <div className="lb-content">
          {/* Left panel */}
          <aside className="lb-left-panel">
            <div className="lb-server-badge">
              <span className="lb-server-label">Server</span>
            </div>

            <div className="lb-avatar-wrap">
              <div className="lb-avatar">
                <AvatarIcon size={40} />
              </div>
            </div>

            <div className="lb-stars">
              <StarIcon filled />
              <StarIcon filled />
              <StarIcon filled />
              <StarIcon filled />
              <StarIcon filled={false} />
            </div>

            <div className="lb-share-row">
              <button className="lb-share-btn" aria-label="Share">
                <ShareIcon />
              </button>
              <button className="lb-share-btn" aria-label="Social">
                <SocialIcon />
              </button>
            </div>
          </aside>

          {/* Right panel - table */}
          <div className="lb-table">
            {leaderboardData.map((row) => (
              <div
                key={row.rank}
                className={`lb-row ${row.highlight ? 'lb-row-highlight' : ''}`}
                style={{ backgroundColor: row.color }}
              >
                <span className="lb-rank" style={{ color: row.textColor }}>
                  {row.rank}
                </span>
                <div className="lb-row-avatar">
                  <AvatarIcon size={20} />
                </div>
                <span className="lb-name" style={{ color: row.textColor }}>
                  {row.name}
                </span>
                <span className="lb-money" style={{ color: row.textColor }}>
                  {row.money}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
