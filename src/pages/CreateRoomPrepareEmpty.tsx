import { useNavigate } from 'react-router-dom';

export default function CreateRoomPrepareEmpty() {
  const navigate = useNavigate();

  return (
    <div className="crpe-shell">
      {/* Header */}
      <header className="crpe-header">
        <button className="crpe-header-btn" aria-label="Back" onClick={() => navigate(-1)}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="10" fill="white" />
            <path
              d="M11.1701 16.8C10.9801 16.8 10.7801 16.73 10.6301 16.59C10.3001 16.29 10.2801 15.79 10.5801 15.46L13.6301 12.14C13.7001 12.06 13.7001 11.95 13.6301 11.87L10.5801 8.55C10.2801 8.22 10.3001 7.72 10.6301 7.42C10.9601 7.12 11.4601 7.14 11.7601 7.47L14.8101 10.79C15.4501 11.48 15.4501 12.53 14.8101 13.22L11.7601 16.54C11.6001 16.71 11.3901 16.8 11.1701 16.8Z"
              fill="#FF1934"
            />
          </svg>
        </button>
        <div className="crpe-header-title">Create Room</div>
        <button className="crpe-header-btn" aria-label="Close" onClick={() => navigate('/')}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="10" fill="white" />
            <path
              d="M16.21 9.41C15.88 9.11 15.38 9.13 15.08 9.46L12 12.82L8.92 9.46C8.62 9.13 8.11 9.11 7.79 9.41C7.46 9.71 7.44 10.21 7.74 10.54L10.91 14L7.74 17.46C7.44 17.79 7.46 18.29 7.79 18.59C7.94 18.73 8.14 18.8 8.33 18.8C8.55 18.8 8.76 18.71 8.92 18.54L12 15.18L15.08 18.54C15.24 18.71 15.45 18.8 15.67 18.8C15.86 18.8 16.06 18.73 16.21 18.59C16.54 18.29 16.56 17.79 16.26 17.46L13.09 14L16.26 10.54C16.56 10.21 16.54 9.71 16.21 9.41Z"
              fill="white"
            />
          </svg>
        </button>
      </header>

      {/* Room info panel */}
      <section className="crpe-room-info">
        <div className="crpe-room-icon">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path
              d="M20.2904 18.72C19.2004 17.29 17.7604 16.16 16.1204 15.45C15.8304 15.33 15.7304 15.07 15.7004 14.94C15.6404 14.68 15.7004 14.4 15.8804 14.19C16.9604 12.89 17.6104 11.18 17.6104 9.61C17.6104 6.52 15.1004 4.01 12.0104 4.01C8.92039 4.01 6.41039 6.52 6.41039 9.61C6.41039 11.18 7.06039 12.89 8.14039 14.19C8.31039 14.4 8.38039 14.68 8.32039 14.94C8.29039 15.08 8.19039 15.33 7.90039 15.45C6.26039 16.16 4.81039 17.29 3.72039 18.72C3.45039 19.07 3.52039 19.57 3.87039 19.84C4.02039 19.95 4.19039 20 4.35039 20C4.59039 20 4.83039 19.89 4.99039 19.68C5.91039 18.47 7.13039 17.51 8.53039 16.91C9.21039 16.62 9.70039 16.03 9.87039 15.3C10.0504 14.55 9.87039 13.75 9.37039 13.15C8.53039 12.14 8.01039 10.78 8.01039 9.59C8.01039 7.38 9.80039 5.59 12.0104 5.59C14.2204 5.59 16.0104 7.38 16.0104 9.59C16.0104 10.78 15.4904 12.14 14.6504 13.15C13.8704 14.08 12.9404 14.59 12.0104 14.59C11.5704 14.59 11.2104 14.95 11.2104 15.39C11.2104 15.83 11.5704 16.19 12.0104 16.19C12.7804 16.19 13.5404 15.97 14.2404 15.56C14.4604 16.16 14.8904 16.65 15.4904 16.9C16.8804 17.5 18.1004 18.46 19.0304 19.67C19.1904 19.88 19.4304 19.99 19.6704 19.99C19.8404 19.99 20.0104 19.94 20.1504 19.83C20.5004 19.56 20.5704 19.06 20.3004 18.71L20.2904 18.72Z"
              fill="#2B2B2B"
            />
          </svg>
        </div>
        <div className="crpe-room-text">
          <div className="crpe-room-name">Room 1</div>
          <div className="crpe-room-code">123456</div>
        </div>
      </section>

      {/* Share / invite bar */}
      <section className="crpe-share-bar">
        <div className="crpe-share-label">Share Room Code</div>
        <div className="crpe-share-actions">
          <button className="crpe-share-btn" aria-label="Share">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path
                d="M10.1333 12H5.86667C5.84 12 5.81333 12 5.78667 11.9933C4.48667 11.9 3.5 10.86 3.5 9.57333C3.5 8.30667 4.45333 7.28 5.72667 7.16C5.82 5.56 7.18 4.28667 8.8 4.28667C10.4267 4.28667 11.7867 5.56667 11.8733 7.17333C13.12 7.31333 14.04 8.32667 14.04 9.56667C14.04 10.8867 12.98 11.9667 11.6533 12C11.6267 12 11.6 12 11.5733 12H10.1333ZM8.8 5.28667C7.72 5.28667 6.82 6.12 6.72667 7.16H7.73333C7.88667 7.16 8.01333 7.28667 8.01333 7.44C8.01333 7.59333 7.88667 7.72 7.73333 7.72H5.86667C5.22 7.72 4.5 8.33333 4.5 9.57333C4.5 10.3533 5.07333 11.02 5.82 11.1733V10.44C5.82 10.2867 5.94667 10.16 6.1 10.16C6.25333 10.16 6.38 10.2867 6.38 10.44V11.44C6.38 11.48 6.37333 11.5133 6.36667 11.5467C6.49333 11.64 6.63333 11.72 6.78667 11.78C6.81333 11.7867 6.84 11.7933 6.86667 11.7933H10.1333C10.16 11.7933 10.1867 11.7933 10.2133 11.8C10.3667 11.74 10.5067 11.66 10.6333 11.5667C10.6267 11.5333 10.62 11.5 10.62 11.46V10.44C10.62 10.2867 10.7467 10.16 10.9 10.16C11.0533 10.16 11.18 10.2867 11.18 10.44V11.1733C11.9267 11.02 12.5 10.3533 12.5 9.56667C12.5 8.62667 11.8467 7.82667 10.92 7.68C10.8467 7.66667 10.7867 7.60667 10.7733 7.53333C10.76 7.46 10.7933 7.38667 10.8533 7.34C10.9333 7.28 11 7.20667 11.0533 7.12C10.9733 6.10667 10.0533 5.28667 8.99333 5.28667H8.8Z"
                fill="white"
              />
            </svg>
          </button>
          <button className="crpe-share-btn" aria-label="Copy">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <rect
                x="5.5"
                y="5.5"
                width="7.5"
                height="8.5"
                rx="1.5"
                stroke="white"
                strokeWidth="1.3"
              />
              <path
                d="M3 10.5V3.5C3 2.67 3.67 2 4.5 2H10.5"
                stroke="white"
                strokeWidth="1.3"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>
      </section>

      {/* Progress bar */}
      <div className="crpe-progress-track">
        <div className="crpe-progress-fill" />
        <div className="crpe-progress-knob" />
      </div>

      {/* Player slots */}
      <section className="crpe-players">
        <div className="crpe-player-slot crpe-player-slot--host">
          <div className="crpe-player-avatar">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M20.2904 18.72C19.2004 17.29 17.7604 16.16 16.1204 15.45C15.8304 15.33 15.7304 15.07 15.7004 14.94C15.6404 14.68 15.7004 14.4 15.8804 14.19C16.9604 12.89 17.6104 11.18 17.6104 9.61C17.6104 6.52 15.1004 4.01 12.0104 4.01C8.92039 4.01 6.41039 6.52 6.41039 9.61C6.41039 11.18 7.06039 12.89 8.14039 14.19C8.31039 14.4 8.38039 14.68 8.32039 14.94C8.29039 15.08 8.19039 15.33 7.90039 15.45C6.26039 16.16 4.81039 17.29 3.72039 18.72C3.45039 19.07 3.52039 19.57 3.87039 19.84C4.02039 19.95 4.19039 20 4.35039 20C4.59039 20 4.83039 19.89 4.99039 19.68C5.91039 18.47 7.13039 17.51 8.53039 16.91C9.21039 16.62 9.70039 16.03 9.87039 15.3C10.0504 14.55 9.87039 13.75 9.37039 13.15C8.53039 12.14 8.01039 10.78 8.01039 9.59C8.01039 7.38 9.80039 5.59 12.0104 5.59C14.2204 5.59 16.0104 7.38 16.0104 9.59C16.0104 10.78 15.4904 12.14 14.6504 13.15C13.8704 14.08 12.9404 14.59 12.0104 14.59C11.5704 14.59 11.2104 14.95 11.2104 15.39C11.2104 15.83 11.5704 16.19 12.0104 16.19C12.7804 16.19 13.5404 15.97 14.2404 15.56C14.4604 16.16 14.8904 16.65 15.4904 16.9C16.8804 17.5 18.1004 18.46 19.0304 19.67C19.1904 19.88 19.4304 19.99 19.6704 19.99C19.8404 19.99 20.0104 19.94 20.1504 19.83C20.5004 19.56 20.5704 19.06 20.3004 18.71L20.2904 18.72Z"
                fill="#2B2B2B"
              />
            </svg>
          </div>
          <div className="crpe-player-name">You</div>
        </div>
        <div className="crpe-player-slot">
          <div className="crpe-player-avatar crpe-player-avatar--empty">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="10" stroke="#CCCCCC" strokeWidth="1.5" fill="none" />
              <path d="M8 12H16M12 8V16" stroke="#CCCCCC" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </div>
          <div className="crpe-player-name crpe-player-name--empty">Waiting...</div>
        </div>
        <div className="crpe-player-slot">
          <div className="crpe-player-avatar crpe-player-avatar--empty">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="10" stroke="#CCCCCC" strokeWidth="1.5" fill="none" />
              <path d="M8 12H16M12 8V16" stroke="#CCCCCC" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </div>
          <div className="crpe-player-name crpe-player-name--empty">Waiting...</div>
        </div>
        <div className="crpe-player-slot">
          <div className="crpe-player-avatar crpe-player-avatar--empty">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="10" stroke="#CCCCCC" strokeWidth="1.5" fill="none" />
              <path d="M8 12H16M12 8V16" stroke="#CCCCCC" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </div>
          <div className="crpe-player-name crpe-player-name--empty">Waiting...</div>
        </div>
      </section>

      {/* Start button */}
      <button className="crpe-start-btn" onClick={() => navigate('/loading-game')}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="10" fill="white" />
          <path d="M10.5 16.5L15.5 12L10.5 7.5V16.5Z" fill="#FF1934" />
        </svg>
        <span>Start</span>
      </button>

      {/* Right panel: friends / invite */}
      <aside className="crpe-friends-panel">
        <div className="crpe-friends-header">Friends</div>
        <div className="crpe-friends-empty">
          <div className="crpe-friends-illustration">
            <svg width="96" height="96" viewBox="0 0 96 96" fill="none">
              <path
                d="M23.691 70.855V44.513L45.481 54.681L76 47.127V69.486L45.481 81.024L23.691 70.855Z"
                fill="#FF6678"
              />
              <path d="M23.691 44.513V70.855L45.481 81.024V54.681L23.691 44.513Z" fill="#FF5769" />
              <path
                d="M23.692 44.513C23.692 44.513 17.106 49.259 14.977 55.845L37.058 67.08C37.058 67.08 41.804 58.365 45.483 54.683L23.694 44.515L23.692 44.513Z"
                fill="#FF7587"
              />
              <path
                d="M76 47.127L45.481 54.681C49.839 60.878 49.839 68.434 49.839 68.434L81.022 58.944C80.44 53.715 76 47.13 76 47.13L76 47.127Z"
                fill="#FF7587"
              />
              <path
                d="M23.691 44.513L48.291 39.38L76 47.127L45.481 54.681L23.691 44.513Z"
                fill="#CC5260"
              />
              <path d="M43.641 36.281L36.669 22.337L33.763 29.309L43.641 36.281Z" fill="#FF7587" />
              <path d="M47.709 32.988V14.976L52.358 20.399L47.709 32.988Z" fill="#FF7587" />
              <path d="M51.195 36.281L57.395 25.63L58.749 32.02L51.195 36.281Z" fill="#FF7587" />
              <path
                d="M48.291 39.38L23.691 44.513L45.481 54.681L48.291 53.988V39.38Z"
                fill="#C54956"
              />
            </svg>
          </div>
          <div className="crpe-friends-empty-text">No friends online</div>
        </div>
      </aside>
    </div>
  );
}
