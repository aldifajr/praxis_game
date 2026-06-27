import { useNavigate } from 'react-router-dom';
import { ModalFrame } from '../components/layout';
import { ChevronDownIcon, CloseIcon, GearIcon } from '../components/icons';

export default function HomePageSetting() {
  const navigate = useNavigate();

  return (
    <ModalFrame>
      <div className="hps-card">
        <header className="hps-header">
          <div className="hps-header-left">
            <GearIcon size={24} />
            <span className="hps-header-title">Pengaturan</span>
          </div>
          <button className="hps-close-btn" aria-label="Close" onClick={() => navigate('/')}>
            <CloseIcon size={20} />
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
              <ChevronDownIcon />
            </div>
          </div>

          {/* Mata Uang dropdown */}
          <div className="hps-row hps-dropdown">
            <span className="hps-label">Mata Uang</span>
            <div className="hps-select">
              <span>Rupiah (IDR)</span>
              <ChevronDownIcon />
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
    </ModalFrame>
  );
}
