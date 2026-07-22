import Link from "next/link";
import Header from "@/components/Header";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const services = [
  "Web Design Dubai",
  "Website Development Dubai",
  "Software Development Dubai",
  "Mobile App Development Dubai",
  "eCommerce Development Dubai",
  "SEO Services Dubai",
  "Digital Marketing Dubai",
  "Google PPC Management",
  "Web Hosting Dubai",
  "Business Email Hosting Dubai",
  "AWS & Google Cloud Services",
  "AI Automation & Chatbot Development",
  "ERP & CRM Development",
  "Payment Gateway Integration UAE",
  "UAE E-Invoicing with Peppol",
  "Branding & Logo Design",
];

const steps = [
  { title: "Share your goals", desc: "Tell us the service, challenge, timeline, and business outcome you want." },
  { title: "We review fit", desc: "Gligx checks the best technical, design, SEO, hosting, or automation direction." },
  { title: "You get direction", desc: "We recommend a practical roadmap, scope direction, and next steps." },
];

export default function ConsultationPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        {/* Hero */}
        <section className="glx-page-hero">
          <div className="glx-container glx-page-hero-grid">
            <div>
              <nav className="glx-breadcrumb" aria-label="Breadcrumb">
                <Link href="/">Home</Link><span>/</span><span>Free Consultation</span>
              </nav>
              <span className="glx-eyebrow">Book a Free Consultation</span>
              <h1>Let us turn your idea into a clear digital roadmap.</h1>
              <p>Tell Gligx what you want to build, improve, automate, or market. Our Dubai team will review your goals and recommend the right direction for your website, software, mobile app, e-invoicing workflow, SEO, hosting, PPC, or brand system.</p>
            </div>
            <figure className="glx-page-visual" aria-label="Free consultation visual">
              <svg className="glx-page-visual-img" viewBox="0 0 400 280" width="1200" height="820" role="img" aria-label="Consultation planning illustration">
                <rect width="400" height="280" rx="8" fill="#0a0a0a" />
                <rect x="12" y="12" width="376" height="38" rx="4" fill="rgba(255,255,255,0.06)" />
                <circle cx="28" cy="31" r="5" fill="rgba(255,255,255,0.3)" />
                <circle cx="44" cy="31" r="5" fill="rgba(33,182,169,0.7)" />
                <circle cx="60" cy="31" r="5" fill="rgba(201,169,110,0.7)" />
                <text x="340" y="37" fill="#e9edf2" fontSize="10" fontWeight="900" textAnchor="end" fontFamily="Inter,sans-serif">FREE CONSULTATION</text>
                <rect x="12" y="56" width="376" height="68" rx="4" fill="rgba(5,5,5,0.42)" />
                <text x="200" y="78" fill="#e9edf2" fontSize="14" fontWeight="900" textAnchor="middle" fontFamily="Inter,sans-serif">Share your goals</text>
                <text x="200" y="98" fill="#aeb7c4" fontSize="10" textAnchor="middle" fontFamily="Inter,sans-serif">Tell us the service, challenge, and outcome you want</text>
                <rect x="12" y="130" width="376" height="4" rx="2" fill="rgba(255,255,255,0.1)" />
                <rect x="12" y="140" width="376" height="68" rx="4" fill="rgba(5,5,5,0.42)" />
                <text x="200" y="162" fill="#e9edf2" fontSize="14" fontWeight="900" textAnchor="middle" fontFamily="Inter,sans-serif">We review fit</text>
                <text x="200" y="182" fill="#aeb7c4" fontSize="10" textAnchor="middle" fontFamily="Inter,sans-serif">Gligx checks the best technical direction</text>
                <rect x="12" y="214" width="376" height="54" rx="4" fill="rgba(5,5,5,0.42)" />
                <text x="200" y="236" fill="#e9edf2" fontSize="14" fontWeight="900" textAnchor="middle" fontFamily="Inter,sans-serif">You get direction</text>
                <text x="200" y="254" fill="#aeb7c4" fontSize="10" textAnchor="middle" fontFamily="Inter,sans-serif">Practical roadmap and next steps</text>
              </svg>
              <figcaption className="glx-page-visual-caption">
                <strong>Consultation Flow</strong>
                <span>Share</span><span>Review</span><span>Direction</span>
              </figcaption>
            </figure>
          </div>
        </section>

        {/* Steps */}
        <section className="glx-section">
          <div className="glx-container">
            <div className="glx-consultation-steps" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "18px" }}>
              {steps.map((step, i) => (
                <div key={i} className="glx-career-step" style={{ textAlign: "center" }}>
                  <span className="glx-career-step-num">{String(i + 1).padStart(2, "0")}</span>
                  <h3>{step.title}</h3>
                  <p>{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Consultation Form */}
        <section className="glx-section glx-section-muted">
          <div className="glx-container">
            <div className="glx-section-head" style={{ textAlign: "center" }}>
              <span className="glx-eyebrow">Get Started</span>
              <h2>Request your free consultation</h2>
            </div>
            <div style={{ maxWidth: 640, margin: "0 auto" }}>
              <form className="glx-consultation-form">
                <div className="glx-field">
                  <label htmlFor="consult-name">Name <abbr title="Required">*</abbr></label>
                  <input id="consult-name" type="text" required />
                </div>
                <div className="glx-field">
                  <label htmlFor="consult-email">Email <abbr title="Required">*</abbr></label>
                  <input id="consult-email" type="email" required />
                </div>
                <div className="glx-field">
                  <label htmlFor="consult-phone">Phone <abbr title="Required">*</abbr></label>
                  <input id="consult-phone" type="tel" required />
                </div>
                <div className="glx-field">
                  <label htmlFor="consult-company">Company</label>
                  <input id="consult-company" type="text" />
                </div>
                <div className="glx-field">
                  <label htmlFor="consult-service">Service interested</label>
                  <select id="consult-service" defaultValue="">
                    <option value="" disabled>Select a service</option>
                    {services.map((s) => <option key={s}>{s}</option>)}
                  </select>
                </div>
                <div className="glx-field">
                  <label htmlFor="consult-message">Project message <abbr title="Required">*</abbr></label>
                  <textarea id="consult-message" rows={4} required></textarea>
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
