import { useId, useState } from "react";

export const Frame8Subsection = (): JSX.Element => {
  const [quantity, setQuantity] = useState(1);
  const maxQuantity = 50;
  const minQuantity = 1;
  const headingId = useId();
  const availabilityId = useId();

  const adjustQuantity = (delta: number) => {
    setQuantity((current) =>
      Math.min(maxQuantity, Math.max(minQuantity, current + delta)),
    );
  };

  const decrementDisabled = quantity <= minQuantity;
  const incrementDisabled = quantity >= maxQuantity;

  return (
    <section
      aria-labelledby={headingId}
      aria-describedby={availabilityId}
      className="flex items-center justify-center gap-5 relative self-stretch w-full flex-[0_0_auto]"
    >
      <div className="flex flex-col items-start gap-3 relative flex-1 grow">
        <h2
          id={headingId}
          className="relative w-fit mt-[-1.00px] font-web-small font-[number:var(--web-small-font-weight)] text-blues-0d-2137 text-[length:var(--web-small-font-size)] tracking-[var(--web-small-letter-spacing)] leading-[var(--web-small-line-height)] whitespace-nowrap [font-style:var(--web-small-font-style)]"
        >
          SELECT QUANTITY
        </h2>
        <p
          id={availabilityId}
          className="relative w-fit font-web-small font-[number:var(--web-small-font-weight)] text-neutrals-7a-8a-85 text-[length:var(--web-small-font-size)] tracking-[var(--web-small-letter-spacing)] leading-[var(--web-small-line-height)] whitespace-nowrap [font-style:var(--web-small-font-style)]"
        >
          50 AVAILABLE
        </p>
      </div>
      <div
        className="inline-flex items-center gap-10 relative self-stretch flex-[0_0_auto]"
        role="group"
        aria-label="Quantity selector"
      >
        <button
          type="button"
          aria-label="Decrease quantity"
          aria-controls={headingId}
          aria-disabled={decrementDisabled}
          disabled={decrementDisabled}
          onClick={() => adjustQuantity(-1)}
          className="relative w-10 h-10 aspect-[1] shrink-0 disabled:cursor-not-allowed"
        >
          <img
            className="block w-10 h-10 aspect-[1]"
            alt=""
            aria-hidden="true"
            src="https://c.animaapp.com/lRTzVt0W/img/frame-31.svg"
          />
        </button>
        <output
          aria-live="polite"
          aria-atomic="true"
          className="relative w-fit font-web-h4 font-[number:var(--web-h4-font-weight)] text-blues-0d-2137 text-[length:var(--web-h4-font-size)] tracking-[var(--web-h4-letter-spacing)] leading-[var(--web-h4-line-height)] whitespace-nowrap [font-style:var(--web-h4-font-style)]"
        >
          {quantity}
        </output>
        <button
          type="button"
          aria-label="Increase quantity"
          aria-controls={headingId}
          aria-disabled={incrementDisabled}
          disabled={incrementDisabled}
          onClick={() => adjustQuantity(1)}
          className="relative w-10 h-10 aspect-[1] shrink-0 disabled:cursor-not-allowed"
        >
          <img
            className="block w-10 h-10 aspect-[1]"
            alt=""
            aria-hidden="true"
            src="https://c.animaapp.com/lRTzVt0W/img/frame-30.svg"
          />
        </button>
      </div>
    </section>
  );
};
