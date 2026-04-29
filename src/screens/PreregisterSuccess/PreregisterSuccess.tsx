export const PreregisterSuccess = (): JSX.Element => {
  const position = 457;

  return (
    <main
      className="relative flex h-[900px] min-w-[671px] flex-col items-center justify-center gap-10 overflow-hidden rounded-[18px] border border-solid border-neutralse-8ebe-9 bg-[linear-gradient(117deg,rgba(240,247,244,1)_0%,rgba(242,248,246,1)_8%,rgba(245,250,248,1)_17%,rgba(247,251,249,1)_25%,rgba(250,252,251,1)_33%,rgba(252,254,253,1)_42%,rgba(255,255,255,1)_50%,rgba(252,253,254,1)_60%,rgba(249,252,253,1)_70%,rgba(246,250,251,1)_80%,rgba(243,249,250,1)_90%,rgba(240,247,249,1)_100%)] p-20 shadow-card-shadow"
      data-model-id="259:28694"
      aria-labelledby="preregister-success-title"
      aria-describedby="preregister-success-description"
    >
      <button
        type="button"
        aria-label="Close"
        className="absolute right-[67px] top-[74px] flex h-10 w-10 items-center justify-center cursor-pointer rounded-full"
      >
        <img
          className="h-10 w-10 aspect-[1]"
          alt=""
          aria-hidden="true"
          src="https://c.animaapp.com/lRTzVt0W/img/iconamoon-close-4.svg"
        />
      </button>
      <section className="inline-flex flex-[0_0_auto] flex-col items-center gap-5">
        <img
          className="relative h-20 w-[81px]"
          alt=""
          aria-hidden="true"
          src="https://c.animaapp.com/lRTzVt0W/img/container.svg"
        />
        <h1
          id="preregister-success-title"
          className="relative w-fit font-web-h2 text-[length:var(--web-h2-font-size)] font-[number:var(--web-h2-font-weight)] leading-[var(--web-h2-line-height)] tracking-[var(--web-h2-letter-spacing)] text-greens-1b-4332 [font-style:var(--web-h2-font-style)]"
        >
          You&apos;re #{position} on the list
        </h1>
        <p
          id="preregister-success-description"
          className="relative w-[511px] text-center font-web-body text-[length:var(--web-body-font-size)] font-[number:var(--web-body-font-weight)] leading-[var(--web-body-line-height)] tracking-[var(--web-body-letter-spacing)] text-neutrals-7a-8a-85 [font-style:var(--web-body-font-style)]"
        >
          You&#39;ll be the first to know when you can start earning with
          BuyBak.
        </p>
      </section>
    </main>
  );
};
