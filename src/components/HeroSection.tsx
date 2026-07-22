import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="glx-section glx-hero-premium glx-home-hero">
      <div className="glx-container glx-hero-stage">
        <div className="glx-hero-copy">
          <div className="glx-hero-badge"><span></span>Dubai enterprise technology partner</div>
          <span className="glx-eyebrow">Software, apps, websites & growth systems.</span>
          <h1>
            <span className="glx-hero-title-line">Build</span>
            <span className="glx-hero-title-line">
              <span className="glx-rotating-title glx-forward-gradient">custom software</span>
            </span>
            <span className="glx-hero-title-line">for business growth.</span>
          </h1>
          <p>
            Since 2017, Gligx has helped UAE and GCC businesses plan, design, develop, automate, and scale through
            premium websites, custom software, mobile apps, and growth systems.
          </p>
          <div className="glx-actions">
            <Link className="glx-btn glx-btn-light" href="/consultation/">
              Start Your Project
            </Link>
            <Link className="glx-btn" href="/services/custom-software-development-company/">
              Explore Services
            </Link>
          </div>
        </div>
      </div>
      <div className="glx-container glx-hero-metrics" aria-label="Gligx delivery highlights">
        <article className="glx-hero-metric">
          <span className="glx-hero-metric-icon">
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 7l-3 3 3 3M20 7l3 3-3 3M14 4l-4 16" /></svg>
          </span>
          <small>Projects Delivered</small>
          <strong>250+</strong>
          <em>Across UAE & GCC</em>
        </article>
        <article className="glx-hero-metric">
          <span className="glx-hero-metric-icon">
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 22a10 10 0 100-20 10 10 0 000 20zM12 18a6 6 0 100-12 6 6 0 000 12zM12 14a2 2 0 100-4 2 2 0 000 4z" /></svg>
          </span>
          <small>Project Success Rate</small>
          <strong>98%</strong>
          <em>Delivered Successfully</em>
        </article>
        <article className="glx-hero-metric">
          <span className="glx-hero-metric-icon">
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2l1.8 6.2L20 10l-6.2 1.8L12 18l-1.8-6.2L4 10l6.2-1.8z" /></svg>
          </span>
          <small>Happy Clients</small>
          <strong>99%</strong>
          <em>Satisfaction Rate</em>
        </article>
        <article className="glx-hero-metric">
          <span className="glx-hero-metric-icon">
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 5h16v6H4zM4 13h16v6H4zM7 8h.01M7 16h.01" /></svg>
          </span>
          <small>Expert Support</small>
          <strong>24/7</strong>
          <em>We&apos;re here for you</em>
        </article>
      </div>
      <div className="glx-container glx-hero-service-strip" aria-label="Gligx core services">
        <Link href="/services/custom-software-development-company/">
          <span><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 7l-3 3 3 3M20 7l3 3-3 3M14 4l-4 16" /></svg></span>
          <strong>Custom Software</strong>
          <small>Scalable & secure solutions</small>
        </Link>
        <Link href="/services/web-development-company-uae/">
          <span><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 5h16a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V7a2 2 0 012-2zM2 9h20" /></svg></span>
          <strong>Web Development</strong>
          <small>Modern, responsive & high performance</small>
        </Link>
        <Link href="/services/mobile-app-development/">
          <span><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 2h8a2 2 0 012 2v16a2 2 0 01-2 2H8a2 2 0 01-2-2V4a2 2 0 012-2zM11 18h2" /></svg></span>
          <strong>Mobile Applications</strong>
          <small>iOS, Android & cross-platform apps</small>
        </Link>
        <Link href="/services/digital-marketing-agency-dubai/">
          <span><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 22a10 10 0 100-20 10 10 0 000 20zM12 18a6 6 0 100-12 6 6 0 000 12zM12 14a2 2 0 100-4 2 2 0 000 4z" /></svg></span>
          <strong>Digital Marketing</strong>
          <small>Data-driven strategies for measurable growth</small>
        </Link>
        <Link href="/services/web-hosting-dubai/">
          <span><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 5h16v6H4zM4 13h16v6H4zM7 8h.01M7 16h.01" /></svg></span>
          <strong>Hosting Solutions</strong>
          <small>Reliable, secure & high-speed hosting</small>
        </Link>
      </div>
    </section>
  );
}
