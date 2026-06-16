export default function LoadingGamePage() {
  return (
    <div className="loading-game-shell">
      <div className="loading-game-content">
        {/* Logo / Wordmark */}
        <div className="loading-game-logo">
          <svg
            width="200"
            height="60"
            viewBox="0 0 200 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Stylized "P" mark */}
            <path
              d="M30 8C18.954 8 10 16.954 10 28C10 39.046 18.954 48 30 48C32.5 48 34.8 47.5 37 46.5V38.5C35.2 39.8 32.8 40.5 30.5 40.5C23.6 40.5 18 34.9 18 28C18 21.1 23.6 15.5 30.5 15.5C32.8 15.5 35.2 16.2 37 17.5V9.5C34.8 8.5 32.5 8 30 8Z"
              fill="white"
            />
            {/* "PRAXIS" text */}
            <text
              x="48"
              y="38"
              fill="white"
              fontSize="28"
              fontWeight="800"
              fontFamily="Inter, ui-sans-serif, system-ui, sans-serif"
              letterSpacing="0.08em"
            >
              PRAXIS
            </text>
          </svg>
        </div>

        {/* Subtitle */}
        <p className="loading-game-subtitle">Loading your game...</p>
      </div>

      {/* Bottom progress bar */}
      <div className="loading-game-progress-wrap">
        <div className="loading-game-progress-track">
          <div className="loading-game-progress-fill" />
        </div>
      </div>
    </div>
  );
}
