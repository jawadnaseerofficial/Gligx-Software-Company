import Link from "next/link";
import Header from "@/components/Header";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function ContactPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        {/* Page Hero */}
        <section className="glx-page-hero">
          <div className="glx-container glx-page-hero-grid">
            <div>
              <nav className="glx-breadcrumb" aria-label="Breadcrumb">
                <Link href="/">Home</Link><span>/</span><span>Contact</span>
              </nav>
              <span className="glx-eyebrow">Contact Gligx</span>
              <h1>Tell us what you want to build.</h1>
              <p>Websites, custom software, mobile apps, SEO, hosting, PPC, branding, and digital growth systems for businesses in Dubai and across the UAE.</p>
            </div>
            <figure className="glx-page-visual" aria-label="Gligx project consultation visual">
              <svg className="glx-page-visual-img" viewBox="0 0 1200 600" role="img" aria-label="Contact consultation illustration">
                <rect width="1200" height="600" fill="#0a0a0a" />
                <rect x="60" y="60" width="1080" height="480" rx="12" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
                <rect x="100" y="120" width="320" height="360" rx="8" fill="rgba(33,182,169,0.05)" stroke="rgba(33,182,169,0.18)" strokeWidth="1" />
                <text x="260" y="170" fill="#21b6a9" fontSize="28" fontWeight="950" textAnchor="middle" fontFamily="Inter,sans-serif">Project Desk</text>
                <text x="260" y="210" fill="#e9edf2" fontSize="16" fontWeight="800" textAnchor="middle" fontFamily="Inter,sans-serif">Scope</text>
                <text x="260" y="240" fill="#e9edf2" fontSize="16" fontWeight="800" textAnchor="middle" fontFamily="Inter,sans-serif">Quote</text>
                <text x="260" y="270" fill="#e9edf2" fontSize="16" fontWeight="800" textAnchor="middle" fontFamily="Inter,sans-serif">Launch</text>
                <rect x="100" y="310" width="320" height="4" rx="2" fill="rgba(255,255,255,0.1)" />
                <rect x="100" y="340" width="240" height="40" rx="6" fill="rgba(33,182,169,0.12)" />
                <text x="220" y="366" fill="#21b6a9" fontSize="14" fontWeight="800" textAnchor="middle" fontFamily="Inter,sans-serif">Free Consultation</text>
                <rect x="460" y="120" width="620" height="100" rx="8" fill="rgba(0,0,0,0.3)" />
                <text x="480" y="155" fill="#e9edf2" fontSize="18" fontWeight="900" fontFamily="Inter,sans-serif">Contact Information</text>
                <text x="480" y="180" fill="#aeb7c4" fontSize="14" fontFamily="Inter,sans-serif">Reach out by phone, email, or visit our Dubai office.</text>
                <rect x="460" y="240" width="620" height="220" rx="8" fill="rgba(0,0,0,0.2)" />
                <rect x="480" y="260" width="580" height="36" rx="6" fill="rgba(255,255,255,0.04)" />
                <text x="500" y="284" fill="#dbe4ec" fontSize="13" fontWeight="800" fontFamily="Inter,sans-serif">info@gligx.com</text>
                <rect x="480" y="308" width="580" height="36" rx="6" fill="rgba(255,255,255,0.04)" />
                <text x="500" y="332" fill="#dbe4ec" fontSize="13" fontWeight="800" fontFamily="Inter,sans-serif">+971 4 3447633</text>
                <rect x="480" y="356" width="580" height="36" rx="6" fill="rgba(255,255,255,0.04)" />
                <text x="500" y="380" fill="#dbe4ec" fontSize="13" fontWeight="800" fontFamily="Inter,sans-serif">102, Mozna Building, Al Nahda Metro Station, Dubai</text>
              </svg>
              <figcaption className="glx-page-visual-caption">
                <strong>Project Desk</strong>
                <span>Scope</span><span>Quote</span><span>Launch</span>
              </figcaption>
            </figure>
          </div>
        </section>

        {/* Consultation Form + Contact Info */}
        <section className="glx-section">
          <div className="glx-container">
            <div className="glx-consultation-grid">
              {/* Form */}
              <form className="glx-consultation-form">
                <h3>Free Consultation</h3>
                <span className="glx-eyebrow" style={{ marginBottom: 4 }}>Request a project discussion</span>
                <div className="glx-field">
                  <label htmlFor="contact-name">Name <abbr title="Required">*</abbr></label>
                  <input id="contact-name" type="text" required />
                </div>
                <div className="glx-field">
                  <label htmlFor="contact-email">Email <abbr title="Required">*</abbr></label>
                  <input id="contact-email" type="email" required />
                </div>
                <div className="glx-field">
                  <label htmlFor="contact-phone">Phone <abbr title="Required">*</abbr></label>
                  <input id="contact-phone" type="tel" required />
                </div>
                <div className="glx-field">
                  <label htmlFor="contact-company">Company</label>
                  <input id="contact-company" type="text" />
                </div>
                <div className="glx-field">
                  <label htmlFor="contact-service">Service interested</label>
                  <select id="contact-service" defaultValue="">
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
                  <label htmlFor="contact-message">Project message <abbr title="Required">*</abbr></label>
                  <textarea id="contact-message" rows={4} required></textarea>
                </div>
                <button className="glx-btn glx-btn-dark" type="submit" style={{ width: "100%" }}>
                  Book Free Consultation
                </button>
              </form>

              {/* Contact Info */}
              <div className="glx-contact-info">
                <span className="glx-eyebrow">Dubai, UAE</span>
                <h2>Gligx Technologies</h2>
                <p>Dubai-based web design, software development, mobile app, SEO, digital marketing, hosting, PPC, and branding company.</p>
                <div className="glx-contact-details">
                  <div className="glx-contact-item">
                    <strong>Email</strong>
                    <a href="mailto:info@gligx.com">info@gligx.com</a>
                  </div>
                  <div className="glx-contact-item">
                    <strong>Phone</strong>
                    <a href="tel:+97143447633">+971 4 3447633</a>
                  </div>
                  <div className="glx-contact-item">
                    <strong>Mobile</strong>
                    <a href="tel:+971556375945">+971 55 637 5945</a>
                  </div>
                  <div className="glx-contact-item">
                    <strong>Location</strong>
                    <address>102, Mozna Building, Al Doha St,<br />Near Al Nahda Metro Station,<br />Al Qusais 1, Dubai, UAE</address>
                  </div>
                  <div className="glx-contact-item">
                    <strong>Best for</strong>
                    <p>Corporate websites, custom web applications, eCommerce, SEO, Google Ads, hosting, brand identity, and long-term digital support.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </>
  );
}
