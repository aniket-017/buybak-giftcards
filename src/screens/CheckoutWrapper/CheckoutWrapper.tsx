import { Frame6Subsection } from "./sections/Frame6Subsection";
import { Frame7Subsection } from "./sections/Frame7Subsection";
import { Frame8Subsection } from "./sections/Frame8Subsection";
import { Frame9Subsection } from "./sections/Frame9Subsection";
import { Frame10Subsection } from "./sections/Frame10Subsection";
import { Frame11Subsection } from "./sections/Frame11Subsection";

export const CheckoutWrapper = (): JSX.Element => {
  const sections = [
    { id: "frame-6", component: <Frame6Subsection /> },
    { id: "frame-7", component: <Frame7Subsection /> },
    { id: "frame-8", component: <Frame8Subsection /> },
    { id: "frame-9", component: <Frame9Subsection /> },
    { id: "frame-10", component: <Frame10Subsection /> },
    { id: "frame-11", component: <Frame11Subsection /> },
  ];

  return (
    <main
      className="flex flex-col min-w-[671px] h-[900px] items-center gap-20 p-20 relative overflow-hidden border border-solid border-neutralse-8ebe-9 bg-[linear-gradient(117deg,rgba(240,247,244,1)_0%,rgba(242,248,246,1)_8%,rgba(245,250,248,1)_17%,rgba(247,251,249,1)_25%,rgba(250,252,251,1)_33%,rgba(252,254,253,1)_42%,rgba(255,255,255,1)_50%,rgba(252,253,254,1)_60%,rgba(249,252,253,1)_70%,rgba(246,250,251,1)_80%,rgba(243,249,250,1)_90%,rgba(240,247,249,1)_100%)] shadow-card-shadow"
      data-model-id="61:8892"
    >
      {sections.map((section) => (
        <section key={section.id} className="w-full">
          {section.component}
        </section>
      ))}
      <div
        className="relative self-stretch w-full h-px mb-[-80.00px]"
        aria-hidden="true"
      />
    </main>
  );
};
