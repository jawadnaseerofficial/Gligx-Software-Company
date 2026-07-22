import Link from "next/link";
import Header from "@/components/Header";
import UIMockup from "@/components/UIMockup";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const processSteps = [
  { num: "01", title: "Discovery", desc: "We review business goals, users, competitors, current systems, content gaps, SEO risks, integrations, and launch priorities." },
  { num: "02", title: "Planning", desc: "We define sitemap, user journeys, feature scope, data flow, content structure, tracking, and measurable success points." },
  { num: "03", title: "Design", desc: "We create clean responsive interfaces, conversion paths, content hierarchy, and user-friendly screens for desktop and mobile." },
  { num: "04", title: "Build", desc: "We develop the website, application, platform, or campaign system with secure code, CMS logic, integrations, and performance in mind." },
  { num: "05", title: "Launch", desc: "We test forms, mobile behavior, speed, SEO metadata, redirects, analytics, schema, and deployment requirements." },
  { num: "06", title: "Growth", desc: "We support improvements, maintenance, SEO, campaigns, reporting, hosting, and new features after launch." },
];

const portfolioExamples = [
  { num: "01", title: "Internal operations systems", desc: "Budget management, visitor management, approvals, dashboards, and reporting workflows for regional enterprise teams.", mockup: { title: "Operations OS", sidebar: ["Approvals", "Visitors", "Budget"], metrics: [{ value: "84%", label: "Workflow health" }, { value: "32", label: "Open requests" }, { value: "Live", label: "Reports" }], bars: ["86%", "64%", "72%"], list: ["Budget request queue", "Visitor pass approval", "Monthly operations report"] } },
  { num: "02", title: "Government department platforms", desc: "Project management, employee management, mobile application, and department workflow systems for UAE public-sector style operations.", mockup: { title: "Department Portal", sidebar: ["Projects", "Staff", "Mobile"], metrics: [{ value: "46", label: "Tasks" }, { value: "12", label: "Teams" }, { value: "Live", label: "Mobile" }], bars: ["82%", "62%", "78%"], list: ["Project milestone tracker", "Employee task allocation", "Field mobile workflow"] } },
  { num: "03", title: "Manufacturing and pricing systems", desc: "Diamond manufacturing workflows, price calculation, RapNet-style pricing integration, inventory, and auction modules.", mockup: { title: "Manufacturing ERP", sidebar: ["Rough", "Polished", "Auction"], metrics: [{ value: "Rap", label: "Pricing" }, { value: "SKU", label: "Tracked" }, { value: "Live", label: "Auction" }], bars: ["66%", "84%", "77%"], list: ["Rough to polished workflow", "Price calculation engine", "Inventory and auction module"] } },
  { num: "04", title: "Real estate management platforms", desc: "Property, tenant, landlord, contract, reporting, and mobile-access systems for UAE real estate groups.", mockup: { title: "Property Platform", sidebar: ["Units", "Tenants", "Owners"], metrics: [{ value: "184", label: "Units" }, { value: "96%", label: "Occupancy" }, { value: "Live", label: "App" }], bars: ["78%", "72%", "88%"], list: ["Tenant and landlord records", "Contract renewal tracker", "Mobile property access"] } },
];

const overviewCards = [
  {
    title: "Detailed service explanation",
    html: "<p>Professional business email hosting ensures reliable communication, proper deliverability, and secure domain authentication. Gligx helps set up, migrate, and maintain business email systems alongside <a href=\"/services/web-hosting-dubai/\">web hosting</a> services.</p>",
  },
  {
    title: "Who this service is for",
    html: "<p>UAE companies that need professional email hosting with proper DNS setup, mailbox migration, and reliable email deliverability for team communication connected to their <a href=\"/services/web-development-company-uae/\">business website</a>.</p>",
  },
  {
    title: "Business email hosting Dubai for professional communication",
    html: "<p>A professional email address builds trust. Gligx helps businesses set up email that delivers reliably and represents the brand professionally. Integrates with <a href=\"/services/web-design-dubai/\">web design</a> and hosting packages.</p>",
  },
  {
    title: "Email setup issues that affect leads",
    html: "<p>Emails going to spam, undelivered form enquiries, misconfigured DNS records, and poor deliverability all affect business communication.</p>",
  },
];

const focusItems = [
  "Professional email hosting setup",
  "SPF, DKIM, and DMARC record configuration",
  "Mailbox migration between providers",
  "DNS record verification and alignment",
  "Form-to-email routing for enquiries",
  "Team mailbox onboarding",
  "Email alias and group setup",
  "Ongoing deliverability monitoring",
];

