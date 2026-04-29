import { Link } from "react-router-dom";

type CardItem = {
  amount: string;
  reward: string;
  rewardColorClass: string;
  imageSrc: string;
  imageAlt: string;
  imageClassName: string;
  to?: string;
  outerClassName: string;
  innerClassName: string;
};

const cards: CardItem[] = [
  {
    amount: "$1000",
    reward: "4.9%",
    rewardColorClass: "text-greens-5-2a-788",
    imageSrc: "https://c.animaapp.com/lRTzVt0W/img/image-1-5@2x.png",
    imageAlt: "Lowe's brand logo",
    imageClassName: "relative w-[127px] h-[60px] aspect-[2.12] object-cover",
    to: "/checkout2",
    outerClassName:
      "flex flex-col w-[500px] items-center relative rounded-3xl overflow-hidden shadow-card-shadow",
    innerClassName:
      "flex flex-col items-center justify-between p-8 relative self-stretch w-full bg-neutralsffffff rounded-2xl border border-solid border-neutralse-8ebe-9 shadow-[0px_20px_40px_#00000026] aspect-[1.52]",
  },
  {
    amount: "$2500",
    reward: "5.5%",
    rewardColorClass: "text-greens-2d-6a-4f",
    imageSrc: "https://c.animaapp.com/lRTzVt0W/img/image-1-5@2x.png",
    imageAlt: "Lowe's brand logo",
    imageClassName: "relative w-[127px] h-[60px] aspect-[2.12] object-cover",
    to: "/checkout2",
    outerClassName:
      "flex flex-col w-[500px] items-center relative rounded-3xl overflow-hidden shadow-card-shadow",
    innerClassName:
      "p-8 shadow-[0px_20px_40px_#00000026] flex flex-col items-center justify-between relative self-stretch w-full bg-neutralsffffff rounded-2xl border border-solid border-neutralse-8ebe-9 aspect-[1.52]",
  },
  {
    amount: "$5000",
    reward: "6.1%",
    rewardColorClass: "text-greens-1b-4332",
    imageSrc: "https://c.animaapp.com/lRTzVt0W/img/image-1-5@2x.png",
    imageAlt: "Lowe's brand logo",
    imageClassName: "relative w-[127px] h-[60px] aspect-[2.12] object-cover",
    outerClassName:
      "flex flex-col w-[500px] items-center relative rounded-3xl overflow-hidden shadow-card-shadow",
    innerClassName:
      "flex flex-col items-center justify-between p-8 relative self-stretch w-full bg-neutralsffffff rounded-2xl border border-solid border-neutralse-8ebe-9 shadow-[0px_20px_40px_#00000026] aspect-[1.52]",
  },
  {
    amount: "$1000",
    reward: "4.9%",
    rewardColorClass: "text-greens-5-2a-788",
    imageSrc: "https://c.animaapp.com/lRTzVt0W/img/image-2-3@2x.png",
    imageAlt: "Staples brand logo",
    imageClassName: "relative w-[111px] h-[70px] aspect-[1.58]",
    to: "/checkout2",
    outerClassName:
      "flex flex-col w-[500px] items-center relative rounded-3xl overflow-hidden shadow-card-shadow",
    innerClassName:
      "p-8 flex flex-col items-center justify-between relative self-stretch w-full bg-neutralsffffff rounded-2xl border border-solid border-neutralse-8ebe-9 aspect-[1.52]",
  },
  {
    amount: "$2500",
    reward: "5.5%",
    rewardColorClass: "text-greens-2d-6a-4f",
    imageSrc: "https://c.animaapp.com/lRTzVt0W/img/image-2-3@2x.png",
    imageAlt: "Staples brand logo",
    imageClassName: "relative w-[111px] h-[70px] aspect-[1.58]",
    to: "/checkout2",
    outerClassName:
      "flex flex-col w-[500px] items-center relative rounded-3xl overflow-hidden shadow-card-shadow",
    innerClassName:
      "p-8 flex flex-col items-center justify-between relative self-stretch w-full bg-neutralsffffff rounded-2xl border border-solid border-neutralse-8ebe-9 aspect-[1.52]",
  },
  {
    amount: "$5000",
    reward: "6.1%",
    rewardColorClass: "text-greens-1b-4332",
    imageSrc: "https://c.animaapp.com/lRTzVt0W/img/image-2-3@2x.png",
    imageAlt: "Staples brand logo",
    imageClassName: "relative w-[111px] h-[70px] aspect-[1.58]",
    to: "/checkout2",
    outerClassName:
      "flex flex-col w-[500px] items-center relative rounded-3xl overflow-hidden shadow-card-shadow",
    innerClassName:
      "p-8 flex flex-col items-center justify-between relative self-stretch w-full bg-neutralsffffff rounded-2xl border border-solid border-neutralse-8ebe-9 aspect-[1.52]",
  },
  {
    amount: "$1000",
    reward: "4.9%",
    rewardColorClass: "text-greens-5-2a-788",
    imageSrc: "https://c.animaapp.com/lRTzVt0W/img/image-1-8@2x.png",
    imageAlt: "Home Depot brand logo",
    imageClassName: "relative w-[148px] h-[30px] aspect-[4.94]",
    to: "/checkout2",
    outerClassName:
      "flex flex-col w-[500px] items-center relative bg-neutralsffffff rounded-3xl overflow-hidden border border-solid border-neutralse-8ebe-9 shadow-card-shadow",
    innerClassName:
      "p-6 flex flex-col items-center justify-between relative self-stretch w-full bg-neutralsffffff rounded-2xl border border-solid border-neutralse-8ebe-9 aspect-[1.52]",
  },
  {
    amount: "$2500",
    reward: "5.5%",
    rewardColorClass: "text-greens-2d-6a-4f",
    imageSrc: "https://c.animaapp.com/lRTzVt0W/img/image-1-8@2x.png",
    imageAlt: "Home Depot brand logo",
    imageClassName: "relative w-[148px] h-[30px] aspect-[4.94]",
    to: "/checkout2",
    outerClassName:
      "flex flex-col w-[500px] items-center relative bg-neutralsffffff rounded-3xl overflow-hidden border border-solid border-neutralse-8ebe-9 shadow-card-shadow",
    innerClassName:
      "p-6 flex flex-col items-center justify-between relative self-stretch w-full bg-neutralsffffff rounded-2xl border border-solid border-neutralse-8ebe-9 aspect-[1.52]",
  },
  {
    amount: "$5000",
    reward: "6.1%",
    rewardColorClass: "text-greens-1b-4332",
    imageSrc: "https://c.animaapp.com/lRTzVt0W/img/image-1-8@2x.png",
    imageAlt: "Home Depot brand logo",
    imageClassName: "relative w-[148px] h-[30px] aspect-[4.94]",
    to: "/checkout2",
    outerClassName:
      "flex flex-col w-[500px] items-center relative bg-neutralsffffff rounded-3xl overflow-hidden border border-solid border-neutralse-8ebe-9 shadow-card-shadow",
    innerClassName:
      "p-6 flex flex-col items-center justify-between relative self-stretch w-full bg-neutralsffffff rounded-2xl border border-solid border-neutralse-8ebe-9 aspect-[1.52]",
  },
];

