import Link from "next/link";
import Header from "@/components/Header";
import UIMockup from "@/components/UIMockup";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const overviewCards = [
  {
    title: "Detailed service explanation",
    html: "<p>SEO improves how easily potential customers can find a business through search engines. Gligx focuses on technical SEO, content optimization, local search visibility, and measurable improvements that complement <a href=\"/services/web-design-dubai/\">web design</a> and <a href=\"/services/web-development-company-uae/\">web development</a>.</p>",
  },
  {
    title: "Who this service is for",
    html: "<p>UAE businesses wanting more organic enquiries, better local search visibility, or recovery from thin content. SEO can connect with <a href=\"/services/digital-marketing-agency-dubai/\">digital marketing campaigns</a> for stronger results.</p>",
  },
  {
    title: "Key features and modules",
    html: "<p>Technical audits, keyword mapping, metadata optimization, schema markup, local SEO, service page expansion, blog strategy, and reporting that ties to <a href=\"/services/web-development-company-uae/\">website development</a> and hosting.</p>",
  },
  {
    title: "Common problems solved",
    html: "<p>Poor search rankings, low click-through rates, pages not indexed, weak local visibility, technical SEO issues, content that does not match search intent.</p>",
  },
  {
    title: "SEO company in Dubai for commercial search visibility",
    html: "<p>Commercial searches in Dubai are competitive. Gligx focuses on service pages, local SEO, structured data, and content that actually helps the reader.</p>",
  },
  {
    title: "What strong SEO services in Dubai should include",
    html: "<p>Technical audit, keyword mapping, service page optimization, local landing pages, schema, internal links, content briefs, and regular reporting.</p>",
  },
  {
    title: "How Gligx improves organic traffic quality",
    html: "<p>By analyzing Search Console data, identifying pages with impressions but low clicks, improving meta descriptions, title tags, content depth, and internal linking.</p>",
  },
  {
    title: "What Gligx focuses on",
    html: `<ul>
<li>Technical SEO audits and fixes</li>
<li>Service page optimization for UAE search terms</li>
<li>Local SEO for Dubai and UAE cities</li>
<li>Schema markup and structured data</li>
<li>Content strategy and keyword research</li>
<li>Search Console monitoring and analysis</li>
<li>Internal link structure improvement</li>
<li>SEO during website redesign</li>
<li>Blog content for long-tail search</li>
<li>SEO reporting and measurable outcomes</li>
</ul>`,
  },
];

const useCases = [
  "Technical SEO audits",
  "Service page SEO optimization",
  "Local SEO for Dubai businesses",
  "Blog content strategy",
  "Schema markup implementation",
  "SEO-safe website redesign",
  "Page speed and Core Web Vitals",
  "SEO reporting and analytics",
];

const industries = [
  "Professional services",
  "Real estate groups",
  "Healthcare providers",
  "Technology companies",
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
  { num: "01", title: "Internal operations systems", desc: "Budget management, visitor management, approvals, dashboards, and reporting workflows for regional enterprise teams.", mockup: { title: "Operations OS", sidebar: ["Approvals", "Visitors", "Budget"], metrics: [{ value: "84%", label: "Workflow health" }, { value: "32", label: "Open requests" }, { value: "Live", label: "Reports" }], bars: ["86%", "64%", "72%"], list: ["Budget request queue", "Visitor pass approval", "Monthly operations report"] } },
  { num: "02", title: "Government department platforms", desc: "Project management, employee management, mobile application, and department workflow systems for UAE public-sector style operations.", mockup: { title: "Department Portal", sidebar: ["Projects", "Staff", "Mobile"], metrics: [{ value: "46", label: "Tasks" }, { value: "12", label: "Teams" }, { value: "Live", label: "Mobile" }], bars: ["82%", "62%", "78%"], list: ["Project milestone tracker", "Employee task allocation", "Field mobile workflow"] } },
  { num: "03", title: "Manufacturing and pricing systems", desc: "Diamond manufacturing workflows, price calculation, RapNet-style pricing integration, inventory, and auction modules.", mockup: { title: "Manufacturing ERP", sidebar: ["Rough", "Polished", "Auction"], metrics: [{ value: "Rap", label: "Pricing" }, { value: "SKU", label: "Tracked" }, { value: "Live", label: "Auction" }], bars: ["66%", "84%", "77%"], list: ["Rough to polished workflow", "Price calculation engine", "Inventory and auction module"] } },
  { num: "04", title: "Real estate management platforms", desc: "Property, tenant, landlord, contract, reporting, and mobile-access systems for UAE real estate groups.", mockup: { title: "Property Platform", sidebar: ["Units", "Tenants", "Owners"], metrics: [{ value: "184", label: "Units" }, { value: "96%", label: "Occupancy" }, { value: "Live", label: "App" }], bars: ["78%", "72%", "88%"], list: ["Tenant and landlord records", "Contract renewal tracker", "Mobile property access"] } },
];

