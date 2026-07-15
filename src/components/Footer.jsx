import './Footer.css';

const LINKS = [
  { href: '#about',    label: 'About'    },
  { href: '#services', label: 'Services' },
  { href: '#work',     label: 'Our Work' },
  { href: '#contact',  label: 'Contact'  },
];

function IconGitHub() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.49.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.08 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02A9.56 9.56 0 0112 6.8c.85.004 1.7.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10.01 10.01 0 0022 12c0-5.52-4.48-10-10-10z"/>
    </svg>
  );
}

function IconX() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.24 3h3.27l-7.14 8.16L22.75 21H15.7l-5.15-6.74L4.37 21H1.1l7.64-8.73L1.25 3h7.2l4.66 6.17L18.24 3zm-1.15 16.2h1.81L7.03 4.83H5.08l12.01 14.37z"/>
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__glow" aria-hidden />
      <div className="container footer__inner">

        <div className="footer__brand">
          <a href="#home" className="footer__logo">
            <img src="/logo.svg" alt="Novaric logo" className="footer__logo-img" />
            Novaric
          </a>
          <p>Crafting mobile experiences that matter.</p>
        </div>

        <nav className="footer__nav">
          <div className="footer__nav-group">
            <div className="footer__nav-label">Company</div>
            {LINKS.map(({ href, label }) => (
              <a key={href} href={href}>{label}</a>
            ))}
          </div>
          <div className="footer__nav-group">
            <div className="footer__nav-label">Platforms</div>
            <a href="#services">Android Apps</a>
            <a href="#services">iOS Apps</a>
            <a href="#services">Cross-Platform</a>
          </div>
          <div className="footer__nav-group">
            <div className="footer__nav-label">Legal</div>
            <a href="/privacy">Privacy Policy</a>
          </div>
        </nav>

        <div className="footer__social">
          <div className="footer__nav-label">Follow Us</div>
          <div className="footer__social-row">
            <a href="https://github.com" target="_blank" rel="noreferrer" aria-label="GitHub">
              <IconGitHub />
            </a>
            <a href="https://x.com/novaric0601" target="_blank" rel="noreferrer" aria-label="X (Twitter)">
              <IconX />
            </a>
          </div>
        </div>

      </div>

      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <p>© {new Date().getFullYear()} Novaric. All rights reserved.</p>
          <p>Built with ♥ for mobile.</p>
        </div>
      </div>
    </footer>
  );
}
