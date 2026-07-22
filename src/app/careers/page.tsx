import Link from "next/link";
import Header from "@/components/Header";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const roles = [
  { letter: "W", title: "Web & UI Developers", desc: "Front-end developers who care about responsive interfaces, CMS-ready layouts, performance, accessibility, and clean implementation." },
  { letter: "S", title: "Software Engineers", desc: "Engineers who can understand business workflows, database-backed systems, dashboards, APIs, integrations, and long-term maintainability." },
  { letter: "M", title: "Mobile App Developers", desc: "App developers who can build usable iOS and Android experiences connected to secure business platforms and admin workflows." },
  { letter: "S", title: "SEO & Digital Growth Specialists", desc: "Search, content, PPC, analytics, and conversion specialists who understand UAE business goals and measurable lead generation." },
  { letter: "D", title: "Design & Brand Talent", desc: "UI/UX designers, brand designers, and visual thinkers who can make technology feel clear, premium, and useful." },
  { letter: "P", title: "Project & Client Success Professionals", desc: "Organized communicators who can coordinate scope, timelines, quality checks, customer communication, and delivery follow-through." },
];

const standards = [
  { title: "Enterprise mindset", desc: "We build systems that support real business operations, not only attractive screens." },
  { title: "Dubai and GCC focus", desc: "Our work is shaped by regional customer expectations, business speed, and practical support needs." },
  { title: "Design plus engineering", desc: "Good people here respect strategy, UX, code quality, SEO, data, hosting, and long-term maintenance." },
  { title: "Ownership culture", desc: "We value people who communicate clearly, solve problems carefully, and take responsibility for outcomes." },
];

const steps = [
  { title: "Portfolio Review", desc: "We review your CV, selected work, project experience, and the kind of role you want to grow into." },
  { title: "Technical Conversation", desc: "We discuss your thinking, tools, workflow, communication style, and how you approach real client requirements." },
  { title: "Practical Task", desc: "For selected roles, we may request a focused task that reflects the actual quality standards of Gligx work." },
  { title: "Team Fit", desc: "We look for people who are professional, reliable, curious, and comfortable working with serious business clients." },
  { title: "Onboarding", desc: "If there is a good match, we align expectations, tools, responsibilities, and growth direction clearly." },
];

