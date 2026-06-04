import './About.css';

const CARDS = [
  { icon: '🤝', label: 'Client-First' },
  { icon: '⚡', label: 'Agile Delivery' },
  { icon: '🔒', label: 'Secure by Design' },
  { icon: '🌏', label: 'Remote-Friendly' },
];

const STACK = ['Kotlin', 'Swift', 'SwiftUI', 'Flutter', 'React Native', 'Firebase', 'AWS', 'GraphQL'];

export default function About() {
  return (
    <section className="about section" id="about">
      <div className="container about__grid">

        <div className="about__visual" aria-hidden>
          <div className="about__logo-bg">
            <img src="/novaric/logo.svg" alt="Novaric" className="about__logo-img" />
          </div>
          {CARDS.map(({ icon, label }) => (
            <div className="about__pill" key={label}>
              <span>{icon}</span>
              <span>{label}</span>
            </div>
          ))}
        </div>

        <div className="about__text">
          <p className="section__eyebrow">Who We Are</p>
          <h2 className="section__title">A Focused Team.<br />Exceptional Results.</h2>
          <p className="about__body">
            Novaric is a boutique mobile development studio. We are a small, senior team —
            which means every project gets our full attention and expertise, not an
            overworked junior dev.
          </p>
          <p className="about__body">
            We believe great apps come from a deep understanding of your users. We dive into
            your business goals, map out the user journey, and build software that feels
            native, fast, and delightful on every device.
          </p>
          <div className="about__stack">
            {STACK.map(s => <span className="tag" key={s}>{s}</span>)}
          </div>
          <a href="#contact" className="btn btn--primary about__btn">Work With Us →</a>
        </div>

      </div>
    </section>
  );
}
