import Reveal from '../components/Reveal'

const Services = () => {
  return (
    <section className="section">
      <div className="accent-line"></div>
      <h2 className="section-title">Services</h2>
      <p className="muted">
        FKG Security provides comprehensive, compliance-led capabilities across complex environments. Our approach emphasizes foresight, proportionality, and partnership.
      </p>
      <div className="grid grid-2" style={{ marginTop: 16 }}>
        <div className="card">
          {/* Strategic image */}
          <div className="img-card" style={{ height: 160, marginBottom: 12 }}>
            <img
              src="https://i.ibb.co/nshXVssF/FKG-Security-man-1.png?q=80&w=1600&auto=format&fit=crop"
              alt="Secured perimeter and terminal operations"
              loading="lazy"
            />
          </div>
          <h3>Fixed & Mobile Asset Protection</h3>
          <p className="muted">Infrastructure protection, convoy security, site hardening, and route assurance—calibrated to mission risk thresholds.</p>
        </div>

        <div className="card">
          {/* Strategic image */}
          <div className="img-card" style={{ height: 160, marginBottom: 12 }}>
            <img
              src="https://i.ibb.co/WR63k1X/front-view-guard-men-team-work.jpg?q=80&w=1600&auto=format&fit=crop"
              alt="Executive movement through controlled airport corridors"
              loading="lazy"
            />
          </div>
          <h3>Executive Protection</h3>
          <p className="muted">Low-profile protective details for principals, teams, and site visits with discreet coordination.</p>
        </div>

        <div className="card">
          {/* Strategic image */}
          <div className="img-card" style={{ height: 160, marginBottom: 12 }}>
            <img
              src="https://i.ibb.co/ycs1t5jr/engineering-team-working-together-data-center-with-ai-tech.jpg?q=80&w=1600&auto=format&fit=crop"
              alt="Operations center with live intelligence feeds"
              loading="lazy"
            />
          </div>
          <h3>Strategic Intelligence</h3>
          <p className="muted">Geopolitical analysis, threat monitoring, risk modeling, and briefings for decision makers.</p>
        </div>

        <div className="card">
          {/* Strategic image */}
          <div className="img-card" style={{ height: 160, marginBottom: 12 }}>
            <img
              src="https://i.ibb.co/Ld5rJg4c/technological-futuristic-holograms-logistics-means-transport.jpg?q=80&w=1600&auto=format&fit=crop"
              alt="Global logistics corridors and supply nodes"
              loading="lazy"
            />
          </div>
          <h3>Logistics & Life Support</h3>
          <p className="muted">Supply chain security, medical support planning, emergency response, and continuity operations.</p>
        </div>
      </div>
    </section>
  )
}

export default Services
