export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <div className="footer-title">Liuli Society</div>
          <p className="footer-text">
            Liuli Society is a registered 501(c)(3) nonprofit organization in the
            United States. Contributions may be tax-deductible to the extent permitted by law.
          </p>
          <p className="footer-muted">
            This website presents the nonprofit mission only. It is dedicated to
            education, research-informed innovation, and community support.
          </p>
        </div>
        <div className="footer-links">
          <a href="#/about">About</a>
          <a href="#/approach">Approach</a>
          <a href="#/pathways">Pathways</a>
          <a href="#/research">Research</a>
          <a href="#/community">Community</a>
          <a href="#/support">Support</a>
          <a href="#/contact">Contact</a>
        </div>
      </div>
    </footer>
  )
}
