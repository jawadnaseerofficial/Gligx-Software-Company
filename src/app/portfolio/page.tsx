import Link from "next/link";
import Header from "@/components/Header";
import UIMockup from "@/components/UIMockup";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

function PortfolioVisual({ variant, title, deviceLabel, children, metrics, list }: {
  variant: string;
  title: string;
  deviceLabel: string;
  children: React.ReactNode;
  metrics: string[];
  list: string[];
}) {
  return (
    <div className={`glx-portfolio-visual glx-portfolio-visual-${variant}`} aria-label={`${title} visual`}>
      <div className="glx-portfolio-visual-top">
        <span></span><span></span><span></span>
        <strong>{title}</strong>
      </div>
      <div className="glx-portfolio-visual-stage">
        <div className="glx-portfolio-device">
          <div className="glx-portfolio-device-head">
            <span>{deviceLabel}</span>
            <b></b>
          </div>
          <div className={`glx-portfolio-art glx-portfolio-art-${variant}`}>
            {children}
          </div>
        </div>
        <div className="glx-portfolio-floating-metrics">
          {metrics.map((m, i) => <span key={i}>{m}</span>)}
        </div>
      </div>
      <div className="glx-portfolio-visual-list">
        {list.map((l, i) => <span key={i}>{l}</span>)}
      </div>
    </div>
  );
}

const portfolioItems = [
  {
    tag: "Luxury enterprise applications",
    num: "01",
    variant: "operations",
    visualTitle: "Operations Suite",
    deviceLabel: "Budget + Visitor + Workflow",
    metrics: ["AED", "VIP", "SLA"],
    list: ["Budget approval", "Visitor check-in", "Operations report"],
    children: (
      <>
        <div className="glx-flow-stack">
          <i></i><i></i><i></i><i></i>
        </div>
        <div className="glx-approval-lanes"><span></span><span></span><span></span></div>
      </>
    ),
    title: "Luxury retail group in the Middle East",
    subtitle: "Internal operations application suite",
    desc: "Gligx delivered multiple internal applications for a luxury retail group in the Middle East, including budget management, visitor management, approval workflows, dashboards, and operational reporting tools.",
    tags: ["Budget management application", "Visitor management application", "Internal approvals", "Business reporting"],
    link: true,
    large: true,
  },
  {
    tag: "Government software and mobile app",
    num: "02",
    variant: "government",
    visualTitle: "Government Portal",
    deviceLabel: "Projects, staff, and field app",
    metrics: ["Gov", "App", "PMO"],
    list: ["Milestone board", "Employee allocation", "Mobile field sync"],
    children: (
      <>
        <div className="glx-gov-map"><span></span><span></span><span></span><span></span></div>
        <div className="glx-gov-timeline"><i></i><i></i><i></i></div>
      </>
    ),
    title: "Sharjah government department",
    subtitle: "Project and employee management systems",
    desc: "For a Sharjah government department, Gligx developed project management, employee management, and mobile application solutions to support department operations and field coordination.",
    tags: ["Project management", "Employee management", "Mobile application", "Department workflows"],
    link: true,
    large: false,
  },
  {
    tag: "Federation digital transformation",
    num: "03",
    variant: "licensing",
    visualTitle: "Federation Platform",
    deviceLabel: "Events + licenses + applications",
    metrics: ["EVT", "LIC", "KYC"],
    list: ["Event calendar", "License stages", "Online applications"],
    children: (
      <>
        <div className="glx-event-calendar">
          <span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span>
        </div>
        <div className="glx-license-card"><b></b><i></i><i></i></div>
      </>
    ),
    title: "UAE motorsports federation",
    subtitle: "Event, licensing, and online application platforms",
    desc: "Gligx supports a UAE motorsports federation with complete online application systems, event management, licensing management, workflow automation, dashboards, and digital operations modules.",
    tags: ["Event management", "Licensing management", "Online applications", "Operational dashboards"],
    link: true,
    large: false,
  },
  {
    tag: "Manufacturing ERP and pricing systems",
    num: "04",
    variant: "manufacturing",
    visualTitle: "Manufacturing ERP",
    deviceLabel: "Rough to polished workflow",
    metrics: ["Lot", "Rap", "Bid"],
    list: ["Diamond lot tracking", "RapNet price sync", "Auction module"],
    children: (
      <>
        <div className="glx-diamond-line"><span></span><span></span><span></span><span></span></div>
        <div className="glx-price-chart"><i></i><i></i><i></i><i></i></div>
      </>
    ),
    title: "Diamond manufacturing companies",
    subtitle: "Diamond manufacturing, pricing, and auction platform",
    desc: "For multiple diamond manufacturing businesses, Gligx built complete systems covering rough diamond to polished diamond workflows, pricing calculations, RapNet pricing integration, inventory, and auction modules.",
    tags: ["Rough-to-polished workflow", "Price calculation", "RapNet integration", "Auction module"],
    link: true,
    large: false,
  },
  {
    tag: "Property management software",
    num: "05",
    variant: "property",
    visualTitle: "Property OS",
    deviceLabel: "Units, tenants, landlords",
    metrics: ["Unit", "Rent", "CRM"],
    list: ["Occupancy map", "Contract renewals", "Mobile inspections"],
    children: (
      <>
        <div className="glx-building-grid">
          <span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span>
        </div>
        <div className="glx-property-panel"><b></b><i></i><i></i></div>
      </>
    ),
    title: "Real estate groups in the UAE",
    subtitle: "Property, tenant, and landlord web and mobile platforms",
    desc: "Gligx developed complete property operation systems for real estate groups in the UAE, including property records, tenant and landlord management, contracts, reporting, and mobile access.",
    tags: ["Property management", "Tenant records", "Landlord management", "Web and mobile app"],
    link: true,
    large: false,
  },
  {
    tag: "Field service management software",
    num: "06",
    variant: "crm",
    visualTitle: "Business Apps",
    deviceLabel: "HRM, CRM, and project systems",
    metrics: ["HR", "CRM", "PM"],
    list: ["Lead pipeline", "HR approvals", "Project delivery"],
    children: (
      <>
        <div className="glx-kanban-board"><span></span><span></span><span></span></div>
        <div className="glx-crm-pipeline"><i></i><i></i><i></i><i></i></div>
      </>
    ),
    title: "Swimming pool maintenance company",
    subtitle: "Business management and employee app for pool maintenance operations",
    desc: "Gligx developed a complete business management platform and employee mobile app for a swimming pool maintenance company, covering regular maintenance schedules, employee tasks, service updates, customer records, and reporting.",
    tags: ["Maintenance scheduling", "Employee mobile app", "Service task tracking", "Customer and reporting workflows"],
    link: true,
    large: false,
  },
  {
    tag: "Business productivity platforms",
    num: "07",
    variant: "crm",
    visualTitle: "Business Apps",
    deviceLabel: "HRM, CRM, and project systems",
    metrics: ["HR", "CRM", "PM"],
    list: ["Lead pipeline", "HR approvals", "Project delivery"],
    children: (
      <>
        <div className="glx-kanban-board"><span></span><span></span><span></span></div>
        <div className="glx-crm-pipeline"><i></i><i></i><i></i><i></i></div>
      </>
    ),
    title: "Multiple enterprise customers",
    subtitle: "HRM, CRM, and project management applications",
    desc: "Across many customer environments, Gligx has built HRM, CRM, project management, reporting, and workflow applications tailored to internal business operations.",
    tags: ["HRM", "CRM", "Project management", "Workflow automation"],
    link: false,
    large: false,
  },
];

