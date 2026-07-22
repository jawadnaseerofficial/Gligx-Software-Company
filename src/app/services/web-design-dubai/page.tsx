import Link from "next/link";
import Header from "@/components/Header";
import UIMockup from "@/components/UIMockup";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const overviewCards = [
  {
    title: "Detailed service explanation",
    html: '<p>Professional web design is not only the look of a page. For Dubai companies, a website must communicate credibility quickly, explain services clearly, load fast, work beautifully on mobile, and guide visitors toward enquiry actions. Gligx designs websites as business assets, combining brand presentation, page structure, CMS control, lead generation, analytics, and SEO foundations.</p><p>Our web design work can support corporate websites, service company websites, healthcare and booking websites, real estate websites, B2B websites, portfolio websites, and campaign landing pages. When needed, we connect website design with <a href="/services/custom-software-development-company/">custom software development</a>, <a href="/services/seo-company-dubai/">SEO</a>, <a href="/services/branding-agency-dubai/">branding</a>, and <a href="/services/web-hosting-dubai/">hosting</a>.</p>',
  },
  {
    title: "Who this service is for",
    html: "<p>UAE businesses that need a stronger digital presence, clearer service pages, better enquiries, and a website that reflects their actual quality.</p>",
  },
  {
    title: "Key features and modules",
    html: "<p>Custom UI design, responsive mobile layouts, CMS control, SEO page structure, enquiry forms, service pages, landing pages, fast loading, performance optimization.</p>",
  },
  {
    title: "Dubai and UAE relevance",
    html: "<p>UAE customers search for services, compare providers, and make decisions online. A premium website builds trust and converts impressions into qualified leads.</p>",
  },
  {
    title: "Common problems solved",
    html: "<p>Outdated design, poor mobile experience, slow loading, unclear messaging, low conversion rates, lack of CMS control.</p>",
  },
  {
    title: "Technologies and approach",
    html: "<p>Discovery → wireframes → UI design → CMS setup → SEO structure → testing → launch.</p>",
  },
  {
    title: "Web design company Dubai with a conversion-first approach",
    html: "<p>There is no single formula that works for every industry. Gligx studies the actual service, customer expectation, and competitive positioning before any screen is designed.</p>",
  },
  {
    title: "Website design services for serious UAE businesses",
    html: "<p>A premium website is not only about how it looks. It is about whether the right visitor finds the right page and decides to get in touch.</p>",
  },
  {
    title: "What Gligx focuses on",
    html: `<ul>
<li>Conversion-first website design</li>
<li>Responsive mobile and tablet layouts</li>
<li>CMS-controlled page content</li>
<li>SEO-ready page hierarchy</li>
<li>Service page and landing page structure</li>
<li>Enquiry form and lead path planning</li>
<li>Fast loading and performance optimization</li>
<li>Premium UI aligned with brand quality</li>
<li>Website redesign without SEO loss</li>
<li>Human content, not keyword stuffing</li>
<li>Service pages structured for UAE search demand</li>
<li>Long-term hosting and maintenance coordination</li>
</ul>`,
  },
];

const useCases = [
  "Corporate website redesign",
  "Lead generation website",
  "Healthcare website design",
  "Real estate website design",
  "B2B service website",
  "Portfolio and showcase website",
  "PPC landing pages",
  "CMS modernization projects",
];

