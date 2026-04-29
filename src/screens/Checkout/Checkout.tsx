import { Link } from "react-router-dom";

export const Checkout = (): JSX.Element => {
  const deliveryEmail = "your@email.com";

  return (
    <main
      className="flex min-h-screen w-full items-center justify-center p-4 sm:p-6 md:p-8"
      aria-labelledby="checkout-confirmation-title"
    >
      <section
        className="flex h-[900px] min-w-[671px] flex-col items-center justify-between border border-solid border-neutralse-8ebe-9 bg-[linear-gradient(117deg,rgba(240,247,244,1)_0%,rgba(242,248,246,1)_8%,rgba(245,250,248,1)_17%,rgba(247,251,249,1)_25%,rgba(250,252,251,1)_33%,rgba(252,254,253,1)_42%,rgba(255,255,255,1)_50%,rgba(252,253,254,1)_60%,rgba(249,252,253,1)_70%,rgba(246,250,251,1)_80%,rgba(243,249,250,1)_90%,rgba(240,247,249,1)_100%)] p-20 shadow-card-shadow"
        data-model-id="61:10069"
        aria-describedby="checkout-confirmation-description"
      >
        <header className="flex w-full flex-col items-start gap-10">
          <div className="flex w-full items-center justify-between">
            <div className="inline-flex items-center gap-2">
              <div
                className="relative h-11 w-[63.22px] bg-[url(https://c.animaapp.com/lRTzVt0W/img/image--buybak--21@2x.png)] bg-cover bg-[50%_50%] opacity-75"
                aria-hidden="true"
              />
              <h1
                id="checkout-confirmation-title"
                className="relative mt-[-1.00px] w-fit font-web-h2 text-[length:var(--web-h2-font-size)] font-[number:var(--web-h2-font-weight)] leading-[var(--web-h2-line-height)] tracking-[var(--web-h2-letter-spacing)] text-greens-1b-4332 [font-style:var(--web-h2-font-style)]"
              >
                Payment Confirmed
              </h1>
            </div>
            <button
              type="button"
              aria-label="Close confirmation"
              className="flex h-10 w-10 items-center justify-center"
            >
              <img
                className="h-10 w-10 aspect-[1]"
                alt=""
                src="https://c.animaapp.com/lRTzVt0W/img/iconamoon-close-5.svg"
              />
            </button>
          </div>
        </header>
        <section className="flex w-full flex-col items-start gap-5">
          <h2 className="relative mt-[-1.00px] self-stretch font-web-h3 text-[length:var(--web-h3-font-size)] font-[number:var(--web-h3-font-weight)] leading-[var(--web-h3-line-height)] tracking-[var(--web-h3-letter-spacing)] text-blues-0d-2137 [font-style:var(--web-h3-font-style)]">
            <span className="font-web-h3 text-[#0d2137] text-[length:var(--web-h3-font-size)] font-[number:var(--web-h3-font-weight)] leading-[var(--web-h3-line-height)] tracking-[var(--web-h3-letter-spacing)] [font-style:var(--web-h3-font-style)]">
              Your gift card will be delivered to you at{" "}
            </span>
            <span className="font-web-h3 text-[length:var(--web-h3-font-size)] font-[number:var(--web-h3-font-weight)] leading-[var(--web-h3-line-height)] tracking-[var(--web-h3-letter-spacing)] [font-style:var(--web-h3-font-style)]">
              {deliveryEmail}
            </span>
          </h2>
          <p
            id="checkout-confirmation-description"
            className="relative self-stretch font-web-body text-[length:var(--web-body-font-size)] font-[number:var(--web-body-font-weight)] leading-[var(--web-body-line-height)] tracking-[var(--web-body-letter-spacing)] text-blues-0d-2137 [font-style:var(--web-body-font-style)]"
          >
            <span className="font-web-body text-[#0d2137] text-[length:var(--web-body-font-size)] font-[number:var(--web-body-font-weight)] leading-[var(--web-body-line-height)] tracking-[var(--web-body-letter-spacing)] [font-style:var(--web-body-font-style)]">
              If you don&apos;t receive an email within 24 hours, please{" "}
            </span>
            <a href="mailto:support@example.com" className="underline">
              contact us.
            </a>
          </p>
        </section>
        <nav
          className="flex w-full flex-col items-start gap-5"
          aria-label="Confirmation actions"
        >
          <Link
            className="flex w-full items-center justify-center self-stretch rounded-[100px] bg-greens-2d-6a-4f px-10 py-5"
            to="/gift-cards"
          >
            <span className="relative mt-[-1.00px] w-fit whitespace-nowrap text-center font-web-body text-[length:var(--web-body-font-size)] font-[number:var(--web-body-font-weight)] leading-[var(--web-body-line-height)] tracking-[var(--web-body-letter-spacing)] text-neutralsffffff [font-style:var(--web-body-font-style)]">
              Continue Browsing
            </span>
          </Link>
          <Link
            className="relative block self-stretch text-center font-web-small text-[length:var(--web-small-font-size)] font-[number:var(--web-small-font-weight)] leading-[var(--web-small-line-height)] tracking-[var(--web-small-letter-spacing)] text-greens-2d-6a-4f [font-style:var(--web-small-font-style)]"
            to="/homepage"
          >
            BACK TO HOME
          </Link>
        </nav>
      </section>
    </main>
  );
};
