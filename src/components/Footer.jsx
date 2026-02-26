const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div>
          <strong>FKG Security</strong> — Strategic Risk Management & Specialized Security Solutions.
        </div>
        {/* <small>
          ICoCA Signatory • ISO 18788 • ISO 9001 • Human Rights Policy aligned with international standards.
        </small> */}
        <small>
          <a className="inline" href="mailto:info@fkgsecurity.com" aria-label="Email FKG Security">info@fkgsecurity.com</a>
          {' '}•{' '}
          <a className="inline" href="tel:+14059198314" aria-label="Call FKG Security">+1 (405) 919-8314</a>
        </small>
        <small>
          © {new Date().getFullYear()} FKG Security. All rights reserved. | 
          <a className="inline" href="/compliance"> Compliance & Ethics</a>
         {' '}| <a className="inline" href="/training"> Training</a>
        </small>
      </div>
    </footer>
  )
}

export default Footer
