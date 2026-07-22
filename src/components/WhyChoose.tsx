const features = [
  {
    title: "Established since 2017",
    desc: "Gligx has been actively serving businesses in the UAE and GCC market since 2017.",
  },
  {
    title: "UAE and GCC market experience",
    desc: "Digital systems planned around regional business behaviour, lead quality, speed, trust, and operational needs.",
  },
  {
    title: "Enterprise-grade development",
    desc: "Clean architecture, secure forms, scalable CMS logic, integrations, and performance-led delivery.",
  },
  {
    title: "SEO-optimized architecture",
    desc: "Technical foundations for discoverability, fast loading, structured content, and search growth.",
  },
  {
    title: "Scalable systems",
    desc: "Websites, portals, apps, and automations built to grow with departments, campaigns, and teams.",
  },
  {
    title: "Dedicated support",
    desc: "Long-term maintenance, improvement cycles, hosting support, analytics, and campaign assistance.",
  },
  {
    title: "End-to-end delivery",
    desc: "Strategy, design, development, launch, SEO, PPC, hosting, branding, and continued growth.",
  },
];

export default function WhyChoose() {
  return (
    <section className="glx-section glx-section-dark-grid">
      <div className="glx-container">
        <div className="glx-section-head">
          <div>
            <span className="glx-eyebrow">Why Choose Gligx</span>
            <h2>Premium execution for companies that need digital systems, not surface-level design.</h2>
          </div>
        </div>
        <div className="glx-feature-matrix">
          {features.map((f, i) => (
            <article key={i} className="glx-feature">
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
