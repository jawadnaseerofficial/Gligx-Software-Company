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
    html: "<p>Mobile app development creates a direct channel between a business and its users. Gligx develops iOS and Android apps connected to secure backend platforms and <a href=\"/services/custom-software-development-company/\">business software systems</a>.</p>",
  },
  {
    title: "Who this service is for",
    html: "<p>UAE organizations that need customer-facing mobile apps, employee workflow apps, field reporting systems, booking platforms, or app-connected dashboards that integrate with <a href=\"/services/custom-software-development-company/\">custom software</a>.</p>",
  },
  {
    title: "Key features and modules",
    html: "<p>iOS and Android apps, secure API integration, user authentication, role-based access, push notifications, offline support, admin dashboard connected to <a href=\"/services/web-development-company-uae/\">web platforms</a>.</p>",
  },
  {
    title: "Common problems solved",
    html: "<p>Disconnected field teams, paper-based reporting, slow customer communication, lack of mobile access to <a href=\"/services/custom-software-development-company/\">business systems</a>.</p>",
  },
  {
    title: "Mobile app development company Dubai for real business workflows",
    html: "<p>A mobile app should connect to real business systems, not just display static information. Gligx builds apps that sync with backend platforms.</p>",
  },
  {
    title: "What mobile app development in Dubai should include",
    html: "<p>Platform selection (iOS, Android, or both), API development, user authentication, role-based access, push notifications, and admin dashboard.</p>",
  },
];

const focusItems = [
  "iOS and Android app development",
  "Secure API and backend integration",
  "User authentication and role management",
  "Push notification and messaging",
  "Offline-capable data sync",
  "Admin dashboard and reporting",
  "Field workflow and task management",
  "Post-launch support and updates",
];

const useCases = [
  "Customer-facing mobile apps",
  "Employee workflow applications",
  "Field reporting and data collection",
  "Property and facility management apps",
  "Booking and appointment systems",
  "Event and licensing mobile platforms",
  "Government and public service apps",
  "App-connected dashboards and reporting",
];

const industries = [
  "Real estate groups",
  "Government departments",
  "Sports and events organizations",
  "Healthcare providers",
  "Service companies",
  "Retail businesses",
  "Enterprise operations teams",
  "Field service businesses",
];

