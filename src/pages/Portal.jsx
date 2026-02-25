const Portal = () => {
  return (
    <section className="section" style={{ padding: '16px' }}>
      <div className="accent-line"></div>
      <h2 className="section-title" style={{ fontSize: '1.5rem' }}>Secure Client Portal</h2>
      <p className="muted" style={{ fontSize: '14px' }}>
        Restricted access for active clients. Contact your engagement manager for credentials and onboarding.
      </p>
      <div className="card" style={{ marginTop: 16, padding: '16px' }}>
        <div className="label">Email</div>
        <input className="input" type="email" placeholder="client@company.com" style={{ width: '100%' }} />

        <div className="label" style={{ marginTop: 10 }}>Password</div>
        <input className="input" type="password" placeholder="••••••••" style={{ width: '100%' }} />

        <div style={{ marginTop: 14 }}>
          <button className="btn btn-primary" type="button" style={{ width: '100%' }}>Sign In</button>
        </div>
        <p className="muted" style={{ marginTop: 10, fontSize: '12px' }}>
          Note: This is a placeholder UI. Integration with your identity provider and MFA is configured during client onboarding.
        </p>
      </div>
    </section>
  )
}

export default Portal
