const stacks = [
  {
    title: "Current Website Foundation",
    chips: ["Custom PHP CMS", "MySQL", "CMS Admin Panel", "SEO URLs", "Dynamic Sitemap", "Reusable Templates"],
    desc: "The Gligx website runs on a custom PHP CMS with existing admin content flow, SEO routing, reusable theme templates, and database-driven content.",
    live: true,
  },
  {
    title: "Frontend Experience",
    chips: ["Bootstrap", "jQuery", "GSAP", "ScrollTrigger", "AJAX Forms", "Responsive CSS"],
    desc: "The current interface uses lightweight production frontend tools for responsive layouts, animation, AJAX interactions, and fast content delivery.",
    live: true,
  },
  {
    title: "SEO, Tracking & Forms",
    chips: ["Schema.org", "Open Graph", "GA4 Ready", "GTM Ready", "Clarity Ready", "PHPMailer SMTP"],
    desc: "The site includes structured metadata, schema markup, analytics hooks, enquiry storage, SMTP-ready email handling, and conversion event tracking.",
    live: true,
  },
  {
    title: "Modern Frontend Builds",
    chips: ["React", "Next.js", "Vue.js", "Tailwind CSS", "Bootstrap", "GSAP"],
    desc: "For new products and application interfaces, Gligx can plan modern frontend systems around speed, UX, maintainability, and long-term scalability.",
    live: false,
  },
  {
    title: "Backend & API Platforms",
    chips: ["Laravel", "PHP", "Node.js", "Python", "REST APIs", "GraphQL"],
    desc: "Custom business logic, secure admin systems, integrations, portals, reporting layers, and scalable software platforms.",
    live: false,
  },
  {
    title: "Mobile App Delivery",
    chips: ["Flutter", "React Native", "iOS", "Android", "Firebase", "Push Notifications"],
    desc: "Cross-platform and native-ready mobile app delivery for customer, staff, field, and operations teams.",
    live: false,
  },
  {
    title: "Data & Cloud",
    chips: ["MySQL", "PostgreSQL", "MongoDB", "AWS", "Google Cloud", "Cloudflare"],
    desc: "Reliable hosting, databases, performance, uptime, security layers, and cloud-ready architecture.",
    live: false,
  },
  {
    title: "CMS & Commerce",
    chips: ["WordPress", "WooCommerce", "Shopify", "Magento", "Custom CMS", "Payment Gateways"],
    desc: "Manageable websites, product catalogues, checkout flows, payment integrations, and custom CMS builds.",
    live: false,
  },
  {
    title: "Growth & Business Systems",
    chips: ["GA4", "GTM", "Google Ads", "Meta Ads", "CRM / ERP", "Peppol E-Invoicing"],
    desc: "Analytics, advertising, CRM, ERP, HRM, automation, e-invoicing, and measurable digital growth.",
    live: false,
  },
];

export default function TechStack() {
  return (
    <section className="glx-section glx-tech-stack-section">
      <div className="glx-container">
        <div className="glx-section-head glx-section-head-wide">
          <div>
            <span className="glx-eyebrow">Technology Stack</span>
            <h2>Real technology foundations, with modern stacks selected around each project.</h2>
          </div>
          <p>
            The current Gligx website uses a custom CMS foundation with modern frontend enhancements, while Gligx also
            delivers newer stacks for software, mobile apps, eCommerce, portals, and cloud-ready platforms.
          </p>
        </div>
        <div className="glx-stack-console">
          <div className="glx-stack-console-top">
            <span></span><span></span><span></span>
            <strong>Current website technology</strong>
          </div>
          <div className="glx-stack-grid">
            {stacks.map((s, i) => (
              <article key={i} className="glx-stack-card">
                <div className="glx-stack-card-head">
                  <span>{s.title}</span>
                  <b></b>
                </div>
                <p>{s.desc}</p>
                <div className="glx-tech-chip-row">
                  {s.chips.map((c, j) => (
                    <span key={j} className="glx-tech-chip">{c}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
