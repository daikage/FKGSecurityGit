import Reveal from '../components/Reveal'

const Compliance = () => {
  return (
    <section className="section">
      <div className="accent-line"></div>
      <h2 className="section-title">Compliance & Ethics</h2>
      <Reveal>
        <p className="muted">
          Professional standards are non-negotiable. FKG Security operates under rigorous frameworks that prioritize human rights, transparency, and accountability.
        </p>
      </Reveal>

      <div className="grid grid-2" style={{ marginTop: 16 }}>
        <Reveal className="card">
          <h3>ICoCA Signatory</h3>
          <p className="muted">
            We align with the International Code of Conduct for Private Security Service Providers (ICoCA), ensuring responsible conduct and oversight.
          </p>
        </Reveal>
        <Reveal className="card" delay={1}>
          <h3>Human Rights Policy</h3>
          <p className="muted">
            Our policy integrates international human rights standards, rules of engagement, proportionality, and cultural awareness into all operations.
          </p>
        </Reveal>
        <Reveal className="card" delay={2}>
          <h3>ISO 18788</h3>
          <p className="muted">
            Security Operations Management System certification guiding risk, governance, and continual improvement.
          </p>
        </Reveal>
        <Reveal className="card" delay={3}>
          <h3>ISO 9001</h3>
          <p className="muted">
            Quality Management System certification—process discipline, client satisfaction, and auditability.
          </p>
        </Reveal>
      </div>
    </section>
  )
}

export default Compliance
