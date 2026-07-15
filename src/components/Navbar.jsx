import { useState, useEffect } from 'react';
import './Navbar.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const onHome = typeof window === 'undefined' || window.location.pathname === '/';
  const prefix = onHome ? '' : '/';

  const links = [
    { href: `${prefix}#about`,    label: 'About'    },
    { href: `${prefix}#services`, label: 'Services' },
    { href: `${prefix}#work`,     label: 'Our Work' },
    { href: `${prefix}#blogs`,    label: 'Blogs'    },
    { href: `${prefix}#contact`,  label: 'Contact'  },
  ];

  const close = () => setOpen(false);

  return (
    <header className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <div className="container nav__inner">
        <a href={`${prefix}#home`} className="nav__logo" onClick={close}>
          <img src="/logo.svg" alt="Novaric logo" className="nav__logo-img" />
          Novaric
        </a>

        <nav className={`nav__links ${open ? 'nav__links--open' : ''}`}>
          {links.map(({ href, label }) => (
            <a key={href} href={href} onClick={close}>{label}</a>
          ))}
          <a href={`${prefix}#contact`} className="btn btn--primary nav__cta" onClick={close}>
            Get a Quote
          </a>
        </nav>

        <button
          className={`nav__hamburger ${open ? 'nav__hamburger--open' : ''}`}
          onClick={() => setOpen(o => !o)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </div>

      {open && <div className="nav__overlay" onClick={close} />}
    </header>
  );
}
