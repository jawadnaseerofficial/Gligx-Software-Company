import Link from "next/link";
import Header from "@/components/Header";
import UIMockup from "@/components/UIMockup";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const overviewCards = [
  {
    title: "Detailed service explanation",
    html: '<p>Custom software is useful when important business workflows are too specific, manual, or fragmented for generic tools. Gligx designs and develops web applications, portals, dashboards, CRM-style systems, HRM modules, project management platforms, approval workflows, booking systems, licensing platforms, inventory tools, and reporting systems for UAE organizations.</p><p>Our experience includes internal applications for regional enterprise teams, government department workflows, motorsports event and licensing systems, diamond manufacturing and pricing systems, property management platforms, HRM, CRM, project management, and custom operational dashboards. We can connect software with <a href="/services/mobile-app-development/">mobile apps</a>, <a href="/services/uae-e-invoicing-provider-peppol/">e-invoicing workflows</a>, websites, and APIs.</p>',
  },
  {
    title: "Who this service is for",
    html: "<p>This service is for businesses that rely on spreadsheets, email approvals, manual reports, disconnected departments, repeated data entry, or generic tools that do not match daily operations. It suits SMEs, enterprise teams, public-sector style workflows, real estate groups, manufacturers, event organizations, and service companies.</p>",
  },
  {
    title: "Key features and modules",
    html: "<p>Typical modules include login and roles, user permissions, dashboards, data entry forms, approval stages, notifications, reports, file uploads, export tools, customer records, employee records, project tasks, inventory, pricing logic, audit logs, API integrations, and mobile-friendly access.</p>",
  },
  {
    title: "Dubai and UAE relevance",
    html: "<p>Many UAE companies operate across branches, departments, suppliers, events, properties, field teams, and client-facing processes. Custom software helps centralize information, improve accountability, speed up approvals, and give management better visibility across operations.</p>",
  },
  {
    title: "Common problems solved",
    html: "<p>Custom software can reduce manual follow-up, duplicated data, lost files, delayed approvals, unclear responsibilities, scattered customer records, slow reporting, and dependency on one person to manage a critical workflow.</p>",
  },
  {
    title: "Technologies and approach",
    html: "<p>We start with workflow discovery, then plan data structure, user roles, screens, security, reporting, integrations, and future modules. Development focuses on practical UX, clean architecture, scalable database interaction, secure validation, and long-term support.</p>",
  },
  {
    title: "Software development company in Dubai for business operations",
    html: '<p>Searches such as <strong>software development company in Dubai</strong>, <strong>software development in Dubai</strong>, <strong>software companies in UAE</strong>, and <strong>custom software development company in Dubai</strong> usually come from businesses with a real operational pain. The team may be chasing approvals on email, managing reports in spreadsheets, losing lead follow-ups, or running departments on tools that no longer fit.</p><p>Gligx focuses on practical software that matches the way UAE and GCC businesses actually work. Projects can connect with <a href="/services/erp-crm-development-dubai/">ERP and CRM development</a>, <a href="/services/mobile-app-development/">mobile app development</a>, <a href="/services/uae-e-invoicing-provider-peppol/">UAE e-invoicing workflows</a>, <a href="/services/payment-gateway/">payment integrations</a>, websites, APIs, and reporting dashboards.</p>',
  },
  {
    title: "Custom software vs ready-made software",
    html: "<p>Ready-made tools are useful when the process is standard. Custom software becomes valuable when approvals are complex, departments need different views, reports are business-specific, or integrations are too important to handle manually. Gligx helps define the first useful version before development starts.</p>",
  },
  {
    title: "Examples of software Gligx can build",
    html: "<p>Common project types include CRM and lead management systems, ERP modules, HRM software, project management applications, visitor management, budget approval, booking management, licensing systems, event platforms, diamond manufacturing and pricing systems, property management, dashboards, customer portals, WhatsApp-connected lead systems, and mobile app backends.</p>",
  },
  {
    title: "Why choose Gligx for custom software development Dubai",
    html: '<p>Gligx has been active in the UAE and GCC market since 2017. We know software projects work best when the workflow, users, data, permissions, reports, and support model are clear before screens are finalized. The aim is software that staff can actually use, not a complicated system that looks impressive in a demo only.</p><p>Because Gligx also works on <a href="/services/mobile-app-development/">mobile app development</a>, websites, eCommerce, <a href="/services/payment-gateway/">payment integration</a>, hosting, e-invoicing workflows, and <a href="/services/devops-cloud-infrastructure/">DevOps and cloud infrastructure</a>, custom software can be planned as part of a complete digital ecosystem instead of a standalone coding task.</p>',
  },
  {
    title: "Business problems custom software can solve",
    html: "<p>Custom software can reduce spreadsheet dependency, duplicate entry, delayed approvals, poor reporting, scattered customer information, manual follow-ups, unclear task ownership, disconnected departments, missing audit trails, and lack of management visibility. A good system should make daily work easier and management decisions clearer.</p>",
  },
  {
    title: "How Gligx plans software architecture",
    html: "<p>A good software project starts with discovery, user roles, workflow mapping, data structure, dashboard needs, reporting, integration options, security requirements, permissions, admin controls, hosting direction, backup expectations, and future modules. We avoid rushing into screen design before the operational logic is understood.</p>",
  },
  {
    title: "IT company in Dubai for software, apps, and web systems",
    html: '<p>Google is grouping Gligx with searches such as <strong>IT company in Dubai</strong>, <strong>software companies in Dubai</strong>, <strong>software houses in Dubai</strong>, <strong>software company in UAE</strong>, and <strong>top software development company in UAE</strong>. The best way to support that demand is to explain the real systems Gligx builds: CRM, HRM, project management, booking systems, approval workflows, dashboards, mobile apps, portals, eCommerce integrations, payment flows, and custom business applications.</p><p>Gligx positions itself as a practical Dubai IT and software development partner for companies that need long-term technology support, not only one-time coding.</p>',
  },
];

