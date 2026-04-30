import { useId, useState } from "react";

const faqItems = [
  {
    question: "How does BuyBak work?",
    answer:
      "BuyBak allows you to purchase discounted gift cards for major construction and home improvement retailers. With qualifying purchases, you also earn fractional shares of stock as a loyalty reward, helping your business save money today while building assets for tomorrow.",
  },
  {
    question: "How do I receive my gift cards?",
    answer:
      "Digital gift cards are delivered via email immediately after purchase. You can use them online or present them in-store at participating retailers. Your fractional stock rewards are automatically added to your BuyBak portfolio.",
  },
  {
    question: "Are the gift cards guaranteed?",
    answer: "Lorem ipsum dolor sit amet consecteur",
  },
  {
    question: "How do I receive my stocks?",
    answer: "Lorem ipsum dolor sit amet consecteur",
  },
  {
    question: "Is my money safe?",
    answer: "Lorem ipsum dolor sit amet consecteur",
  },
];

type FaqItemProps = {
  question: string;
  answer: string;
  defaultOpen?: boolean;
};

const FaqItem = ({
  question,
  answer,
  defaultOpen = false,
}: FaqItemProps): JSX.Element => {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const contentId = useId();

  return (
    <div
      className={`flex flex-col items-start p-10 relative self-stretch w-full bg-neutralsffffff rounded-[20px] overflow-hidden border border-solid border-neutralse-8ebe-9 transition-[height] duration-200 ease-out ${
        isOpen ? "gap-10 h-auto" : "gap-10 h-[104px]"
      }`}
    >
      <button
        type="button"
        aria-expanded={isOpen}
        aria-controls={contentId}
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto] text-left cursor-pointer"
      >
        <span 
        className="relative [font-family:'Source_Serif_4',Helvetica] w-fit mt-[-1.00px] font-medium text-[31px] font-web-body font-[number:var(--web-body-font-weight)] text-blues-0d-2137 text-[length:var(--web-body-font-size)] text-center tracking-[var(--web-body-letter-spacing)] leading-[var(--web-body-line-height)] whitespace-nowrap [font-style:var(--web-body-font-style)]"
        >
          {question}
        </span>
        <img
          className={`relative w-6 h-6 aspect-[1] shrink-0 transition-transform duration-200 ease-out ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
          alt=""
          aria-hidden="true"
          src="https://c.animaapp.com/lRTzVt0W/img/iconamoon-arrow-down-2-duotone-4.svg"
        />
      </button>
      <div
        id={contentId}
        className={`relative self-stretch w-full overflow-hidden transition-[max-height,opacity] duration-200 ease-out ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <p className="text-[25px] relative self-stretch font-web-body font-[number:var(--web-body-font-weight)] text-blues-0d-2137 text-[length:var(--web-body-font-size)] tracking-[var(--web-body-letter-spacing)] leading-[var(--web-body-line-height)] [font-style:var(--web-body-font-style)]">
          {answer}
        </p>
      </div>
    </div>
  );
};

export const Frame2Subsection = (): JSX.Element => {
  return (
    <section
      className="flex flex-col items-start gap-5 relative self-stretch w-full flex-[0_0_auto]"
      aria-label="Frequently asked questions"
    >
      {faqItems.map((item, index) => (
        <FaqItem
          key={item.question}
          question={item.question}
          answer={item.answer}
          defaultOpen={index === 0}
        />
      ))}
    </section>
  );
};
