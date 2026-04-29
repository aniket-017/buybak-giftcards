export const DivSubsection = (): JSX.Element => {
  const headingSegments = [
    { text: "Same supplies. Same stores. ", className: "text-[#0d2137]" },
    { text: "Better ", className: "text-[#52a788]" },
    { text: "deal.", className: "text-[#2e6099]" },
  ];

  const bodySegments = [
    {
      text: "You're spending it either way. With BuyBak, every purchase quietly builds a stock portfolio — ",
      className: "text-[#5a6662]",
    },
    {
      text: "rewards that grow with you",
      className: "text-[#5a6662]",
    },
    {
      text: ".",
      className: "text-[#5a6662]",
    },
  ];

  return (
    <section
      className="relative flex w-[600px] flex-col items-start gap-5"
      aria-labelledby="div-subsection-heading"
    >
      <h2
        id="div-subsection-heading"
        className="relative mt-[-1.00px] self-stretch font-web-h2 text-[length:var(--web-h2-font-size)] font-[number:var(--web-h2-font-weight)] leading-[var(--web-h2-line-height)] tracking-[var(--web-h2-letter-spacing)] text-transparent [font-style:var(--web-h2-font-style)]"
      >
        {headingSegments.map((segment, index) => (
          <span
            key={`${segment.text}-${index}`}
            className={`${segment.className} font-web-h2 text-[length:var(--web-h2-font-size)] font-[number:var(--web-h2-font-weight)] leading-[var(--web-h2-line-height)] tracking-[var(--web-h2-letter-spacing)] [font-style:var(--web-h2-font-style)]`}
          >
            {segment.text}
          </span>
        ))}
      </h2>
      <p className="relative self-stretch font-web-body text-[length:var(--web-body-font-size)] font-[number:var(--web-body-font-weight)] leading-[var(--web-body-line-height)] tracking-[var(--web-body-letter-spacing)] text-neutrals-5a-6662 [font-style:var(--web-body-font-style)]">
        {bodySegments.map((segment, index) => (
          <span
            key={`${segment.text}-${index}`}
            className={`${segment.className} font-web-body text-[length:var(--web-body-font-size)] font-[number:var(--web-body-font-weight)] leading-[var(--web-body-line-height)] tracking-[var(--web-body-letter-spacing)] [font-style:var(--web-body-font-style)]`}
          >
            {segment.text}
          </span>
        ))}
      </p>
    </section>
  );
};
