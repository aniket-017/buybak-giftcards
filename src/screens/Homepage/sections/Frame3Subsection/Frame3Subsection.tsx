const actions = [
  {
    label: "Browse Gift Cards",
    type: "button" as const,
    variant: "primary" as const,
  },
  {
    label: "Learn More",
    type: "button" as const,
    variant: "secondary" as const,
  },
];

export const Frame3Subsection = (): JSX.Element => {
  return (
    <section
      aria-labelledby="frame3-subsection-heading"
      className="relative z-[1] flex w-full flex-[0_0_auto] self-stretch bg-neutralsfafbfa"
    >
      <div className="relative flex w-full flex-col items-center justify-center gap-10 p-[200px] max-md:px-8 max-md:py-20">
        <h2
          id="frame3-subsection-heading"
          className="relative text-center w-fit mt-[-1.00px] [font-family:'Source_Serif_4',Helvetica] font-medium text-blues-0d-2137 text-[60px] tracking-[0] leading-[normal]"
        >
          You&apos;re already spending the money. Make it work for you.
        </h2>
        <div
          className="relative inline-flex flex-[0_0_auto] items-start gap-5 max-sm:flex-col max-sm:items-stretch"
          role="group"
          aria-label="Call to action"
        >
          {actions.map((action) => {
            const isPrimary = action.variant === "primary";

            return (
              <button
                key={action.label}
                type={action.type}
                className={
                  isPrimary
                    ? "relative inline-flex flex-[0_0_auto] items-center justify-center rounded-[100px] bg-greens-2d-6a-4f px-10 py-5 transition-opacity hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-greens-2d-6a-4f"
                    : "all-[unset] box-border relative inline-flex flex-[0_0_auto] items-center justify-center rounded-[100px] border border-solid border-greens-5-2a-788 bg-neutralsfafbfa px-10 py-5 transition-colors hover:bg-greensd-4e-9e-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-greens-2d-6a-4f"
                }
                aria-label={action.label}
              >
                <span
                  className={
                    isPrimary
                      ? "relative mt-[-1.00px] w-fit whitespace-nowrap text-center font-web-body text-[length:var(--web-body-font-size)] font-[number:var(--web-body-font-weight)] leading-[var(--web-body-line-height)] tracking-[var(--web-body-letter-spacing)] text-neutralsffffff [font-style:var(--web-body-font-style)]"
                      : "relative mt-[-1.00px] w-fit whitespace-nowrap text-center font-web-body text-[length:var(--web-body-font-size)] font-[number:var(--web-body-font-weight)] leading-[var(--web-body-line-height)] tracking-[var(--web-body-letter-spacing)] text-greens-2d-6a-4f [font-style:var(--web-body-font-style)]"
                  }
                >
                  {action.label}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};
