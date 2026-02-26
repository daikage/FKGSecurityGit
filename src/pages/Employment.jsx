import Reveal from '../components/Reveal'

const Employment = () => {
  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Thank you for your interest. Your application was recorded locally. A formal application portal is coming soon.')
  }

  return (
    <section className="section">
      <div className="accent-line"></div>
      <h2 className="section-title">Employment</h2>

      {/* 1. Recruitment Call to Action */}
      <Reveal>
        <h3 style={{ margin: '6px 0 8px', fontFamily: 'Playfair Display, serif' }}>
          Be Part of Our Team of Security Personnel — We Are Hiring.
        </h3>
        <p className="muted">
          We are seeking skilled and dedicated security professionals. FKG Security supports operations across the United States.
        </p>
        <p className="muted">
          Please fill out the application below and check back frequently for new openings.
        </p>
      </Reveal>

      {/* 2. Job Application Form (two parts) */}
      <form onSubmit={handleSubmit} style={{ marginTop: 16 }}>
        <div className="grid grid-2">
          {/* Contact & Basic Details */}
          <Reveal className="card">
            <h3>Contact & Basic Details</h3>
            <div className="form-grid">
              <div>
                <div className="label">First Name</div>
                <input className="input" type="text" name="firstName" placeholder="John" required />
              </div>
              <div>
                <div className="label">Last Name</div>
                <input className="input" type="text" name="lastName" placeholder="Doe" required />
              </div>

              <div>
                <div className="label">Company (optional)</div>
                <input className="input" type="text" name="company" placeholder="Acme Protection LLC" />
              </div>
              <div>
                <div className="label">Email</div>
                <input className="input" type="email" name="email" placeholder="john.doe@email.com" required />
              </div>

              <div>
                <div className="label">Phone Number</div>
                <input className="input" type="tel" name="phone" placeholder="+1 555 555 5555" required />
              </div>
              <div>
                <div className="label">Full Mailing Address</div>
                <input className="input" type="text" name="address" placeholder="123 Main St, City, ST 00000" required />
              </div>

              <div>
                <div className="label">Social Security Number (SS#)</div>
                <input className="input" type="text" name="ssn" placeholder="XXX-XX-XXXX" />
              </div>
              <div>
                <div className="label">Date of Birth (DOB)</div>
                <input className="input" type="date" name="dob" />
              </div>
            </div>
          </Reveal>

          {/* Professional Background */}
          <Reveal className="card" delay={1}>
            <h3>Professional Background</h3>
            <div>
              <div className="label">Work Experience</div>
              <textarea className="textarea" name="experience" rows="4" placeholder="List previous employment, roles, dates, and responsibilities." />
            </div>
            <div style={{ marginTop: 12 }}>
              <div className="label">Education</div>
              <textarea className="textarea" name="education" rows="3" placeholder="List schools, degrees, certifications-in-progress, etc." />
            </div>
            <div style={{ marginTop: 12 }}>
              <div className="label">Certifications</div>
              <textarea className="textarea" name="certifications" rows="3" placeholder="e.g., State security licenses, CPR/First Aid, EMT, TWIC, etc." />
            </div>
          </Reveal>
        </div>

        <div style={{ marginTop: 14, display: 'flex', gap: 10, alignItems: 'center' }}>
          <button type="submit" className="btn btn-primary">Submit Application</button>
          <a href="#coming-soon" className="btn">Job Application Portal (Coming Soon)</a>
        </div>
      </form>

      {/* 3. Coming Soon Section */}
      <Reveal id="coming-soon" className="card" style={{ marginTop: 16, textAlign: 'center' }}>
        <h3>Job Application Portal — Coming Soon</h3>
        <p className="muted" style={{ textAlign: 'center' }}>
          We are launching a dedicated recruitment portal for secure document submission and status tracking. Please check back soon.
        </p>
      </Reveal>

      {/* 4. Contact Information */}
      <Reveal className="card" style={{ marginTop: 16, textAlign: 'center' }}>
        <h3>Recruitment Contact</h3>
        <p className="muted" style={{ textAlign: 'center' }}>
          For questions or urgent hiring needs:
        </p>
        <p style={{ marginTop: 8 }}>
          <a className="inline" href="mailto:info@fkgsecurity.com">info@fkgsecurity.com</a> •{' '}
          <a className="inline" href="tel:+14059198314">+1 (405) 919-8314</a>
        </p>
      </Reveal>
    </section>
  )
}

export default Employment
