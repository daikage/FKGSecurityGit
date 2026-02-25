const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div>
          <strong>FKG Security</strong> — Strategic Risk Management & Specialized Security Solutions.
        </div>
        <small>
          ICoCA Signatory • ISO 18788 • ISO 9001 • Human Rights Policy aligned with international standards.
        </small>
        <small>
          © {new Date().getFullYear()} FKG Security. All rights reserved. | 
          <a className="inline" href="/compliance"> Compliance & Ethics</a>
        </small>
      </div>
    </footer>
  )
}

export default Footer
