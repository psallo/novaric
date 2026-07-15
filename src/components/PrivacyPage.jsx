import './PrivacyPage.css';

export default function PrivacyPage() {
  return (
    <div className="legal">
      <div className="container legal__inner">
        <a href="/" className="legal__back">← Back to home</a>

        <h1>Privacy Policy</h1>
        <p className="legal__updated">Last updated: July 15, 2026</p>

        <section>
          <h2>1. Overview</h2>
          <p>
            Novaric (&quot;we&quot;, &quot;us&quot;) respects your privacy. This policy explains
            what information novaric.kr and its subdomains collect and how it&apos;s used.
          </p>
        </section>

        <section>
          <h2>2. Information We Collect</h2>
          <ul>
            <li>Visit logs, IP address, and browser type (server logs)</li>
            <li>Usage data collected via cookies and similar technologies</li>
            <li>Name, email, and message content submitted through the contact form</li>
          </ul>
        </section>

        <section>
          <h2>3. Cookies &amp; Analytics</h2>
          <p>
            We may use cookies and services such as Google Analytics and Google AdSense to
            understand site usage and, on some of our properties, to serve relevant
            advertising. These services may set their own cookies to collect data about
            your visits to this and other sites.
          </p>
          <ul>
            <li>
              How Google uses data:{' '}
              <a href="https://policies.google.com/technologies/partner-sites" target="_blank" rel="noopener noreferrer">
                Google&apos;s Privacy &amp; Terms
              </a>
            </li>
            <li>
              Opt out of personalized ads:{' '}
              <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer">
                Google Ads Settings
              </a>
            </li>
          </ul>
        </section>

        <section>
          <h2>4. Our Other Sites</h2>
          <p>
            Novaric also operates{' '}
            <a href="https://policy.novaric.kr" target="_blank" rel="noopener noreferrer">policy.novaric.kr</a>{' '}
            and{' '}
            <a href="https://info.novaric.kr" target="_blank" rel="noopener noreferrer">info.novaric.kr</a>,
            each of which has its own privacy policy covering their content and advertising in more detail.
          </p>
        </section>

        <section>
          <h2>5. Sharing With Third Parties</h2>
          <p>
            We don&apos;t sell or share your personal information with third parties, except
            where required by law or necessary to operate our services (e.g. hosting,
            analytics, and advertising providers).
          </p>
        </section>

        <section>
          <h2>6. Your Rights</h2>
          <p>
            You may request access to, correction of, or deletion of your personal
            information at any time by contacting us below.
          </p>
        </section>

        <section>
          <h2>7. Changes to This Policy</h2>
          <p>
            We may update this policy from time to time. Changes will be posted on this page.
          </p>
        </section>

        <section>
          <h2>8. Contact</h2>
          <p>
            Email:{' '}
            <a href="mailto:treasure0613@gmail.com">treasure0613@gmail.com</a>
          </p>
        </section>
      </div>
    </div>
  );
}
