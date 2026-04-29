const footerLines = [
  {
    id: "copyright",
    as: "small",
    text: "© 2026 BUYBAK. ALL RIGHTS RESERVED.",
    className:
      "relative self-stretch mt-[-1.00px] font-web-small font-[number:var(--web-small-font-weight)] text-greensa-8d-3c-5 text-[length:var(--web-small-font-size)] text-center tracking-[var(--web-small-letter-spacing)] leading-[var(--web-small-line-height)] [font-style:var(--web-small-font-style)]",
  },
  {
    id: "address",
    as: "p",
    text: "123 Construction Way, Suite 500, Building City, BC 12345",
    className:
      "relative self-stretch font-web-body font-[number:var(--web-body-font-weight)] text-greensa-8d-3c-5 text-[length:var(--web-body-font-size)] text-center tracking-[var(--web-body-letter-spacing)] leading-[var(--web-body-line-height)] [font-style:var(--web-body-font-style)]",
  },
  {
    id: "disclaimer",
    as: "p",
    text: "Gift card purchases and fractional stock offerings are subject to availability and terms. All investing involves risk. Please consult with a financial advisor regarding investment decisions.",
    className:
      "relative self-stretch font-web-body font-[number:var(--web-body-font-weight)] text-greensa-8d-3c-5 text-[length:var(--web-body-font-size)] text-center tracking-[var(--web-body-letter-spacing)] leading-[var(--web-body-line-height)] [font-style:var(--web-body-font-style)]",
  },
] as const;

export const Frame5Subsection = (): JSX.Element => {
  return (
    <footer
      className="flex flex-col w-[1001px] max-w-full items-center justify-center gap-3 relative flex-[0_0_auto]"
      aria-label="Footer details"
    >
      {footerLines.map((item) => {
        if (item.as === "small") {
          return (
            <small key={item.id} className={item.className}>
              {item.text}
            </small>
          );
        }

        return (
          <p key={item.id} className={item.className}>
            {item.text}
          </p>
        );
      })}
    </footer>
  );
};
