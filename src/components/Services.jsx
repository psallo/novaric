import './Services.css';

const SERVICES = [
  {
    grad: 'linear-gradient(135deg,#a8ff78,#78ffd6)',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="5" y="2" width="14" height="20" rx="2"/>
        <path d="M12 18h.01"/>
      </svg>
    ),
    title: 'Android Development',
    desc: 'Native Android apps built with Kotlin & Jetpack Compose, ready for Google Play.',
  },
  {
    grad: 'linear-gradient(135deg,#c2e9fb,#a1c4fd)',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="5" y="2" width="14" height="20" rx="2"/>
        <path d="M9 2h6"/>
      </svg>
    ),
    title: 'iOS Development',
    desc: 'Polished iOS apps in Swift & SwiftUI, following Apple HIG to the letter.',
  },
  {
    grad: 'linear-gradient(135deg,#ffecd2,#fcb69f)',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2L2 7l10 5 10-5-10-5z"/>
        <path d="M2 17l10 5 10-5"/>
        <path d="M2 12l10 5 10-5"/>
      </svg>
    ),
    title: 'Cross-Platform',
    desc: 'Flutter and React Native let us ship both platforms faster without sacrificing quality.',
  },
  {
    grad: 'linear-gradient(135deg,#e0c3fc,#8ec5fc)',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"/>
      </svg>
    ),
    title: 'Backend & API',
    desc: 'Scalable cloud backends on AWS and Firebase with secure REST or GraphQL APIs.',
  },
  {
    grad: 'linear-gradient(135deg,#fddb92,#d1fdff)',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 20h9"/>
        <path d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z"/>
      </svg>
    ),
    title: 'UI/UX Design',
    desc: 'User research, wireframes, and interactive prototypes — signed off before a line of code.',
  },
  {
    grad: 'linear-gradient(135deg,#a18cd1,#fbc2eb)',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
      </svg>
    ),
    title: 'Maintenance & Growth',
    desc: 'Post-launch monitoring, OS updates, analytics, and iterative feature development.',
  },
];

export default function Services() {
  return (
    <section className="services section" id="services">
      <div className="container">
        <div className="section__header">
          <p className="section__eyebrow">What We Do</p>
          <h2 className="section__title">End-to-End Mobile<br />Development</h2>
        </div>
        <div className="services__grid">
          {SERVICES.map(({ grad, icon, title, desc }) => (
            <div className="service-card" key={title}>
              <div className="service-card__icon" style={{ background: grad }}>
                {icon}
              </div>
              <h3>{title}</h3>
              <p>{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
