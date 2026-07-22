import Link from "next/link";
import Header from "@/components/Header";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function AboutPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        {/* Page Hero */}
        <section className="glx-page-hero">
          <div className="glx-container glx-page-hero-grid">
            <div>
              <nav className="glx-breadcrumb" aria-label="Breadcrumb">
                <Link href="/">Home</Link><span>/</span><span>About Gligx Technologies</span>
              </nav>
              <span className="glx-eyebrow">Gligx Technologies</span>
              <h1>About Gligx</h1>
              <p>A Dubai-based technology partner serving UAE and GCC businesses since 2017.</p>
            </div>
            <figure className="glx-page-visual" aria-label="About Gligx Technologies visual">
              <svg className="glx-page-visual-img" viewBox="0 0 1200 600" role="img" aria-label="About Gligx illustration">
                <rect width="1200" height="600" fill="#0a0a0a" />
                <rect x="60" y="60" width="1080" height="480" rx="12" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
                <rect x="100" y="120" width="300" height="360" rx="8" fill="rgba(33,182,169,0.06)" stroke="rgba(33,182,169,0.2)" strokeWidth="1" />
                <text x="250" y="180" fill="#21b6a9" fontSize="64" fontWeight="950" textAnchor="middle" fontFamily="Inter,sans-serif">2017</text>
                <text x="250" y="220" fill="#e9edf2" fontSize="16" fontWeight="800" textAnchor="middle" fontFamily="Inter,sans-serif">Founded in Dubai</text>
                <rect x="250" y="250" width="4" height="80" rx="2" fill="#21b6a9" />
                <text x="250" y="370" fill="#aeb7c4" fontSize="14" textAnchor="middle" fontFamily="Inter,sans-serif">UAE + GCC Market</text>
                <text x="250" y="396" fill="#aeb7c4" fontSize="14" textAnchor="middle" fontFamily="Inter,sans-serif">Enterprise Software</text>
                <rect x="440" y="120" width="660" height="100" rx="8" fill="rgba(0,0,0,0.3)" />
                <text x="460" y="155" fill="#e9edf2" fontSize="18" fontWeight="900" fontFamily="Inter,sans-serif">Capabilities</text>
                <text x="460" y="180" fill="#aeb7c4" fontSize="14" fontFamily="Inter,sans-serif">Strategy · Design · Development · SEO · Hosting · Marketing</text>
                <rect x="440" y="240" width="660" height="120" rx="8" fill="rgba(0,0,0,0.2)" />
                <rect x="460" y="260" width="200" height="40" rx="6" fill="rgba(33,182,169,0.12)" />
                <text x="560" y="286" fill="#21b6a9" fontSize="14" fontWeight="800" textAnchor="middle" fontFamily="Inter,sans-serif">Enterprise Applications</text>
                <rect x="680" y="260" width="200" height="40" rx="6" fill="rgba(21,99,160,0.12)" />
                <text x="780" y="286" fill="#1563a0" fontSize="14" fontWeight="800" textAnchor="middle" fontFamily="Inter,sans-serif">Government Systems</text>
                <rect x="460" y="310" width="200" height="40" rx="6" fill="rgba(201,169,110,0.12)" />
                <text x="560" y="336" fill="#c9a96e" fontSize="14" fontWeight="800" textAnchor="middle" fontFamily="Inter,sans-serif">Web & Mobile Platforms</text>
                <rect x="680" y="310" width="200" height="40" rx="6" fill="rgba(33,182,169,0.12)" />
                <text x="780" y="336" fill="#21b6a9" fontSize="14" fontWeight="800" textAnchor="middle" fontFamily="Inter,sans-serif">CRM & ERP Systems</text>
                <rect x="440" y="380" width="660" height="80" rx="8" fill="rgba(0,0,0,0.3)" />
                <text x="460" y="415" fill="#e9edf2" fontSize="16" fontWeight="800" fontFamily="Inter,sans-serif">Industries Served</text>
                <text x="460" y="440" fill="#aeb7c4" fontSize="13" fontFamily="Inter,sans-serif">Luxury Retail · Government · Motorsports · Diamond Manufacturing · Real Estate · Services</text>
              </svg>
              <figcaption className="glx-page-visual-caption">
                <strong>Since 2017</strong>
                <span>Dubai</span><span>UAE</span><span>GCC</span>
              </figcaption>
            </figure>
          </div>
        </section>

        {/* About Content */}
        <section className="glx-section">
          <div className="glx-container">
            <div className="glx-section-head">
              <div>
                <span className="glx-eyebrow">Since 2017</span>
                <h2>Dubai-based technology partner for UAE and GCC businesses.</h2>
              </div>
            </div>
            <div className="glx-content-max">
              <p>Founded in Dubai in 2017, Gligx Technologies helps businesses across the UAE and GCC plan, design, develop, launch, and grow digital systems. Our work combines regional market understanding, strategic thinking, modern interface design, scalable development, SEO foundations, hosting support, and performance marketing.</p>
              <p>We partner with businesses that need more than a simple website. From enterprise internal applications to customer-facing web and mobile platforms, Gligx builds digital assets that support operations, lead generation, customer experience, and long-term growth.</p>
              <p>Our experience includes enterprise applications, government department systems, motorsports event and licensing platforms, diamond manufacturing and pricing systems, real estate property management platforms, HRM, CRM, project management, and custom workflow automation.</p>
              <Link className="glx-btn glx-btn-light" href="/portfolio/">View our portfolio</Link>
            </div>
          </div>
        </section>

        {/* Need a website CTA section */}
        <section className="glx-cta-band">
          <div className="glx-container">
            <div className="glx-cta-inner">
              <div>
                <span className="glx-eyebrow">Start a project</span>
                <h2>Need a website, software platform, app, or growth system?</h2>
                <p>Tell us what you want to build. Gligx will help shape the scope, technical direction, and launch plan.</p>
              </div>
              <Link className="glx-btn glx-btn-dark" href="/consultation/">
                Get Free Consultation
              </Link>
            </div>
          </div>
        </section>

        {/* Free Consultation Section */}
        <section className="glx-section" id="free-consultation">
          <div className="glx-container">
            <div className="glx-consultation-grid">
              <div className="glx-consultation-info">
                <span className="glx-eyebrow">Free Consultation</span>
                <h2>Let us shape your project into a clear digital roadmap.</h2>
                <p>Share your goals and Gligx will review the best direction for your website, software, app, e-invoicing workflow, SEO, hosting, branding, or custom business system.</p>
                <div className="glx-consultation-badges">
                  <span>Dubai-based team</span>
                  <span>Since 2017</span>
                  <span>UAE + GCC experience</span>
                  <span>Confidential project handling</span>
                </div>
                <div className="glx-consultation-steps">
                  <span>Scope</span><span>Plan</span><span>Estimate</span><span>Launch path</span>
                </div>
              </div>
              <form className="glx-consultation-form">
                <h3>Project Enquiry</h3>
                <div className="glx-field">
                  <label htmlFor="name">Name <abbr title="Required">*</abbr></label>
                  <input id="name" type="text" required />
                </div>
                <div className="glx-field">
                  <label htmlFor="email">Email <abbr title="Required">*</abbr></label>
                  <input id="email" type="email" required />
                </div>
                <div className="glx-field">
                  <label htmlFor="phone">Phone <abbr title="Required">*</abbr></label>
                  <input id="phone" type="tel" required />
                </div>
                <div className="glx-field">
                  <label htmlFor="company">Company</label>
                  <input id="company" type="text" />
                </div>
                <div className="glx-field">
                  <label htmlFor="service">Service interested</label>
                  <select id="service" defaultValue="">
                    <option value="" disabled>Select a service</option>
                    <option>Web Design Dubai</option>
                    <option>Website Development Dubai</option>
                    <option>Software Development Dubai</option>
                    <option>Mobile App Development Dubai</option>
                    <option>eCommerce Development Dubai</option>
                    <option>SEO Services Dubai</option>
                    <option>Digital Marketing Dubai</option>
                    <option>Google PPC Management</option>
                    <option>Web Hosting Dubai</option>
                    <option>Business Email Hosting Dubai</option>
                    <option>AWS & Google Cloud Services</option>
                    <option>AI Automation & Chatbot Development</option>
                    <option>ERP & CRM Development</option>
                    <option>Payment Gateway Integration UAE</option>
                    <option>UAE E-Invoicing with Peppol</option>
                    <option>Branding & Logo Design</option>
                  </select>
                </div>
                <div className="glx-field">
                  <label htmlFor="message">Project message <abbr title="Required">*</abbr></label>
                  <textarea id="message" rows={4} required></textarea>
                </div>
                <button className="glx-btn glx-btn-dark" type="submit" style={{ width: "100%" }}>
                  Book Free Consultation
                </button>
              </form>
            </div>
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </>
  );
}