const useCases = [
  "Budget management applications",
  "Visitor management systems",
  "Licensing platforms",
  "Event management applications",
  "HRM and CRM systems",
  "Project management software",
  "Diamond manufacturing and pricing systems",
  "Property management platforms",
  "Booking and lead management systems",
];

const industries = [
  "Luxury retail operations",
  "Government departments",
  "UAE motorsports federation teams",
  "Diamond manufacturing companies",
  "Real estate groups",
  "Hospital groups",
  "Trading companies",
  "Enterprise operations teams",
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
  { q: "Is Gligx a software development company in Dubai?", a: "Yes. Gligx Technologies is a Dubai-based software development company serving UAE and GCC businesses since 2017 with custom web applications, CRM, ERP, HRM, portals, dashboards, and mobile-connected systems." },
  { q: "When should a UAE business choose custom software?", a: "Custom software makes sense when spreadsheets, WhatsApp follow-ups, email approvals, or generic tools are holding the team back. If managers cannot see status clearly or staff repeat the same data entry every day, a custom system is often worth reviewing." },
  { q: "What type of software does Gligx build?", a: "Gligx builds portals, dashboards, CRM, ERP-style modules, HRM, project systems, approval workflows, booking platforms, event and licensing systems, property platforms, pricing tools, and industry-specific business applications." },
  { q: "Can Gligx build CRM, ERP, and HRM software?", a: "Yes. We can build focused CRM, ERP, HRM, lead management, project, inventory, finance, employee, and reporting modules. The scope is shaped around the actual process instead of forcing the business into a fixed product." },
  { q: "Can custom software include mobile apps?", a: "Yes. Many software projects include a web admin panel plus iOS or Android apps for employees, customers, field teams, event teams, property teams, or management users." },
  { q: "Can you integrate with existing systems?", a: "Yes, when the existing system provides a practical way to connect. During discovery we review APIs, exports, database access, payment gateways, accounting tools, ERP, website forms, WhatsApp flows, and third-party platforms." },
  { q: "How do you protect business data?", a: "We plan role-based access, validation, secure forms, audit history, controlled admin access, backup awareness, hosting considerations, and security review based on the sensitivity of the application." },
  { q: "Can software be expanded later?", a: "Yes. We usually recommend starting with the highest-value workflow, then expanding into reports, integrations, user roles, mobile apps, or new modules after the first version is stable." },
  { q: "How long does custom software development take?", a: "Timelines depend on scope. A focused dashboard or approval system may take 6-10 weeks. A multi-module platform with reporting, roles, integrations, and mobile access may take 14-22 weeks. Gligx plans each project in clear phases." },
];

