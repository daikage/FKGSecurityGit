import { briefings } from '../data/briefings'
import Reveal from '../components/Reveal'

const SituationRoom = () => {
  return (
    <section className="section">
      <div className="accent-line"></div>
      <h2 className="section-title">The Situation Room</h2>
      <Reveal>
        <p className="muted">
          Weekly intelligence briefs on geopolitical stability in operating regions. Designed for C-suite clarity: context, risks, and actionable measures.
        </p>
      </Reveal>

      <div className="grid" style={{ marginTop: 16 }}>
        {briefings.map((b, idx) => (
          <Reveal key={b.id} className="card" delay={idx % 3}>
            <h3>{b.title}</h3>
            <p className="muted">
              <strong style={{ color: 'var(--blue-300)' }}>{b.sector}</strong> • {new Date(b.date).toLocaleDateString()}
            </p>
            <p className="muted">{b.summary}</p>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

export default SituationRoom
