export const Frame12Subsection = (): JSX.Element => {
  const headingId = "gift-cards-heading";
  const descriptionId = "gift-cards-description";

  return (
    <section
      aria-labelledby={headingId}
      aria-describedby={descriptionId}
      className="flex flex-col items-start gap-3 relative self-stretch w-full flex-[0_0_auto] z-[5]"
    >
    <h1
        id={headingId}
            className="relative w-[1000px] mt-[-1.00px] [font-family:'Source_Serif_4',Helvetica] font-medium text-blues-0d-2137 text-[60px] tracking-[0] leading-[normal]"
    >
        Gift Cards with Loyalty Stock
      </h1>
      <p
        id={descriptionId}
        className="relative w-fit font-web-body font-[number:var(--web-body-font-weight)] text-neutrals-7a-8a-85 text-[65px] tracking-[var(--web-body-letter-spacing)] leading-[var(--web-body-line-height)] whitespace-nowrap [font-style:var(--web-body-font-style)]"
      >
        Guaranteed cards. Instant delivery. Real stock.
      </p>
    </section>
  );
};

        {/*
        className="relative w-fit mt-[-1.00px] font-web-h1 font-[number:var(--web-h1-font-weight)] text-blues-0d-2137 text-[length:var(--web-h1-font-size)] tracking-[var(--web-h1-letter-spacing)] leading-[var(--web-h1-line-height)] [font-style:var(--web-h1-font-style)]"
        */}
