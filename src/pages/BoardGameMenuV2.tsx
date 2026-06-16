import { useNavigate } from 'react-router-dom';

export default function BoardGameMenuV2() {
  const navigate = useNavigate();

  return (
    <div className="bgmv2-shell">
      {/* Top navigation bar */}
      <header className="bgmv2-topbar">
        <div className="bgmv2-topbar-left">
          <button className="bgmv2-topbar-btn" aria-label="Menu" onClick={() => navigate(-1)}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path
                d="M4 6h16M4 12h16M4 18h16"
                stroke="#2B2B2B"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>
          <div className="bgmv2-topbar-tabs">
            <div className="bgmv2-tab bgmv2-tab--active">Bursa Efek</div>
            <div className="bgmv2-tab">Kartu</div>
            <div className="bgmv2-tab">Saham</div>
          </div>
        </div>
        <div className="bgmv2-topbar-right">
          <div className="bgmv2-badge">Menu</div>
          <div className="bgmv2-badge">Amalan</div>
          <div className="bgmv2-badge">Profile</div>
        </div>
      </header>

      {/* Main content area */}
      <main className="bgmv2-main">
        {/* Left column */}
        <aside className="bgmv2-left">
          {/* Kartu / Saham panel */}
          <div className="bgmv2-card-panel">
            <div className="bgmv2-card-header">
              <span className="bgmv2-card-dot" />
              <span className="bgmv2-card-title">Kartu</span>
            </div>
            <div className="bgmv2-card-list">
              <div className="bgmv2-card-item">
                <span className="bgmv2-card-item-dot" />
                <span className="bgmv2-card-item-text">Kartu 1</span>
              </div>
              <div className="bgmv2-card-item">
                <span className="bgmv2-card-item-dot" />
                <span className="bgmv2-card-item-text">Kartu 2</span>
              </div>
              <div className="bgmv2-card-item">
                <span className="bgmv2-card-item-dot" />
                <span className="bgmv2-card-item-text">Kartu 3</span>
              </div>
              <div className="bgmv2-card-item">
                <span className="bgmv2-card-item-dot" />
                <span className="bgmv2-card-item-text">Kartu 4</span>
              </div>
            </div>
            <div className="bgmv2-card-divider" />
            <div className="bgmv2-card-header">
              <span className="bgmv2-card-dot bgmv2-card-dot--gold" />
              <span className="bgmv2-card-title">Saham</span>
            </div>
            <div className="bgmv2-card-list">
              <div className="bgmv2-card-item">
                <span className="bgmv2-card-item-dot bgmv2-card-item-dot--gold" />
                <span className="bgmv2-card-item-text">Saham A</span>
              </div>
              <div className="bgmv2-card-item">
                <span className="bgmv2-card-item-dot bgmv2-card-item-dot--gold" />
                <span className="bgmv2-card-item-text">Saham B</span>
              </div>
              <div className="bgmv2-card-item">
                <span className="bgmv2-card-item-dot bgmv2-card-item-dot--gold" />
                <span className="bgmv2-card-item-text">Saham C</span>
              </div>
            </div>
          </div>

          {/* Bottom left panel - Toko / Amalan */}
          <div className="bgmv2-bottom-left-panel">
            <div className="bgmv2-bottom-left-header">
              <span className="bgmv2-card-dot bgmv2-card-dot--green" />
              <span className="bgmv2-card-title">Toko</span>
            </div>
            <div className="bgmv2-bottom-left-list">
              <div className="bgmv2-card-item">
                <span className="bgmv2-card-item-dot bgmv2-card-item-dot--green" />
                <span className="bgmv2-card-item-text">Item 1</span>
              </div>
              <div className="bgmv2-card-item">
                <span className="bgmv2-card-item-dot bgmv2-card-item-dot--green" />
                <span className="bgmv2-card-item-text">Item 2</span>
              </div>
              <div className="bgmv2-card-item">
                <span className="bgmv2-card-item-dot bgmv2-card-item-dot--green" />
                <span className="bgmv2-card-item-text">Item 3</span>
              </div>
            </div>
          </div>
        </aside>

        {/* Center board area */}
        <section className="bgmv2-board">
          {/* Board spaces */}
          <div className="bgmv2-board-grid">
            {/* Top row spaces */}
            <div className="bgmv2-board-space bgmv2-board-space--start">Start</div>
            <div className="bgmv2-board-space" />
            <div className="bgmv2-board-space" />
            <div className="bgmv2-board-space" />
            <div className="bgmv2-board-space" />
            <div className="bgmv2-board-space" />
            <div className="bgmv2-board-space" />
            <div className="bgmv2-board-space" />
            <div className="bgmv2-board-space" />
            <div className="bgmv2-board-space bgmv2-board-space--end">Finish</div>

            {/* Left column spaces */}
            <div className="bgmv2-board-space" />
            <div className="bgmv2-board-space" />
            <div className="bgmv2-board-space" />
            <div className="bgmv2-board-space" />
            <div className="bgmv2-board-space" />
            <div className="bgmv2-board-space" />
            <div className="bgmv2-board-space" />

            {/* Right column spaces */}
            <div className="bgmv2-board-space" />
            <div className="bgmv2-board-space" />
            <div className="bgmv2-board-space" />
            <div className="bgmv2-board-space" />
            <div className="bgmv2-board-space" />
            <div className="bgmv2-board-space" />
            <div className="bgmv2-board-space" />

            {/* Bottom row spaces */}
            <div className="bgmv2-board-space" />
            <div className="bgmv2-board-space" />
            <div className="bgmv2-board-space" />
            <div className="bgmv2-board-space" />
            <div className="bgmv2-board-space" />
            <div className="bgmv2-board-space" />
            <div className="bgmv2-board-space" />
            <div className="bgmv2-board-space" />
            <div className="bgmv2-board-space" />
            <div className="bgmv2-board-space" />
          </div>

          {/* Center dice area */}
          <div className="bgmv2-dice-area">
            <div className="bgmv2-dice">
              <div className="bgmv2-dice-face">
                <div className="bgmv2-dice-dot" />
                <div className="bgmv2-dice-dot" />
                <div className="bgmv2-dice-dot" />
                <div className="bgmv2-dice-dot" />
                <div className="bgmv2-dice-dot" />
                <div className="bgmv2-dice-dot" />
              </div>
            </div>
            <div className="bgmv2-dice-label">Roll</div>
          </div>

          {/* Player tokens */}
          <div className="bgmv2-tokens">
            <div className="bgmv2-token bgmv2-token--red" />
            <div className="bgmv2-token bgmv2-token--blue" />
            <div className="bgmv2-token bgmv2-token--green" />
            <div className="bgmv2-token bgmv2-token--yellow" />
          </div>
        </section>

        {/* Right column */}
        <aside className="bgmv2-right">
          {/* Leaderboard / Rank panel */}
          <div className="bgmv2-leaderboard-panel">
            <div className="bgmv2-panel-header bgmv2-panel-header--red">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                <path
                  d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
                  fill="white"
                />
              </svg>
              <span>Leaderboard</span>
            </div>
            <div className="bgmv2-leaderboard-list">
              <div className="bgmv2-leaderboard-item">
                <span className="bgmv2-rank bgmv2-rank--1">1</span>
                <span className="bgmv2-player-name">Player 1</span>
                <span className="bgmv2-player-score">5000</span>
              </div>
              <div className="bgmv2-leaderboard-item">
                <span className="bgmv2-rank bgmv2-rank--2">2</span>
                <span className="bgmv2-player-name">Player 2</span>
                <span className="bgmv2-player-score">4200</span>
              </div>
              <div className="bgmv2-leaderboard-item">
                <span className="bgmv2-rank bgmv2-rank--3">3</span>
                <span className="bgmv2-player-name">Player 3</span>
                <span className="bgmv2-player-score">3800</span>
              </div>
              <div className="bgmv2-leaderboard-item">
                <span className="bgmv2-rank">4</span>
                <span className="bgmv2-player-name">Player 4</span>
                <span className="bgmv2-player-score">3200</span>
              </div>
              <div className="bgmv2-leaderboard-item">
                <span className="bgmv2-rank">5</span>
                <span className="bgmv2-player-name">Player 5</span>
                <span className="bgmv2-player-score">2800</span>
              </div>
            </div>
          </div>

          {/* Chat / Social panel */}
          <div className="bgmv2-chat-panel">
            <div className="bgmv2-panel-header bgmv2-panel-header--red">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                <path
                  d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.2 8.38 8.38 0 0 1-3.8-.9L3 21l1.4-5.6A8.38 8.38 0 0 1 3.5 11.5a8.5 8.5 0 0 1 4.2-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"
                  fill="white"
                />
              </svg>
              <span>Chat</span>
            </div>
            <div className="bgmv2-chat-list">
              <div className="bgmv2-chat-msg">
                <span className="bgmv2-chat-user">P1:</span>
                <span className="bgmv2-chat-text">Hello!</span>
              </div>
              <div className="bgmv2-chat-msg">
                <span className="bgmv2-chat-user">P2:</span>
                <span className="bgmv2-chat-text">Good luck</span>
              </div>
              <div className="bgmv2-chat-msg">
                <span className="bgmv2-chat-user">P3:</span>
                <span className="bgmv2-chat-text">Nice move</span>
              </div>
              <div className="bgmv2-chat-msg">
                <span className="bgmv2-chat-user">P1:</span>
                <span className="bgmv2-chat-text">Thanks</span>
              </div>
            </div>
          </div>
        </aside>
      </main>

      {/* Bottom action bar */}
      <footer className="bgmv2-bottombar">
        <button className="bgmv2-action-btn bgmv2-action-btn--red">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" fill="white" />
            <polyline points="9 22 9 12 15 12 15 22" stroke="white" strokeWidth="2" />
          </svg>
          Home
        </button>
        <button className="bgmv2-action-btn bgmv2-action-btn--red">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="2" />
            <path d="M12 16v-4M12 8h.01" stroke="white" strokeWidth="2" strokeLinecap="round" />
          </svg>
          Info
        </button>
        <button className="bgmv2-action-btn bgmv2-action-btn--red">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <path
              d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
              fill="white"
            />
          </svg>
          Rank
        </button>
        <button className="bgmv2-action-btn bgmv2-action-btn--red">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <rect x="3" y="3" width="18" height="18" rx="2" stroke="white" strokeWidth="2" />
            <path d="M3 9h18M9 21V9" stroke="white" strokeWidth="2" />
          </svg>
          Store
        </button>
        <button className="bgmv2-action-btn bgmv2-action-btn--red">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="3" fill="white" />
            <path
              d="M12 1v6m0 6v6m4.22-10.22l-4.24 4.24M7.76 7.76l4.24 4.24M23 12h-6m-6 0H1m16.22 4.22l-4.24-4.24M7.76 16.24l4.24-4.24"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
          Settings
        </button>
      </footer>
    </div>
  );
}
