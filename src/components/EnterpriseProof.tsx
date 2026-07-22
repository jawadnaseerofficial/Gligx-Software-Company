const cards = [
  {
    tag: "Luxury & regional operations",
    num: "01",
    title: "Luxury retail group in the Middle East",
    subtitle: "Internal business applications",
    desc: "Budget management, visitor management, approval workflows, reporting tools, and internal process applications for regional teams.",
    tags: ["Budget Management", "Visitor Management", "Workflow Automation"],
    large: true,
  },
  {
    tag: "Government department systems",
    num: "02",
    title: "Sharjah government department",
    subtitle: "Project, employee, and mobile application systems",
    desc: "Project management, employee management, and mobile app solutions for government department operations.",
    tags: ["Government Software", "Mobile App", "Employee Management"],
    large: false,
  },
  {
    tag: "Sports federation operations",
    num: "03",
    title: "UAE motorsports federation",
    subtitle: "Online applications and licensing platforms",
    desc: "Event management, licensing management, online application workflows, dashboards, and digital operations support for federation teams.",
    tags: ["Event Management", "Licensing", "Online Applications"],
    large: false,
  },
  {
    tag: "Manufacturing, pricing, and auctions",
    num: "04",
    title: "Diamond manufacturing companies",
    subtitle: "Diamond production and price calculation systems",
    desc: "Systems covering rough diamond to polished diamond workflows, price calculation, RapNet pricing integration, inventory, and auction modules.",
    tags: ["Manufacturing ERP", "RapNet Integration", "Auction Module"],
    large: false,
  },
  {
    tag: "Property operations",
    num: "05",
    title: "Real estate groups in the UAE",
    subtitle: "Property, tenant, and landlord platforms",
    desc: "Complete web and mobile application systems for property listings, tenant records, landlord management, contracts, and operational reporting.",
    tags: ["Property Management", "Tenant Portal", "Mobile App"],
    large: false,
  },
  {
    tag: "Field service and employee operations",
    num: "06",
    title: "Swimming pool maintenance company",
    subtitle: "Business management and employee mobile app",
    desc: "Complete business management platform and employee app for regular swimming pool maintenance, service scheduling, staff task allocation, field updates, customer records, and operational reporting.",
    tags: ["Field Service App", "Employee Management", "Maintenance Scheduling"],
    large: false,
  },
  {
    tag: "Healthcare websites and booking systems",
    num: "07",
    title: "Hospital groups in Dubai",
    subtitle: "Corporate websites with booking and lead management",
    desc: "Corporate healthcare websites and booking management systems for hospital groups to manage enquiries, appointments, patient leads, departments, and follow-up workflows.",
    tags: ["Healthcare Website", "Booking System", "Lead Management"],
    large: true,
  },
  {
    tag: "eCommerce platforms",
    num: "08",
    title: "Retail and trading companies",
    subtitle: "Online stores and commerce management systems",
    desc: "eCommerce projects for companies that need product catalogues, order flows, secure checkout, campaign landing pages, analytics, and scalable content management.",
    tags: ["eCommerce", "Product Catalogue", "Checkout"],
    large: false,
  },
  {
    tag: "Corporate CMS websites",
    num: "09",
    title: "Large corporate clients",
    subtitle: "Custom CMS websites for enterprise brands",
    desc: "Corporate custom CMS websites for established clients that need premium design, structured service pages, admin content control, SEO foundations, forms, and long-term maintainability.",
    tags: ["Custom CMS", "Corporate Website", "SEO Structure"],
    large: false,
  },
  {
    tag: "Business productivity systems",
    num: "10",
    title: "Multiple enterprise teams",
    subtitle: "HRM, CRM, and project management applications",
    desc: "Custom HRM, CRM, project management, reporting, and department workflow applications for growing business teams.",
    tags: ["HRM", "CRM", "Project Management"],
    large: false,
  },
];

export default function EnterpriseProof() {
  return (
    <section className="glx-section glx-enterprise-proof">
      <div className="glx-container">
        <div className="glx-section-head glx-section-head-wide">
          <div>
            <span className="glx-eyebrow">Selected Enterprise Work</span>
            <h2>Trusted since 2017 for serious internal systems, operational platforms, and business-critical applications.</h2>
          </div>
          <p>Gligx combines regional market experience with custom engineering for organizations that need secure, scalable, long-term digital systems.</p>
        </div>
        <div className="glx-enterprise-grid">
          {cards.map((c, i) => (
            <article key={i} className={`glx-enterprise-card${c.large ? " is-large" : ""}`}>
              <div className="glx-enterprise-card-top">
                <span>{c.tag}</span>
                <strong>{c.num}</strong>
              </div>
              <h3>{c.title}</h3>
              <h4>{c.subtitle}</h4>
              <p>{c.desc}</p>
              <div className="glx-enterprise-tags">
                {c.tags.map((t, j) => (
                  <span key={j}>{t}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
