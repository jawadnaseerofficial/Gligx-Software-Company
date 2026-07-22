import Link from "next/link";
import Header from "@/components/Header";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const posts = [
  {
    slug: "how-to-choose-software-development-company-dubai",
    visual: "software-automation",
    date: "Jul 15, 2026",
    title: "How to Choose a Software Development Company in Dubai",
    desc: "A practical guide for UAE businesses comparing software companies, IT partners, custom application teams, and long-term technology support. Choosing a software development company in Dubai is not only a question of who can write code. The real questi...",
  },
  {
    slug: "web-design-mobile-app-development-dubai-digital-growth",
    visual: "mobile-apps",
    date: "Jul 15, 2026",
    title: "Web Design and Mobile App Development in Dubai: Planning a Digital Growth System",
    desc: "How UAE companies can connect websites, mobile apps, software, SEO, hosting, and lead workflows into one practical digital platform. A modern business website and a mobile app should not feel like two separate projects built by different teams with n...",
  },
  {
    slug: "crm-vs-erp-dubai-businesses",
    visual: "crm-erp",
    date: "Jul 02, 2026",
    title: "CRM vs ERP for Dubai Businesses: Which System Should You Build First?",
    desc: "A practical comparison for UAE companies planning sales pipelines, operations, finance workflows, inventory, HR, reporting, and custom business software. Many Dubai businesses reach a point where spreadsheets, WhatsApp follow-ups, email approvals, an...",
  },
  {
    slug: "devops-cloud-infrastructure-checklist-uae",
    visual: "cloud-comparison",
    date: "Jul 02, 2026",
    title: "DevOps and Cloud Infrastructure Checklist for UAE Business Applications",
    desc: "What UAE companies should check before launching websites, portals, APIs, mobile app backends, AWS, Google Cloud, staging, monitoring, and backups. DevOps is not only a technical word for large software companies. For UAE businesses running websites,...",
  },
  {
    slug: "website-security-checklist-uae-companies",
    visual: "website-security",
    date: "Jul 02, 2026",
    title: "Website Security Checklist for UAE Companies: Practical Steps Before and After Launch",
    desc: "Security checks for business websites, CMS projects, payment pages, admin panels, custom software, hosting, access control, backups, and monitoring. Website security is often noticed only after something goes wrong: a hacked CMS, broken contact form,...",
  },
  {
    slug: "website-maintenance-checklist-after-launch-dubai",
    visual: "hosting-continuity",
    date: "Jul 02, 2026",
    title: "Website Maintenance Checklist After Launch for Dubai Businesses",
    desc: "What to monitor after a website goes live: content updates, SEO checks, backups, forms, speed, security, analytics, hosting, and conversion tracking. A website launch is not the end of the project. It is the start of the period where real users, sear...",
  },
];

function BlogVisual({ variant }: { variant: string }) {
  return (
    <div className={`glx-blog-visual glx-blog-visual-${variant}`} aria-hidden="true">
      <div className="glx-blog-visual-inner">
        <span></span><span></span><span></span><span></span><span></span><span></span>
      </div>
    </div>
  );
}

