import Link from "next/link";
import Header from "@/components/Header";
import UIMockup from "@/components/UIMockup";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const overviewCards = [
  {
    title: "Detailed service explanation",
    html: "<p>Website development turns business strategy and design into a working digital platform. Gligx builds fast, secure, CMS-managed websites with clean architecture.</p>",
  },
  {
    title: "Who this service is for",
    html: "<p>UAE businesses that need a custom-built website, landing page, portal, or web platform with CMS control, SEO foundations, and room to grow.</p>",
  },
  {
    title: "Key features and modules",
    html: "<p>CMS integration, responsive front-end, enquiry forms, SEO metadata, schema markup, fast hosting setup, analytics, security basics.</p>",
  },
  {
    title: "Common problems solved",
    html: "<p>Slow loading times, poor mobile experience, limited CMS control, weak SEO foundations, unmaintainable code.</p>",
  },
  {
    title: "What Gligx focuses on",
    html: `<ul>
<li>Clean maintainable code</li>
<li>CMS-ready website structure</li>
<li>SEO-friendly architecture</li>
<li>Responsive and fast front-end</li>
<li>Secure form and enquiry handling</li>
<li>Performance optimization</li>
<li>Long-term hosting and support</li>
<li>Website redesign and migration</li>
<li>Custom portal and platform builds</li>
<li>Integration with CRM and business systems</li>
</ul>`,
  },
];

const useCases = [
  "CMS-managed business websites",
  "Corporate website rebuilds",
  "Custom PHP web development",
  "Landing page development",
  "Lead enquiry systems",
  "Custom web portals",
  "Website speed optimization",
  "SEO redevelopment projects",
];

const industries = [
  "Technology companies",
  "Professional services",
  "Real estate groups",
  "Healthcare providers",
  "Retail brands",
  "Manufacturing businesses",
  "Government departments",
  "SMEs across UAE",
];

const processSteps = [
  { num: "01", title: "Discovery", desc: "We review business goals, users, competitors, current systems, content gaps, SEO risks, integrations, and launch priorities." },
  { num: "02", title: "Planning", desc: "We define sitemap, user journeys, feature scope, data flow, content structure, tracking, and measurable success points." },
  { num: "03", title: "Design", desc: "We create clean responsive interfaces, conversion paths, content hierarchy, and user-friendly screens for desktop and mobile." },
  { num: "04", title: "Build", desc: "We develop the website, application, platform, or campaign system with secure code, CMS logic, integrations, and performance in mind." },
  { num: "05", title: "Launch", desc: "We test forms, mobile behavior, speed, SEO metadata, redirects, analytics, schema, and deployment requirements." },
  { num: "06", title: "Growth", desc: "We support improvements, maintenance, SEO, campaigns, reporting, hosting, and new features after launch." },
];

const portfolioExamples = [
  {
    num: "01",
    title: "Internal operations systems",
    desc: "Budget management, visitor management, approvals, dashboards, and reporting workflows for regional enterprise teams.",
    mockup: { title: "Operations OS", sidebar: ["Approvals", "Visitors", "Budget"], metrics: [{ value: "84%", label: "Workflow health" }, { value: "32", label: "Open requests" }, { value: "Live", label: "Reports" }], bars: ["86%", "64%", "72%"], list: ["Budget request queue", "Visitor pass approval", "Monthly operations report"] },
  },
  {
    num: "02",
    title: "Government department platforms",
    desc: "Project management, employee management, mobile application, and department workflow systems for UAE public-sector style operations.",
    mockup: { title: "Department Portal", sidebar: ["Projects", "Staff", "Mobile"], metrics: [{ value: "46", label: "Tasks" }, { value: "12", label: "Teams" }, { value: "Live", label: "Mobile" }], bars: ["82%", "62%", "78%"], list: ["Project milestone tracker", "Employee task allocation", "Field mobile workflow"] },
  },
  {
    num: "03",
    title: "Manufacturing and pricing systems",
    desc: "Diamond manufacturing workflows, price calculation, RapNet-style pricing integration, inventory, and auction modules.",
    mockup: { title: "Manufacturing ERP", sidebar: ["Rough", "Polished", "Auction"], metrics: [{ value: "Rap", label: "Pricing" }, { value: "SKU", label: "Tracked" }, { value: "Live", label: "Auction" }], bars: ["66%", "84%", "77%"], list: ["Rough to polished workflow", "Price calculation engine", "Inventory and auction module"] },
  },
  {
    num: "04",
    title: "Real estate management platforms",
    desc: "Property, tenant, landlord, contract, reporting, and mobile-access systems for UAE real estate groups.",
    mockup: { title: "Property Platform", sidebar: ["Units", "Tenants", "Owners"], metrics: [{ value: "184", label: "Units" }, { value: "96%", label: "Occupancy" }, { value: "Live", label: "App" }], bars: ["78%", "72%", "88%"], list: ["Tenant and landlord records", "Contract renewal tracker", "Mobile property access"] },
  },
];

