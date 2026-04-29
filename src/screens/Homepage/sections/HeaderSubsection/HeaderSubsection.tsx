import { Link, useLocation } from "react-router-dom";

const navItems = [
  { label: "Benefits", href: "#benefits", type: "anchor" as const },
  { label: "Gift Cards", href: "/gift-cards", type: "route" as const },
];

export const HeaderSubsection = (): JSX.Element => {
  const location = useLocation();

  const isActiveRoute = (href: string) => location.pathname === href;

  return (
    <header className="relative z-[6] flex h-[100px] w-full self-stretch border-b border-[#e8ebe9] bg-neutralsffffff px-10 py-0 [border-top-style:none] [border-right-style:none] [border-bottom-style:solid] [border-left-style:none]">
      <div className="flex w-full items-center justify-between">
        <Link
          to="/"
          aria-label="BuyBak home"
          className="inline-flex h-11 flex-[0_0_auto] items-center gap-3 focus-visible:rounded-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-greens-5-2a-788"
        >
          <div
            className="relative h-11 w-[63.22px] bg-[url(https://c.animaapp.com/lRTzVt0W/img/image--buybak--12@2x.png)] bg-cover bg-[50%_50%]"
            aria-hidden="true"
          />
          <p className="relative w-fit whitespace-nowrap text-2xl font-normal leading-8 tracking-[-0.60px] text-transparent [font-family:'Figtree',Helvetica]">
            <span className="font-semibold tracking-[-0.14px] text-[#52a788]">
              Buy
            </span>
            <span className="font-bold tracking-[-0.14px] text-[#2e6099]">
              Bak
            </span>
          </p>
        </Link>
        <nav
          aria-label="Primary navigation"
          className="inline-flex h-11 flex-[0_0_auto] items-center gap-8"
        >
          {navItems.map((item) =>
            item.type === "anchor" ? (
              <a
                key={item.label}
                href={item.href}
                className="inline-flex flex-[0_0_auto] items-center justify-center gap-2.5 focus-visible:rounded-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-greens-5-2a-788"
              >
                <span className="relative mt-[-1.00px] w-fit whitespace-nowrap text-center font-web-body text-[length:var(--web-body-font-size)] font-[number:var(--web-body-font-weight)] leading-[var(--web-body-line-height)] tracking-[var(--web-body-letter-spacing)] text-neutrals-7a-8a-85 [font-style:var(--web-body-font-style)]">
                  {item.label}
                </span>
              </a>
            ) : (
              <Link
                key={item.label}
                to={item.href}
                aria-current={isActiveRoute(item.href) ? "page" : undefined}
                className="inline-flex flex-[0_0_auto] items-center justify-center gap-2.5 focus-visible:rounded-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-greens-5-2a-788"
              >
                <span className="relative mt-[-1.00px] w-fit whitespace-nowrap text-center font-web-body text-[length:var(--web-body-font-size)] font-[number:var(--web-body-font-weight)] leading-[var(--web-body-line-height)] tracking-[var(--web-body-letter-spacing)] text-neutrals-7a-8a-85 [font-style:var(--web-body-font-style)]">
                  {item.label}
                </span>
              </Link>
            ),
          )}

          <Link
            to="/contact"
            aria-current={isActiveRoute("/contact") ? "page" : undefined}
            className="inline-flex flex-[0_0_auto] items-center justify-center rounded-[100px] border border-solid border-greens-5-2a-788 bg-neutralsfafbfa px-8 py-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-greens-5-2a-788"
          >
            <span className="relative mt-[-1.00px] w-fit whitespace-nowrap text-center font-web-body text-[length:var(--web-body-font-size)] font-[number:var(--web-body-font-weight)] leading-[var(--web-body-line-height)] tracking-[var(--web-body-letter-spacing)] text-greens-2d-6a-4f [font-style:var(--web-body-font-style)]">
              Contact Us
            </span>
          </Link>
          <Link
            to="/preregister"
            aria-current={isActiveRoute("/preregister") ? "page" : undefined}
            className="inline-flex flex-[0_0_auto] items-center justify-center rounded-[100px] bg-greens-2d-6a-4f px-8 py-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-greens-5-2a-788"
          >
            <span className="relative mt-[-1.00px] w-fit whitespace-nowrap text-center font-web-body text-[length:var(--web-body-font-size)] font-[number:var(--web-body-font-weight)] leading-[var(--web-body-line-height)] tracking-[var(--web-body-letter-spacing)] text-neutralsffffff [font-style:var(--web-body-font-style)]">
              Pre-register
            </span>
          </Link>
        </nav>
      </div>
    </header>
  );
};