export default function SoftwareDevelopmentServicePage() {
  return (
    <>
      <Header />
      <main id="main-content">
        {/* Page Hero */}
        <section className="glx-page-hero glx-service-hero">
          <div className="glx-container glx-page-hero-grid">
            <div>
              <nav className="glx-breadcrumb" aria-label="Breadcrumb">
                <Link href="/">Home</Link><span>/</span><Link href="/services/custom-software-development-company/">Services</Link><span>/</span><span>Software Development Company Dubai</span>
              </nav>
              <span className="glx-eyebrow">Gligx Service</span>
              <h1>Software Development Company Dubai</h1>
              <p>Gligx is a software development company in Dubai building custom web applications, CRM, ERP, HRM, dashboards, workflow automation, portals, mobile apps, and connected business systems for UAE and GCC organizations.</p>
              <div className="glx-actions" style={{ marginTop: "28px" }}>
                <Link className="glx-btn glx-btn-light" href="/consultation/">Request Free Consultation</Link>
                <Link className="glx-btn" href="/portfolio/">View Related Work</Link>
              </div>
            </div>
            <figure className="glx-page-visual glx-page-visual-operations" aria-label="Software Development Company Dubai visual preview">
              <svg className="glx-page-visual-img" viewBox="0 0 400 280" width="1200" height="820" role="img" aria-label="Software dashboard illustration">
                <rect width="400" height="280" rx="8" fill="#0a0a0a" />
                <rect x="12" y="12" width="376" height="38" rx="4" fill="rgba(255,255,255,0.06)" />
                <circle cx="28" cy="31" r="5" fill="rgba(255,255,255,0.3)" />
                <circle cx="44" cy="31" r="5" fill="rgba(33,182,169,0.7)" />
                <circle cx="60" cy="31" r="5" fill="rgba(201,169,110,0.7)" />
                <text x="340" y="37" fill="#e9edf2" fontSize="10" fontWeight="900" textAnchor="end" fontFamily="Inter,sans-serif">OPERATIONS OS</text>
                <rect x="12" y="56" width="88" height="212" rx="4" fill="rgba(0,0,0,0.16)" />
                <rect x="20" y="66" width="72" height="22" rx="12" fill="rgba(255,255,255,0.05)" />
                <rect x="20" y="94" width="72" height="22" rx="12" fill="rgba(255,255,255,0.05)" />
                <rect x="20" y="122" width="72" height="22" rx="12" fill="rgba(255,255,255,0.05)" />
                <rect x="110" y="60" width="278" height="62" rx="4" fill="rgba(5,5,5,0.42)" />
                <rect x="120" y="68" width="72" height="44" rx="4" fill="rgba(255,255,255,0.05)" />
                <text x="156" y="87" fill="#fff" fontSize="18" fontWeight="950" textAnchor="middle" fontFamily="Inter,sans-serif">84%</text>
                <text x="156" y="103" fill="#aeb7c4" fontSize="8" fontWeight="850" textAnchor="middle" fontFamily="Inter,sans-serif">WORKFLOW HEALTH</text>
                <rect x="200" y="68" width="72" height="44" rx="4" fill="rgba(255,255,255,0.05)" />
                <text x="236" y="87" fill="#fff" fontSize="18" fontWeight="950" textAnchor="middle" fontFamily="Inter,sans-serif">32</text>
                <text x="236" y="103" fill="#aeb7c4" fontSize="8" fontWeight="850" textAnchor="middle" fontFamily="Inter,sans-serif">OPEN REQUESTS</text>
                <rect x="280" y="68" width="96" height="44" rx="4" fill="rgba(255,255,255,0.05)" />
                <text x="328" y="87" fill="#fff" fontSize="18" fontWeight="950" textAnchor="middle" fontFamily="Inter,sans-serif">Live</text>
                <text x="328" y="103" fill="#aeb7c4" fontSize="8" fontWeight="850" textAnchor="middle" fontFamily="Inter,sans-serif">REPORTS</text>
                <rect x="110" y="128" width="278" height="34" rx="4" fill="rgba(5,5,5,0.28)" />
                <rect x="120" y="138" width="240" height="9" rx="5" fill="url(#g1)" />
                <rect x="120" y="152" width="180" height="9" rx="5" fill="rgba(255,255,255,0.35)" />
                <rect x="110" y="168" width="278" height="88" rx="4" fill="rgba(255,255,255,0.04)" />
                <rect x="120" y="180" width="248" height="20" rx="4" fill="rgba(255,255,255,0.04)" />
                <circle cx="132" cy="190" r="4" fill="#21b6a9" />
                <text x="142" y="194" fill="#e4e9ef" fontSize="10" fontWeight="800" fontFamily="Inter,sans-serif">Budget request queue</text>
                <rect x="120" y="208" width="248" height="20" rx="4" fill="rgba(255,255,255,0.04)" />
                <circle cx="132" cy="218" r="4" fill="#21b6a9" />
                <text x="142" y="222" fill="#e4e9ef" fontSize="10" fontWeight="800" fontFamily="Inter,sans-serif">Visitor pass approval</text>
                <rect x="120" y="236" width="248" height="20" rx="4" fill="rgba(255,255,255,0.04)" />
                <circle cx="132" cy="246" r="4" fill="#21b6a9" />
                <text x="142" y="250" fill="#e4e9ef" fontSize="10" fontWeight="800" fontFamily="Inter,sans-serif">Monthly operations report</text>
                <defs>
                  <linearGradient id="g1" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#1563a0" />
                    <stop offset="100%" stopColor="#21b6a9" />
                  </linearGradient>
                </defs>
              </svg>
              <figcaption className="glx-page-visual-caption">
                <strong>Custom Software</strong>
                <span>Automation</span><span>Dashboards</span><span>Workflows</span>
              </figcaption>
            </figure>
          </div>
        </section>

        {/* Motion Scene */}
        <section className="glx-hosting-scroll-scene glx-service-motion-scene glx-motion-operations" aria-label="Software Workflow">
          <div className="glx-container glx-hosting-scene-grid">
            <div className="glx-hosting-scene-copy">
              <span className="glx-eyebrow">Software Workflow</span>
              <h2>Custom software workflows that move business operations faster.</h2>
              <p>For internal teams, approvals, dashboards, CRM, HRM, project management, finance, and operations, Gligx designs software around real users and measurable workflow improvements.</p>
              <div className="glx-hosting-scene-metrics">
                <span><strong>Roles</strong> Permissions</span>
                <span><strong>API</strong> Integrations</span>
                <span><strong>Reports</strong> Dashboards</span>
              </div>
            </div>
            <div className="glx-hosting-room glx-service-motion-room is-category-room" aria-hidden="true">
              <div className="glx-hosting-room-glow"></div>
              <div className="glx-category-stage">
                <div className="glx-category-panel glx-category-panel-main">
                  <span>Software Workflow</span>
                  <strong>Software command center</strong>
                  <em>Workflow map approved</em><em>User roles connected</em><em>Reports generating</em>
                </div>
                <div className="glx-category-panel glx-category-panel-a">
                  <span>Roles</span>
                  <strong>Permissions</strong>
                </div>
                <div className="glx-category-panel glx-category-panel-b">
                  <span>API</span>
                  <strong>Integrations</strong>
                </div>
                <div className="glx-category-panel glx-category-panel-c">
                  <span>Reports</span>
                  <strong>Dashboards</strong>
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
                  <h2>Software Development Company Dubai for UAE and GCC businesses</h2>
                  <p>Gligx is a software development company in Dubai building custom web applications, CRM, ERP, HRM, dashboards, workflow automation, portals, mobile apps, and connected business systems for UAE and GCC organizations. We plan the page content, user journey, technical setup, and support path around the way the service will actually be used by customers and internal teams.</p>
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
                    <li>Software development company Dubai, software companies UAE, and IT company Dubai keyword targeting.</li>
                    <li>Workflow discovery before screens and code.</li>
                    <li>CRM, ERP, HRM, project, booking, approval, finance, and dashboard modules.</li>
                    <li>Secure roles, reports, audit logs, APIs, and mobile-connected access.</li>
                    <li>Long-term support for new modules, integrations, hosting, and operational changes.</li>
                    <li>Workflow discovery and process mapping before development.</li>
                    <li>Role-based dashboards and secure permissions.</li>
                    <li>Approval logic, notifications, reports, and audit history.</li>
                    <li>API, website, mobile app, ERP, or payment integration where needed.</li>
                    <li>Maintainable architecture for future modules and support.</li>
                  </ul>
                </div>
              </article>
              <aside className="glx-service-aside-stack">
                <div className="glx-side-panel glx-service-sticky-panel">
                  <span className="glx-eyebrow">Trust Signals</span>
                  <h2>Established in Dubai since 2017</h2>
                  <p>Gligx actively serves UAE and GCC organizations with websites, custom software, mobile apps, automation, SEO, hosting, and digital growth systems.</p>
                  <div className="glx-side-proof">
                    <span>Apps + software focus</span>
                    <span>Enterprise workflows</span>
                    <span>UAE + GCC market</span>
                    <span>Since 2017</span>
                  </div>
                  <UIMockup
                    title="Operations OS"
                    sidebar={["Approvals", "Visitors", "Budget"]}
                    metrics={[{ value: "84%", label: "Workflow health" }, { value: "32", label: "Open requests" }, { value: "Live", label: "Reports" }]}
                    bars={["86%", "64%", "72%"]}
                    list={["Budget request queue", "Visitor pass approval", "Monthly operations report"]}
                  />
                </div>
                <div className="glx-side-panel glx-service-quick-panel">
                  <span className="glx-kicker">Quick Actions</span>
                  <Link className="glx-btn glx-btn-light" href="/consultation/">Request Free Consultation</Link>
                  <Link className="glx-btn glx-btn-dark" href="/portfolio/">View Related Work</Link>
                </div>
                <div className="glx-side-panel glx-service-quick-panel">
                  <span className="glx-kicker">Related Services</span>
                  <div className="glx-side-related is-compact">
                    <Link href="/services/custom-software-development-company/sme-custom-softwares/">SME Custom Software Dubai</Link>
                    <Link href="/services/custom-software-development-company/ai-automation-chatbot-development-dubai/">AI Automation &amp; AI Chatbot Development Dubai</Link>
                    <Link href="/services/custom-software-development-company/erp-crm-development-dubai/">ERP &amp; CRM Development Dubai</Link>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="glx-section glx-service-depth">
          <div className="glx-container">
            <div className="glx-section-head glx-section-head-wide">
              <div>
                <span className="glx-eyebrow">Use Cases</span>
                <h2>Business systems and workflows this service can support.</h2>
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
              <h2>Questions about Software Development Company Dubai.</h2>
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
