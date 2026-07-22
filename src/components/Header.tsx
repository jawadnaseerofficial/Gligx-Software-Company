"use client";

import { useState } from "react";
import Link from "next/link";

const services = [
  {
    href: "/services/custom-software-development-company/",
    title: "Software Development Company Dubai",
    desc: "Custom software, CRM, ERP, HRM, dashboards, portals, mobile-connected workflows, and business systems for UAE companies.",
    icon: "code",
  },
  {
    href: "/services/uae-e-invoicing-provider-peppol/",
    title: "UAE E-Invoicing Provider with Peppol",
    desc: "Peppol-ready e-invoicing software, ERP integration, invoice validation, approval workflows, and reporting for UAE businesses.",
    icon: "file",
  },
  {
    href: "/services/web-design-dubai/",
    title: "Web Design Company Dubai",
    desc: "Premium website design in Dubai for responsive corporate websites, service pages, landing pages, CMS control, SEO structure, and qualified enquiries.",
    icon: "monitor",
  },
  {
    href: "/services/web-development-company-uae/",
    title: "Web Development Company Dubai",
    desc: "Fast, secure, SEO-friendly website development in Dubai for CMS websites, landing pages, portals, forms, and scalable web platforms.",
    icon: "layout",
  },
  {
    href: "/services/ecommerce-website-development-dubai/",
    title: "eCommerce Web Development Dubai",
    desc: "Online stores with smooth product management, secure checkout, and optimized customer experience.",
    icon: "cart",
  },
  {
    href: "/services/seo-company-dubai/",
    title: "SEO Company Dubai",
    desc: "Search engine optimization strategies to improve visibility, traffic, and long-term organic growth.",
    icon: "search",
  },
  {
    href: "/services/web-hosting-dubai/",
    title: "Web Hosting Dubai",
    desc: "Reliable hosting solutions with support for speed, security, uptime, and business continuity.",
    icon: "server",
  },
  {
    href: "/services/business-email-hosting-dubai/",
    title: "Business Email Hosting Dubai",
    desc: "Professional email hosting, migration, setup, and support for business communication.",
    icon: "server",
  },
  {
    href: "/services/mobile-app-development/",
    title: "Mobile App Development Dubai",
    desc: "iOS and Android mobile applications designed for usability, performance, and scalability.",
    icon: "smartphone",
  },
  {
    href: "/services/digital-marketing-agency-dubai/",
    title: "Digital Marketing Agency Dubai",
    desc: "Integrated digital marketing campaigns across SEO, social media, content, and paid advertising.",
    icon: "megaphone",
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

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <header className="glx-site-header" id="siteHeader">
      <nav className="glx-nav" aria-label="Primary navigation">
        <Link className="glx-brand" href="/" aria-label="Gligx home">
          <svg className="glx-brand-logo" viewBox="0 0 154 50" width="154" height="50" aria-label="Gligx Technologies">
            <rect width="154" height="50" rx="6" fill="#21b6a9" />
            <text x="12" y="33" fill="#fff" fontSize="22" fontWeight="900" fontFamily="Inter,sans-serif">GLIGX</text>
            <text x="98" y="33" fill="#050505" fontSize="18" fontWeight="900" fontFamily="Inter,sans-serif">™</text>
          </svg>
        </Link>
        <button
          className="glx-nav-toggle"
          type="button"
          aria-label="Open menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span><span></span><span></span>
        </button>
        <div className={`glx-nav-menu${menuOpen ? " is-open" : ""}`} id="primaryMenu">
          <Link href="/">Home</Link>
          <div className={`glx-nav-mega-item${servicesOpen ? " is-open" : ""}`}>
            <button
              className="glx-mega-trigger"
              type="button"
              aria-expanded={servicesOpen}
              onClick={() => setServicesOpen(!servicesOpen)}
            >
              Services<span aria-hidden="true"></span>
            </button>
            <div className="glx-mega-panel" id="servicesMega">
              <div className="glx-mega-inner">
                <div className="glx-mega-intro">
                  <span className="glx-kicker">Gligx Services</span>
                  <h2>Design, build, host, market, and scale digital systems.</h2>
                  <p>Choose a specialist service or speak to Gligx about a complete digital transformation plan.</p>
                  <Link className="glx-btn glx-btn-light glx-btn-sm" href="/services/custom-software-development-company/">
                    View Services
                  </Link>
                </div>
                <div className="glx-mega-grid">
                  {services.map((s, i) => (
                    <Link key={i} className="glx-mega-card" href={s.href}>
                      <span className="glx-mega-icon">{icons[s.icon]}</span>
                      <strong>{s.title}</strong>
                      <small>{s.desc}</small>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <Link href="/portfolio/">Portfolio</Link>
          <Link href="/about/">About</Link>
          <Link href="/careers/">Careers</Link>
          <Link href="/blog/">Blog</Link>
          <Link href="/contact/">Contact</Link>
          <Link className="glx-btn glx-btn-sm glx-btn-light" href="/consultation/">
            Book Free Consultation
          </Link>
        </div>
      </nav>
    </header>
  );
}
