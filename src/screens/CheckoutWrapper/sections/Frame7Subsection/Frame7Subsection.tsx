import { Link } from "react-router-dom";

const rewardCard = {
  to: "/checkout2",
  logo: {
    src: "https://c.animaapp.com/lRTzVt0W/img/image--buybak--21@2x.png",
    alt: "Brand logo",
  },
  amount: "$1000",
  rewardRate: "4.9%",
  rewardLabel: "STOCK REWARDS",
  partnerImage: {
    src: "https://c.animaapp.com/lRTzVt0W/img/image-1-5@2x.png",
    alt: "Lowe's logo",
  },
};

const earningsCard = {
  icon: {
    src: "https://c.animaapp.com/lRTzVt0W/img/icon-1.svg",
    alt: "",
  },
  label: "You'll earn:",
  value: "$49 in stock rewards",
};

export const Frame7Subsection = (): JSX.Element => {
  return (
    <section
      aria-label="Stock rewards offer summary"
      className="flex items-start justify-center gap-5 relative self-stretch w-full flex-[0_0_auto]"
    >
      <Link
        aria-label={`Select reward offer with ${rewardCard.rewardRate} stock rewards for ${rewardCard.amount}`}
        className="flex flex-col items-center relative flex-1 grow rounded-3xl overflow-hidden shadow-card-shadow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blues-2e-6099 focus-visible:ring-offset-2"
        to={rewardCard.to}
      >
        <article className="flex flex-col items-center justify-between p-8 relative self-stretch w-full bg-neutralsffffff rounded-2xl border border-solid border-neutralse-8ebe-9 shadow-[0px_20px_40px_#00000026] aspect-[1.52]">
          <header className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto]">
            <img
              className="relative w-[63.22px] h-11 object-cover"
              alt={rewardCard.logo.alt}
              src={rewardCard.logo.src}
            />
            <div className="relative w-fit font-web-h4 font-[number:var(--web-h4-font-weight)] text-blues-0d-2137 text-[length:var(--web-h4-font-size)] tracking-[var(--web-h4-letter-spacing)] leading-[var(--web-h4-line-height)] whitespace-nowrap [font-style:var(--web-h4-font-style)]">
              {rewardCard.amount}
            </div>
          </header>
          <div className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto]">
            <div className="inline-flex flex-col items-start justify-center gap-1 relative flex-[0_0_auto]">
              <div className="relative w-fit mt-[-1.00px] [font-family:'Figtree',Helvetica] font-semibold text-greens-5-2a-788 text-6xl tracking-[0] leading-[normal] whitespace-nowrap">
                {rewardCard.rewardRate}
              </div>
              <div className="relative w-fit font-web-small font-[number:var(--web-small-font-weight)] text-neutrals-7a-8a-85 text-[length:var(--web-small-font-size)] tracking-[var(--web-small-letter-spacing)] leading-[var(--web-small-line-height)] whitespace-nowrap [font-style:var(--web-small-font-style)]">
                {rewardCard.rewardLabel}
              </div>
            </div>
            <img
              className="relative w-[127px] h-[60px] aspect-[2.12] object-cover"
              alt={rewardCard.partnerImage.alt}
              src={rewardCard.partnerImage.src}
            />
          </div>
        </article>
      </Link>
      <aside className="flex flex-col w-[200px] items-center justify-center gap-3 px-6 py-2 rounded-2xl border border-solid border-neutralsa-8b-0ad bg-[linear-gradient(117deg,rgba(240,247,244,1)_0%,rgba(242,248,246,1)_8%,rgba(245,250,248,1)_17%,rgba(247,251,249,1)_25%,rgba(250,252,251,1)_33%,rgba(252,254,253,1)_42%,rgba(255,255,255,1)_50%,rgba(252,253,254,1)_60%,rgba(249,252,253,1)_70%,rgba(246,250,251,1)_80%,rgba(243,249,250,1)_90%,rgba(240,247,249,1)_100%)] relative self-stretch">
        <img
          aria-hidden="true"
          className="relative w-10 h-10 aspect-[1]"
          alt={earningsCard.icon.alt}
          src={earningsCard.icon.src}
        />
        <div className="relative self-stretch font-web-body font-[number:var(--web-body-font-weight)] text-blues-0d-2137 text-[length:var(--web-body-font-size)] text-center tracking-[var(--web-body-letter-spacing)] leading-[var(--web-body-line-height)] [font-style:var(--web-body-font-style)]">
          {earningsCard.label}
        </div>
        <div className="relative self-stretch font-web-h6 font-[number:var(--web-h6-font-weight)] text-blues-0d-2137 text-[length:var(--web-h6-font-size)] text-center tracking-[var(--web-h6-letter-spacing)] leading-[var(--web-h6-line-height)] [font-style:var(--web-h6-font-style)]">
          {earningsCard.value}
        </div>
      </aside>
    </section>
  );
};
