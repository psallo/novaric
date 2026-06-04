import './Work.css';

const PROJECTS = [
  {
    bg: 'linear-gradient(135deg,#0f0c29,#302b63,#24243e)',
    accent: '#7c3aed',
    title: 'FitTrack Pro',
    platforms: ['Android', 'iOS'],
    category: 'Health & Fitness',
    desc: 'A personalized fitness tracker with AI-generated workout plans, wearable sync, and social challenges. 400k+ downloads in year one.',
    mockBars: [60,80,50,95,70,85],
  },
  {
    bg: 'linear-gradient(135deg,#0a3d2b,#1a6b4a,#0d5c3a)',
    accent: '#10b981',
    title: 'PayLeaf',
    platforms: ['iOS'],
    category: 'Fintech',
    desc: 'A lightweight peer-to-peer payment app with biometric auth, instant transfers, and spend analytics. PCI DSS compliant.',
    balance: '$4,820.50',
  },
  {
    bg: 'linear-gradient(135deg,#1a1a2e,#16213e,#0f3460)',
    accent: '#3b82f6',
    title: 'CityGuide AR',
    platforms: ['Android', 'iOS'],
    category: 'Travel & AR',
    desc: 'An augmented reality city exploration app that overlays historical info and reviews on real-world landmarks using the device camera.',
    pins: true,
  },
];

function MockScreen({ project }) {
  if (project.mockBars) {
    return (
      <div className="mock-screen">
        <div className="mock-title">{project.title}</div>
        <div className="mock-bars">
          {project.mockBars.map((h, i) => (
            <div
              key={i}
              className="mock-bar"
              style={{ '--h': `${h}%`, '--accent': project.accent }}
            />
          ))}
        </div>
      </div>
    );
  }
  if (project.balance) {
    return (
      <div className="mock-screen">
        <div className="mock-title">{project.title}</div>
        <div className="mock-balance">{project.balance}</div>
        <div className="mock-row" />
        <div className="mock-row mock-row--sm" />
        <div className="mock-row mock-row--sm" />
      </div>
    );
  }
  if (project.pins) {
    return (
      <div className="mock-screen">
        <div className="mock-title">{project.title}</div>
        <div className="mock-map">
          <div className="map-pin" style={{ top: '25%', left: '40%', '--accent': project.accent }} />
          <div className="map-pin" style={{ top: '50%', left: '65%', '--accent': project.accent }} />
          <div className="map-pin" style={{ top: '70%', left: '30%', '--accent': project.accent }} />
        </div>
      </div>
    );
  }
  return null;
}

export default function Work() {
  return (
    <section className="work section" id="work">
      <div className="container">
        <div className="section__header">
          <p className="section__eyebrow">Our Work</p>
          <h2 className="section__title">Apps That Ship<br />and Scale</h2>
        </div>
        <div className="work__grid">
          {PROJECTS.map(project => (
            <div className="work-card" key={project.title}>
              <div className="work-card__preview" style={{ background: project.bg }}>
                <MockScreen project={project} />
              </div>
              <div className="work-card__body">
                <div className="work-card__tags">
                  {project.platforms.map(p => (
                    <span className="tag tag--platform" key={p}>{p}</span>
                  ))}
                  <span className="tag">{project.category}</span>
                </div>
                <h3>{project.title}</h3>
                <p>{project.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
