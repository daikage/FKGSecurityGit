import Reveal from '../components/Reveal'

const Sectors = () => {
  return (
    <section className="section">
      <div className="accent-line"></div>
      <h2 className="section-title">Sectors</h2>
      <Reveal>
        <p className="muted">
          Our teams support missions in diverse operational landscapes, coordinating closely with local authorities and stakeholders.
        </p>
      </Reveal>

      <div className="mosaic" style={{ marginTop: 16 }}>
        <img src="https://i.ibb.co/5WjndKQJ/collin-8-Fx-Ji5wuw-Kc-unsplash.jpg?q=80&w=1200&auto=format&fit=crop" alt="Ops center" loading="lazy" />
        <img src="https://i.ibb.co/chZ59VDf/4d2199118e9f06085e8166b006227b34.jpg?q=80&w=1200&auto=format&fit=crop" alt="Maritime terminal" loading="lazy" />
        <img src="https://i.ibb.co/zWM7xhF8/Gemini-Generated-Image-khhnhukhhnhukhhn.png?q=80&w=1200&auto=format&fit=crop" alt="Energy infrastructure" loading="lazy" />
        <img src="https://i.ibb.co/hxXtFvcy/tasha-kostyuk-Tt-MKq3l-Jm-U-unsplash.jpg?q=80&w=1200&auto=format&fit=crop" alt="Urban network" loading="lazy" />
        <img src="https://i.ibb.co/LhvNLb3f/portrait-male-security-guard-with-barbed-wire-fence.jpg?q=80&w=1200&auto=format&fit=crop" alt="Airport corridor" loading="lazy" />
        <img src="https://i.ibb.co/DD3JrMZr/Gemini-Generated-Image-5rlffe5rlffe5rlf.png?q=80&w=1200&auto=format&fit=crop" alt="Field logistics" loading="lazy" />
      </div>

      <div className="grid grid-3" style={{ marginTop: 16 }}>
        <Reveal className="card">
          <h3>NGOs & Humanitarian</h3>
          <p className="muted">Field security, access facilitation, and duty-of-care frameworks.</p>
        </Reveal>
        <Reveal className="card" delay={1}>
          <h3>Government & Diplomatic</h3>
          <p className="muted">Delegation protection, site risk assessments, and movement planning.</p>
        </Reveal>
        <Reveal className="card" delay={2}>
          <h3>Energy & Critical Infrastructure</h3>
          <p className="muted">Asset protection, perimeter integrity, and resilience programs.</p>
        </Reveal>
        <Reveal className="card" delay={3}>
          <h3>Maritime & Port Security</h3>
          <p className="muted">Terminal access, cargo risk controls, and waterside coordination.</p>
        </Reveal>
        <Reveal className="card" delay={4}>
          <h3>Logistics & Supply Chain</h3>
          <p className="muted">Route intelligence, convoy security, and continuity planning.</p>
        </Reveal>
        <Reveal className="card" delay={5}>
          <h3>Corporate & High-Net-Worth</h3>
          <p className="muted">Executive protection, travel security, and event risk management.</p>
        </Reveal>
      </div>
    </section>
  )
}

export default Sectors
