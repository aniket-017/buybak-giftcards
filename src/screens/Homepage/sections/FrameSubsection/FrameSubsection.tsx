import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: (theme.vars ?? theme).palette.text.secondary,
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
}));

export const FrameSubsection = (): JSX.Element => {
  const actions = [
    {
      label: "Browse Gift Cards",
      href: "#",
      variant: "primary" as const,
    },
    {
      label: "Learn More",
      href: "#",
      variant: "secondary" as const,
    },
  ];

  return (

    <section
        aria-labelledby="frame-subsection-heading"
        className="px-[120px] py-[260px] flex flex-col items-start gap-10 relative self-stretch w-full bg-[linear-gradient(117deg,rgba(240,247,244,1)_0%,rgba(242,248,246,1)_8%,rgba(245,250,248,1)_17%,rgba(247,251,249,1)_25%,rgba(250,252,251,1)_33%,rgba(252,254,253,1)_42%,rgba(255,255,255,1)_50%,rgba(252,253,254,1)_60%,rgba(249,252,253,1)_70%,rgba(246,250,251,1)_80%,rgba(243,249,250,1)_90%,rgba(240,247,249,1)_100%)] flex flex-col items-start relative flex-[0_0_auto] overflow-hidden z-[1]"
    >
    {/*
    <section
      aria-labelledby="frame-subsection-heading"
      className="gap-10 px-[150px] py-[200px] self-stretch w-full z-[5] border-t [border-top-style:solid] border-neutralse-8ebe-9 bg-[linear-gradient(117deg,rgba(240,247,244,1)_0%,rgba(242,248,246,1)_8%,rgba(245,250,248,1)_17%,rgba(247,251,249,1)_25%,rgba(250,252,251,1)_33%,rgba(252,254,253,1)_42%,rgba(255,255,255,1)_50%,rgba(252,253,254,1)_60%,rgba(249,252,253,1)_70%,rgba(246,250,251,1)_80%,rgba(243,249,250,1)_90%,rgba(240,247,249,1)_100%)] flex flex-col items-start relative flex-[0_0_auto] overflow-hidden"
    >
    */}

      <div className="inline-flex flex-col items-start gap-10 relative flex-[0_0_auto] z-[1]">
        <div className="inline-flex flex-col items-start gap-10 relative flex-[0_0_auto]">
          <h1
            id="frame-subsection-heading"
            className="relative w-[1200px] mt-[-1.00px] [font-family:'Source_Serif_4',Helvetica] font-medium text-blues-0d-2137 text-[60px] tracking-[0] leading-[normal]"
          >
            Spend on supplies. Earn Stock Rewards. See Your &nbsp;
            <span className="font-medium text-[#52a788] tracking-[-0.24px]">
              Buy
            </span>
            <span className="font-medium text-[#2e6099] tracking-[-0.24px]">
              Bak
            </span>&nbsp;
            Portfolio Grow.
          </h1>
          {/************** TODO NOT YET 
          <p className="relative w-fit font-web-body font-[number:var(--web-body-font-weight)] text-neutrals-7a-8a-85 text-[30px] tracking-[var(--web-body-letter-spacing)] leading-[var(--web-body-line-height)] whitespace-nowrap [font-style:var(--web-body-font-style)]">
            Earn real stock automatically with every purchase.
          </p>
          ******************/}
        </div>
        <div className="inline-flex items-start gap-5 relative flex-[0_0_auto]">
          {actions.map((action) =>
            action.variant === "primary" ? (
              <a
                key={action.label}
                href={action.href}
                className="px-10 py-5 bg-greens-2d-6a-4f inline-flex items-center justify-center relative flex-[0_0_auto] rounded-[100px] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-greens-2d-6a-4f"
              >
                <span className="relative w-fit mt-[-1.00px] font-web-body font-[number:var(--web-body-font-weight)] text-neutralsffffff text-[length:var(--web-body-font-size)] text-center tracking-[var(--web-body-letter-spacing)] leading-[var(--web-body-line-height)] whitespace-nowrap [font-style:var(--web-body-font-style)]">
                  {action.label}
                </span>
              </a>
            ) : (
              <a
                key={action.label}
                href={action.href}
                className="all-[unset] box-border px-10 py-5 bg-neutralsfafbfa border border-solid border-greens-5-2a-788 inline-flex items-center justify-center relative flex-[0_0_auto] rounded-[100px] cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-greens-2d-6a-4f"
              >
                <span className="relative w-fit mt-[-1.00px] font-web-body font-[number:var(--web-body-font-weight)] text-greens-2d-6a-4f text-[length:var(--web-body-font-size)] text-center tracking-[var(--web-body-letter-spacing)] leading-[var(--web-body-line-height)] whitespace-nowrap [font-style:var(--web-body-font-style)]">
                  {action.label}
                </span>
              </a>
            ),
          )}
        </div>
      </div>
      <div>
      <img
        className="absolute top-[100px] left-[1449px] w-[484px] h-[737px] aspect-[0.66]"
        alt="BuyBak mobile app portfolio preview"
        src="https://c.animaapp.com/lRTzVt0W/img/screenshot-2026-04-28-at-12-02-10-am-1.png"
      />
      </div>
  </section>
  );
};
