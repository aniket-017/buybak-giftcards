const steps = [
  { id: "payment-details", label: "PAYMENT DETAILS", active: true },
  { id: "review-and-confirm", label: "REVIEW AND CONFIRM", active: false },
];

export const Frame6Subsection = (): JSX.Element => {
  return (
    <section
      className="flex flex-col items-start gap-10 relative self-stretch w-full flex-[0_0_auto]"
      aria-labelledby="checkout-heading"
    >
      <div className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto]">
        <div className="inline-flex items-center gap-2 relative flex-[0_0_auto]">
          <div
            className="relative w-[63.22px] h-11 opacity-75 bg-[url(https://c.animaapp.com/lRTzVt0W/img/image--buybak--21@2x.png)] bg-cover bg-[50%_50%]"
            aria-hidden="true"
          />
          <h2
            id="checkout-heading"
            className="relative w-fit mt-[-1.00px] font-web-h2 font-[number:var(--web-h2-font-weight)] text-greens-1b-4332 text-[length:var(--web-h2-font-size)] tracking-[var(--web-h2-letter-spacing)] leading-[var(--web-h2-line-height)] [font-style:var(--web-h2-font-style)]"
          >
            Checkout
          </h2>
        </div>
        <button
          type="button"
          aria-label="Close checkout"
          className="relative flex h-10 w-10 items-center justify-center"
        >
          <img
            className="relative w-10 h-10 aspect-[1]"
            alt=""
            aria-hidden="true"
            src="https://c.animaapp.com/lRTzVt0W/img/iconamoon-close-5.svg"
          />
        </button>
      </div>
      <nav
        aria-label="Checkout steps"
        className="flex items-center gap-10 relative self-stretch w-full flex-[0_0_auto]"
      >
        {steps.map((step) => (
          <div
            key={step.id}
            aria-current={step.active ? "step" : undefined}
            className={`relative w-fit mt-[-1.00px] text-[length:var(--web-small-font-size)] tracking-[var(--web-small-letter-spacing)] leading-[var(--web-small-line-height)] whitespace-nowrap [font-style:var(--web-small-font-style)] font-web-small font-[number:var(--web-small-font-weight)] ${
              step.active ? "text-blues-0d-2137" : "text-neutralsa-8b-0ad"
            }`}
          >
            {step.label}
          </div>
        ))}
      </nav>
    </section>
  );
};
