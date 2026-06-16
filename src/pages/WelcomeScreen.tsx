export default function WelcomeScreen() {
  return (
    <div className="welcome-screen">
      <div className="welcome-content">
        <div className="welcome-logo">
          <svg
            width="88"
            height="88"
            viewBox="0 0 88 88"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="88" height="88" rx="16" fill="white" fillOpacity="0.12" />
            <path
              d="M24 44C24 32.954 32.954 24 44 24C55.046 24 64 32.954 64 44C64 55.046 55.046 64 44 64"
              stroke="white"
              strokeWidth="4"
              strokeLinecap="round"
            />
            <path
              d="M44 64C44 64 52 56 52 48C52 40 44 36 44 36"
              stroke="white"
              strokeWidth="4"
              strokeLinecap="round"
            />
            <circle cx="44" cy="44" r="6" fill="white" />
          </svg>
        </div>
        <h1 className="welcome-title">Praxis</h1>
        <p className="welcome-subtitle">Play, Learn, and Grow Together</p>
      </div>
      <div className="welcome-loader">
        <div className="welcome-progress-track">
          <div className="welcome-progress-fill" />
        </div>
        <p className="welcome-loader-text">Loading...</p>
      </div>
    </div>
  );
}
