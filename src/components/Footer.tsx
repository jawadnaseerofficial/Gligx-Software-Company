import Link from "next/link";

export default function Footer() {
  return (
    <footer className="glx-footer">
      <div className="glx-container">
        <div className="glx-footer-grid">
          <div>
            <div className="glx-footer-brand">
              <svg className="glx-footer-logo" viewBox="0 0 132 43" width="132" height="43" aria-label="Gligx Technologies">
                <rect width="132" height="43" rx="5" fill="#21b6a9" />
                <text x="10" y="29" fill="#fff" fontSize="19" fontWeight="900" fontFamily="Inter,sans-serif">GLIGX</text>
                <text x="84" y="29" fill="#050505" fontSize="15" fontWeight="900" fontFamily="Inter,sans-serif">™</text>
              </svg>
            </div>
            <p>Gligx is a Dubai-based technology partner helping UAE businesses plan, design, develop, launch, and grow modern digital systems.</p>
          </div>
          <div>
            <h3>Services</h3>
            <Link href="/services/custom-software-development-company/">Software Development</Link>
            <Link href="/services/web-design-dubai/">Web Design</Link>
            <Link href="/services/seo-company-dubai/">SEO</Link>
            <Link href="/services/mobile-app-development/">Mobile Apps</Link>
          </div>
          <div>
            <h3>Company</h3>
            <Link href="/about/">About</Link>
            <Link href="/portfolio/">Portfolio</Link>
            <Link href="/careers/">Careers</Link>
            <Link href="/blog/">Blog</Link>
            <Link href="/contact/">Contact</Link>
          </div>
          <div>
            <h3>Dubai Office</h3>
            <p>Gligx Technologies<br />
            102, Mozna Building, Al Doha St,<br />
            Near Al Nahda Metro Station,<br />
            Al Qusais 1, Dubai, UAE</p>
            <p>+971 4 3447633<br />
            +971 55 637 5945<br />
            info@gligx.com</p>
            <Link href="/privacy-policy/">Privacy Policy</Link>
            <Link href="/terms/">Terms &amp; Conditions</Link>
          </div>
        </div>
        <div className="glx-footer-bottom">
          <span>Copyright &copy; 2026 Gligx Technologies. All rights reserved.</span>
          <div className="glx-socials">
            <a href="https://www.linkedin.com/company/gligx" aria-label="LinkedIn" target="_blank" rel="noopener">in</a>
            <a href="https://www.instagram.com/gligx" aria-label="Instagram" target="_blank" rel="noopener">ig</a>
            <a href="https://www.facebook.com/gligx" aria-label="Facebook" target="_blank" rel="noopener">fb</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