const faqs = [
  { q: "Is Gligx an SEO company in Dubai?", a: "Yes. Gligx provides SEO services to UAE businesses with a focus on technical SEO, local search, content strategy, and measurable improvements." },
  { q: "What SEO services does Gligx offer?", a: "Technical SEO audits, keyword research, service page optimization, local SEO, schema markup, content strategy, Search Console analysis, and regular reporting." },
  { q: "How long does SEO take to show results?", a: "SEO is a continuous process. Initial improvements may take 8-12 weeks, with stronger results building over 4-6 months." },
  { q: "Does Gligx optimize existing websites for SEO?", a: "Yes. Gligx audits existing websites, identifies technical and content issues, and implements improvements without disrupting current traffic." },
  { q: "Can Gligx help with SEO during a website redesign?", a: "Yes. Gligx plans SEO-safe redesigns that preserve rankings, improve page structure, and upgrade content quality." },
  { q: "Does Gligx provide SEO reporting?", a: "Yes. SEO reporting covers keyword rankings, organic traffic, search impressions, click-through rates, technical SEO status, and improvement recommendations." },
];

export default function SEOCompanyServicePage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <section className="glx-page-hero glx-service-hero">
          <div className="glx-container glx-page-hero-grid">
            <div>
              <nav className="glx-breadcrumb" aria-label="Breadcrumb">
                <Link href="/">Home</Link><span>/</span><Link href="/services/custom-software-development-company/">Services</Link><span>/</span><span>SEO Company Dubai</span>
              </nav>
              <span className="glx-eyebrow">Gligx Service</span>
              <h1>SEO Company Dubai</h1>
              <p>Gligx is an SEO company in Dubai helping UAE businesses turn search impressions into better clicks, stronger service pages, and more qualified enquiries through technical SEO, content strategy, schema, internal links, and Search Console-led improvement.</p>
              <div className="glx-actions" style={{ marginTop: "28px" }}>
                <Link className="glx-btn glx-btn-light" href="/consultation/">Request Free Consultation</Link>
                <Link className="glx-btn" href="/portfolio/">View Related Work</Link>
              </div>
            </div>
            <figure className="glx-page-visual" aria-label="SEO Company Dubai visual preview">
              <svg className="glx-page-visual-img" viewBox="0 0 400 280" width="1200" height="820" role="img" aria-label="SEO growth illustration">
                <rect width="400" height="280" rx="8" fill="#0a0a0a" />
                <rect x="12" y="12" width="376" height="38" rx="4" fill="rgba(255,255,255,0.06)" />
                <circle cx="28" cy="31" r="5" fill="rgba(255,255,255,0.3)" />
                <circle cx="44" cy="31" r="5" fill="rgba(33,182,169,0.7)" />
                <circle cx="60" cy="31" r="5" fill="rgba(201,169,110,0.7)" />
                <text x="340" y="37" fill="#e9edf2" fontSize="10" fontWeight="900" textAnchor="end" fontFamily="Inter,sans-serif">SEO GROWTH</text>
                <rect x="12" y="56" width="88" height="212" rx="4" fill="rgba(0,0,0,0.16)" />
                <rect x="20" y="66" width="72" height="22" rx="12" fill="rgba(255,255,255,0.05)" />
                <rect x="20" y="94" width="72" height="22" rx="12" fill="rgba(255,255,255,0.05)" />
                <rect x="20" y="122" width="72" height="22" rx="12" fill="rgba(255,255,255,0.05)" />
                <rect x="110" y="60" width="278" height="62" rx="4" fill="rgba(5,5,5,0.42)" />
                <rect x="120" y="68" width="72" height="44" rx="4" fill="rgba(255,255,255,0.05)" />
                <text x="156" y="87" fill="#fff" fontSize="18" fontWeight="950" textAnchor="middle" fontFamily="Inter,sans-serif">+42%</text>
                <text x="156" y="103" fill="#aeb7c4" fontSize="8" fontWeight="850" textAnchor="middle" fontFamily="Inter,sans-serif">Visibility</text>
                <rect x="200" y="68" width="72" height="44" rx="4" fill="rgba(255,255,255,0.05)" />
                <text x="236" y="87" fill="#fff" fontSize="18" fontWeight="950" textAnchor="middle" fontFamily="Inter,sans-serif">128</text>
                <text x="236" y="103" fill="#aeb7c4" fontSize="8" fontWeight="850" textAnchor="middle" fontFamily="Inter,sans-serif">Keywords</text>
                <rect x="280" y="68" width="96" height="44" rx="4" fill="rgba(255,255,255,0.05)" />
                <text x="328" y="87" fill="#fff" fontSize="18" fontWeight="950" textAnchor="middle" fontFamily="Inter,sans-serif">31</text>
                <text x="328" y="103" fill="#aeb7c4" fontSize="8" fontWeight="850" textAnchor="middle" fontFamily="Inter,sans-serif">Leads</text>
                <rect x="110" y="128" width="278" height="34" rx="4" fill="rgba(5,5,5,0.28)" />
                <rect x="120" y="138" width="240" height="9" rx="5" fill="url(#g1)" />
                <rect x="120" y="152" width="180" height="9" rx="5" fill="rgba(255,255,255,0.35)" />
                <rect x="110" y="168" width="278" height="88" rx="4" fill="rgba(255,255,255,0.04)" />
                <rect x="120" y="180" width="248" height="20" rx="4" fill="rgba(255,255,255,0.04)" />
                <circle cx="132" cy="190" r="4" fill="#21b6a9" />
                <text x="142" y="194" fill="#e4e9ef" fontSize="10" fontWeight="800" fontFamily="Inter,sans-serif">Technical SEO audit</text>
                <rect x="120" y="208" width="248" height="20" rx="4" fill="rgba(255,255,255,0.04)" />
                <circle cx="132" cy="218" r="4" fill="#21b6a9" />
                <text x="142" y="222" fill="#e4e9ef" fontSize="10" fontWeight="800" fontFamily="Inter,sans-serif">Local Dubai landing pages</text>
                <rect x="120" y="236" width="248" height="20" rx="4" fill="rgba(255,255,255,0.04)" />
                <circle cx="132" cy="246" r="4" fill="#21b6a9" />
                <text x="142" y="250" fill="#e4e9ef" fontSize="10" fontWeight="800" fontFamily="Inter,sans-serif">Schema and tracking setup</text>
                <defs>
                  <linearGradient id="g1" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#1563a0" />
                    <stop offset="100%" stopColor="#21b6a9" />
                  </linearGradient>
                </defs>
              </svg>
              <figcaption className="glx-page-visual-caption">
                <strong>SEO</strong>
                <span>Visibility</span><span>Keywords</span><span>Leads</span>
              </figcaption>
            </figure>
          </div>
        </section>

        <section className="glx-hosting-scroll-scene glx-service-motion-scene glx-motion-seo" aria-label="SEO Growth System">
          <div className="glx-container glx-hosting-scene-grid">
            <div className="glx-hosting-scene-copy">
              <span className="glx-eyebrow">SEO Growth System</span>
              <h2>Search visibility built through structure, content, and technical clarity.</h2>
              <p>Gligx improves organic search visibility through technical SEO audits, service page optimization, local Dubai landing pages, schema markup, content strategy, and Search Console-led improvements.</p>
              <div className="glx-hosting-scene-metrics">
                <span><strong>SEO</strong> Schema</span>
                <span><strong>Pages</strong> Indexed</span>
                <span><strong>Leads</strong> Measured</span>
              </div>
            </div>
            <div className="glx-hosting-room glx-service-motion-room is-category-room" aria-hidden="true">
              <div className="glx-hosting-room-glow"></div>
              <div className="glx-category-stage">
                <div className="glx-category-panel glx-category-panel-main">
                  <span>SEO Growth</span>
                  <strong>Growth</strong>
                  <em>Keyword clusters mapped</em><em>Schema layer active</em><em>Analytics tracking live</em>
                </div>
                <div className="glx-category-panel glx-category-panel-a">
                  <span>SEO</span>
                  <strong>Schema</strong>
                </div>
                <div className="glx-category-panel glx-category-panel-b">
                  <span>Pages</span>
                  <strong>Indexed</strong>
                </div>
                <div className="glx-category-panel glx-category-panel-c">
                  <span>Leads</span>
                  <strong>Measured</strong>
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
                  <h2>SEO Company Dubai for technical SEO, local visibility, and content strategy</h2>
                  <p>Gligx is an SEO company in Dubai helping UAE businesses turn search impressions into better clicks, stronger service pages, and more qualified enquiries through technical SEO, content strategy, schema, internal links, and Search Console-led improvement.</p>
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
                  <h2>Reliable SEO services for UAE businesses</h2>
                  <p>Gligx improves organic search visibility through technical SEO audits, service page optimization, local Dubai landing pages, schema markup, content strategy, and Search Console-led improvements.</p>
                  <div className="glx-side-proof">
                    <span>Technical SEO</span>
                    <span>Local visibility</span>
                    <span>Content strategy</span>
                    <span>Since 2017</span>
                  </div>
                  <UIMockup
                    title="SEO Growth"
                    sidebar={["Visibility", "Keywords", "Leads"]}
                    metrics={[{ value: "+42%", label: "Visibility" }, { value: "128", label: "Keywords" }, { value: "31", label: "Leads" }]}
                    bars={["86%", "64%", "72%"]}
                    list={["Technical SEO audit", "Local Dubai landing pages", "Schema and tracking setup"]}
                  />
                </div>
                <div className="glx-side-panel glx-service-quick-panel">
                  <span className="glx-kicker">Quick Actions</span>
                  <Link className="glx-btn glx-btn-light" href="/consultation/">Request Free Consultation</Link>
                  <Link className="glx-btn glx-btn-dark" href="/portfolio/">View Related Work</Link>
                </div>
                <div className="glx-side-panel glx-service-quick-panel">
                  <span className="glx-kicker">Related Services</span>
                  <Link className="glx-side-link" href="/services/web-design-dubai/">Web Design Company Dubai</Link>
                  <Link className="glx-side-link" href="/services/digital-marketing-agency-dubai/">Digital Marketing Agency Dubai</Link>
                  <Link className="glx-side-link" href="/services/web-development-company-uae/">Web Development Company Dubai</Link>
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
                <h2>SEO projects this service can support.</h2>
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
              <h2>Questions about SEO Company Dubai.</h2>
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
