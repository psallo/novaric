import { useState } from 'react';
import './Contact.css';

const PLATFORMS = ['Android', 'iOS', 'Both Android & iOS', 'Not sure yet'];

export default function Contact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section className="contact section" id="contact">
      <div className="container contact__inner">

        <div className="contact__text">
          <p className="section__eyebrow">Get In Touch</p>
          <h2 className="section__title">Let's Build<br />Something Great</h2>
          <p className="contact__sub">
            Tell us about your app idea and we'll get back to you within one business day.
          </p>
          <div className="contact__info">
            <a href="mailto:hello@novaric.io" className="contact__info-item">
              <span className="contact__info-icon">✉</span>
              hello@novaric.io
            </a>
            <div className="contact__info-item">
              <span className="contact__info-icon">📍</span>
              Seoul, South Korea &mdash; Remote-friendly worldwide
            </div>
          </div>

          <div className="contact__badges">
            <div className="contact__badge">
              <span>⚡</span>
              <span>Fast response</span>
            </div>
            <div className="contact__badge">
              <span>🤝</span>
              <span>NDA available</span>
            </div>
            <div className="contact__badge">
              <span>🌏</span>
              <span>Global clients</span>
            </div>
          </div>
        </div>

        <div className="contact__form-wrap">
          {sent ? (
            <div className="contact__success">
              <div className="contact__success-icon">✓</div>
              <h3>Message Sent!</h3>
              <p>Thanks for reaching out. We'll be in touch within one business day.</p>
            </div>
          ) : (
            <form className="contact__form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Your Name</label>
                  <input type="text" id="name" name="name" placeholder="Jane Smith" required />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input type="email" id="email" name="email" placeholder="jane@company.com" required />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="platform">Platform</label>
                <select id="platform" name="platform">
                  <option value="">Select a platform</option>
                  {PLATFORMS.map(p => <option key={p}>{p}</option>)}
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="message">About Your Project</label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  placeholder="Describe your app idea, timeline, and any specific requirements..."
                  required
                />
              </div>
              <button type="submit" className="btn btn--primary btn--full">
                Send Message →
              </button>
            </form>
          )}
        </div>

      </div>
    </section>
  );
}