const useCases = [
  "Business email hosting setup",
  "Mailbox migration between providers",
  "DNS record configuration and verification",
  "SPF, DKIM, and DMARC authentication",
  "Team email onboarding and setup",
  "Form-to-email routing for enquiries",
  "Email alias and group distribution",
  "Email communication continuity planning",
];

const industries = [
  "SMEs across UAE",
  "Professional services",
  "Trading companies",
  "Real estate groups",
  "Healthcare providers",
  "Corporate businesses",
  "Startups",
  "Service companies",
];

const faqs = [
  { q: "Why do I need business email hosting?", a: "A professional email address builds trust with customers and suppliers. Business hosting also provides better security, control, and deliverability than free email providers." },
  { q: "Can Gligx help migrate my existing email to a new provider?", a: "Yes. Gligx coordinates mailbox migration between providers with minimal downtime and thorough testing." },
  { q: "What are SPF, DKIM, and DMARC records?", a: "These are DNS records that authenticate email senders and improve deliverability. SPF specifies which servers can send email, DKIM adds a digital signature, and DMARC tells receivers how to handle unauthenticated email." },
  { q: "Can Gligx connect website forms to business email?", a: "Yes. Gligx sets up form-to-email routing so enquiries from website forms are delivered reliably to the correct mailbox." },
  { q: "How many mailboxes can Gligx set up?", a: "There is no fixed limit. Gligx can set up individual mailboxes, aliases, and group distributions based on team requirements." },
  { q: "What happens if email delivery stops working?", a: "Gligx helps diagnose deliverability issues, check DNS records, review spam filters, and restore email flow." },
];

