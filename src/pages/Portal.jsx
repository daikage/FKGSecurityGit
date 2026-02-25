const Portal = () => {
  return (
    <section className="section">
      <div className="accent-line"></div>
      <h2 className="section-title">Secure Client Portal</h2>
      <p className="muted">
        Restricted access for active clients. Contact your engagement manager for credentials and onboarding.
      </p>
      <div className="card" style={{ marginTop: 16 }}>
        <div className="label">Email</div>
        <input className="input" type="email" placeholder="client@company.com" />

        <div className="label" style={{ marginTop: 10 }}>Password</div>
        <input className="input" type="password" placeholder="••••••••" />

        <div style={{ marginTop: 14 }}>
          <button className="btn btn-primary" type="button">Sign In</button>
        </div>
        <p className="muted" style={{ marginTop: 10 }}>
          Note: This is a placeholder UI. Integration with your identity provider and MFA is configured during client onboarding.
        </p>
      </div>
    </section>
  )
}

export default Portal
