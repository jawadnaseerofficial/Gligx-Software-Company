import Link from "next/link";

export default function CTASection() {
  return (
    <section className="glx-cta-band">
      <div className="glx-container">
        <div className="glx-cta-inner">
          <div>
            <span className="glx-eyebrow">Let&rsquo;s Build Something Exceptional</span>
            <h2>Partner with Gligx to create modern digital solutions that help your business grow faster and smarter.</h2>
          </div>
          <Link className="glx-btn glx-btn-dark" href="/consultation/" style={{ flexShrink: 0 }}>
            Schedule Free Consultation
          </Link>
        </div>
      </div>
    </section>
  );
}