const moreWorkCards = [
  {
    mockupVariant: "website",
    mockupTitle: "Website Experience",
    sidebar: ["Pages", "Leads", "CMS"],
    metrics: [{ value: "98", label: "Performance" }, { value: "SEO", label: "Ready" }, { value: "24/7", label: "Forms" }],
    bars: ["94%", "78%", "66%"],
    list: ["Homepage conversion path", "Service landing page", "CMS content workflow"],
    kicker: "Web Design & CMS",
    title: "Enterprise Service Website",
    desc: "A polished corporate website structure built for credibility, speed, content management, and lead generation.",
  },
  {
    mockupVariant: "ecommerce",
    mockupTitle: "Commerce Platform",
    sidebar: ["Catalog", "Orders", "Pricing"],
    metrics: [{ value: "420", label: "Products" }, { value: "18", label: "Orders" }, { value: "3.8x", label: "ROAS" }],
    bars: ["76%", "88%", "58%"],
    list: ["Product inventory sync", "Secure checkout flow", "Auction pricing module"],
    kicker: "Custom Software",
    title: "Operations Management Portal",
    desc: "A secure workflow platform concept for teams that need approvals, reporting, dashboards, and automation.",
  },
  {
    mockupVariant: "marketing",
    mockupTitle: "Campaign Command",
    sidebar: ["PPC", "SEO", "Leads"],
    metrics: [{ value: "3.4x", label: "ROI" }, { value: "64", label: "Leads" }, { value: "-18%", label: "CPL" }],
    bars: ["68%", "84%", "73%"],
    list: ["Google Ads funnel", "Landing page tests", "Conversion tracking"],
    kicker: "Business Software & Mobile App",
    title: "Field Service Management App",
    desc: "A business management and employee app model for maintenance teams handling schedules, staff tasks, customer records, and field updates.",
  },
  {
    mockupVariant: "mobile",
    mockupTitle: "Mobile App Flow",
    sidebar: ["App", "API", "Users"],
    metrics: [{ value: "iOS", label: "Ready" }, { value: "API", label: "Secure" }, { value: "4.8", label: "UX score" }],
    bars: ["80%", "70%", "86%"],
    list: ["Field task dashboard", "Role-based mobile access", "Push notification workflow"],
    kicker: "eCommerce",
    title: "eCommerce Growth Platform",
    desc: "A conversion-focused storefront model with product management, secure checkout, SEO pages, and analytics.",
  },
];

