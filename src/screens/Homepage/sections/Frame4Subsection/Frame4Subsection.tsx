const brandNameParts = [
  { text: "Buy", className: "font-semibold tracking-[-0.14px]" },
  { text: "Bak", className: "font-bold tracking-[-0.14px]" },
];

export const Frame4Subsection = (): JSX.Element => {
  return (
    <section
      className="relative flex w-[650px] flex-col items-start gap-3"
      aria-labelledby="frame4-subsection-title"
    >
      <div className="relative inline-flex h-11 items-center gap-3">
        <div
          className="relative h-10 w-[57px] aspect-[1.44] bg-[url(https://c.animaapp.com/lRTzVt0W/img/image--buybak--22@2x.png)] bg-cover bg-[50%_50%] opacity-90"
          role="img"
          aria-label="BuyBak logo"
        />
        <h2
          id="frame4-subsection-title"
          className="relative w-fit whitespace-nowrap text-2xl font-normal leading-8 tracking-[-0.60px] text-greensd-4e-9e-2 [font-family:'Figtree',Helvetica]"
        >
          {brandNameParts.map((part) => (
            <span key={part.text} className={part.className}>
              {part.text}
            </span>
          ))}
        </h2>
      </div>
      <p className="relative w-[343px] text-base font-normal leading-[26px] tracking-[0] text-greensa-8d-3c-5 [font-family:'Inter',Helvetica]">
        Loyalty rewards that passively build a stock portfolio. Automatically,
        with every purchase.
      </p>
    </section>
  );
};