const cardLogoClassName =
  "relative w-[63.22px] h-11 bg-[url(https://c.animaapp.com/lRTzVt0W/img/image--buybak--21@2x.png)] bg-cover bg-[50%_50%]";

const amountClassName =
  "relative w-fit font-web-h4 font-[number:var(--web-h4-font-weight)] text-blues-0d-2137 text-[length:var(--web-h4-font-size)] tracking-[var(--web-h4-letter-spacing)] leading-[var(--web-h4-line-height)] whitespace-nowrap [font-style:var(--web-h4-font-style)]";

const rewardLabelClassName =
  "relative w-fit font-web-small font-[number:var(--web-small-font-weight)] text-neutrals-7a-8a-85 text-[length:var(--web-small-font-size)] tracking-[var(--web-small-letter-spacing)] leading-[var(--web-small-line-height)] whitespace-nowrap [font-style:var(--web-small-font-style)]";

const CardContent = ({ card }: { card: CardItem }) => (
  <div className={card.innerClassName}>
    <div className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto]">
      <div className={cardLogoClassName} aria-hidden="true" />
      <div className={amountClassName}>{card.amount}</div>
    </div>
    <div className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto]">
      <div className="inline-flex flex-col items-start justify-center gap-1 relative flex-[0_0_auto]">
        <div
          className={`${card.rewardColorClass} relative w-fit mt-[-1.00px] [font-family:'Figtree',Helvetica] font-semibold text-6xl tracking-[0] leading-[normal] whitespace-nowrap`}
        >
          {card.reward}
        </div>
        <div className={rewardLabelClassName}>STOCK REWARDS</div>
      </div>
      <img
        className={card.imageClassName}
        alt={card.imageAlt}
        src={card.imageSrc}
      />
    </div>
  </div>
);

export const Frame13Subsection = (): JSX.Element => {
  return (
    <section
      aria-label="Gift card reward options"
      className="flex flex-wrap w-[1568px] items-start justify-between gap-[40px_80px] relative flex-[0_0_auto] z-[1]"
    >
      {cards.map((card, index) => {
        if (card.to) {
          return (
            <Link
              key={`${card.amount}-${card.reward}-${index}`}
              className={card.outerClassName}
              to={card.to}
              aria-label={`${card.amount} gift card with ${card.reward} stock rewards`}
            >
              <CardContent card={card} />
            </Link>
          );
        }

        return (
          <article
            key={`${card.amount}-${card.reward}-${index}`}
            className={card.outerClassName}
            aria-label={`${card.amount} gift card with ${card.reward} stock rewards`}
          >
            <CardContent card={card} />
          </article>
        );
      })}
    </section>
  );
};
