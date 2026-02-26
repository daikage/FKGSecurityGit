import logoUrl from '../assets/fkg-logo.png'

const SplashScreen = () => {
  return (
    <div className="splash" role="dialog" aria-label="Loading FKG Security">
      {/* Gridlines and scanning overlay (visual only) */}
      <div className="splash-grid" aria-hidden="true" />
      <div className="splash-scan" aria-hidden="true" />

      <div className="splash-inner">
        <div className="splash-logo-wrap">
          <img
            src={logoUrl}
            alt="FKG Security"
            className="splash-logo"
            loading="eager"
          />
        </div>
        <div className="splash-title">Initializing Secure Briefing</div>
        <div className="splash-meta">Global Risk Management</div>
      </div>
    </div>
  )
}

export default SplashScreen
