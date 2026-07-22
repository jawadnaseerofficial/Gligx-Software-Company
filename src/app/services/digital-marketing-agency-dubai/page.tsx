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
    html: "<p>Digital marketing connects businesses with customers who are searching, browsing, and comparing online. Gligx supports SEO, PPC, landing pages, content strategy, and campaign reporting that complements <a href=\"/services/web-development-company-uae/\">web development</a> and <a href=\"/services/web-design-dubai/\">web design</a>.</p>",
  },
  {
    title: "Who this service is for",
    html: "<p>UAE businesses that need a coordinated digital marketing approach with measurable lead generation, campaign tracking, and content that converts. Works alongside <a href=\"/services/seo-company-dubai/\">SEO services</a> for organic growth.</p>",
  },
  {
    title: "Common problems solved",
    html: "<p>Low website traffic, poor conversion rates, uncoordinated campaigns, no tracking, content that does not generate enquiries. Gligx connects campaigns with <a href=\"/services/web-development-company-uae/\">website optimization</a> and landing page improvements.</p>",
  },
];

const focusItems = [
  "Campaign planning and audience targeting",
  "Landing page design for conversion",
  "PPC and paid campaign coordination",
  "SEO and content strategy alignment",
  "Conversion tracking and campaign reporting",
];

const useCases = [
  "Lead generation campaigns",
  "SEO and content marketing",
  "Social media campaign planning",
  "Landing page optimization",
  "Conversion tracking setup",
  "Campaign reporting and analysis",
];

const industries = [
  "Service companies",
  "Real estate groups",
  "Professional services",
  "Retail brands",
  "B2B companies",
  "Dubai SMEs",
];

