export const Frame1Subsection = (): JSX.Element => {
  return (
    <header
      className="flex flex-col items-center gap-3 relative self-stretch w-full flex-[0_0_auto]"
      aria-labelledby="homepage-faq-heading"
    >
      <h2
        id="homepage-faq-heading"
        className="relative w-fit mt-[-1.00px] font-web-h2 font-[number:var(--web-h2-font-weight)] text-blues-0d-2137 text-[length:var(--web-h2-font-size)] tracking-[var(--web-h2-letter-spacing)] leading-[var(--web-h2-line-height)] [font-style:var(--web-h2-font-style)] text-center"
      >
        Frequently Asked Questions
      </h2>
      <p className="relative w-fit font-web-body font-[number:var(--web-body-font-weight)] text-neutrals-7a-8a-85 text-[length:var(--web-body-font-size)] tracking-[var(--web-body-letter-spacing)] leading-[var(--web-body-line-height)] whitespace-nowrap [font-style:var(--web-body-font-style)] text-center">
        Everything you need to know before you BuyBak.
      </p>
    </header>
  );
};
