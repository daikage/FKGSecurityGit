import { NavLink, Link } from 'react-router-dom'
import logoUrl from '../assets/fkg-logo.png'
import { useState } from 'react'

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="header">
      <nav className="nav">
        <Link to="/" className="brand" aria-label="FKG Security Home">
          <div className="brand-logo-wrap">
            <img
              src={logoUrl}
              alt="FKG Security logo"
              className="brand-logo"
              loading="eager"
            />
          </div>
          <div className="brand-text"></div>
        </Link>

        {/* Mobile hamburger (shown only on small screens via CSS) */}
        <button
          type="button"
          className="nav-toggle"
          aria-label="Toggle navigation"
          aria-controls="primary-nav"
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((v) => !v)}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
          </svg>
        </button>

        <div id="primary-nav" className={`nav-links ${mobileOpen ? 'open' : ''}`}>
          <NavLink
            to="/services"
            className={({isActive}) => `nav-link${isActive ? ' active' : ''}`}
            onClick={() => setMobileOpen(false)}
          >Services</NavLink>
          <NavLink
            to="/sectors"
            className={({isActive}) => `nav-link${isActive ? ' active' : ''}`}
            onClick={() => setMobileOpen(false)}
          >Sectors</NavLink>
          <NavLink
            to="/compliance"
            className={({isActive}) => `nav-link${isActive ? ' active' : ''}`}
            onClick={() => setMobileOpen(false)}
          >Compliance & Ethics</NavLink>
          <NavLink
            to="/situation-room"
            className={({isActive}) => `nav-link${isActive ? ' active' : ''}`}
            onClick={() => setMobileOpen(false)}
          >The Situation Room</NavLink>
          <NavLink
            to="/contact"
            className={({isActive}) => `nav-link${isActive ? ' active' : ''}`}
            onClick={() => setMobileOpen(false)}
          >Contact</NavLink>
          <NavLink
            to="/portal"
            className={({isActive}) => `nav-link${isActive ? ' active' : ''}`}
            onClick={() => setMobileOpen(false)}
          >Secure Portal</NavLink>
        </div>
      </nav>
    </header>
  )
}

export default Header