const faqs = [
  { q: "Why choose Gligx for digital marketing?", a: "Gligx combines SEO, PPC, landing page design, content strategy, and conversion tracking into coordinated campaigns focused on measurable lead generation." },
  { q: "Does Gligx manage PPC campaigns?", a: "Yes. Gligx plans and coordinates Google Ads and paid search campaigns with landing page optimization and conversion tracking." },
  { q: "Can Gligx improve my website conversion rate?", a: "Yes. Through landing page optimization, clear call-to-action placement, form testing, and user journey improvements." },
  { q: "Does Gligx provide campaign reporting?", a: "Yes. Campaign reporting covers traffic, conversions, leads, cost per lead, ROI, and improvement recommendations." },
  { q: "How does Gligx measure digital marketing success?", a: "Success is measured through qualified enquiries, lead conversion rate, cost per lead, search visibility improvements, and campaign ROI." },
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
                <Link href="/">Home</Link><span>/</span><Link href="/services/custom-software-development-company/">Services</Link><span>/</span><span>Digital Marketing Agency Dubai</span>
              </nav>
              <span className="glx-eyebrow">Gligx Service</span>
              <h1>Digital Marketing Agency Dubai</h1>
              <p>Gligx supports digital marketing for UAE and GCC companies with SEO, PPC, landing pages, tracking, content structure, campaign planning, and lead-generation systems.</p>
              <div className="glx-actions" style={{ marginTop: "28px" }}>
                <Link className="glx-btn glx-btn-light" href="/consultation/">Request Free Consultation</Link>
                <Link className="glx-btn" href="/portfolio/">View Related Work</Link>
              </div>
            </div>
            <figure className="glx-page-visual" aria-label="Digital Marketing Agency Dubai visual">
              <svg className="glx-page-visual-img" viewBox="0 0 400 280" width="1200" height="820" role="img">
                <defs><linearGradient id="g1" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#1563a0"/><stop offset="100%" stopColor="#21b6a9"/></linearGradient></defs>
                <rect width="400" height="280" fill="#0a0a0a" rx="8"/>
                <rect x="12" y="12" width="376" height="20" fill="#1a1a1a" rx="4"/>
                <circle cx="24" cy="22" r="4" fill="#fff"/>
                <circle cx="36" cy="22" r="4" fill="#14b8a6"/>
                <circle cx="48" cy="22" r="4" fill="#f59e0b"/>
                <text x="370" y="26" fill="#888" fontSize="9" fontFamily="monospace" textAnchor="end">CAMPAIGN ENGINE</text>
                <rect x="16" y="44" width="110" height="48" fill="url(#g1)" rx="4"/>
                <text x="71" y="64" fill="#fff" fontSize="13" fontFamily="monospace" textAnchor="middle" fontWeight="bold">3.4x</text>
                <text x="71" y="80" fill="#ccc" fontSize="9" fontFamily="monospace" textAnchor="middle">ROI</text>
                <rect x="140" y="44" width="110" height="48" fill="#1a1a1a" rx="4"/>
                <text x="195" y="64" fill="#fff" fontSize="13" fontFamily="monospace" textAnchor="middle" fontWeight="bold">64</text>
                <text x="195" y="80" fill="#ccc" fontSize="9" fontFamily="monospace" textAnchor="middle">Leads</text>
                <rect x="264" y="44" width="110" height="48" fill="#1a1a1a" rx="4"/>
                <text x="319" y="64" fill="#fff" fontSize="13" fontFamily="monospace" textAnchor="middle" fontWeight="bold">-18%</text>
                <text x="319" y="80" fill="#ccc" fontSize="9" fontFamily="monospace" textAnchor="middle">CPL</text>
                <rect x="16" y="110" width="360" height="20" fill="#1a1a1a" rx="3"/>
                <rect x="16" y="110" width="320" height="20" fill="url(#g1)" rx="3"/>
                <rect x="16" y="140" width="360" height="20" fill="#1a1a1a" rx="3"/>
                <rect x="16" y="140" width="200" height="20" fill="#14b8a6" rx="3"/>
                <rect x="16" y="170" width="360" height="20" fill="#1a1a1a" rx="3"/>
                <rect x="16" y="170" width="280" height="20" fill="#f59e0b" rx="3"/>
                <circle cx="24" cy="216" r="6" fill="#14b8a6"/>
                <text x="36" y="220" fill="#ccc" fontSize="11" fontFamily="monospace">Google Ads funnel</text>
                <circle cx="24" cy="236" r="6" fill="#14b8a6"/>
                <text x="36" y="240" fill="#ccc" fontSize="11" fontFamily="monospace">Landing page tests</text>
                <circle cx="24" cy="256" r="6" fill="#14b8a6"/>
                <text x="36" y="260" fill="#ccc" fontSize="11" fontFamily="monospace">Conversion tracking active</text>
              </svg>
              <figcaption className="glx-page-visual-caption">
                <strong>Campaign Engine</strong><span>PPC</span><span>Leads</span><span>ROI</span>
              </figcaption>
            </figure>
          </div>
        </section>

        {/* Motion Scene */}
        <section className="glx-hosting-scroll-scene glx-service-motion-scene glx-motion-marketing">
          <div className="glx-container glx-hosting-scroll-inner">
            <div className="glx-hosting-scroll-content">
              <span className="glx-eyebrow">Campaign Engine</span>
              <h2>Digital marketing systems that connect campaigns to measurable enquiries.</h2>
              <p>Gligx plans digital marketing campaigns with SEO, PPC, landing page optimization, conversion tracking, content structure, and reporting systems for UAE business growth.</p>
              <div className="glx-hosting-metrics">
                <span>PPC → Tracked</span>
                <span>Social → Planned</span>
                <span>ROI → Measured</span>
              </div>
            </div>
            <div className="glx-hosting-visual-grid">
              <div className="glx-hosting-category-main">
                <span className="glx-hosting-category-tag">Campaign Engine</span>
                <ul>
                  <li>Audience segments defined</li>
                  <li>Tracking events active</li>
                  <li>Landing page connected</li>
                </ul>
              </div>
              <div className="glx-hosting-category-a"><span>PPC</span><span>Tracked</span></div>
              <div className="glx-hosting-category-b"><span>Social</span><span>Planned</span></div>
              <div className="glx-hosting-category-c"><span>ROI</span><span>Measured</span></div>
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
                  <h2>Digital marketing that generates measurable enquiries.</h2>
                  <p>Digital marketing connects businesses with customers who are searching, browsing, and comparing online. Gligx supports SEO, PPC, landing pages, content strategy, and campaign reporting.</p>
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
                  <h2>Digital marketing for UAE business growth</h2>
                  <p>Gligx plans digital marketing campaigns with SEO, PPC, landing page optimization, conversion tracking, content structure, and reporting systems for UAE business growth.</p>
                  <div className="glx-side-proof">
                    <span>Campaign planning</span><span>PPC management</span><span>Conversion tracking</span><span>Since 2017</span>
                  </div>
                  <UIMockup compact title="Campaign Hub" sidebar={["PPC", "SEO", "Social"]} metrics={[{ value: "3.4x", label: "ROI" }, { value: "64", label: "Leads" }, { value: "-18%", label: "CPL" }]} bars={["82%", "68%", "74%"]} list={["Google Ads campaign active", "Landing page optimized", "Conversion tracking live"]} />
                </div>
                <div className="glx-side-panel glx-service-quick-panel">
                  <span className="glx-kicker">Quick Actions</span>
                  <Link className="glx-btn glx-btn-light" href="/consultation/">Request Free Consultation</Link>
                  <Link className="glx-btn glx-btn-dark" href="/portfolio/">View Related Work</Link>
                </div>
                <div className="glx-side-panel glx-service-quick-panel">
                  <span className="glx-kicker">Related Services</span>
                  <Link className="glx-side-link" href="/services/seo-company-dubai/">SEO Company Dubai</Link>
                  <Link className="glx-side-link" href="/services/web-design-dubai/">Web Design Company Dubai</Link>
                  <Link className="glx-side-link" href="/services/web-development-company-uae/">Web Development Company Dubai</Link>
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
              <h2>Questions about Digital Marketing Agency Dubai.</h2>
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
