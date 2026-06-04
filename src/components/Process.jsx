import './Process.css';

const STEPS = [
  {
    num: '01',
    title: 'Discovery',
    desc: 'We learn your product vision, target users, and business model before writing a single spec.',
    icon: '🔍',
  },
  {
    num: '02',
    title: 'Design',
    desc: 'Wireframes and interactive prototypes reviewed with you — nothing moves to dev without your sign-off.',
    icon: '🎨',
  },
  {
    num: '03',
    title: 'Build',
    desc: 'Two-week sprints with demo calls, TestFlight/Play builds, and full source code on your repo.',
    icon: '⚙️',
  },
  {
    num: '04',
    title: 'Launch',
    desc: 'Store submission, metadata optimization, launch-day monitoring, and a full handover package.',
    icon: '🚀',
  },
];

export default function Process() {
  return (
    <section className="process section">
      <div className="container">
        <div className="section__header">
          <p className="section__eyebrow">How We Work</p>
          <h2 className="section__title">Our Process</h2>
        </div>
        <div className="process__track">
          <div className="process__line" aria-hidden />
          {STEPS.map(({ num, title, desc, icon }) => (
            <div className="process-step" key={num}>
              <div className="process-step__bubble">
                <span className="process-step__icon">{icon}</span>
              </div>
              <div className="process-step__num">{num}</div>
              <h3>{title}</h3>
              <p>{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
