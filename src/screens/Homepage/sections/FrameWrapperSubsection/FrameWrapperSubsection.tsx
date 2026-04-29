import { Link } from "react-router-dom";

const content = {
  title: "Gift Cards with Loyalty Stock",
  description: "Guaranteed cards. Instant delivery. Real stock.",
  ctaLabel: "View All",
  ctaHref: "/gift-cards",
  iconSrc: "https://c.animaapp.com/lRTzVt0W/img/icon.svg",
};

export const FrameWrapperSubsection = (): JSX.Element => {
  return (
    <section
      className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto] gap-4"
      aria-labelledby="gift-cards-section-title"
    >
      <div className="inline-flex flex-col items-start gap-3 relative flex-[0_0_auto]">
        <h2
          id="gift-cards-section-title"
          className="relative w-fit mt-[-1.00px] font-web-h2 font-[number:var(--web-h2-font-weight)] text-blues-0d-2137 text-[length:var(--web-h2-font-size)] tracking-[var(--web-h2-letter-spacing)] leading-[var(--web-h2-line-height)] [font-style:var(--web-h2-font-style)]"
        >
          {content.title}
        </h2>
        <p className="relative w-fit font-web-body font-[number:var(--web-body-font-weight)] text-neutrals-7a-8a-85 text-[length:var(--web-body-font-size)] tracking-[var(--web-body-letter-spacing)] leading-[var(--web-body-line-height)] whitespace-nowrap [font-style:var(--web-body-font-style)]">
          {content.description}
        </p>
      </div>
      <Link
        className="gap-3 inline-flex items-center justify-center relative flex-[0_0_auto] rounded-[100px] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-greens-2d-6a-4f"
        to={content.ctaHref}
        aria-label={`${content.ctaLabel} gift cards`}
      >
        <span className="relative w-fit mt-[-1.00px] font-web-body font-[number:var(--web-body-font-weight)] text-greens-2d-6a-4f text-[length:var(--web-body-font-size)] text-center tracking-[var(--web-body-letter-spacing)] leading-[var(--web-body-line-height)] whitespace-nowrap [font-style:var(--web-body-font-style)]">
          {content.ctaLabel}
        </span>
        <img
          className="relative w-[18px] h-[18px]"
          alt=""
          aria-hidden="true"
          src={content.iconSrc}
        />
      </Link>
    </section>
  );
};
