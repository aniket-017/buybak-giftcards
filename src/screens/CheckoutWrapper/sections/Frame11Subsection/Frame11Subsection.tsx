import { Link } from "react-router-dom";

const actions = [
  {
    label: "Review",
    to: "/checkout3",
  },
];

export const Frame11Subsection = (): JSX.Element => {
  return (
    <section
      aria-label="Checkout actions"
      className="flex flex-col items-start gap-10 relative self-stretch w-full flex-[0_0_auto] mb-[-80.00px]"
    >
      {actions.map((action) => (
        <Link
          key={action.to}
          to={action.to}
          aria-label={action.label}
          className="flex items-center justify-center px-10 py-5 relative self-stretch w-full flex-[0_0_auto] bg-greens-2d-6a-4f rounded-[100px] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-greens-2d-6a-4f"
        >
          <span className="text-neutralsffffff relative w-fit mt-[-1.00px] font-web-body font-[number:var(--web-body-font-weight)] text-[length:var(--web-body-font-size)] text-center tracking-[var(--web-body-letter-spacing)] leading-[var(--web-body-line-height)] whitespace-nowrap [font-style:var(--web-body-font-style)]">
            {action.label}
          </span>
        </Link>
      ))}
      <button
        type="button"
        className="relative self-stretch font-web-small font-[number:var(--web-small-font-weight)] text-greens-2d-6a-4f text-[length:var(--web-small-font-size)] text-center tracking-[var(--web-small-letter-spacing)] leading-[var(--web-small-line-height)] [font-style:var(--web-small-font-style)] cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-greens-2d-6a-4f"
        aria-label="Go back"
      >
        GO BACK
      </button>
    </section>
  );
};