export default function ServicePage() {
  return (
    <>
      <Header />
      <main id="main-content">
        {/* Hero */}
        <section className="glx-page-hero glx-service-hero">
          <div className="glx-container glx-page-hero-grid">
            <div>
              <nav className="glx-breadcrumb" aria-label="Breadcrumb">
                <Link href="/">Home</Link><span>/</span><Link href="/services/custom-software-development-company/">Services</Link><span>/</span><span>Business Email Hosting Dubai</span>
              </nav>
              <span className="glx-eyebrow">Gligx Service</span>
              <h1>Business Email Hosting Dubai</h1>
              <p>Gligx helps UAE companies set up professional business email hosting, mailbox migration, DNS records, SPF, DKIM, DMARC guidance, deliverability basics, and ongoing communication support.</p>
              <div className="glx-actions" style={{ marginTop: "28px" }}>
                <Link className="glx-btn glx-btn-light" href="/consultation/">Request Free Consultation</Link>
                <Link className="glx-btn" href="/portfolio/">View Related Work</Link>
              </div>
            </div>
            <figure className="glx-page-visual" aria-label="Business Email Hosting Dubai visual">
              <svg className="glx-page-visual-img" viewBox="0 0 400 280" width="1200" height="820" role="img">
                <defs><linearGradient id="g1" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#1563a0"/><stop offset="100%" stopColor="#21b6a9"/></linearGradient></defs>
                <rect width="400" height="280" fill="#0a0a0a" rx="8"/>
                <rect x="12" y="12" width="376" height="20" fill="#1a1a1a" rx="4"/>
                <circle cx="24" cy="22" r="4" fill="#fff"/>
                <circle cx="36" cy="22" r="4" fill="#14b8a6"/>
                <circle cx="48" cy="22" r="4" fill="#f59e0b"/>
                <text x="370" y="26" fill="#888" fontSize="9" fontFamily="monospace" textAnchor="end">EMAIL DELIVERY</text>
                <rect x="16" y="44" width="110" height="48" fill="url(#g1)" rx="4"/>
                <text x="71" y="64" fill="#fff" fontSize="13" fontFamily="monospace" textAnchor="middle" fontWeight="bold">SPF</text>
                <text x="71" y="80" fill="#ccc" fontSize="9" fontFamily="monospace" textAnchor="middle">Aligned</text>
                <rect x="140" y="44" width="110" height="48" fill="#1a1a1a" rx="4"/>
                <text x="195" y="64" fill="#fff" fontSize="13" fontFamily="monospace" textAnchor="middle" fontWeight="bold">DKIM</text>
                <text x="195" y="80" fill="#ccc" fontSize="9" fontFamily="monospace" textAnchor="middle">Signed</text>
                <rect x="264" y="44" width="110" height="48" fill="#1a1a1a" rx="4"/>
                <text x="319" y="64" fill="#fff" fontSize="13" fontFamily="monospace" textAnchor="middle" fontWeight="bold">DMARC</text>
                <text x="319" y="80" fill="#ccc" fontSize="9" fontFamily="monospace" textAnchor="middle">Guided</text>
                <rect x="16" y="110" width="360" height="20" fill="#1a1a1a" rx="3"/>
                <rect x="16" y="110" width="280" height="20" fill="url(#g1)" rx="3"/>
                <rect x="16" y="140" width="360" height="20" fill="#1a1a1a" rx="3"/>
                <rect x="16" y="140" width="220" height="20" fill="#14b8a6" rx="3"/>
                <rect x="16" y="170" width="360" height="20" fill="#1a1a1a" rx="3"/>
                <rect x="16" y="170" width="250" height="20" fill="#f59e0b" rx="3"/>
                <circle cx="24" cy="216" r="6" fill="#14b8a6"/>
                <text x="36" y="220" fill="#ccc" fontSize="11" fontFamily="monospace">Mailbox routing ready</text>
                <circle cx="24" cy="236" r="6" fill="#14b8a6"/>
                <text x="36" y="240" fill="#ccc" fontSize="11" fontFamily="monospace">Domain records checked</text>
                <circle cx="24" cy="256" r="6" fill="#14b8a6"/>
                <text x="36" y="260" fill="#ccc" fontSize="11" fontFamily="monospace">Spam risk reduced</text>
              </svg>
              <figcaption className="glx-page-visual-caption">
                <strong>Business Email</strong><span>SPF</span><span>DKIM</span><span>DMARC</span>
              </figcaption>
            </figure>
          </div>
        </section>

        {/* Motion Scene */}
        <section className="glx-hosting-scroll-scene glx-service-motion-scene glx-motion-email" aria-label="Business Email Security">
          <div className="glx-container glx-hosting-scene-grid">
            <div className="glx-hosting-scene-copy">
              <span className="glx-eyebrow">Business Email Security</span>
              <h2>Professional email hosting with secure domain communication.</h2>
              <p>Gligx helps set up business email hosting with proper DNS records, SPF, DKIM, DMARC guidance, mailbox migration, and deliverability best practices for UAE companies.</p>
              <div className="glx-hosting-scene-metrics">
                <span><strong>SPF</strong> Aligned</span>
                <span><strong>DKIM</strong> Signed</span>
                <span><strong>DMARC</strong> Guided</span>
              </div>
            </div>
            <div className="glx-hosting-room glx-service-motion-room is-category-room" aria-hidden="true">
              <div className="glx-hosting-room-glow"></div>
              <div className="glx-category-stage">
                <div className="glx-category-panel glx-category-panel-main">
                  <span>Email Delivery Hub</span>
                  <strong>Hub</strong>
                  <em>DNS records verified</em><em>SPF record configured</em><em>DKIM signature active</em>
                </div>
                <div className="glx-category-panel glx-category-panel-a">
                  <span>SPF</span>
                  <strong>Aligned</strong>
                </div>
                <div className="glx-category-panel glx-category-panel-b">
                  <span>DKIM</span>
                  <strong>Signed</strong>
                </div>
                <div className="glx-category-panel glx-category-panel-c">
                  <span>DMARC</span>
                  <strong>Guided</strong>
                </div>
                <div className="glx-category-flow-line"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Service Overview */}
        <section className="glx-section glx-section-light glx-service-overview-section">
          <div className="glx-container">
            <div className="glx-service-overview-layout">
              <article className="glx-service-overview-flow">
                <div className="glx-service-overview-card is-lead">
                  <span className="glx-kicker">Service Overview</span>
                  <h2>Business email hosting Dubai for professional communication.</h2>
                  <p>Professional business email hosting ensures reliable communication, proper deliverability, and secure domain authentication. Gligx helps set up, migrate, and maintain business email systems.</p>
                </div>
                {overviewCards.map((card, i) => (
                  <div key={i} className="glx-service-overview-card">
                    <h3>{card.title}</h3>
                    <div dangerouslySetInnerHTML={{ __html: card.html }} />
                  </div>
                ))}
                <div className="glx-service-overview-card glx-focus-card">
                  <h3>What Gligx focuses on</h3>
                  <ul>
                    {focusItems.map((item, i) => <li key={i}>{item}</li>)}
                  </ul>
                </div>
              </article>
              <aside className="glx-service-aside-stack">
                <div className="glx-side-panel glx-service-sticky-panel">
                  <span className="glx-eyebrow">Trust Signals</span>
                  <h2>Reliable email hosting for UAE businesses</h2>
                  <p>Gligx helps businesses set up professional email hosting with proper DNS records, SPF, DKIM, DMARC guidance, mailbox migration, and reliable form delivery.</p>
                  <div className="glx-side-proof">
                    <span>Professional email</span><span>DNS records</span><span>Form delivery</span><span>Since 2017</span>
                  </div>
                  <UIMockup compact title="Email Hub" sidebar={["SPF", "DKIM", "DMARC"]} metrics={[{ value: "SPF", label: "Aligned" }, { value: "DKIM", label: "Signed" }, { value: "DMARC", label: "Guided" }]} bars={["86%", "74%", "68%"]} list={["SPF record configured", "DKIM signature active", "DMARC policy guided"]} />
                </div>
                <div className="glx-side-panel glx-service-quick-panel">
                  <span className="glx-kicker">Quick Actions</span>
                  <Link className="glx-btn glx-btn-light" href="/consultation/">Request Free Consultation</Link>
                  <Link className="glx-btn glx-btn-dark" href="/portfolio/">View Related Work</Link>
                </div>
                <div className="glx-side-panel glx-service-quick-panel">
                  <span className="glx-kicker">Related Services</span>
                  <Link className="glx-side-link" href="/services/web-hosting-dubai/">Web Hosting Dubai</Link>
                  <Link className="glx-side-link" href="/services/web-development-company-uae/">Web Development Company Dubai</Link>
                  <Link className="glx-side-link" href="/services/web-design-dubai/">Web Design Company Dubai</Link>
                </div>
              </aside>
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="glx-section glx-service-depth">
          <div className="glx-container">
            <div className="glx-section-head glx-section-head-wide">
              <div><span className="glx-eyebrow">Use Cases</span><h2>Business systems and workflows this service can support.</h2></div>
              <p>These examples help search engines and buyers understand the real business problems Gligx can solve.</p>
            </div>
            <div className="glx-grid-3">
              {useCases.map((uc, i) => (
                <article key={i} className="glx-mini-proof"><h3>{uc}</h3></article>
              ))}
            </div>
          </div>
        </section>

        {/* Industries */}
        <section className="glx-section glx-section-light">
          <div className="glx-container">
            <div className="glx-section-head">
              <div><span className="glx-eyebrow">Industries</span><h2>Built for the way regional businesses actually operate.</h2></div>
            </div>
            <div className="glx-industry-proof-grid">
              {industries.map((ind, i) => (
                <div key={i} className="glx-industry-proof">{ind}</div>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="glx-section glx-process-section">
          <div className="glx-container">
            <div className="glx-section-head">
              <div><span className="glx-eyebrow">Process</span><h2>From consultation to launch, then continuous improvement.</h2></div>
            </div>
            <div className="glx-service-process">
              {processSteps.map((step, i) => (
                <article key={i} className="glx-service-process-step">
                  <span>{step.num}</span>
                  <h3>{step.title}</h3>
                  <p>{step.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Related Project Experience */}
        <section className="glx-section glx-enterprise-proof">
          <div className="glx-container">
            <div className="glx-section-head glx-section-head-wide">
              <div><span className="glx-eyebrow">Related Project Experience</span><h2>Confidential-safe examples that show real delivery depth.</h2></div>
              <p>Selected examples are summarized by category to protect client confidentiality while still showing the type of systems Gligx has delivered.</p>
            </div>
            <div className="glx-portfolio-feature-grid">
              {portfolioExamples.map((ex, i) => (
                <article key={i} className="glx-enterprise-card">
                  <div className="glx-enterprise-card-top"><span>Example</span><strong>{ex.num}</strong></div>
                  <UIMockup compact {...ex.mockup} />
                  <h3>{ex.title}</h3>
                  <p>{ex.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="glx-section glx-section-muted">
          <div className="glx-container glx-faq-layout">
            <div>
              <span className="glx-eyebrow">FAQ</span>
              <h2>Questions about Business Email Hosting Dubai.</h2>
            </div>
            <div className="glx-accordion">
              {faqs.map((faq, i) => (
                <details key={i} className="glx-faq-item" {...(i === 0 ? { open: true } : {})}>
                  <summary>{faq.q}</summary>
                  <p>{faq.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </>
  );
}
