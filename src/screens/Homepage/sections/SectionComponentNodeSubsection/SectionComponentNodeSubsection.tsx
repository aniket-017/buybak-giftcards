const traditionalRewardsItems = [
  {
    id: "traditional-cash-savings",
    content: "$25 in cash savings",
    lineSrc: "/img/line-1.svg",
    lineAlt: "",
  },
  {
    id: "traditional-points-expire",
    content: "Points that expire",
    lineSrc: "/img/line-2.svg",
    lineAlt: "",
  },
  {
    id: "traditional-zero-return",
    content: "$0 return",
    lineSrc: "/img/line-3.svg",
    lineAlt: "",
  },
];

const buyBakItems = [
  {
    id: "buybak-stock",
    content: "$25 in stock",
    lineSrc: "/img/image.svg",
    lineAlt: "",
  },
  {
    id: "buybak-own-forever",
    content: "Stock you own forever",
    lineSrc: "/img/line-2-2.svg",
    lineAlt: "",
  },
  {
    id: "buybak-growing-earnings",
    content: "Growing stock earnings",
    lineSrc: "/img/line-3-2.svg",
    lineAlt: "",
  },
];

export const SectionComponentNodeSubsection = (): JSX.Element => {
  return (
    <section
      className="inline-flex items-start relative flex-[0_0_auto]"
      aria-label="Rewards comparison"
    >
      <article className="flex flex-col w-[300px] items-center gap-10 px-0 py-10 relative">
        <h3 className="relative w-[437px] h-[88px] mt-[-1.00px] [font-family:'Figtree',Helvetica] font-normal text-neutralsa-8b-0ad text-3xl text-center tracking-[-0.60px] leading-[normal]">
          Traditional Rewards
        </h3>
        <ul className="flex w-full flex-col items-center gap-10 p-0 m-0 list-none">
          {traditionalRewardsItems.map((item) => (
            <li
              key={item.id}
              className="flex w-full flex-col items-center gap-10"
            >
              <img
                className="relative self-stretch w-full h-px object-cover"
                alt={item.lineAlt}
                aria-hidden="true"
                src={item.lineSrc}
              />
              <div className="relative [font-family:'Source_Serif_4',Helvetica] w-fit mt-[-1.00px] font-medium text-[31px] w-fit font-web-body font-[number:var(--web-body-font-weight)] text-neutrals-7a-8a-85 text-[length:var(--web-body-font-size)] tracking-[var(--web-body-letter-spacing)] leading-[var(--web-body-line-height)] whitespace-nowrap [font-style:var(--web-body-font-style)]">
                {item.content}
              </div>
            </li>
          ))}
        </ul>
      </article>
      <article className="flex flex-col w-[300px] items-center gap-10 px-0 py-10 relative bg-neutralsffffff">
        <div className="flex-col justify-center flex-[0_0_auto] inline-flex items-center gap-3 relative">
          <div
            className="relative w-[63.22px] h-11 bg-[url(https://c.animaapp.com/lRTzVt0W/img/image--buybak--12@2x.png)] bg-cover bg-[50%_50%]"
            aria-hidden="true"
          />
          <h3 className="text-transparent text-[40px] relative w-fit [font-family:'Figtree',Helvetica] font-normal tracking-[-0.60px] leading-8 whitespace-nowrap">
            <span className="font-semibold text-[#52a788] tracking-[-0.24px]">
              Buy
            </span>
            <span className="font-bold text-[#2e6099] tracking-[-0.24px]">
              Bak
            </span>
          </h3>
        </div>
        <ul className="flex w-full flex-col items-center gap-10 p-0 m-0 list-none">
          {buyBakItems.map((item) => (
            <li
              key={item.id}
              className="flex w-full flex-col items-center gap-10"
            >
              <img
                className="relative self-stretch w-full h-px object-cover"
                alt={item.lineAlt}
                aria-hidden="true"
                src={item.lineSrc}
              />
              <div className="[font-family:'Source_Serif_4',Helvetica] w-fit mt-[-1.00px] font-medium text-[31px] font-[number:var(--web-body-font-weight)] text-blues-0d-2137 text-[length:var(--web-body-font-size)] relative w-fit font-web-body tracking-[var(--web-body-letter-spacing)] leading-[var(--web-body-line-height)] whitespace-nowrap [font-style:var(--web-body-font-style)]">
                {item.content}
              </div>
            </li>
          ))}
        </ul>
      </article>
    </section>
  );
};
