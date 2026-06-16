import { useNavigate } from 'react-router-dom';
import {
  AvatarIcon,
  ChartIcon,
  CloseIcon,
  ShareIcon,
  SocialIcon,
  StarIcon,
} from '../components/icons';

const leaderboardData = [
  {
    rank: 1,
    name: 'Player One',
    money: 'Rp 12.500.000',
    color: 'var(--color-brand-red-dark)',
    textColor: 'var(--color-white)',
    highlight: false,
  },
  {
    rank: 2,
    name: 'Player Two',
    money: 'Rp 10.200.000',
    color: 'var(--color-gold)',
    textColor: 'var(--color-white)',
    highlight: false,
  },
  {
    rank: 3,
    name: 'Player Three',
    money: 'Rp 8.750.000',
    color: 'var(--color-green)',
    textColor: 'var(--color-white)',
    highlight: false,
  },
  {
    rank: 4,
    name: 'Player Four',
    money: 'Rp 7.300.000',
    color: 'var(--color-grey-300)',
    textColor: 'var(--color-text)',
    highlight: false,
  },
  {
    rank: 5,
    name: 'You',
    money: 'Rp 6.100.000',
    color: 'var(--color-grey-300)',
    textColor: 'var(--color-text)',
    highlight: true,
  },
];

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