export default function CareersPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        {/* Page Hero */}
        <section className="glx-page-hero">
          <div className="glx-container glx-page-hero-grid">
            <div>
              <nav className="glx-breadcrumb" aria-label="Breadcrumb">
                <Link href="/">Home</Link><span>/</span><span>Careers</span>
              </nav>
              <span className="glx-eyebrow">Careers at Gligx</span>
              <h1>Join the team behind serious digital systems.</h1>
              <p>Gligx is building a professional technology team in Dubai for websites, software, mobile apps, SEO, hosting, branding, and enterprise digital transformation work across the UAE and GCC.</p>
              <div className="glx-hero-actions">
                <Link className="glx-btn glx-btn-light" href="mailto:info@gligx.com?subject=Career%20Application%20-%20Gligx%20Technologies">
                  Send Your Profile
                </Link>
                <Link className="glx-btn" href="#career-roles">
                  Explore Roles
                </Link>
              </div>
            </div>
            <figure className="glx-page-visual" aria-label="Gligx careers and technology team visual">
              <svg className="glx-page-visual-img" viewBox="0 0 1200 600" role="img" aria-label="Careers team illustration">
                <rect width="1200" height="600" fill="#0a0a0a" />
                <rect x="60" y="60" width="1080" height="480" rx="12" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
                <rect x="100" y="120" width="280" height="360" rx="8" fill="rgba(33,182,169,0.05)" stroke="rgba(33,182,169,0.18)" strokeWidth="1" />
                <text x="240" y="170" fill="#21b6a9" fontSize="28" fontWeight="950" textAnchor="middle" fontFamily="Inter,sans-serif">Talent Studio</text>
                <text x="240" y="210" fill="#e9edf2" fontSize="16" fontWeight="800" textAnchor="middle" fontFamily="Inter,sans-serif">Design</text>
                <text x="240" y="240" fill="#e9edf2" fontSize="16" fontWeight="800" textAnchor="middle" fontFamily="Inter,sans-serif">Code</text>
                <text x="240" y="270" fill="#e9edf2" fontSize="16" fontWeight="800" textAnchor="middle" fontFamily="Inter,sans-serif">Growth</text>
                <rect x="100" y="310" width="280" height="4" rx="2" fill="rgba(255,255,255,0.1)" />
                <rect x="100" y="340" width="200" height="40" rx="6" fill="rgba(33,182,169,0.12)" />
                <text x="200" y="366" fill="#21b6a9" fontSize="14" fontWeight="800" textAnchor="middle" fontFamily="Inter,sans-serif">Enterprise Projects</text>
                <rect x="100" y="390" width="160" height="40" rx="6" fill="rgba(21,99,160,0.12)" />
                <text x="180" y="416" fill="#1563a0" fontSize="14" fontWeight="800" textAnchor="middle" fontFamily="Inter,sans-serif">Client Delivery</text>
                <rect x="420" y="120" width="660" height="100" rx="8" fill="rgba(0,0,0,0.3)" />
                <text x="440" y="155" fill="#e9edf2" fontSize="18" fontWeight="900" fontFamily="Inter,sans-serif">Professional team culture</text>
                <text x="440" y="180" fill="#aeb7c4" fontSize="14" fontFamily="Inter,sans-serif">We look for people who can combine craft, discipline, and business thinking.</text>
                <rect x="420" y="240" width="660" height="220" rx="8" fill="rgba(0,0,0,0.2)" />
                <rect x="440" y="260" width="310" height="36" rx="6" fill="rgba(255,255,255,0.04)" />
                <circle cx="456" cy="278" r="5" fill="#21b6a9" />
                <text x="472" y="282" fill="#dbe4ec" fontSize="13" fontWeight="800" fontFamily="Inter,sans-serif">Front-end development</text>
                <rect x="770" y="260" width="290" height="36" rx="6" fill="rgba(255,255,255,0.04)" />
                <circle cx="786" cy="278" r="5" fill="#21b6a9" />
                <text x="802" y="282" fill="#dbe4ec" fontSize="13" fontWeight="800" fontFamily="Inter,sans-serif">Software engineering</text>
                <rect x="440" y="310" width="310" height="36" rx="6" fill="rgba(255,255,255,0.04)" />
                <circle cx="456" cy="328" r="5" fill="#21b6a9" />
                <text x="472" y="332" fill="#dbe4ec" fontSize="13" fontWeight="800" fontFamily="Inter,sans-serif">Mobile app development</text>
                <rect x="770" y="310" width="290" height="36" rx="6" fill="rgba(255,255,255,0.04)" />
                <circle cx="786" cy="328" r="5" fill="#21b6a9" />
                <text x="802" y="332" fill="#dbe4ec" fontSize="13" fontWeight="800" fontFamily="Inter,sans-serif">SEO & digital growth</text>
                <rect x="440" y="360" width="310" height="36" rx="6" fill="rgba(255,255,255,0.04)" />
                <circle cx="456" cy="378" r="5" fill="#21b6a9" />
                <text x="472" y="382" fill="#dbe4ec" fontSize="13" fontWeight="800" fontFamily="Inter,sans-serif">Design & brand</text>
                <rect x="770" y="360" width="290" height="36" rx="6" fill="rgba(255,255,255,0.04)" />
                <circle cx="786" cy="378" r="5" fill="#21b6a9" />
                <text x="802" y="382" fill="#dbe4ec" fontSize="13" fontWeight="800" fontFamily="Inter,sans-serif">Project & client success</text>
              </svg>
              <figcaption className="glx-page-visual-caption">
                <strong>Talent Studio</strong>
                <span>Design</span><span>Code</span><span>Growth</span>
              </figcaption>
            </figure>
          </div>
        </section>

        {/* Professional team culture */}
        <section className="glx-section" id="career-roles">
          <div className="glx-container">
            <div className="glx-section-head glx-section-head-wide">
              <div>
                <span className="glx-eyebrow">Professional team culture</span>
                <h2>We look for people who can combine craft, discipline, and business thinking.</h2>
              </div>
              <p>Our clients trust us with important digital systems: internal applications, booking platforms, eCommerce, CRM, ERP-style workflows, SEO foundations, and lead generation websites. That means our team needs more than software knowledge. We need people who can think clearly, communicate well, and deliver work that businesses can depend on.</p>
            </div>
            <div className="glx-stats-grid">
              <div className="glx-stat-card">
                <strong>Since 2017</strong>
                <p>Active in UAE and GCC technology delivery.</p>
              </div>
              <div className="glx-stat-card">
                <strong>Enterprise Work</strong>
                <p>Applications, CMS platforms, workflow systems, and growth engines.</p>
              </div>
              <div className="glx-stat-card">
                <strong>Multi-Discipline</strong>
                <p>Strategy, design, development, SEO, hosting, PPC, and support.</p>
              </div>
              <div className="glx-stat-card">
                <strong>Dubai Based</strong>
                <p>Regional market understanding with international delivery standards.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Talent areas / Roles */}
        <section className="glx-section">
          <div className="glx-container">
            <div className="glx-section-head">
              <div>
                <span className="glx-eyebrow">Talent areas</span>
                <h2>Roles we are always interested in.</h2>
                <p>We may not have active openings at every moment, but we welcome strong profiles from talented professionals who want to work on serious digital projects.</p>
              </div>
            </div>
            <div className="glx-career-roles-grid">
              {roles.map((role, i) => (
                <article key={i} className="glx-career-role-card">
                  <span className="glx-career-role-letter">{role.letter}</span>
                  <h3>{role.title}</h3>
                  <p>{role.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Standards */}
        <section className="glx-section">
          <div className="glx-container">
            <div className="glx-section-head">
              <div>
                <span className="glx-eyebrow">How we work</span>
                <h2>The kind of standards we expect from our team.</h2>
                <p>Gligx is a client-facing technology company. The best team members are calm under pressure, detail-focused, practical, and committed to long-term quality.</p>
              </div>
            </div>
            <div className="glx-career-standards-grid">
              {standards.map((s, i) => (
                <div key={i} className="glx-career-standard-card">
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Hiring process */}
        <section className="glx-section">
          <div className="glx-container">
            <div className="glx-section-head">
              <div>
                <span className="glx-eyebrow">Hiring process</span>
                <h2>A clear, respectful selection flow.</h2>
                <p>We keep hiring practical and transparent so candidates understand what matters before joining a professional delivery team.</p>
              </div>
            </div>
            <div className="glx-career-steps">
              {steps.map((step, i) => (
                <div key={i} className="glx-career-step">
                  <span className="glx-career-step-num">{String(i + 1).padStart(2, "0")}</span>
                  <h3>{step.title}</h3>
                  <p>{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Build with Gligx */}
        <section className="glx-cta-band">
          <div className="glx-container">
            <div className="glx-cta-inner">
              <div>
                <span className="glx-eyebrow">Build with Gligx</span>
                <h2>Think you can raise the quality of our work?</h2>
                <p>Send your CV, portfolio, GitHub, LinkedIn, or selected project examples. Tell us what you are best at, what kind of work you want to do, and why Gligx feels like the right team for you.</p>
              </div>
              <Link className="glx-btn glx-btn-dark" href="mailto:info@gligx.com?subject=Career%20Application%20-%20Gligx%20Technologies">
                Apply to Gligx
              </Link>
            </div>
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </>
  );
}
