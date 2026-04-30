import { Link, useLocation } from "react-router-dom";

const navigationItems = [
  { label: "Benefits", to: "/homepage", variant: "text" as const },
  { label: "Gift Cards", to: "/gift-cards", variant: "text" as const },
  { label: "Contact Us", to: "/contact", variant: "outline" as const },
  { label: "Pre-register", to: "/preregister", variant: "solid" as const },
];

export const HeaderWrapperSubsection = (): JSX.Element => {
  const location = useLocation();

  return (
    <header className="relative z-[2] flex h-[100px] w-full self-stretch items-center justify-between border-b border-[#e8ebe9] bg-neutralsffffff px-10 py-0 [border-top-style:none] [border-right-style:none] [border-bottom-style:solid] [border-left-style:none]">
      <Link
        aria-label="BuyBak homepage"
        className="inline-flex h-11 flex-[0_0_auto] items-center gap-3"
        to="/homepage"
      >
        <div
          aria-hidden="true"
          className="relative h-11 w-[73.22px] bg-[url(https://c.animaapp.com/lRTzVt0W/img/image--buybak--12@2x.png)] bg-cover bg-[50%_50%]"
        />
        <p className="relative w-fit whitespace-nowrap text-2xl font-normal leading-8 tracking-[-0.60px] text-transparent [font-family:'Figtree',Helvetica]">
          <span className="font-semibold tracking-[-0.14px] relative top-3 text-[30px] text-[#52a788]">
            Buy
          </span>
          <span className="font-semibold tracking-[-0.14px] relative top-3 text-[30px] text-[#2e6099]">
            Bak
          </span>
        </p>
      </Link>
      <nav
        aria-label="Primary"
        className="inline-flex h-11 flex-[0_0_auto] items-center gap-8"
      >
        {navigationItems.map((item) => {
          const isActive = location.pathname === item.to;

          if (item.variant === "solid") {
            return (
              <Link
                key={item.label}
                aria-current={isActive ? "page" : undefined}
                className="inline-flex flex-[0_0_auto] items-center justify-center rounded-[100px] bg-greens-2d-6a-4f px-8 py-2"
                to={item.to}
              >
                <span className="relative mt-[-1.00px] w-fit whitespace-nowrap text-center font-web-body text-[length:var(--web-body-font-size)] font-[number:var(--web-body-font-weight)] leading-[var(--web-body-line-height)] tracking-[var(--web-body-letter-spacing)] text-neutralsffffff [font-style:var(--web-body-font-style)]">
                  {item.label}
                </span>
              </Link>
            );
          }

          if (item.variant === "outline") {
            return (
              <Link
                key={item.label}
                aria-current={isActive ? "page" : undefined}
                className="inline-flex flex-[0_0_auto] items-center justify-center rounded-[100px] border border-solid border-greens-5-2a-788 bg-neutralsfafbfa px-8 py-2"
                to={item.to}
              >
                <span className="relative mt-[-1.00px] w-fit whitespace-nowrap text-center font-web-body text-[length:var(--web-body-font-size)] font-[number:var(--web-body-font-weight)] leading-[var(--web-body-line-height)] tracking-[var(--web-body-letter-spacing)] text-greens-2d-6a-4f [font-style:var(--web-body-font-style)]">
                  {item.label}
                </span>
              </Link>
            );
          }

          return (
            <Link
              key={item.label}
              aria-current={isActive ? "page" : undefined}
              className="inline-flex flex-[0_0_auto] items-center justify-center gap-2.5"
              to={item.to}
            >
              <span className="relative mt-[-1.00px] w-fit whitespace-nowrap text-center font-web-body text-[25px] text-[length:var(--web-body-font-size)] font-[number:var(--web-body-font-weight)] leading-[var(--web-body-line-height)] tracking-[var(--web-body-letter-spacing)] text-neutrals-7a-8a-85 [font-style:var(--web-body-font-style)]">
                {item.label}
              </span>
            </Link>
          );
        })}
      </nav>
    </header>
  );
};
