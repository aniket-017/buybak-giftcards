import { type JSX, useId, useMemo, useState } from "react";
import { FooterWrapperSubsection } from "./sections/FooterWrapperSubsection";
import { Frame12Subsection } from "./sections/Frame12Subsection";
import { Frame13Subsection } from "./sections/Frame13Subsection";
import { HeaderWrapperSubsection } from "./sections/HeaderWrapperSubsection";
import { TabsWrapperSubsection } from "./sections/TabsWrapperSubsection";

export const GiftCards = (): JSX.Element => {
  const searchId = useId();
  const sortButtonId = useId();
  const [searchQuery, setSearchQuery] = useState("");

  const searchLabel = "Search gift cards";
  const sortLabel = useMemo(() => "SORT BY STORE", []);

  return (
    <div
      className="flex min-h-screen flex-col items-start relative bg-neutralsffffff overflow-x-hidden"
      data-model-id="27:2905"
    >
      <HeaderWrapperSubsection />
      <main
        className="flex flex-col items-start justify-center gap-20 p-20 relative self-stretch w-full flex-[0_0_auto] z-[1] border-t [border-top-style:solid] border-neutralse-8ebe-9 bg-[linear-gradient(117deg,rgba(240,247,244,1)_0%,rgba(242,248,246,1)_8%,rgba(245,250,248,1)_17%,rgba(247,251,249,1)_25%,rgba(250,252,251,1)_33%,rgba(252,254,253,1)_42%,rgba(255,255,255,1)_50%,rgba(252,253,254,1)_60%,rgba(249,252,253,1)_70%,rgba(246,250,251,1)_80%,rgba(243,249,250,1)_90%,rgba(240,247,249,1)_100%)]"
        aria-label="Gift cards content"
      >
        <Frame12Subsection />
        <div className="flex flex-col w-[230px] h-[60px] items-start gap-5 p-5 absolute top-[414px] left-[1418px] z-[4] rounded-[20px] max-[1720px]:left-auto max-[1720px]:right-20 max-[1100px]:static max-[1100px]:self-end max-[1100px]:w-fit max-[1100px]:h-auto max-[1100px]:p-0">
          <button
            id={sortButtonId}
            type="button"
            aria-label={sortLabel}
            className="flex items-center justify-end gap-2 relative self-stretch w-full flex-[0_0_auto] mb-[-4.00px] cursor-pointer"
          >
            <p className="relative w-fit font-web-small font-[number:var(--web-small-font-weight)] text-blues-2e-6099 text-[length:var(--web-small-font-size)] text-center tracking-[var(--web-small-letter-spacing)] leading-[var(--web-small-line-height)] whitespace-nowrap [font-style:var(--web-small-font-style)]">
              <span className="font-[number:var(--web-small-font-weight)] font-web-small [font-style:var(--web-small-font-style)] tracking-[var(--web-small-letter-spacing)] leading-[var(--web-small-line-height)] text-[length:var(--web-small-font-size)]">
                SORT BY{" "}
              </span>
              <span className="font-web-small font-[number:var(--web-small-font-weight)] text-[#2e6099] text-[length:var(--web-small-font-size)] tracking-[var(--web-small-letter-spacing)] [font-style:var(--web-small-font-style)] leading-[var(--web-small-line-height)]">
                STORE
              </span>
            </p>
            <img
              className="relative w-6 h-6 aspect-[1]"
              alt=""
              aria-hidden="true"
              src="https://c.animaapp.com/lRTzVt0W/img/iconamoon-arrow-down-2-duotone-5.svg"
            />
          </button>
        </div>
        <form
          className="flex items-center gap-5 px-20 py-5 relative self-stretch w-full flex-[0_0_auto] z-[3] bg-neutralsfafbfa rounded-[100px] border border-solid border-neutrals-7a-8a-85"
          role="search"
          onSubmit={(event) => event.preventDefault()}
        >
          <label htmlFor={searchId} className="sr-only">
            {searchLabel}
          </label>
          <img
            className="relative w-6 h-6 aspect-[1]"
            alt=""
            aria-hidden="true"
            src="https://c.animaapp.com/lRTzVt0W/img/iconamoon-search-bold.svg"
          />
          <input
            id={searchId}
            aria-label={searchLabel}
            value={searchQuery}
            onChange={(event) => setSearchQuery(event.target.value)}
            className="relative flex-1 min-w-0 mt-[-1.00px] font-web-body font-[number:var(--web-body-font-weight)] text-neutrals-7a-8a-85 text-[length:var(--web-body-font-size)] tracking-[var(--web-body-letter-spacing)] leading-[var(--web-body-line-height)] [font-style:var(--web-body-font-style)] [background:transparent] border-[none] p-0 placeholder:text-neutrals-7a-8a-85"
            placeholder="Search"
            type="search"
            name="search"
            autoComplete="off"
          />
        </form>
        <TabsWrapperSubsection />
        <Frame13Subsection />
        <section
          className="flex items-center justify-center gap-10 relative self-stretch w-full flex-[0_0_auto] z-0"
          aria-label="Coming soon brands"
        >
          <div className="relative w-fit [font-family:'Figtree',Helvetica] font-bold text-blues-1a-3a-5c text-2xl tracking-[0] leading-[normal]">
            COMING SOON:
          </div>
          <img
            className="relative w-[220px] h-10 aspect-[5.5]"
            alt="Coming soon brand logos"
            src="https://c.animaapp.com/lRTzVt0W/img/image-3-1@2x.png"
          />
        </section>
      </main>
      <FooterWrapperSubsection />
    </div>
  );
};
