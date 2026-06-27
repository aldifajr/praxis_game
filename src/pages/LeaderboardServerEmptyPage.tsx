import { useNavigate } from 'react-router-dom';
import { ModalFrame } from '../components/layout';
import {
  AvatarIcon,
  ChartIcon,
  CloseIcon,
  ShareIcon,
  SocialIcon,
  StarIcon,
} from '../components/icons';

function EmptyGiftIllustration() {
  return (
    <svg width="96" height="96" viewBox="0 0 96 96" fill="none" aria-hidden="true">
      {/* Gift box base */}
      <path
        d="M24 66.855V40.513L45.79 50.681L76.297 43.127V65.486L45.79 77.024L24 66.855Z"
        fill="var(--color-brand-red-light)"
      />
      <path d="M24 40.513V66.855L45.79 77.024V50.681L24 40.513Z" fill="#FF5769" />
      <path
        d="M24 40.513C24 40.513 17.414 45.259 15.285 51.845L37.366 63.08C37.366 63.08 42.112 54.365 45.791 50.683L24.002 40.515L24 40.513Z"
        fill="var(--color-brand-red-lighter)"
      />
      <path
        d="M76.297 43.127L45.79 50.681C50.148 56.878 50.148 64.434 50.148 64.434L81.331 54.944C80.749 49.715 76.295 43.13 76.295 43.13L76.297 43.127Z"
        fill="var(--color-brand-red-lighter)"
      />
      <path d="M24 40.513L48.6 35.381L76.297 43.127L45.79 50.681L24 40.513Z" fill="#CC5260" />
      {/* Gift ribbons */}
      <path
        d="M44.641 32.281L37.669 18.337L34.763 25.309L44.641 32.281Z"
        fill="var(--color-brand-red-lighter)"
      />
      <path
        d="M48.709 28.988V10.976L53.358 16.399L48.709 28.988Z"
        fill="var(--color-brand-red-lighter)"
      />
      <path
        d="M52.195 32.281L58.395 21.63L59.749 28.02L52.195 32.281Z"
        fill="var(--color-brand-red-lighter)"
      />
      <path d="M48.6 35.381L24 40.513L45.79 50.681L48.6 49.988V35.381Z" fill="#C54956" />
    </svg>
  );
}

export default function LeaderboardServerEmptyPage() {
  const navigate = useNavigate();

  return (
    <ModalFrame>
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

          {/* Right panel - empty state */}
          <div className="lb-empty-panel">
            <div className="lb-empty-illustration">
              <EmptyGiftIllustration />
            </div>
            <p className="lb-empty-text">No Data</p>
          </div>
        </div>

        {/* Bottom filter bar */}
        <div className="lb-filter-bar">
          <button className="lb-filter-btn lb-filter-active">
            <span>Server</span>
          </button>
        </div>
      </div>
    </ModalFrame>
  );
}