const faqs = [
  { q: "Does Gligx develop both iOS and Android apps?", a: "Yes. Gligx develops native and cross-platform mobile applications for both iOS and Android." },
  { q: "Does a mobile app need a backend system?", a: "Most business apps need a backend for user management, data storage, API integration, and admin dashboards. Gligx builds both front-end and back-end components." },
  { q: "Can a mobile app connect to existing software?", a: "Yes. Gligx builds API integration layers that connect mobile apps to existing CRM, ERP, or custom business systems." },
  { q: "Does Gligx build internal employee apps?", a: "Yes. Employee workflow apps, field reporting tools, task management systems, and internal communication apps are common project types." },
  { q: "Will Gligx help with app store submission?", a: "Yes. Gligx prepares app store assets, coordinates Apple App Store and Google Play submission, and handles review feedback." },
  { q: "How long does mobile app development take?", a: "A focused app with core features typically takes 10-16 weeks. Complex apps with multiple user roles, offline sync, and admin dashboards take longer." },
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
                <Link href="/">Home</Link><span>/</span><Link href="/services/custom-software-development-company/">Services</Link><span>/</span><span>Mobile App Development Dubai</span>
              </nav>
              <span className="glx-eyebrow">Gligx Service</span>
              <h1>Mobile App Development Dubai</h1>
              <p>Gligx develops mobile applications for UAE and GCC organizations that need customer apps, internal apps, field workflows, booking flows, dashboards, and secure backend-connected systems.</p>
              <div className="glx-actions" style={{ marginTop: "28px" }}>
                <Link className="glx-btn glx-btn-light" href="/consultation/">Request Free Consultation</Link>
                <Link className="glx-btn" href="/portfolio/">View Related Work</Link>
              </div>
            </div>
            <figure className="glx-page-visual" aria-label="Mobile App Development Dubai visual">
              <svg className="glx-page-visual-img" viewBox="0 0 400 280" width="1200" height="820" role="img">
                <defs><linearGradient id="g1" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#1563a0"/><stop offset="100%" stopColor="#21b6a9"/></linearGradient></defs>
                <rect width="400" height="280" fill="#0a0a0a" rx="8"/>
                <rect x="12" y="12" width="376" height="20" fill="#1a1a1a" rx="4"/>
                <circle cx="24" cy="22" r="4" fill="#fff"/>
                <circle cx="36" cy="22" r="4" fill="#14b8a6"/>
                <circle cx="48" cy="22" r="4" fill="#f59e0b"/>
                <text x="370" y="26" fill="#888" fontSize="9" fontFamily="monospace" textAnchor="end">MOBILE APP FLOW</text>
                <rect x="16" y="44" width="110" height="48" fill="url(#g1)" rx="4"/>
                <text x="71" y="64" fill="#fff" fontSize="13" fontFamily="monospace" textAnchor="middle" fontWeight="bold">iOS</text>
                <text x="71" y="80" fill="#ccc" fontSize="9" fontFamily="monospace" textAnchor="middle">Ready</text>
                <rect x="140" y="44" width="110" height="48" fill="#1a1a1a" rx="4"/>
                <text x="195" y="64" fill="#fff" fontSize="13" fontFamily="monospace" textAnchor="middle" fontWeight="bold">Android</text>
                <text x="195" y="80" fill="#ccc" fontSize="9" fontFamily="monospace" textAnchor="middle">Ready</text>
                <rect x="264" y="44" width="110" height="48" fill="#1a1a1a" rx="4"/>
                <text x="319" y="64" fill="#fff" fontSize="13" fontFamily="monospace" textAnchor="middle" fontWeight="bold">API</text>
                <text x="319" y="80" fill="#ccc" fontSize="9" fontFamily="monospace" textAnchor="middle">Secure</text>
                <rect x="16" y="110" width="360" height="20" fill="#1a1a1a" rx="3"/>
                <rect x="16" y="110" width="300" height="20" fill="url(#g1)" rx="3"/>
                <rect x="16" y="140" width="360" height="20" fill="#1a1a1a" rx="3"/>
                <rect x="16" y="140" width="240" height="20" fill="#14b8a6" rx="3"/>
                <rect x="16" y="170" width="360" height="20" fill="#1a1a1a" rx="3"/>
                <rect x="16" y="170" width="260" height="20" fill="#f59e0b" rx="3"/>
                <circle cx="24" cy="216" r="6" fill="#14b8a6"/>
                <text x="36" y="220" fill="#ccc" fontSize="11" fontFamily="monospace">Screens in progress</text>
                <circle cx="24" cy="236" r="6" fill="#14b8a6"/>
                <text x="36" y="240" fill="#ccc" fontSize="11" fontFamily="monospace">API endpoints mapped</text>
                <circle cx="24" cy="256" r="6" fill="#14b8a6"/>
                <text x="36" y="260" fill="#ccc" fontSize="11" fontFamily="monospace">Release checklist ready</text>
              </svg>
              <figcaption className="glx-page-visual-caption">
                <strong>Mobile Apps</strong><span>iOS</span><span>Android</span><span>API</span>
              </figcaption>
            </figure>
          </div>
        </section>

        {/* Motion Scene */}
        <section className="glx-hosting-scroll-scene glx-service-motion-scene glx-motion-mobile">
          <div className="glx-container glx-hosting-scroll-inner">
            <div className="glx-hosting-scroll-content">
              <span className="glx-eyebrow">Mobile App Flow</span>
              <h2>Mobile app experiences connected to secure backend systems.</h2>
              <p>Gligx develops mobile applications connected to secure backend platforms, APIs, and admin dashboards for customer-facing and internal business workflows.</p>
              <div className="glx-hosting-metrics">
                <span>iOS → Ready</span>
                <span>Android → Ready</span>
                <span>API → Secure</span>
              </div>
            </div>
            <div className="glx-hosting-visual-grid">
              <div className="glx-hosting-category-main">
                <span className="glx-hosting-category-tag">App Delivery</span>
                <ul>
                  <li>Screen flow designed</li>
                  <li>API endpoints mapped</li>
                  <li>Release checklist ready</li>
                </ul>
              </div>
              <div className="glx-hosting-category-a"><span>iOS</span><span>Ready</span></div>
              <div className="glx-hosting-category-b"><span>Android</span><span>Ready</span></div>
              <div className="glx-hosting-category-c"><span>API</span><span>Secure</span></div>
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
                  <h2>Mobile app development for UAE business workflows.</h2>
                  <p>Mobile app development creates a direct channel between a business and its users. Gligx develops iOS and Android apps connected to secure backend platforms and business systems.</p>
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
                  <h2>Mobile app development for UAE businesses</h2>
                  <p>Gligx develops iOS and Android mobile applications connected to secure backend platforms, APIs, and admin dashboards for customer-facing and internal business workflows.</p>
                  <div className="glx-side-proof">
                    <span>iOS apps</span><span>Android apps</span><span>Backend connected</span><span>Since 2017</span>
                  </div>
                  <UIMockup compact title="App Hub" sidebar={["iOS", "Android", "API"]} metrics={[{ value: "iOS", label: "Ready" }, { value: "Android", label: "Ready" }, { value: "API", label: "Secure" }]} bars={["84%", "76%", "90%"]} list={["iOS screens designed", "Android app built", "API endpoints secured"]} />
                </div>
                <div className="glx-side-panel glx-service-quick-panel">
                  <span className="glx-kicker">Quick Actions</span>
                  <Link className="glx-btn glx-btn-light" href="/consultation/">Request Free Consultation</Link>
                  <Link className="glx-btn glx-btn-dark" href="/portfolio/">View Related Work</Link>
                </div>
                <div className="glx-side-panel glx-service-quick-panel">
                  <span className="glx-kicker">Related Services</span>
                  <Link className="glx-side-link" href="/services/custom-software-development-company/">Software Development Company Dubai</Link>
                  <Link className="glx-side-link" href="/services/web-development-company-uae/">Web Development Company Dubai</Link>
                  <Link className="glx-side-link" href="/services/seo-company-dubai/">SEO Company Dubai</Link>
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
              <h2>Questions about Mobile App Development Dubai.</h2>
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
