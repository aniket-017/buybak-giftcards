import { Frame6Subsection } from "../CheckoutWrapper/sections/Frame6Subsection";
import { Frame7Subsection } from "../CheckoutWrapper/sections/Frame7Subsection";
import { Frame8Subsection } from "../CheckoutWrapper/sections/Frame8Subsection";
import { Frame9Subsection } from "../CheckoutWrapper/sections/Frame9Subsection";
import { Frame10Subsection } from "../CheckoutWrapper/sections/Frame10Subsection";
import { Frame11Subsection } from "../CheckoutWrapper/sections/Frame11Subsection";
import { FooterWrapperSubsection } from "../GiftCards/sections/FooterWrapperSubsection";
import { Frame12Subsection } from "../GiftCards/sections/Frame12Subsection";
import { Frame13Subsection } from "../GiftCards/sections/Frame13Subsection";
import { HeaderWrapperSubsection } from "../GiftCards/sections/HeaderWrapperSubsection";
import { TabsWrapperSubsection } from "../GiftCards/sections/TabsWrapperSubsection";
import { DivSubsection } from "./sections/DivSubsection";
import { DivWrapperSubsection } from "./sections/DivWrapperSubsection";
import { Frame1Subsection } from "./sections/Frame1Subsection";
import { Frame2Subsection } from "./sections/Frame2Subsection";
import { Frame3Subsection } from "./sections/Frame3Subsection";
import { Frame4Subsection } from "./sections/Frame4Subsection";
import { Frame5Subsection } from "./sections/Frame5Subsection";
import { FrameSubsection } from "./sections/FrameSubsection"; // 1. Landing: Spend on Supplies.....
import { FrameWrapperSubsection } from "./sections/FrameWrapperSubsection"; // 2. Gift Cards With Loyalty Stock
import { HeaderSubsection } from "./sections/HeaderSubsection";
import { SectionComponentNodeSubsection } from "./sections/SectionComponentNodeSubsection";

export const Homepage = (): JSX.Element => {
  const legalLinks = [
    "Terms of Service",
    "Privacy Policy",
    "Legal & Compliance",
  ];

  const sitemapLinks = ["Home", "About", "Login"];

  return (
    <main
      className="flex min-h-screen w-full flex-col items-start relative bg-neutralsffffff overflow-hidden"
      data-model-id="13:700"
    >


      <HeaderWrapperSubsection />

      {/******************* Spend on supplies. **************/}

      <FrameSubsection />

      {/************** Gift Cards with Loyalty Stock ***************/}

      <section className="flex flex-col items-center justify-center gap-20 p-[200px] relative self-stretch w-full flex-[0_0_auto] z-[4] bg-neutralsffffff">
        <FrameWrapperSubsection />

      {/************** Lowes, HomeDepot, Staples ***************/}

        <DivWrapperSubsection />
        <div className="flex items-center justify-center gap-10 relative self-stretch w-full flex-[0_0_auto]">
          <div className="relative w-fit [font-family:'Figtree',Helvetica] font-bold text-blues-1a-3a-5c text-2xl tracking-[0] leading-[normal]">
            COMING SOON:
          </div>
          <img
            className="relative w-[220px] h-10 aspect-[5.5]"
            alt="Brand logo"
            src="https://c.animaapp.com/lRTzVt0W/img/image-3-1@2x.png"
          />
        </div>
        {/*
        <Frame6Subsection />
        <Frame7Subsection />
        <Frame8Subsection />
        <Frame9Subsection />
        <Frame10Subsection />
        <Frame11Subsection />
        <Frame12Subsection />
        <Frame13Subsection />
        <TabsWrapperSubsection />
        */}
      </section>

      {/*****************  Same Supplies  *****************/}

      <section className="flex flex-col items-center justify-center gap-20 p-[200px] relative self-stretch w-full flex-[0_0_auto] z-[3] bg-neutralsfafbfa">
        <div className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto]">
          <DivSubsection />
          <SectionComponentNodeSubsection />
        </div>
      </section>

      {/*****************  FAQ *****************/}

      <section className="flex flex-col items-center justify-center gap-10 p-[200px] relative self-stretch w-full flex-[0_0_auto] z-[2] bg-neutralsffffff">
        <Frame1Subsection />
        <Frame2Subsection />
      </section>

      {/*****************  You're already ...  *****************/}

      <Frame3Subsection />

      {/*****************  Footer   *****************/}

      <div className="w-full max-w-[2728px] z-0 overflow-y-auto flex flex-col items-start relative flex-[0_0_auto]">
        <footer className="flex flex-col items-center justify-center gap-10 p-10 relative self-stretch w-full flex-[0_0_auto] bg-greens-1b-4332">
          <div className="flex items-start justify-between relative self-stretch w-full flex-[0_0_auto]">
            <Frame4Subsection />
            <nav
              aria-label="Legal"
              className="inline-flex flex-col items-start gap-2.5 relative flex-[0_0_auto]"
            >
              <div className="mt-[-1.00px] font-[number:var(--web-body-font-weight)] text-bluesebf-3fa relative w-fit font-web-body text-[length:var(--web-body-font-size)] tracking-[var(--web-body-letter-spacing)] leading-[var(--web-body-line-height)] whitespace-nowrap [font-style:var(--web-body-font-style)]">
                Legal
              </div>
              {legalLinks.map((item) => (
                <a
                  key={item}
                  href="#"
                  className="relative w-fit font-web-body font-[number:var(--web-body-font-weight)] text-greensa-8d-3c-5 text-[length:var(--web-body-font-size)] tracking-[var(--web-body-letter-spacing)] leading-[var(--web-body-line-height)] whitespace-nowrap [font-style:var(--web-body-font-style)]"
                >
                  {item}
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
              {sitemapLinks.map((item) => (
                <a
                  key={item}
                  href="#"
                  className="relative w-fit font-web-body font-[number:var(--web-body-font-weight)] text-greensa-8d-3c-5 text-[length:var(--web-body-font-size)] tracking-[var(--web-body-letter-spacing)] leading-[var(--web-body-line-height)] whitespace-nowrap [font-style:var(--web-body-font-style)]"
                >
                  {item}
                </a>
              ))}
            </nav>
            <div className="inline-flex flex-col items-start gap-2.5 relative flex-[0_0_auto]">
              <div className="relative w-fit mt-[-1.00px] font-web-body font-[number:var(--web-body-font-weight)] text-bluesebf-3fa text-[length:var(--web-body-font-size)] tracking-[var(--web-body-letter-spacing)] leading-[var(--web-body-line-height)] whitespace-nowrap [font-style:var(--web-body-font-style)]">
                Get in Touch
              </div>
              <button
                type="button"
                className="all-[unset] box-border px-5 py-2 bg-greens-5-2a-788 rounded-[16777200px] inline-flex items-center justify-center gap-2.5 relative flex-[0_0_auto] cursor-pointer"
                aria-label="Contact us"
              >
                <div className="relative w-fit mt-[-1.00px] font-web-body font-[number:var(--web-body-font-weight)] text-neutralsffffff text-[length:var(--web-body-font-size)] text-center tracking-[var(--web-body-letter-spacing)] leading-[var(--web-body-line-height)] whitespace-nowrap [font-style:var(--web-body-font-style)]">
                  Contact Us
                </div>
              </button>
            </div>
          </div>
          <div className="relative self-stretch w-full h-px bg-greens-2d-6a-4f" />
          {/*
          <Frame5Subsection />
          <FooterWrapperSubsection />
          */}
        </footer>
      </div>
    </main>
  );
};