export default function BlogPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        {/* Page Hero */}
        <section className="glx-page-hero">
          <div className="glx-container glx-page-hero-grid">
            <div>
              <nav className="glx-breadcrumb" aria-label="Breadcrumb">
                <Link href="/">Home</Link><span>/</span><span>Insights</span>
              </nav>
              <span className="glx-eyebrow">Blog &amp; Insights</span>
              <h1>Ideas on web design, software, SEO, apps, and digital growth.</h1>
              <p>Practical thinking for UAE businesses planning better digital systems.</p>
            </div>
            <figure className="glx-page-visual" aria-label="Gligx digital insights visual">
              <svg className="glx-page-visual-img" viewBox="0 0 1200 600" role="img" aria-label="Blog insights illustration">
                <rect width="1200" height="600" fill="#0a0a0a" />
                <rect x="60" y="60" width="1080" height="480" rx="12" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
                <rect x="100" y="120" width="320" height="360" rx="8" fill="rgba(33,182,169,0.05)" stroke="rgba(33,182,169,0.18)" strokeWidth="1" />
                <text x="260" y="170" fill="#21b6a9" fontSize="28" fontWeight="950" textAnchor="middle" fontFamily="Inter,sans-serif">Insights Lab</text>
                <text x="260" y="210" fill="#e9edf2" fontSize="16" fontWeight="800" textAnchor="middle" fontFamily="Inter,sans-serif">SEO</text>
                <text x="260" y="240" fill="#e9edf2" fontSize="16" fontWeight="800" textAnchor="middle" fontFamily="Inter,sans-serif">Design</text>
                <text x="260" y="270" fill="#e9edf2" fontSize="16" fontWeight="800" textAnchor="middle" fontFamily="Inter,sans-serif">Growth</text>
                <rect x="100" y="310" width="320" height="4" rx="2" fill="rgba(255,255,255,0.1)" />
                <rect x="100" y="340" width="240" height="40" rx="6" fill="rgba(33,182,169,0.12)" />
                <text x="220" y="366" fill="#21b6a9" fontSize="14" fontWeight="800" textAnchor="middle" fontFamily="Inter,sans-serif">Practical Thinking</text>
                <rect x="460" y="120" width="620" height="100" rx="8" fill="rgba(0,0,0,0.3)" />
                <text x="480" y="155" fill="#e9edf2" fontSize="18" fontWeight="900" fontFamily="Inter,sans-serif">Recent Insights</text>
                <text x="480" y="183" fill="#aeb7c4" fontSize="14" fontFamily="Inter,sans-serif">Ideas on web design, software, SEO, apps, and digital growth.</text>
                <rect x="460" y="240" width="620" height="220" rx="8" fill="rgba(0,0,0,0.2)" />
                <rect x="480" y="260" width="580" height="36" rx="6" fill="rgba(255,255,255,0.04)" />
                <rect x="480" y="308" width="580" height="36" rx="6" fill="rgba(255,255,255,0.04)" />
                <rect x="480" y="356" width="580" height="36" rx="6" fill="rgba(255,255,255,0.04)" />
                <text x="500" y="284" fill="#dbe4ec" fontSize="13" fontWeight="800" fontFamily="Inter,sans-serif">How to Choose a Software Development Company in Dubai</text>
                <text x="500" y="332" fill="#dbe4ec" fontSize="13" fontWeight="800" fontFamily="Inter,sans-serif">Web Design and Mobile App Development in Dubai</text>
                <text x="500" y="380" fill="#dbe4ec" fontSize="13" fontWeight="800" fontFamily="Inter,sans-serif">CRM vs ERP for Dubai Businesses</text>
              </svg>
              <figcaption className="glx-page-visual-caption">
                <strong>Insights Lab</strong>
                <span>SEO</span><span>Design</span><span>Growth</span>
              </figcaption>
            </figure>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="glx-section">
          <div className="glx-container">
            <div className="glx-blog-grid">
              {posts.map((post, i) => (
                <article key={i} className="glx-blog-card">
                  <Link href={`/${post.slug}/`} className="glx-blog-card-visual-link">
                    <BlogVisual variant={post.visual} />
                  </Link>
                  <div className="glx-blog-card-body">
                    <time className="glx-blog-card-date">{post.date}</time>
                    <h2><Link href={`/${post.slug}/`}>{post.title}</Link></h2>
                    <p>{post.desc}</p>
                    <Link className="glx-link" href={`/${post.slug}/`}>Read Insight</Link>
                  </div>
                </article>
              ))}
            </div>
            {/* Pagination */}
            <nav className="glx-blog-pagination" aria-label="Blog pagination">
              <span className="glx-blog-pagination-info">Page 1 of 7 · Showing 1-6 of 39 insights</span>
              <div className="glx-blog-pagination-links">
                <span className="glx-blog-pagination-link is-disabled">&laquo;</span>
                <span className="glx-blog-pagination-link is-disabled">&lsaquo;</span>
                <span className="glx-blog-pagination-link is-current">1</span>
                <Link className="glx-blog-pagination-link" href="/blog/?page=2">2</Link>
                <Link className="glx-blog-pagination-link" href="/blog/?page=3">3</Link>
                <span className="glx-blog-pagination-ellipsis">&hellip;</span>
                <Link className="glx-blog-pagination-link" href="/blog/?page=7">7</Link>
                <Link className="glx-blog-pagination-link" href="/blog/?page=2">&rsaquo;</Link>
                <Link className="glx-blog-pagination-link" href="/blog/?page=7">&raquo;</Link>
              </div>
            </nav>
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </>
  );
}
