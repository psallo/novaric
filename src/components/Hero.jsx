import './Hero.css';

export default function Hero() {
  return (
    <section className="hero" id="home">
      {/* Ambient background */}
      <div className="hero__bg" aria-hidden>
        <div className="hero__glow hero__glow--1" />
        <div className="hero__glow hero__glow--2" />
        <div className="hero__grid" />
      </div>

      <div className="container hero__body">
        {/* Text side */}
        <div className="hero__text">
          <div className="hero__badge">
            <span className="hero__badge-dot" />
            Android &amp; iOS Development
          </div>

          <h1 className="hero__title">
            We Build Apps<br />
            <span className="gradient-text">People Love</span>
          </h1>

          <p className="hero__sub">
            Novaric crafts high-performance mobile apps for both Android and iOS —
            from concept to launch, with precision and purpose.
          </p>

          <div className="hero__cta">
            <a href="#contact" className="btn btn--primary">Start Your Project →</a>
            <a href="#work"    className="btn btn--ghost">View Our Work</a>
          </div>

          <div className="hero__trust">
            <div className="hero__trust-item">
              <strong>50+</strong>
              <span>Apps Shipped</span>
            </div>
            <div className="hero__trust-div" />
            <div className="hero__trust-item">
              <strong>2M+</strong>
              <span>Downloads</span>
            </div>
            <div className="hero__trust-div" />
            <div className="hero__trust-item">
              <strong>98%</strong>
              <span>Satisfaction</span>
            </div>
          </div>
        </div>

        {/* Phone mockup side */}
        <div className="hero__visual" aria-hidden>
          <div className="phone phone--back">
            <div className="phone__notch" />
            <div className="phone__screen">
              <div className="app-ui">
                <div className="app-topbar">
                  <div className="app-dot-row">
                    <span /><span /><span />
                  </div>
                </div>
                <div className="app-card app-card--wide" />
                <div className="app-row">
                  <div className="app-card app-card--half" />
                  <div className="app-card app-card--half app-card--accent" />
                </div>
                <div className="app-card app-card--thin" />
              </div>
            </div>
          </div>

          <div className="phone phone--front">
            <div className="phone__notch" />
            <div className="phone__screen">
              <div className="app-ui">
                <div className="app-avatar-row">
                  <div className="app-avatar" />
                  <div>
                    <div className="app-bar app-bar--sm" />
                    <div className="app-bar app-bar--xs" />
                  </div>
                </div>
                <div className="app-chart">
                  {[40,70,55,90,60,80].map((h, i) => (
                    <div key={i} className="chart-bar" style={{ '--h': `${h}%` }} />
                  ))}
                </div>
                <div className="app-card app-card--dark">
                  <div className="app-bar app-bar--sm" />
                  <div className="app-bar app-bar--xs" />
                </div>
              </div>
            </div>
          </div>

          {/* Floating badges */}
          <div className="hero__badge-float hero__badge-float--1">
            <span className="badge-icon">📱</span>
            <div>
              <div className="badge-title">iOS App</div>
              <div className="badge-sub">Just deployed</div>
            </div>
          </div>
          <div className="hero__badge-float hero__badge-float--2">
            <span className="badge-icon">⭐</span>
            <div>
              <div className="badge-title">4.9 Rating</div>
              <div className="badge-sub">App Store</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
