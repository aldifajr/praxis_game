import { useNavigate } from 'react-router-dom';

export default function HomePageSetting() {
  const navigate = useNavigate();

  return (
    <div className="hps-shell">
      <div className="hps-card">
        <header className="hps-header">
          <div className="hps-header-left">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="hps-gear-icon">
              <path d="M12 15.5A3.5 3.5 0 1 0 12 8.5a3.5 3.5 0 0 0 0 7Z" fill="white" />
              <path
                d="M19.43 12.98c.04-.32.07-.66.07-.98s-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.3-.61-.22l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65A.488.488 0 0 0 14 2h-4c-.25 0-.46.18-.5.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.23-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98s.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1.01c.52.4 1.08.73 1.69.98l.38 2.65c.05.24.25.42.5.42h4c.25 0 .46-.18.5-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1.01c.22.08.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65ZM12 15.5A3.5 3.5 0 1 1 12 8.5a3.5 3.5 0 0 1 0 7Z"
                fill="white"
              />
            </svg>
            <span className="hps-header-title">Pengaturan</span>
          </div>
          <button className="hps-close-btn" aria-label="Close" onClick={() => navigate('/')}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M18 6L6 18M6 6l12 12" stroke="white" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        </header>

        <div className="hps-body">
          {/* Audio slider */}
          <div className="hps-row">
            <span className="hps-label">Audio</span>
            <div className="hps-slider-wrap">
              <div className="hps-slider-track">
                <div className="hps-slider-fill" style={{ width: '60%' }} />
                <div className="hps-slider-thumb" style={{ left: '60%' }} />
              </div>
            </div>
          </div>

          {/* Musik slider */}
          <div className="hps-row">
            <span className="hps-label">Musik</span>
            <div className="hps-slider-wrap">
              <div className="hps-slider-track">
                <div className="hps-slider-fill" style={{ width: '40%' }} />
                <div className="hps-slider-thumb" style={{ left: '40%' }} />
              </div>
            </div>
          </div>

          {/* Bahasa dropdown */}
          <div className="hps-row hps-dropdown">
            <span className="hps-label">Bahasa</span>
            <div className="hps-select">
              <span>Indonesia</span>
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none">
                <path
                  d="M6 9l6 6 6-6"
                  stroke="#2B2B2B"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>

          {/* Mata Uang dropdown */}
          <div className="hps-row hps-dropdown">
            <span className="hps-label">Mata Uang</span>
            <div className="hps-select">
              <span>Rupiah (IDR)</span>
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none">
                <path
                  d="M6 9l6 6 6-6"
                  stroke="#2B2B2B"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>

          <div className="hps-divider" />

          {/* Consent checkboxes */}
          <div className="hps-row hps-checkbox">
            <div className="hps-check-box checked" />
            <span className="hps-check-label">Beri saya info terbaru</span>
          </div>
          <div className="hps-row hps-checkbox">
            <div className="hps-check-box" />
            <span className="hps-check-label">Beri saya info terbaru</span>
          </div>
          <div className="hps-row hps-checkbox">
            <div className="hps-check-box" />
            <span className="hps-check-label">Beri saya info terbaru</span>
          </div>

          <div className="hps-divider" />

          {/* Partner logo area */}
          <div className="hps-partner">
            <div className="hps-partner-logo" />
          </div>
        </div>
      </div>
    </div>
  );
}
