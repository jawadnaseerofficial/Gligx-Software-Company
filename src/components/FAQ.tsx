"use client";

import { useState } from "react";

const faqs = [
  {
    q: "How much does a website cost in Dubai?",
    a: "Website pricing depends on scope, content, integrations, and design complexity. Gligx starts with discovery, then recommends a clear scope and fixed proposal for your business goals.",
  },
  {
    q: "Do you build custom software for UAE companies?",
    a: "Yes. We design and develop custom web applications, portals, CRM-style systems, dashboards, workflow automation tools, and integrations for businesses in Dubai and across the UAE.",
  },
  {
    q: "Can Gligx help with SEO after the website launch?",
    a: "Yes. We build SEO-friendly foundations and can support ongoing keyword strategy, technical SEO, content planning, tracking, and performance optimization.",
  },
  {
    q: "Do you develop mobile apps for iOS and Android?",
    a: "Yes. Gligx builds mobile apps with a focus on usability, performance, secure APIs, analytics, and long-term scalability.",
  },
  {
    q: "Can you manage hosting and business email?",
    a: "Yes. We provide web hosting, email setup, migration support, SSL, maintenance, backups, and performance monitoring.",
  },
  {
    q: "Do you offer Google Ads and PPC management?",
    a: "Yes. We plan, launch, and optimize Google Ads campaigns focused on lead quality, conversion tracking, and measurable ROI.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="glx-section glx-faq-section">
      <div className="glx-container">
        <div className="glx-section-head" style={{ justifyContent: "center" }}>
          <div style={{ textAlign: "center" }}>
            <span className="glx-eyebrow">FAQ</span>
            <h2 style={{ maxWidth: "600px" }}>Questions before building with Gligx.</h2>
          </div>
        </div>
        <div className="glx-faq-list">
          {faqs.map((faq, i) => (
            <div key={i} className={`glx-faq-item${openIndex === i ? " is-open" : ""}`}>
              <button
                className="glx-faq-question"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                aria-expanded={openIndex === i}
              >
                {faq.q}
                <span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </span>
              </button>
              <div className="glx-faq-answer">
                <p>{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
