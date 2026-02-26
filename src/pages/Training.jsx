import Reveal from '../components/Reveal'

const Training = () => {
  return (
    <section className="section">
      <div className="accent-line"></div>
      <h2 className="section-title">Armed Security Training & Development</h2>

      {/* 1. Training Philosophy & Requirements */}
      <Reveal className="card">
        <h3>Training Philosophy & Requirements</h3>
        <p className="muted">
          Our armed training programs are tailored to mission needs across Texas and the broader region, focusing on safety, compliance, and disciplined execution.
        </p>
        <ul className="muted" style={{ marginTop: 10 }}>
          <li>
            <strong>Tailored Programs:</strong> Curriculum adjusts to the client’s environment (healthcare, education, commercial, critical infrastructure) and post orders.
          </li>
          <li>
            <strong>Compliance:</strong> Officers meet or exceed armed licensing standards for each state of operation. Examples include TX DPS Level III/IV (Commissioned/Personal Protection Officer), NY DCJS requirements (e.g., 8-hr pre-assignment, 16-hr OJT, 47-hr firearms, annual in‑service), NJ SORA with applicable endorsements, and CT state armed security requirements. Exact modules and hours are mapped to state rules and client SOPs.
          </li>
        </ul>
        <div style={{ marginTop: 12 }}>
          <div className="label">Training Phases</div>
          <ul className="muted" style={{ marginTop: 6 }}>
            <li><strong>Pre‑assignment:</strong> Legal authority, use‑of‑force policy, safety fundamentals, communications, post expectations.</li>
            <li><strong>Range & Qualification:</strong> State‑specific firearms qualification, marksmanship, safe handling, and equipment checks.</li>
            <li><strong>Onsite:</strong> Location‑specific instructions, post orders, emergency procedures, and escalation protocols.</li>
            <li><strong>Refresher/Recert:</strong> Annual and state‑mandated intervals for firearms and core skills, plus scenario refreshers.</li>
          </ul>
        </div>
      </Reveal>

      {/* 2. Specialized Training Modules */}
      <div className="grid grid-3" style={{ marginTop: 16 }}>
        <Reveal className="card">
          <h3>Firearms & Use of Force</h3>
          <ul className="muted">
            <li>Firearms safety, range rules, duty weapon setup</li>
            <li>Marksmanship, reloads, malfunction clearance</li>
            <li>Holster work, draw stroke, low‑light fundamentals</li>
            <li>Weapons retention and disarming basics</li>
            <li>Use‑of‑force continuum, ROE, de‑escalation</li>
            <li>Shoot/no‑shoot decision making and documentation</li>
          </ul>
        </Reveal>

        <Reveal className="card" delay={1}>
          <h3>Less‑Lethal & Control</h3>
          <ul className="muted">
            <li>OC spray (certification where required)</li>
            <li>Baton/impact tools (ASP or equivalent)</li>
            <li>Handcuffing, search, and detainee management</li>
            <li>Subject control, team tactics, and officer safety</li>
          </ul>
        </Reveal>

        <Reveal className="card" delay={2}>
          <h3>Medical & Emergency</h3>
          <ul className="muted">
            <li>TECC/Stop the Bleed (bleeding control)</li>
            <li>CPR/AED certification</li>
            <li>Initial incident stabilization and EMS handoff</li>
          </ul>
        </Reveal>

        <Reveal className="card" delay={3}>
          <h3>Operational Modules</h3>
          <ul className="muted">
            <li>Active threat/active shooter response (per SOP)</li>
            <li>Building/room clearing fundamentals (non‑LE)</li>
            <li>Radio comms, callouts, and plain‑language protocols</li>
            <li>Report writing and evidence handling (chain of custody)</li>
            <li>Vehicle/post positioning and ingress/egress control</li>
          </ul>
        </Reveal>

        <Reveal className="card" delay={4}>
          <h3>Industry‑Specific</h3>
          <ul className="muted">
            <li>Healthcare & Hospital: patient‑centric procedures</li>
            <li>Education: campus security and reunification basics</li>
            <li>Commercial: hospitality, commercial site security</li>
            <li>Critical Infrastructure: access control, asset protection</li>
          </ul>
        </Reveal>

        <Reveal className="card" delay={5}>
          <h3>Leadership & Management</h3>
          <ul className="muted">
            <li>Shift leadership and incident command basics</li>
            <li>Briefing/debriefing, inspections, and QA</li>
            <li>Legal considerations, liability, and documentation</li>
          </ul>
        </Reveal>
      </div>

      {/* 3. Partnerships & Contact */}
      <Reveal className="card" style={{ marginTop: 16 }}>
        <h3>Partnerships & Contact</h3>
        <p className="muted" style={{ textAlign: 'center' }}>
          We collaborate with vetted instructors, ranges, and medical providers to deliver comprehensive, compliant curricula across armed roles.
        </p>
        <div style={{ marginTop: 12 }}>
          <div className="label">Direct Contact</div>
          <p className="muted" style={{ marginTop: 6, textAlign: 'center' }}>
            Email: <a className="inline" href="mailto:info@fkgsecurity.com">info@fkgsecurity.com</a><br />
            Phone: <a className="inline" href="tel:+14059198314">+1 (405) 919-8314</a><br />
            Toll‑free: <span className="inline">Coming Soon</span><br />
            Fax: <span className="inline">Coming Soon</span>
          </p>
        </div>
      </Reveal>
    </section>
  )
}

export default Training