export default function PortfolioPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        {/* Page Hero */}
        <section className="glx-page-hero">
          <div className="glx-container glx-page-hero-grid">
            <div>
              <nav className="glx-breadcrumb" aria-label="Breadcrumb">
                <Link href="/">Home</Link><span>/</span><span>Portfolio</span>
              </nav>
              <span className="glx-eyebrow">Portfolio</span>
              <h1>Enterprise applications and digital systems built since 2017.</h1>
              <p>Selected high-level examples from Gligx work across the UAE and GCC market, including luxury retail, government, motorsports, diamond manufacturing, real estate, HRM, CRM, and project management systems.</p>
            </div>
            <figure className="glx-page-visual glx-page-visual-portfolio" aria-label="Gligx enterprise portfolio visual">
              <svg className="glx-page-visual-img" viewBox="0 0 400 280" width="1200" height="820" role="img" aria-label="Portfolio dashboard illustration">
                <rect width="400" height="280" rx="8" fill="#0a0a0a" />
                <rect x="12" y="12" width="376" height="38" rx="4" fill="rgba(255,255,255,0.06)" />
                <circle cx="28" cy="31" r="5" fill="rgba(255,255,255,0.3)" />
                <circle cx="44" cy="31" r="5" fill="rgba(33,182,169,0.7)" />
                <circle cx="60" cy="31" r="5" fill="rgba(201,169,110,0.7)" />
                <text x="340" y="37" fill="#e9edf2" fontSize="10" fontWeight="900" textAnchor="end" fontFamily="Inter,sans-serif">PORTFOLIO</text>
                <rect x="12" y="56" width="88" height="212" rx="4" fill="rgba(0,0,0,0.16)" />
                <rect x="20" y="66" width="72" height="22" rx="12" fill="rgba(255,255,255,0.05)" />
                <rect x="20" y="94" width="72" height="22" rx="12" fill="rgba(255,255,255,0.05)" />
                <rect x="20" y="122" width="72" height="22" rx="12" fill="rgba(255,255,255,0.05)" />
                <rect x="110" y="60" width="278" height="62" rx="4" fill="rgba(5,5,5,0.42)" />
                <rect x="120" y="68" width="72" height="44" rx="4" fill="rgba(255,255,255,0.05)" />
                <text x="156" y="87" fill="#fff" fontSize="18" fontWeight="950" textAnchor="middle" fontFamily="Inter,sans-serif">7</text>
                <text x="156" y="103" fill="#aeb7c4" fontSize="8" fontWeight="850" textAnchor="middle" fontFamily="Inter,sans-serif">PROJECTS</text>
                <rect x="200" y="68" width="72" height="44" rx="4" fill="rgba(255,255,255,0.05)" />
                <text x="236" y="87" fill="#fff" fontSize="18" fontWeight="950" textAnchor="middle" fontFamily="Inter,sans-serif">12+</text>
                <text x="236" y="103" fill="#aeb7c4" fontSize="8" fontWeight="850" textAnchor="middle" fontFamily="Inter,sans-serif">INDUSTRIES</text>
                <rect x="280" y="68" width="96" height="44" rx="4" fill="rgba(255,255,255,0.05)" />
                <text x="328" y="87" fill="#fff" fontSize="18" fontWeight="950" textAnchor="middle" fontFamily="Inter,sans-serif">Live</text>
                <text x="328" y="103" fill="#aeb7c4" fontSize="8" fontWeight="850" textAnchor="middle" fontFamily="Inter,sans-serif">SYSTEMS</text>
                <rect x="110" y="128" width="278" height="34" rx="4" fill="rgba(5,5,5,0.28)" />
                <rect x="120" y="138" width="240" height="9" rx="5" fill="url(#g1)" />
                <rect x="120" y="152" width="180" height="9" rx="5" fill="rgba(255,255,255,0.35)" />
                <rect x="110" y="168" width="278" height="88" rx="4" fill="rgba(255,255,255,0.04)" />
                <rect x="120" y="180" width="248" height="20" rx="4" fill="rgba(255,255,255,0.04)" />
                <circle cx="132" cy="190" r="4" fill="#21b6a9" />
                <text x="142" y="194" fill="#e4e9ef" fontSize="10" fontWeight="800" fontFamily="Inter,sans-serif">Enterprise case studies</text>
                <rect x="120" y="208" width="248" height="20" rx="4" fill="rgba(255,255,255,0.04)" />
                <circle cx="132" cy="218" r="4" fill="#21b6a9" />
                <text x="142" y="222" fill="#e4e9ef" fontSize="10" fontWeight="800" fontFamily="Inter,sans-serif">Internal operations systems</text>
                <rect x="120" y="236" width="248" height="20" rx="4" fill="rgba(255,255,255,0.04)" />
                <circle cx="132" cy="246" r="4" fill="#21b6a9" />
                <text x="142" y="250" fill="#e4e9ef" fontSize="10" fontWeight="800" fontFamily="Inter,sans-serif">Government & ERP platforms</text>
                <defs>
                  <linearGradient id="g1" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#1563a0" />
                    <stop offset="100%" stopColor="#21b6a9" />
                  </linearGradient>
                </defs>
              </svg>
              <figcaption className="glx-page-visual-caption">
                <strong>Enterprise Work</strong>
                <span>Retail</span><span>Gov</span><span>ERP</span>
              </figcaption>
            </figure>
          </div>
        </section>

        {/* Portfolio Grid */}
        <section className="glx-section glx-enterprise-proof">
          <div className="glx-container">
            <div className="glx-section-head glx-section-head-wide">
              <div>
                <span className="glx-eyebrow">Client Trust</span>
                <h2>Real systems for enterprise operations, not just brochure websites.</h2>
              </div>
              <p>Since 2017, Gligx has been actively delivering websites, software, mobile apps, automation, and digital platforms for UAE and GCC organizations. Some details are summarized for confidentiality.</p>
            </div>
            <div className="glx-portfolio-feature-grid">
              {portfolioItems.map((item, i) => (
                <article key={i} className={`glx-enterprise-card glx-portfolio-proof-card${item.large ? " is-large" : ""}`}>
                  <div className="glx-enterprise-card-top">
                    <span>{item.tag}</span>
                    <strong>{item.num}</strong>
                  </div>
                  <PortfolioVisual
                    variant={item.variant}
                    title={item.visualTitle}
                    deviceLabel={item.deviceLabel}
                    metrics={item.metrics}
                    list={item.list}
                  >
                    {item.children}
                  </PortfolioVisual>
                  <h3>{item.title}</h3>
                  <h4>{item.subtitle}</h4>
                  <p>{item.desc}</p>
                  <div className="glx-enterprise-tags">
                    {item.tags.map((t, j) => <span key={j}>{t}</span>)}
                  </div>
                  {item.link && (
                    <Link className="glx-link glx-case-study-link" href={`/case-studies/${item.num}/`}>View case study</Link>
                  )}
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* More Work */}
        <section className="glx-section">
          <div className="glx-container">
            <div className="glx-section-head">
              <div>
                <span className="glx-eyebrow">More Work</span>
                <h2>Additional CMS-managed portfolio items.</h2>
              </div>
            </div>
            <div className="glx-grid-3">
              {moreWorkCards.map((card, i) => (
                <article key={i} className="glx-case-card">
                  <UIMockup
                    compact
                    variant={card.mockupVariant}
                    title={card.mockupTitle}
                    sidebar={card.sidebar}
                    metrics={card.metrics}
                    bars={card.bars}
                    list={card.list}
                  />
                  <span className="glx-kicker">{card.kicker}</span>
                  <h2 style={{ fontSize: "22px", lineHeight: 1.22, margin: "0 0 12px", color: "#fff" }}>{card.title}</h2>
                  <p>{card.desc}</p>
                  <Link className="glx-link" href="/consultation/">Plan a similar project</Link>
                </article>
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
