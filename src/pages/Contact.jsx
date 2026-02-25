import Reveal from '../components/Reveal'

const Contact = () => {
  return (
    <section className="section">
      <div className="accent-line"></div>
      <h2 className="section-title">Contact</h2>
      <Reveal>
        <p className="muted">
          For engagement inquiries and secure bid requests, please share your requirements. Our team will respond discreetly.
        </p>
      </Reveal>

      <Reveal className="card" style={{ marginTop: 16 }}>
        <div className="form-grid">
          <div>
            <div className="label">Name</div>
            <input className="input" type="text" placeholder="Jane Doe" />
          </div>
          <div>
            <div className="label">Organization</div>
            <input className="input" type="text" placeholder="Acme Global" />
          </div>
          <div>
            <div className="label">Email</div>
            <input className="input" type="email" placeholder="jane@acme.com" />
          </div>
          <div>
            <div className="label">Sector</div>
            <select className="select">
              <option>NGO</option>
              <option>Government</option>
              <option>Energy</option>
              <option>Maritime</option>
              <option>Logistics</option>
              <option>Corporate / HNWI</option>
              <option>Other</option>
            </select>
          </div>
        </div>

        <div style={{ marginTop: 12 }}>
          <div className="label">Brief Overview</div>
          <textarea className="textarea" rows="6" placeholder="Scope, location, timelines, and any specific constraints." />
        </div>

        <div style={{ marginTop: 14, display: 'flex', gap: 10, alignItems: 'center' }}>
          <button type="button" className="btn btn-primary">Submit</button>
          <a href="/portal" className="btn">Secure Client Portal</a>
        </div>

        <div className="img-card" style={{ marginTop: 16, height: 250 }}>
          <img
            src="https://i.ibb.co/GfwfWVNQ/rect815.png?q=80&w=1600&auto=format&fit=crop"
            alt="FKG Security brand motif"
            loading="lazy"
          />
        </div>
      </Reveal>
    </section>
  )
}

export default Contact
