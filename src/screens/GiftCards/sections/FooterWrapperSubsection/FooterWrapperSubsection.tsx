const legalLinks = [
  { label: "Terms of Service", href: "#" },
  { label: "Privacy Policy", href: "#" },
  { label: "Legal & Compliance", href: "#" },
];

const sitemapLinks = [
  { label: "Home", href: "#" },
  { label: "About", href: "#" },
  { label: "Login", href: "#" },
];

export const FooterWrapperSubsection = (): JSX.Element => {
  return (
    <section className="flex flex-col w-[1728px] items-start relative flex-[0_0_auto] z-0 overflow-y-scroll">
      <footer className="flex flex-col items-center justify-center gap-10 p-10 relative self-stretch w-full flex-[0_0_auto] bg-greens-1b-4332">
        <div className="flex items-start justify-between relative self-stretch w-full flex-[0_0_auto]">
          <div className="flex flex-col w-[650px] items-start gap-3 relative">
            <div className="inline-flex h-11 items-center gap-3 relative">
              <div
                aria-hidden="true"
                className="w-[57px] h-10 aspect-[1.44] opacity-90 bg-[url(https://c.animaapp.com/lRTzVt0W/img/image--buybak--22@2x.png)] relative bg-cover bg-[50%_50%]"
              />
              <p className="relative w-fit [font-family:'Figtree',Helvetica] font-normal text-greensd-4e-9e-2 text-2xl tracking-[-0.60px] leading-8 whitespace-nowrap">
                <span className="font-semibold tracking-[-0.14px]">Buy</span>
                <span className="font-bold tracking-[-0.14px]">Bak</span>
              </p>
            </div>
            <p className="relative w-[343px] [font-family:'Inter',Helvetica] font-normal text-greensa-8d-3c-5 text-base tracking-[0] leading-[26px]">
              Loyalty rewards that passively build a stock portfolio.
              Automatically, with every purchase.
            </p>
          </div>
          <nav
            aria-label="Legal"
            className="inline-flex flex-col items-start gap-2.5 relative flex-[0_0_auto]"
          >
            <div className="relative w-fit mt-[-1.00px] font-web-body font-[number:var(--web-body-font-weight)] text-bluesebf-3fa text-[length:var(--web-body-font-size)] tracking-[var(--web-body-letter-spacing)] leading-[var(--web-body-line-height)] whitespace-nowrap [font-style:var(--web-body-font-style)]">
              Legal
            </div>
            {legalLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="relative w-fit font-web-body font-[number:var(--web-body-font-weight)] text-greensa-8d-3c-5 text-[length:var(--web-body-font-size)] tracking-[var(--web-body-letter-spacing)] leading-[var(--web-body-line-height)] whitespace-nowrap [font-style:var(--web-body-font-style)]"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <nav
            aria-label="Sitemap"
            className="inline-flex flex-col items-start gap-2.5 relative flex-[0_0_auto]"
          >
            <div className="relative w-fit mt-[-1.00px] font-web-body font-[number:var(--web-body-font-weight)] text-bluesebf-3fa text-[length:var(--web-body-font-size)] tracking-[var(--web-body-letter-spacing)] leading-[var(--web-body-line-height)] whitespace-nowrap [font-style:var(--web-body-font-style)]">
              Sitemap
            </div>
            {sitemapLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="relative w-fit font-web-body font-[number:var(--web-body-font-weight)] text-greensa-8d-3c-5 text-[length:var(--web-body-font-size)] tracking-[var(--web-body-letter-spacing)] leading-[var(--web-body-line-height)] whitespace-nowrap [font-style:var(--web-body-font-style)]"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="inline-flex flex-col items-start gap-2.5 relative flex-[0_0_auto]">
            <div className="relative w-fit mt-[-1.00px] font-web-body font-[number:var(--web-body-font-weight)] text-bluesebf-3fa text-[length:var(--web-body-font-size)] tracking-[var(--web-body-letter-spacing)] leading-[var(--web-body-line-height)] whitespace-nowrap [font-style:var(--web-body-font-style)]">
              Get in Touch
            </div>
            <button
              type="button"
              aria-label="Contact Us"
              className="all-[unset] box-border inline-flex items-center justify-center gap-2.5 px-5 py-2 relative flex-[0_0_auto] bg-greens-5-2a-788 rounded-[16777200px] cursor-pointer"
            >
              <div className="relative w-fit mt-[-1.00px] font-web-body font-[number:var(--web-body-font-weight)] text-neutralsffffff text-[length:var(--web-body-font-size)] text-center tracking-[var(--web-body-letter-spacing)] leading-[var(--web-body-line-height)] whitespace-nowrap [font-style:var(--web-body-font-style)]">
                Contact Us
              </div>
            </button>
          </div>
        </div>
        <div className="relative self-stretch w-full h-px bg-greens-2d-6a-4f" />
        <address className="not-italic flex flex-col w-[1001px] items-center justify-center gap-3 relative flex-[0_0_auto]">
          <p className="relative self-stretch mt-[-1.00px] font-web-small font-[number:var(--web-small-font-weight)] text-greensa-8d-3c-5 text-[length:var(--web-small-font-size)] text-center tracking-[var(--web-small-letter-spacing)] leading-[var(--web-small-line-height)] [font-style:var(--web-small-font-style)]">
            © 2026 BUYBAK. ALL RIGHTS RESERVED.
          </p>
          <p className="relative self-stretch font-web-body font-[number:var(--web-body-font-weight)] text-greensa-8d-3c-5 text-[length:var(--web-body-font-size)] text-center tracking-[var(--web-body-letter-spacing)] leading-[var(--web-body-line-height)] [font-style:var(--web-body-font-style)]">
            123 Construction Way, Suite 500, Building City, BC 12345
          </p>
          <p className="relative self-stretch font-web-body font-[number:var(--web-body-font-weight)] text-greensa-8d-3c-5 text-[length:var(--web-body-font-size)] text-center tracking-[var(--web-body-letter-spacing)] leading-[var(--web-body-line-height)] [font-style:var(--web-body-font-style)]">
            Gift card purchases and fractional stock offerings are subject to
            availability and terms. All investing involves risk. Please consult
            with a financial advisor regarding investment decisions.
          </p>
        </address>
      </footer>
    </section>
  );
};