const faqs = [
  { q: "Is Gligx a web development company in Dubai?", a: "Yes. Gligx builds fast, secure, CMS-managed websites for UAE businesses since 2017." },
  { q: "What is included in a Gligx web development project?", a: "Custom front-end and back-end development, CMS integration, SEO structure, responsive design, enquiry forms, and hosting coordination." },
  { q: "Can Gligx work with my existing CMS or platform?", a: "Yes. Gligx can build on WordPress, custom PHP, or headless frameworks depending on project requirements." },
  { q: "Does Gligx build SEO-ready websites?", a: "Yes. Every Gligx website includes SEO page structure, metadata, schema markup, fast loading, and mobile optimization." },
  { q: "How long does a website development project take?", a: "A standard business website typically takes 6-10 weeks from planning to launch." },
];

export default function WebDevelopmentServicePage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <section className="glx-page-hero glx-service-hero">
          <div className="glx-container glx-page-hero-grid">
            <div>
              <nav className="glx-breadcrumb" aria-label="Breadcrumb">
                <Link href="/">Home</Link><span>/</span><Link href="/services/">Services</Link><span>/</span><span>Web Development Company Dubai</span>
              </nav>
              <span className="glx-eyebrow">Gligx Service</span>
              <h1>Web Development Company Dubai</h1>
              <p>Gligx is a web development company in Dubai building fast, secure, CMS-managed, SEO-ready websites, landing pages, portals, enquiry systems, and scalable web platforms for UAE and GCC businesses.</p>
              <div className="glx-actions" style={{ marginTop: "28px" }}>
                <Link className="glx-btn glx-btn-light" href="/consultation/">Request Free Consultation</Link>
                <Link className="glx-btn" href="/portfolio/">View Related Work</Link>
              </div>
            </div>
            <figure className="glx-page-visual" aria-label="Web Development Company Dubai visual preview">
              <svg className="glx-page-visual-img" viewBox="0 0 400 280" width="1200" height="820" role="img" aria-label="Website build illustration">
                <rect width="400" height="280" rx="8" fill="#0a0a0a" />
                <rect x="12" y="12" width="376" height="38" rx="4" fill="rgba(255,255,255,0.06)" />
                <circle cx="28" cy="31" r="5" fill="rgba(255,255,255,0.3)" />
                <circle cx="44" cy="31" r="5" fill="rgba(33,182,169,0.7)" />
                <circle cx="60" cy="31" r="5" fill="rgba(201,169,110,0.7)" />
                <text x="340" y="37" fill="#e9edf2" fontSize="10" fontWeight="900" textAnchor="end" fontFamily="Inter,sans-serif">WEBSITE BUILD</text>
                <rect x="12" y="56" width="88" height="212" rx="4" fill="rgba(0,0,0,0.16)" />
                <rect x="20" y="66" width="72" height="22" rx="12" fill="rgba(255,255,255,0.05)" />
                <rect x="20" y="94" width="72" height="22" rx="12" fill="rgba(255,255,255,0.05)" />
                <rect x="20" y="122" width="72" height="22" rx="12" fill="rgba(255,255,255,0.05)" />
                <rect x="110" y="60" width="278" height="62" rx="4" fill="rgba(5,5,5,0.42)" />
                <rect x="120" y="68" width="72" height="44" rx="4" fill="rgba(255,255,255,0.05)" />
                <text x="156" y="87" fill="#fff" fontSize="18" fontWeight="950" textAnchor="middle" fontFamily="Inter,sans-serif">Speed</text>
                <text x="156" y="103" fill="#aeb7c4" fontSize="8" fontWeight="850" textAnchor="middle" fontFamily="Inter,sans-serif">OPTIMIZED</text>
                <rect x="200" y="68" width="72" height="44" rx="4" fill="rgba(255,255,255,0.05)" />
                <text x="236" y="87" fill="#fff" fontSize="18" fontWeight="950" textAnchor="middle" fontFamily="Inter,sans-serif">CMS</text>
                <text x="236" y="103" fill="#aeb7c4" fontSize="8" fontWeight="850" textAnchor="middle" fontFamily="Inter,sans-serif">READY</text>
                <rect x="280" y="68" width="96" height="44" rx="4" fill="rgba(255,255,255,0.05)" />
                <text x="328" y="87" fill="#fff" fontSize="18" fontWeight="950" textAnchor="middle" fontFamily="Inter,sans-serif">SEO</text>
                <text x="328" y="103" fill="#aeb7c4" fontSize="8" fontWeight="850" textAnchor="middle" fontFamily="Inter,sans-serif">STRUCTURED</text>
                <rect x="110" y="128" width="278" height="34" rx="4" fill="rgba(5,5,5,0.28)" />
                <rect x="120" y="138" width="240" height="9" rx="5" fill="url(#g1)" />
                <rect x="120" y="152" width="180" height="9" rx="5" fill="rgba(255,255,255,0.35)" />
                <rect x="110" y="168" width="278" height="88" rx="4" fill="rgba(255,255,255,0.04)" />
                <rect x="120" y="180" width="248" height="20" rx="4" fill="rgba(255,255,255,0.04)" />
                <circle cx="132" cy="190" r="4" fill="#21b6a9" />
                <text x="142" y="194" fill="#e4e9ef" fontSize="10" fontWeight="800" fontFamily="Inter,sans-serif">Page sections mapped</text>
                <rect x="120" y="208" width="248" height="20" rx="4" fill="rgba(255,255,255,0.04)" />
                <circle cx="132" cy="218" r="4" fill="#21b6a9" />
                <text x="142" y="222" fill="#e4e9ef" fontSize="10" fontWeight="800" fontFamily="Inter,sans-serif">CMS modules ready</text>
                <rect x="120" y="236" width="248" height="20" rx="4" fill="rgba(255,255,255,0.04)" />
                <circle cx="132" cy="246" r="4" fill="#21b6a9" />
                <text x="142" y="250" fill="#e4e9ef" fontSize="10" fontWeight="800" fontFamily="Inter,sans-serif">Enquiry path active</text>
                <defs>
                  <linearGradient id="g1" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#1563a0" />
                    <stop offset="100%" stopColor="#21b6a9" />
                  </linearGradient>
                </defs>
              </svg>
              <figcaption className="glx-page-visual-caption">
                <strong>Web Development</strong>
                <span>Code</span><span>CMS</span><span>SEO</span>
              </figcaption>
            </figure>
          </div>
        </section>

        <section className="glx-hosting-scroll-scene glx-service-motion-scene glx-motion-development" aria-label="Development Workflow">
          <div className="glx-container glx-hosting-scene-grid">
            <div className="glx-hosting-scene-copy">
              <span className="glx-eyebrow">Development Workflow</span>
              <h2>Clean architecture, secure code, and CMS-ready web development.</h2>
              <p>Gligx builds websites with clean architecture, secure code, CMS control, performance optimization, and scalable structure for future growth.</p>
              <div className="glx-hosting-scene-metrics">
                <span><strong>Code</strong> Clean</span>
                <span><strong>CMS</strong> Ready</span>
                <span><strong>SEO</strong> Structured</span>
              </div>
            </div>
            <div className="glx-hosting-room glx-service-motion-room is-category-room" aria-hidden="true">
              <div className="glx-hosting-room-glow"></div>
              <div className="glx-category-stage">
                <div className="glx-category-panel glx-category-panel-main">
                  <span>Development Hub</span>
                  <strong>Hub</strong>
                  <em>Architecture planned</em><em>CMS configured</em><em>Performance optimized</em>
                </div>
                <div className="glx-category-panel glx-category-panel-a">
                  <span>Code</span>
                  <strong>Clean</strong>
                </div>
                <div className="glx-category-panel glx-category-panel-b">
                  <span>CMS</span>
                  <strong>Ready</strong>
                </div>
                <div className="glx-category-panel glx-category-panel-c">
                  <span>SEO</span>
                  <strong>Structured</strong>
                </div>
                <div className="glx-category-flow-line"></div>
              </div>
            </div>
          </div>
        </section>

        <section className="glx-section glx-section-light glx-service-overview-section">
          <div className="glx-container">
            <div className="glx-service-overview-layout">
              <article className="glx-service-overview-flow">
                <div className="glx-service-overview-card is-lead">
                  <span className="glx-kicker">Service Overview</span>
                  <h2>Web Development Company Dubai for fast, secure, CMS-managed websites</h2>
                  <p>Gligx is a web development company in Dubai building fast, secure, CMS-managed, SEO-ready websites, landing pages, portals, enquiry systems, and scalable web platforms for UAE and GCC businesses.</p>
                </div>
                {overviewCards.map((card, i) => (
                  <div key={i} className={`glx-service-overview-card${card.title === "What Gligx focuses on" ? " glx-focus-card" : ""}`}>
                    <h3>{card.title}</h3>
                    <div dangerouslySetInnerHTML={{ __html: card.html }} />
                  </div>
                ))}
              </article>
              <aside className="glx-service-aside-stack">
                <div className="glx-side-panel glx-service-sticky-panel">
                  <span className="glx-eyebrow">Trust Signals</span>
                  <h2>Reliable web development for UAE businesses</h2>
                  <p>Gligx builds websites with clean architecture, secure code, CMS control, performance optimization, and scalable structure for future growth.</p>
                  <div className="glx-side-proof">
                    <span>Clean architecture</span>
                    <span>CMS-ready</span>
                    <span>SEO-friendly</span>
                    <span>Since 2017</span>
                  </div>
                  <UIMockup
                    title="Website Build"
                    sidebar={["Speed", "CMS", "SEO"]}
                    metrics={[{ value: "Speed", label: "Optimized" }, { value: "CMS", label: "Ready" }, { value: "SEO", label: "Structured" }]}
                    bars={["86%", "64%", "72%"]}
                    list={["Page sections mapped", "CMS modules ready", "Enquiry path active"]}
                  />
                </div>
                <div className="glx-side-panel glx-service-quick-panel">
                  <span className="glx-kicker">Quick Actions</span>
                  <Link className="glx-btn glx-btn-light" href="/consultation/">Request Free Consultation</Link>
                  <Link className="glx-btn glx-btn-dark" href="/portfolio/">View Related Work</Link>
                </div>
              </aside>
            </div>
          </div>
        </section>

        <section className="glx-section glx-service-depth">
          <div className="glx-container">
            <div className="glx-section-head glx-section-head-wide">
              <div>
                <span className="glx-eyebrow">Use Cases</span>
                <h2>Web development projects this service can support.</h2>
              </div>
              <p>These examples help search engines and buyers understand the real business problems Gligx can solve.</p>
            </div>
            <div className="glx-grid-3">
              {useCases.map((uc, i) => (
                <article key={i} className="glx-mini-proof"><h3>{uc}</h3></article>
              ))}
            </div>
          </div>
        </section>

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

        <section className="glx-section glx-section-muted">
          <div className="glx-container glx-faq-layout">
            <div>
              <span className="glx-eyebrow">FAQ</span>
              <h2>Questions about Web Development Company Dubai.</h2>
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