const industries = [
  "Technology companies",
  "Healthcare providers",
  "Real estate groups",
  "Professional services",
  "Manufacturing businesses",
  "Retail brands",
  "Government departments",
  "B2B service companies",
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
  { q: "Is Gligx a web design company in Dubai?", a: "Yes. Gligx is a Dubai-based web design company creating premium, responsive, SEO-ready websites for UAE businesses since 2017." },
  { q: "What makes a good corporate website?", a: "Clear service pages, fast loading, mobile responsive design, CMS control, SEO structure, enquiry paths, and content that builds trust." },
  { q: "Can Gligx redesign my existing website without losing SEO?", a: "Yes. Gligx plans SEO-safe redesigns that preserve rankings, redirect old URLs, and improve page structure and content quality." },
  { q: "Does Gligx build mobile responsive websites?", a: "Yes. All Gligx websites are designed mobile-first and tested across devices and screen sizes." },
  { q: "Can I manage my website content after launch?", a: "Yes. Gligx websites include CMS control so you can update text, images, service pages, and blog content without developer help." },
  { q: "What pages should a Dubai business website include?", a: "Home, services, about, portfolio or case studies, blog or insights, contact, and individual service landing pages." },
];

export default function WebDesignServicePage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <section className="glx-page-hero glx-service-hero">
          <div className="glx-container glx-page-hero-grid">
            <div>
              <nav className="glx-breadcrumb" aria-label="Breadcrumb">
                <Link href="/">Home</Link><span>/</span><Link href="/services/custom-software-development-company/">Services</Link><span>/</span><span>Web Design Company Dubai</span>
              </nav>
              <span className="glx-eyebrow">Gligx Service</span>
              <h1>Web Design Company Dubai</h1>
              <p>Gligx is a web design company in Dubai creating premium, mobile responsive, SEO-ready websites for UAE businesses that need stronger trust, clearer service pages, better enquiries, CMS control, and a modern digital presence.</p>
              <div className="glx-actions" style={{ marginTop: "28px" }}>
                <Link className="glx-btn glx-btn-light" href="/consultation/">Request Free Consultation</Link>
                <Link className="glx-btn" href="/portfolio/">View Related Work</Link>
              </div>
            </div>
            <figure className="glx-page-visual" aria-label="Web Design Company Dubai visual preview">
              <svg className="glx-page-visual-img" viewBox="0 0 400 280" width="1200" height="820" role="img" aria-label="Website design illustration">
                <rect width="400" height="280" rx="8" fill="#0a0a0a" />
                <rect x="12" y="12" width="376" height="38" rx="4" fill="rgba(255,255,255,0.06)" />
                <circle cx="28" cy="31" r="5" fill="rgba(255,255,255,0.3)" />
                <circle cx="44" cy="31" r="5" fill="rgba(33,182,169,0.7)" />
                <circle cx="60" cy="31" r="5" fill="rgba(201,169,110,0.7)" />
                <text x="340" y="37" fill="#e9edf2" fontSize="10" fontWeight="900" textAnchor="end" fontFamily="Inter,sans-serif">WEBSITE EXPERIENCE</text>
                <rect x="12" y="56" width="88" height="212" rx="4" fill="rgba(0,0,0,0.16)" />
                <rect x="20" y="66" width="72" height="22" rx="12" fill="rgba(255,255,255,0.05)" />
                <rect x="20" y="94" width="72" height="22" rx="12" fill="rgba(255,255,255,0.05)" />
                <rect x="20" y="122" width="72" height="22" rx="12" fill="rgba(255,255,255,0.05)" />
                <rect x="110" y="60" width="278" height="62" rx="4" fill="rgba(5,5,5,0.42)" />
                <rect x="120" y="68" width="72" height="44" rx="4" fill="rgba(255,255,255,0.05)" />
                <text x="156" y="87" fill="#fff" fontSize="18" fontWeight="950" textAnchor="middle" fontFamily="Inter,sans-serif">CMS</text>
                <text x="156" y="103" fill="#aeb7c4" fontSize="8" fontWeight="850" textAnchor="middle" fontFamily="Inter,sans-serif">CONTROL</text>
                <rect x="200" y="68" width="72" height="44" rx="4" fill="rgba(255,255,255,0.05)" />
                <text x="236" y="87" fill="#fff" fontSize="18" fontWeight="950" textAnchor="middle" fontFamily="Inter,sans-serif">SEO</text>
                <text x="236" y="103" fill="#aeb7c4" fontSize="8" fontWeight="850" textAnchor="middle" fontFamily="Inter,sans-serif">READY</text>
                <rect x="280" y="68" width="96" height="44" rx="4" fill="rgba(255,255,255,0.05)" />
                <text x="328" y="87" fill="#fff" fontSize="18" fontWeight="950" textAnchor="middle" fontFamily="Inter,sans-serif">Leads</text>
                <text x="328" y="103" fill="#aeb7c4" fontSize="8" fontWeight="850" textAnchor="middle" fontFamily="Inter,sans-serif">TRACKED</text>
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
                <strong>Premium Website</strong>
                <span>CMS</span><span>SEO</span><span>Leads</span>
              </figcaption>
            </figure>
          </div>
        </section>

        <section className="glx-hosting-scroll-scene glx-service-motion-scene glx-motion-website" aria-label="Website Experience">
          <div className="glx-container glx-hosting-scene-grid">
            <div className="glx-hosting-scene-copy">
              <span className="glx-eyebrow">Website Experience</span>
              <h2>Conversion-ready websites planned like digital products.</h2>
              <p>Gligx combines premium UI, responsive layouts, CMS control, technical SEO, fast loading, and lead-focused service pages. Every section supports search visibility, user trust, and qualified enquiries.</p>
              <div className="glx-hosting-scene-metrics">
                <span><strong>CMS</strong> Content control</span>
                <span><strong>SEO</strong> Page structure</span>
                <span><strong>UX</strong> Lead paths</span>
              </div>
            </div>
            <div className="glx-hosting-room glx-service-motion-room is-category-room" aria-hidden="true">
              <div className="glx-hosting-room-glow"></div>
              <div className="glx-category-stage">
                <div className="glx-category-panel glx-category-panel-main">
                  <span>Website Experience</span>
                  <strong>Experience</strong>
                  <em>Page structure planned</em><em>CMS modules configured</em><em>Enquiry flow active</em>
                </div>
                <div className="glx-category-panel glx-category-panel-a">
                  <span>CMS</span>
                  <strong>Control</strong>
                </div>
                <div className="glx-category-panel glx-category-panel-b">
                  <span>SEO</span>
                  <strong>Structure</strong>
                </div>
                <div className="glx-category-panel glx-category-panel-c">
                  <span>UX</span>
                  <strong>Leads</strong>
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
                  <h2>Web Design Company Dubai for premium UAE business websites</h2>
                  <p>Gligx is a web design company in Dubai creating premium, mobile responsive, SEO-ready websites for UAE businesses that need stronger trust, clearer service pages, better enquiries, CMS control, and a modern digital presence.</p>
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
                  <h2>Premium web design for UAE businesses</h2>
                  <p>Gligx combines premium UI, responsive layouts, CMS control, technical SEO, fast loading, and lead-focused service pages.</p>
                  <div className="glx-side-proof">
                    <span>Dubai established</span>
                    <span>Premium web design</span>
                    <span>SEO-safe redesign</span>
                    <span>Lead-focused UX</span>
                  </div>
                  <UIMockup
                    title="Website Experience"
                    sidebar={["Pages", "Leads", "CMS"]}
                    metrics={[{ value: "98", label: "Performance" }, { value: "SEO", label: "Ready" }, { value: "24/7", label: "Forms" }]}
                    bars={["86%", "64%", "72%"]}
                    list={["Homepage conversion path", "Service landing page", "CMS content workflow"]}
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
                    <Link href="/services/web-development-company-uae/">Web Development Company Dubai</Link>
                    <Link href="/services/payment-gateway/">Payment Gateway Integration UAE</Link>
                    <Link href="/services/ready-to-go/">Ready-to-Go Business Website Packages</Link>
                  </div>
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
                <h2>Website design projects this service can support.</h2>
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
              <h2>Questions about Web Design Company Dubai.</h2>
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
