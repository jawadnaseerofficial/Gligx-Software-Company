import Link from "next/link";

const services = [
  {
    num: "01",
    icon: "code",
    title: "Software Development Company Dubai",
    desc: "Custom software, CRM, ERP, HRM, dashboards, portals, mobile-connected workflows, and business systems for UAE companies.",
    href: "/services/custom-software-development-company/",
    featured: true,
  },
  {
    num: "02",
    icon: "file",
    title: "UAE E-Invoicing Provider with Peppol",
    desc: "Peppol-ready e-invoicing software, ERP integration, invoice validation, approval workflows, and reporting for UAE businesses.",
    href: "/services/uae-e-invoicing-provider-peppol/",
    featured: false,
  },
  {
    num: "03",
    icon: "monitor",
    title: "Web Design Company Dubai",
    desc: "Premium website design in Dubai for responsive corporate websites, service pages, landing pages, CMS control, SEO structure, and qualified enquiries.",
    href: "/services/web-design-dubai/",
    featured: false,
  },
  {
    num: "04",
    icon: "layout",
    title: "Web Development Company Dubai",
    desc: "Fast, secure, SEO-friendly website development in Dubai for CMS websites, landing pages, portals, forms, and scalable web platforms.",
    href: "/services/web-development-company-uae/",
    featured: false,
  },
  {
    num: "05",
    icon: "cart",
    title: "eCommerce Web Development Dubai",
    desc: "Online stores with smooth product management, secure checkout, and optimized customer experience.",
    href: "/services/ecommerce-website-development-dubai/",
    featured: false,
  },
  {
    num: "06",
    icon: "search",
    title: "SEO Company Dubai",
    desc: "Search engine optimization strategies to improve visibility, traffic, and long-term organic growth.",
    href: "/services/seo-company-dubai/",
    featured: false,
  },
  {
    num: "07",
    icon: "server",
    title: "Web Hosting Dubai",
    desc: "Reliable hosting solutions with support for speed, security, uptime, and business continuity.",
    href: "/services/web-hosting-dubai/",
    featured: false,
  },
  {
    num: "08",
    icon: "server",
    title: "Business Email Hosting Dubai",
    desc: "Professional email hosting, migration, setup, and support for business communication.",
    href: "/services/business-email-hosting-dubai/",
    featured: false,
  },
  {
    num: "09",
    icon: "smartphone",
    title: "Mobile App Development Dubai",
    desc: "iOS and Android mobile applications designed for usability, performance, and scalability.",
    href: "/services/mobile-app-development/",
    featured: false,
  },
  {
    num: "01",
    icon: "megaphone",
    title: "Digital Marketing Agency Dubai",
    desc: "Integrated digital marketing campaigns across SEO, social media, content, and paid advertising.",
    href: "/services/digital-marketing-agency-dubai/",
    featured: false,
  },
];

const icons: Record<string, React.ReactNode> = {
  code: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M4 7l-3 3 3 3M20 7l3 3-3 3M14 4l-4 16" />
    </svg>
  ),
  file: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M7 3h7l5 5v13H7zM14 3v5h5M9 13h6M9 17h6M9 9h2" />
    </svg>
  ),
  monitor: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M4 5h16v14H4zM4 10h16M10 10v9" />
    </svg>
  ),
  layout: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M4 5h16a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V7a2 2 0 012-2zM2 9h20" />
    </svg>
  ),
  cart: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M6 6h15l-2 8H8L6 3H3M9 20a1 1 0 100-2 1 1 0 000 2zM18 20a1 1 0 100-2 1 1 0 000 2z" />
    </svg>
  ),
  search: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M11 19a8 8 0 100-16 8 8 0 000 16zM21 21l-4.35-4.35" />
    </svg>
  ),
  server: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M4 5h16v6H4zM4 13h16v6H4zM7 8h.01M7 16h.01" />
    </svg>
  ),
  smartphone: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M8 2h8a2 2 0 012 2v16a2 2 0 01-2 2H8a2 2 0 01-2-2V4a2 2 0 012-2zM11 18h2" />
    </svg>
  ),
  megaphone: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M3 11v2a2 2 0 002 2h2l4 5v-5l8-3V6l-8-3v12" />
    </svg>
  ),
};

export default function ServicesSection() {
  return (
    <section className="glx-section glx-signature-section">
      <div className="glx-container">
        <div className="glx-section-head glx-section-head-wide">
          <div>
            <span className="glx-eyebrow">Services</span>
            <h2>One senior digital team for design, engineering, automation, and growth.</h2>
          </div>
          <Link className="glx-btn" href="/services/custom-software-development-company/">View Services</Link>
        </div>
        <div className="glx-service-mosaic">
          {services.map((s, i) => (
            <article key={i} className={`glx-card-service glx-premium-service${s.featured ? " is-featured" : ""}`}>
              <div className="glx-icon">{icons[s.icon]}</div>
              <span className="glx-kicker">{s.num}</span>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
              <Link className="glx-link" href={s.href}>Learn More</Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
