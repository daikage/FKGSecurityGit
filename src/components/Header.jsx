import { NavLink, Link } from 'react-router-dom'
import logoUrl from '../assets/fkg-logo.png'

const Header = () => {
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
          <div className="brand-text">FKG Security</div>
        </Link>
        <div className="nav-links">
          <NavLink to="/services" className={({isActive}) => `nav-link${isActive ? ' active' : ''}`}>Services</NavLink>
          <NavLink to="/sectors" className={({isActive}) => `nav-link${isActive ? ' active' : ''}`}>Sectors</NavLink>
          <NavLink to="/compliance" className={({isActive}) => `nav-link${isActive ? ' active' : ''}`}>Compliance & Ethics</NavLink>
          <NavLink to="/situation-room" className={({isActive}) => `nav-link${isActive ? ' active' : ''}`}>The Situation Room</NavLink>
          <NavLink to="/contact" className={({isActive}) => `nav-link${isActive ? ' active' : ''}`}>Contact</NavLink>
          <NavLink to="/portal" className={({isActive}) => `nav-link${isActive ? ' active' : ''}`}>Secure Portal</NavLink>
        </div>
      </nav>
    </header>
  )
}

export default Header
