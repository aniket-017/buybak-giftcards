import { Link } from "react-router-dom";

type RewardCard = {
  id: number;
  to: string;
  amount: string;
  reward: string;
  rewardLabel: string;
  logoClassName: string;
  chartSrc: string;
  chartAlt: string;
  cardClassName: string;
  innerClassName: string;
  chartClassName: string;
};

const rewardCards: RewardCard[] = [
  {
    id: 1,
    to: "/checkout2",
    amount: "$1000",
    reward: "4.9%",
    rewardLabel: "STOCK REWARDS",
    logoClassName:
      "w-[73.22px] h-11 bg-[url(https://c.animaapp.com/lRTzVt0W/img/image--buybak--21@2x.png)] relative bg-cover bg-[50%_50%] shrink-0",
    chartSrc: "https://c.animaapp.com/lRTzVt0W/img/image-1-5@2x.png",
    chartAlt: "Stock rewards chart",
    cardClassName:
      "flex flex-col items-center relative flex-1 grow rounded-3xl overflow-hidden shadow-card-shadow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-greens-2d-6a-4f focus-visible:ring-offset-2",
    innerClassName:
      "flex flex-col items-center justify-between p-8 relative self-stretch w-full bg-neutralsffffff rounded-2xl border border-solid border-neutralse-8ebe-9 shadow-[0px_20px_40px_#00000026] aspect-[1.52]",
    chartClassName:
      "relative w-[127px] h-[60px] aspect-[2.12] object-cover shrink-0",
  },
  {
    id: 2,
    to: "/checkout2",
    amount: "$2500",
    reward: "5.5%",
    rewardLabel: "STOCK REWARDS",
    logoClassName:
      "w-[73.22px] h-11 bg-[url(https://c.animaapp.com/lRTzVt0W/img/image--buybak--21@2x.png)] relative bg-cover bg-[50%_50%] shrink-0",
    chartSrc: "https://c.animaapp.com/lRTzVt0W/img/image-2-3@2x.png",
    chartAlt: "Stock rewards illustration",
    cardClassName:
      "flex flex-col items-center relative flex-1 grow rounded-3xl overflow-hidden shadow-card-shadow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-greens-2d-6a-4f focus-visible:ring-offset-2",
    innerClassName:
      "p-8 flex flex-col items-center justify-between relative self-stretch w-full bg-neutralsffffff rounded-2xl border border-solid border-neutralse-8ebe-9 aspect-[1.52]",
    chartClassName: "relative w-[111px] h-[70px] aspect-[1.58] shrink-0",
  },
  {
    id: 3,
    to: "/checkout2",
    amount: "$4000",
    reward: "6.0%",
    rewardLabel: "STOCK REWARDS",
    logoClassName:
      "w-[73.22px] h-11 bg-[url(https://c.animaapp.com/lRTzVt0W/img/image--buybak--21@2x.png)] relative bg-cover bg-[50%_50%] shrink-0",
    chartSrc: "https://c.animaapp.com/lRTzVt0W/img/image-1-8@2x.png",
    chartAlt: "Stock rewards brand graphic",
    cardClassName:
      "flex flex-col items-center relative flex-1 grow bg-neutralsffffff rounded-3xl overflow-hidden border border-solid border-neutralse-8ebe-9 shadow-card-shadow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-greens-2d-6a-4f focus-visible:ring-offset-2",
    innerClassName:
      "p-6 flex flex-col items-center justify-between relative self-stretch w-full bg-neutralsffffff rounded-2xl border border-solid border-neutralse-8ebe-9 aspect-[1.52]",
    chartClassName: "relative w-[148px] h-[30px] aspect-[4.94] shrink-0",
  },
];

export const DivWrapperSubsection = (): JSX.Element => {
  return (
    <section
      aria-label="Stock rewards cards"
      className="flex items-start gap-10 relative self-stretch w-full flex-[0_0_auto]"
    >
      {rewardCards.map((card) => (
        <Link
          key={card.id}
          className={card.cardClassName}
          to={card.to}
          aria-label={`View stock rewards option with ${card.reward} rewards on ${card.amount}`}
        >
          <article className={card.innerClassName}>
            <div className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto] gap-4">
              <div className={card.logoClassName} aria-hidden="true" />
              <div className="text-[55px] relative w-fit font-web-h4 font-[number:var(--web-h4-font-weight)] text-blues-0d-2137 tracking-[var(--web-h4-letter-spacing)] leading-[var(--web-h4-line-height)] whitespace-nowrap [font-style:var(--web-h4-font-style)]">
                {card.amount}
              </div>
            </div>
            <div className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto] gap-4">
              <div className="inline-flex flex-col items-start justify-center gap-1 relative flex-[0_0_auto]">
                <div className="relative w-fit mt-[-1.00px] [font-family:'Figtree',Helvetica] font-semibold text-greens-2d-6a-4f text-[40px] tracking-[0] leading-[normal] whitespace-nowrap">
                  {card.reward}
                </div>
                <div className="font-[number:var(--web-small-font-weight)] text-neutrals-7a-8a-85 text-[length:var(--web-small-font-size)] relative w-fit font-web-small tracking-[var(--web-small-letter-spacing)] leading-[var(--web-small-line-height)] whitespace-nowrap [font-style:var(--web-small-font-style)]">
                  {card.rewardLabel}
                </div>
              </div>
              <img
                className={card.chartClassName}
                alt={card.chartAlt}
                src={card.chartSrc}
              />
            </div>
          </article>
        </Link>
      ))}
    </section>
  );
};
