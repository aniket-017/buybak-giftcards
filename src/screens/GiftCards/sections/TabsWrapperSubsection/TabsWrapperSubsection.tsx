import { useId, useState } from "react";

const tabs = [
  { id: "all-brands", label: "All Brands" },
  { id: "lowes", label: "Lowe's" },
  { id: "home-depot", label: "Home Depot" },
  { id: "staples", label: "Staples" },
];

export const TabsWrapperSubsection = (): JSX.Element => {
  const [activeTab, setActiveTab] = useState<string>("all-brands");
  const tabsListId = useId();

  return (
    <div className="flex items-center gap-20 relative self-stretch w-full flex-[0_0_auto] z-[2]">
      <div
        aria-label="Gift card brands"
        className="inline-flex items-center gap-5 relative flex-[0_0_auto] flex-wrap"
        id={tabsListId}
        role="tablist"
      >
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;

          return (
            <button
              aria-selected={isActive}
              className={`inline-flex items-center justify-center px-8 py-2 relative flex-[0_0_auto] rounded-[100px] transition-colors ${
                isActive ? "gap-2 bg-blues-1a-3a-5c" : "bg-neutralse-8ebe-9"
              }`}
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              role="tab"
              type="button"
            >
              <span
                className={`relative w-fit mt-[-1.00px] font-web-body font-[number:var(--web-body-font-weight)] text-[length:var(--web-body-font-size)] text-center tracking-[var(--web-body-letter-spacing)] leading-[var(--web-body-line-height)] whitespace-nowrap [font-style:var(--web-body-font-style)] ${
                  isActive ? "text-bluesebf-3fa" : "text-blues-1a-3a-5c"
                }`}
              >
                {tab.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};
