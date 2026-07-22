import Link from "next/link";

const cases = [
  {
    num: "01",
    tag: "Web Design & CMS",
    title: "Enterprise Service Website",
    desc: "A premium digital solution planned, designed, and developed for business growth.",
  },
  {
    num: "02",
    tag: "Custom Software",
    title: "Operations Management Portal",
    desc: "A premium digital solution planned, designed, and developed for business growth.",
  },
  {
    num: "03",
    tag: "Business Software & Mobile App",
    title: "Field Service Management App",
    desc: "A premium digital solution planned, designed, and developed for business growth.",
  },
  {
    num: "04",
    tag: "eCommerce",
    title: "eCommerce Growth Platform",
    desc: "A premium digital solution planned, designed, and developed for business growth.",
  },
];

export default function CaseStudies() {
  return (
    <section className="glx-section glx-case-section">
      <div className="glx-container">
        <div className="glx-section-head glx-section-head-wide">
          <div>
            <span className="glx-eyebrow">Case Studies</span>
            <h2>Digital products designed to look premium and work hard.</h2>
          </div>
          <Link className="glx-btn" href="/portfolio/">View Portfolio</Link>
        </div>
        <div className="glx-case-grid">
          {cases.map((c, i) => (
            <article key={i} className="glx-case-card">
              <span className="glx-kicker">{c.num} — {c.tag}</span>
              <h3>{c.title}</h3>
              <p>{c.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
