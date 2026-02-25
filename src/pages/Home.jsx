import { Link } from 'react-router-dom'
import BackgroundSlider from '../components/BackgroundSlider'
import Reveal from '../components/Reveal'

const Home = () => {
  const slides = [
    { 
      src: 'https://i.ibb.co/LhvNLb3f/portrait-male-security-guard-with-barbed-wire-fence.jpg?q=80&w=800&auto=format&fit=crop', 
      alt: 'Operations center monitoring' 
    },
    { src: 'https://i.ibb.co/xKxpKGT2/Gemini-Generated-Image-47suwl47suwl47su.png?q=80&w=800&auto=format&fit=crop', alt: 'Executive movement through airport' },
    { src: 'https://i.ibb.co/nshXVssF/FKG-Security-man-1.png?q=80&w=800&auto=format&fit=crop', alt: 'Maritime cargo lanes' },
    { src: 'https://i.ibb.co/DD3JrMZr/Gemini-Generated-Image-5rlffe5rlffe5rlf.png?q=80&w=800&auto=format&fit=crop', alt: 'Global logistics network' },
  ]

  return (
    <>
      <section className="hero">
        <BackgroundSlider images={slides} interval={6500} />
        <div className="hero hero-content">
          <div className="kicker reveal">Global Risk Management</div>
          <Reveal as="h1" className="hero-title">Securing the Path for Global Progress.</Reveal>
          <Reveal delay={2}>
            <p className="hero-sub">
              Strategic risk mitigation and specialized security solutions for NGOs, governments, and multinational corporations.
            </p>
          </Reveal>
          <Reveal className="hero-actions" delay={3}>
            <Link to="/services" className="btn btn-primary">Explore Services</Link>
            <Link to="/situation-room" className="btn">Read Intel Briefs</Link>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="accent-line"></div>
        <h2 className="section-title">Core Pillars</h2>

        <div className="grid grid-2" style={{ marginTop: 16 }}>
          <Reveal className="img-card">
            <img
              src="https://i.ibb.co/hxXtFvcy/tasha-kostyuk-Tt-MKq3l-Jm-U-unsplash.jpg?q=80&w=1600&auto=format&fit=crop"
              alt="Secure operations and monitoring"
              loading="lazy"
            />
          </Reveal>

          <div className="grid" style={{ gap: 12 }}>
            <Reveal className="card">
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <div className="icon-circle">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M12 3l7 4v5c0 5-4 8-7 9-3-1-7-4-7-9V7l7-4z" stroke="#7aa2ff" strokeWidth="1.6"/></svg>
                </div>
                <h3 style={{ margin: 0 }}>Fixed & Mobile Asset Protection</h3>
              </div>
              <p className="muted">Precision safeguarding of critical infrastructure and transit—low-profile, high-readiness posture.</p>
            </Reveal>

            <Reveal className="card" delay={1}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <div className="icon-circle">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M12 2l4 4-6 6-4-4 6-6zM3 21l6-2-4-4-2 6z" stroke="#7aa2ff" strokeWidth="1.6"/></svg>
                </div>
                <h3 style={{ margin: 0 }}>Executive Protection</h3>
              </div>
              <p className="muted">Discreet protective services for principals and delegations, harmonized with local context.</p>
            </Reveal>

            <Reveal className="card" delay={2}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <div className="icon-circle">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M3 12h18M12 3v18" stroke="#7aa2ff" strokeWidth="1.6"/></svg>
                </div>
                <h3 style={{ margin: 0 }}>Strategic Intelligence</h3>
              </div>
              <p className="muted">Predictive analysis, threat assessments, and decision support—brainpower before brawn.</p>
            </Reveal>

            <Reveal className="card" delay={3}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <div className="icon-circle">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M4 7h16M4 12h16M4 17h16" stroke="#7aa2ff" strokeWidth="1.6"/></svg>
                </div>
                <h3 style={{ margin: 0 }}>Logistics & Life Support</h3>
              </div>
              <p className="muted">Supply chains, medical support, and contingency planning that keep operations resilient.</p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="accent-line"></div>
        <h2 className="section-title">Operating Ethos</h2>
        <div className="grid grid-3">
          <Reveal className="card">
            <h3>Prevention First</h3>
            <p className="muted">Mitigate, neutralize risk, stabilize environments—enable progress.</p>
          </Reveal>
          <Reveal className="card" delay={1}>
            <h3>The Quiet Professional</h3>
            <p className="muted">Low-visibility, high-effect posture, built on discipline and discretion.</p>
          </Reveal>
          <Reveal className="card" delay={2}>
            <h3>Compliance-led</h3>
            <p className="muted">ICoCA, ISO 18788, ISO 9001, and human rights policy embedded in operations.</p>
          </Reveal>
        </div>
      </section>
    </>
  )
}

export default Home
