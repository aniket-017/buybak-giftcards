import { Link } from "react-router-dom";

const checkoutSteps = [
  {
    label: "PAYMENT DETAILS",
    active: false,
  },
  {
    label: "REVIEW AND CONFIRM",
    active: true,
  },
];

const contactDetails = ["Digital Delivery: your@email.com", "(000) 000-0000"];

const orderSummary = [
  {
    label: "Subtotal",
    value: "$1000",
    emphasized: true,
  },
  {
    label: "Stock Value",
    value: "$49",
    emphasized: false,
  },
];

export const CheckoutScreen = (): JSX.Element => {
  return (
    <main
      className="flex min-h-screen w-full items-center justify-center bg-white p-8"
      aria-label="Checkout review and confirmation"
    >
      <section
        className="flex h-[900px] min-w-[671px] flex-col items-center justify-center gap-20 border border-solid border-neutralse-8ebe-9 bg-[linear-gradient(117deg,rgba(240,247,244,1)_0%,rgba(242,248,246,1)_8%,rgba(245,250,248,1)_17%,rgba(247,251,249,1)_25%,rgba(250,252,251,1)_33%,rgba(252,254,253,1)_42%,rgba(255,255,255,1)_50%,rgba(252,253,254,1)_60%,rgba(249,252,253,1)_70%,rgba(246,250,251,1)_80%,rgba(243,249,250,1)_90%,rgba(240,247,249,1)_100%)] p-20 shadow-card-shadow"
        data-model-id="61:9935"
      >
        <header className="relative mt-[-18.00px] flex w-full flex-[0_0_auto] flex-col items-start gap-10 self-stretch">
          <div className="relative flex w-full flex-[0_0_auto] items-center justify-between self-stretch">
            <div className="relative inline-flex flex-[0_0_auto] items-center gap-2">
              <div
                className="relative h-11 w-[63.22px] opacity-75 bg-[url(https://c.animaapp.com/lRTzVt0W/img/image--buybak--21@2x.png)] bg-cover bg-[50%_50%]"
                aria-hidden="true"
              />
              <h1 className="relative mt-[-1.00px] w-fit font-web-h2 text-[length:var(--web-h2-font-size)] font-[number:var(--web-h2-font-weight)] leading-[var(--web-h2-line-height)] tracking-[var(--web-h2-letter-spacing)] text-greens-1b-4332 [font-style:var(--web-h2-font-style)]">
                Checkout
              </h1>
            </div>
            <Link
              to="/checkout2"
              aria-label="Close checkout"
              className="inline-flex items-center justify-center rounded-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blues-0d-2137"
            >
              <img
                className="relative aspect-[1] h-10 w-10"
                alt="Close"
                src="https://c.animaapp.com/lRTzVt0W/img/iconamoon-close-2.svg"
              />
            </Link>
          </div>
          <nav
            className="relative flex w-full flex-[0_0_auto] items-center gap-10 self-stretch"
            aria-label="Checkout steps"
          >
            {checkoutSteps.map((step) => (
              <div
                key={step.label}
                className={`relative mt-[-1.00px] w-fit whitespace-nowrap font-web-small text-[length:var(--web-small-font-size)] font-[number:var(--web-small-font-weight)] leading-[var(--web-small-line-height)] tracking-[var(--web-small-letter-spacing)] [font-style:var(--web-small-font-style)] ${
                  step.active ? "text-blues-0d-2137" : "text-neutralsa-8b-0ad"
                }`}
                aria-current={step.active ? "step" : undefined}
              >
                {step.label}
              </div>
            ))}
          </nav>
        </header>
        <section className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-5 self-stretch">
          <div className="relative flex w-full flex-[0_0_auto] items-center justify-between self-stretch">
            <h2 className="relative mt-[-1.00px] w-fit font-web-h3 text-[length:var(--web-h3-font-size)] font-[number:var(--web-h3-font-weight)] leading-[var(--web-h3-line-height)] tracking-[var(--web-h3-letter-spacing)] text-blues-0d-2137 [font-style:var(--web-h3-font-style)]">
              John Smith
            </h2>
            <Link
              to="/checkout2"
              className="relative w-fit whitespace-nowrap font-web-small text-[length:var(--web-small-font-size)] font-[number:var(--web-small-font-weight)] leading-[var(--web-small-line-height)] tracking-[var(--web-small-letter-spacing)] text-neutrals-7a-8a-85 [font-style:var(--web-small-font-style)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutrals-7a-8a-85"
            >
              EDIT
            </Link>
          </div>
          {contactDetails.map((detail) => (
            <p
              key={detail}
              className="relative self-stretch font-web-body text-[length:var(--web-body-font-size)] font-[number:var(--web-body-font-weight)] leading-[var(--web-body-line-height)] tracking-[var(--web-body-letter-spacing)] text-blues-0d-2137 [font-style:var(--web-body-font-style)]"
            >
              {detail}
            </p>
          ))}
        </section>
        <section className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-5 self-stretch">
          <h2 className="relative mt-[-1.00px] self-stretch font-web-h3 text-[length:var(--web-h3-font-size)] font-[number:var(--web-h3-font-weight)] leading-[var(--web-h3-line-height)] tracking-[var(--web-h3-letter-spacing)] text-blues-0d-2137 [font-style:var(--web-h3-font-style)]">
            $1000 Lowe&apos;s Gift Card (with stock) x1
          </h2>
          {orderSummary.map((item) => (
            <div
              key={item.label}
              className="relative flex w-full flex-[0_0_auto] items-center justify-between self-stretch"
            >
              <div
                className={`relative mt-[-1.00px] w-fit font-web-body text-[length:var(--web-body-font-size)] font-[number:var(--web-body-font-weight)] leading-[var(--web-body-line-height)] tracking-[var(--web-body-letter-spacing)] text-blues-0d-2137 [font-style:var(--web-body-font-style)] ${
                  item.label === "Stock Value" ? "whitespace-nowrap" : ""
                } ${item.emphasized ? "font-semibold" : ""}`}
              >
                {item.label}
              </div>
              <div
                className={`relative mt-[-1.00px] w-fit font-web-body text-[length:var(--web-body-font-size)] font-[number:var(--web-body-font-weight)] leading-[var(--web-body-line-height)] tracking-[var(--web-body-letter-spacing)] text-blues-0d-2137 [font-style:var(--web-body-font-style)] ${
                  item.label === "Stock Value" ? "whitespace-nowrap" : ""
                } ${item.emphasized ? "font-semibold" : ""}`}
              >
                {item.value}
              </div>
            </div>
          ))}
        </section>
        <div className="relative mb-[-18.00px] flex w-full flex-[0_0_auto] flex-col items-start gap-10 self-stretch">
          <Link
            className="relative flex w-full flex-[0_0_auto] items-center justify-center self-stretch rounded-[100px] bg-greens-2d-6a-4f px-10 py-5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-greens-2d-6a-4f"
            to="/checkout4"
            aria-label="Confirm and pay $1000"
          >
            <p className="relative mt-[-1.00px] w-fit whitespace-nowrap text-center font-web-body text-[length:var(--web-body-font-size)] font-[number:var(--web-body-font-weight)] leading-[var(--web-body-line-height)] tracking-[var(--web-body-letter-spacing)] text-neutralsffffff [font-style:var(--web-body-font-style)]">
              <span className="font-web-body text-[length:var(--web-body-font-size)] font-[number:var(--web-body-font-weight)] leading-[var(--web-body-line-height)] tracking-[var(--web-body-letter-spacing)] text-white [font-style:var(--web-body-font-style)]">
                Confirm and Pay{" "}
              </span>
              <span className="font-web-body text-[length:var(--web-body-font-size)] font-[number:var(--web-body-font-weight)] leading-[var(--web-body-line-height)] tracking-[var(--web-body-letter-spacing)] [font-style:var(--web-body-font-style)]">
                $1000
              </span>
            </p>
          </Link>
          <Link
            className="block self-stretch text-center font-web-small text-[length:var(--web-small-font-size)] font-[number:var(--web-small-font-weight)] leading-[var(--web-small-line-height)] tracking-[var(--web-small-letter-spacing)] text-greens-2d-6a-4f [font-style:var(--web-small-font-style)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-greens-2d-6a-4f"
            to="/checkout2"
          >
            GO BACK
          </Link>
        </div>
      </section>
    </main>
  );
};
