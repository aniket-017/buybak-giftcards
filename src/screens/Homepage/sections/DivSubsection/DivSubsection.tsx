export const DivSubsection = (): JSX.Element => {
  const headingSegments = [
    { text: "Same supplies. Same stores. ", className: "text-[#0d2137]" },
    { text: "Better ", className: "text-[#52a788]" },
    { text: "Deal.", className: "text-[#2e6099]" },
  ];

  const bodySegments = [
    {
      text: " ",
      className: "text-[#5a6662]",
    },
    {
      text: " ",
      className: "text-[#5a6662]",
    },
    {
      text: " ",
      className: "text-[#5a6662]",
    },
  ];


/****
          <h1
            id="frame-subsection-heading"
            className="relative w-[1000px] mt-[-1.00px] [font-family:'Source_Serif_4',Helvetica] font-medium text-blues-0d-2137 text-[60px] tracking-[0] leading-[normal]"
            // ORIG className={`${segment.className} font-web-h2 text-[length:var(--web-h2-font-size)] font-[number:var(--web-h2-font-weight)] leading-[var(--web-h2-line-height)] tracking-[var(--web-h2-letter-spacing)] [font-style:var(--web-h2-font-style)]`}
          >
            {content.title}
          </h1>
          <p className="relative w-fit font-web-body font-[number:var(--web-body-font-weight)] text-neutrals-7a-8a-85 text-[30px] tracking-[var(--web-body-letter-spacing)] leading-[var(--web-body-line-height)] whitespace-nowrap [font-style:var(--web-body-font-style)]">
            {content.description}
          </p>

******/

  return (
    <section
      className="relative flex w-[900px] flex-col items-start gap-5"
      aria-labelledby="div-subsection-heading"
    >
      <h2
        id="div-subsection-heading"
        className="relative mt-[-1.00px] self-stretch font-web-h2 text-[length:var(--web-h2-font-size)] font-[number:var(--web-h2-font-weight)] leading-[var(--web-h2-line-height)] tracking-[var(--web-h2-letter-spacing)] text-transparent [font-style:var(--web-h2-font-style)]"
      >
        {headingSegments.map((segment, index) => (
          <span
            key={`${segment.text}-${index}`}
            className={`${segment.className} text-[60px] [font-family:'Source_Serif_4',Helvetica] font-medium leading-[var(--web-h2-line-height)] tracking-[var(--web-h2-letter-spacing)] `}
          >
            {segment.text}
          </span>
        ))}
      </h2>
      <p className="relative self-stretch font-web-body text-[length:var(--web-body-font-size)] font-[number:var(--web-body-font-weight)] leading-[var(--web-body-line-height)] tracking-[var(--web-body-letter-spacing)] text-neutrals-5a-6662 [font-style:var(--web-body-font-style)]">
        {bodySegments.map((segment, index) => (
          <span
            key={`${segment.text}-${index}`}
            className={`${segment.className} text-[30px] font-web-body text-[length:var(--web-body-font-size)] font-[number:var(--web-body-font-weight)] leading-[var(--web-body-line-height)] tracking-[var(--web-body-letter-spacing)] [font-style:var(--web-body-font-style)]`}
          >
            {segment.text}
          </span>
        ))}
      </p>
    </section>
  );
};
