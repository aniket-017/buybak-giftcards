import { FormEvent, useId, useState } from "react";

type FormData = {
  fullName: string;
  email: string;
  phoneNumber: string;
  company: string;
  message: string;
};

const initialFormData: FormData = {
  fullName: "",
  email: "",
  phoneNumber: "",
  company: "",
  message: "",
};

export const Contact = (): JSX.Element => {
  const [formData, setFormData] = useState<FormData>(initialFormData);

  const fullNameId = useId();
  const emailId = useId();
  const phoneId = useId();
  const companyId = useId();
  const messageId = useId();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <section
      className="flex flex-col min-w-[671px] h-[1000px] items-center gap-10 p-20 relative overflow-hidden border border-solid border-neutralse-8ebe-9 bg-[linear-gradient(117deg,rgba(240,247,244,1)_0%,rgba(242,248,246,1)_8%,rgba(245,250,248,1)_17%,rgba(247,251,249,1)_25%,rgba(250,252,251,1)_33%,rgba(252,254,253,1)_42%,rgba(255,255,255,1)_50%,rgba(252,253,254,1)_60%,rgba(249,252,253,1)_70%,rgba(246,250,251,1)_80%,rgba(243,249,250,1)_90%,rgba(240,247,249,1)_100%)] shadow-card-shadow"
      data-model-id="40:7605"
      aria-labelledby="contact-title"
    >
      <header className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto]">
        <div className="inline-flex items-center gap-2 relative flex-[0_0_auto]">
          <div className="relative w-[63.22px] h-11 opacity-75 bg-[url(https://c.animaapp.com/lRTzVt0W/img/image--buybak--21@2x.png)] bg-cover bg-[50%_50%]" />
          <h1
            id="contact-title"
            className="relative w-fit mt-[-1.00px] font-web-h2 font-[number:var(--web-h2-font-weight)] text-greens-1b-4332 text-[length:var(--web-h2-font-size)] tracking-[var(--web-h2-letter-spacing)] leading-[var(--web-h2-line-height)] [font-style:var(--web-h2-font-style)]"
          >
            Contact Us
          </h1>
        </div>
        <button
          type="button"
          aria-label="Close contact form"
          className="relative flex h-10 w-10 items-center justify-center"
        >
          <img
            className="relative w-10 h-10 aspect-[1]"
            alt=""
            src="https://c.animaapp.com/lRTzVt0W/img/iconamoon-close-4.svg"
          />
        </button>
      </header>
      <form
        className="flex flex-col items-start gap-10 relative self-stretch w-full flex-[0_0_auto] mb-[-17.00px]"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col items-start gap-2 relative self-stretch w-full flex-[0_0_auto]">
          <label
            htmlFor={fullNameId}
            className="relative self-stretch mt-[-1.00px] font-web-small font-[number:var(--web-small-font-weight)] text-greens-1b-4332 text-[length:var(--web-small-font-size)] tracking-[var(--web-small-letter-spacing)] leading-[var(--web-small-line-height)] [font-style:var(--web-small-font-style)]"
          >
            FULL NAME*
          </label>
          <input
            id={fullNameId}
            type="text"
            autoComplete="name"
            required
            value={formData.fullName}
            onChange={(event) =>
              setFormData((current) => ({
                ...current,
                fullName: event.target.value,
              }))
            }
            placeholder="John Smith"
            className="px-10 py-5 relative self-stretch w-full bg-neutralsfafbfa rounded-[20px] border border-solid border-neutrals-7a-8a-85 font-web-body font-[number:var(--web-body-font-weight)] text-neutrals-7a-8a-85 text-[length:var(--web-body-font-size)] text-left tracking-[var(--web-body-letter-spacing)] leading-[var(--web-body-line-height)] [font-style:var(--web-body-font-style)] placeholder:text-neutrals-7a-8a-85"
          />
        </div>
        <div className="flex flex-col items-start gap-2 relative self-stretch w-full flex-[0_0_auto]">
          <label
            className="relative self-stretch mt-[-1.00px] font-web-small font-[number:var(--web-small-font-weight)] text-greens-1b-4332 text-[length:var(--web-small-font-size)] tracking-[var(--web-small-letter-spacing)] leading-[var(--web-small-line-height)] [font-style:var(--web-small-font-style)]"
            htmlFor={emailId}
          >
            EMAIL*
          </label>
          <input
            className="px-10 py-5 relative self-stretch w-full bg-neutralsfafbfa rounded-[20px] border border-solid border-neutrals-7a-8a-85 mt-[-1.00px] font-web-body font-[number:var(--web-body-font-weight)] text-neutrals-7a-8a-85 text-[length:var(--web-body-font-size)] text-left tracking-[var(--web-body-letter-spacing)] leading-[var(--web-body-line-height)] [font-style:var(--web-body-font-style)] placeholder:text-neutrals-7a-8a-85"
            id={emailId}
            placeholder="your@email.com"
            type="email"
            autoComplete="email"
            required
            value={formData.email}
            onChange={(event) =>
              setFormData((current) => ({
                ...current,
                email: event.target.value,
              }))
            }
          />
        </div>
        <div className="flex flex-col items-start gap-2 relative self-stretch w-full flex-[0_0_auto]">
          <label
            htmlFor={phoneId}
            className="relative self-stretch mt-[-1.00px] font-web-small font-[number:var(--web-small-font-weight)] text-greens-1b-4332 text-[length:var(--web-small-font-size)] tracking-[var(--web-small-letter-spacing)] leading-[var(--web-small-line-height)] [font-style:var(--web-small-font-style)]"
          >
            PHONE NUMBER*
          </label>
          <input
            id={phoneId}
            type="tel"
            autoComplete="tel"
            required
            value={formData.phoneNumber}
            onChange={(event) =>
              setFormData((current) => ({
                ...current,
                phoneNumber: event.target.value,
              }))
            }
            placeholder="(000) 000-0000"
            className="px-10 py-5 relative self-stretch w-full bg-neutralsfafbfa rounded-[20px] border border-solid border-neutrals-7a-8a-85 font-web-body font-[number:var(--web-body-font-weight)] text-neutrals-7a-8a-85 text-[length:var(--web-body-font-size)] text-left tracking-[var(--web-body-letter-spacing)] leading-[var(--web-body-line-height)] [font-style:var(--web-body-font-style)] placeholder:text-neutrals-7a-8a-85"
          />
        </div>
        <div className="flex flex-col items-start gap-2 relative self-stretch w-full flex-[0_0_auto]">
          <label
            htmlFor={companyId}
            className="relative self-stretch mt-[-1.00px] font-web-small font-[number:var(--web-small-font-weight)] text-greens-1b-4332 text-[length:var(--web-small-font-size)] tracking-[var(--web-small-letter-spacing)] leading-[var(--web-small-line-height)] [font-style:var(--web-small-font-style)]"
          >
            COMPANY*
          </label>
          <input
            className="px-10 py-5 relative self-stretch w-full bg-neutralsfafbfa rounded-[20px] border border-solid border-neutrals-7a-8a-85 mt-[-1.00px] font-web-body font-[number:var(--web-body-font-weight)] text-neutrals-7a-8a-85 text-[length:var(--web-body-font-size)] text-left tracking-[var(--web-body-letter-spacing)] leading-[var(--web-body-line-height)] [font-style:var(--web-body-font-style)] placeholder:text-neutrals-7a-8a-85"
            id={companyId}
            placeholder="Your company name here"
            type="text"
            autoComplete="organization"
            required
            value={formData.company}
            onChange={(event) =>
              setFormData((current) => ({
                ...current,
                company: event.target.value,
              }))
            }
          />
        </div>
        <div className="flex flex-col items-start gap-2 relative self-stretch w-full flex-[0_0_auto]">
          <label
            htmlFor={messageId}
            className="relative self-stretch mt-[-1.00px] font-web-small font-[number:var(--web-small-font-weight)] text-greens-1b-4332 text-[length:var(--web-small-font-size)] tracking-[var(--web-small-letter-spacing)] leading-[var(--web-small-line-height)] [font-style:var(--web-small-font-style)]"
          >
            MESSAGE
          </label>
          <textarea
            id={messageId}
            value={formData.message}
            onChange={(event) =>
              setFormData((current) => ({
                ...current,
                message: event.target.value,
              }))
            }
            placeholder="How can we help you?"
            rows={6}
            className="flex h-[200px] items-start gap-5 px-10 py-5 relative self-stretch w-full resize-none bg-neutralsfafbfa rounded-[20px] border border-solid border-neutrals-7a-8a-85 font-web-body font-[number:var(--web-body-font-weight)] text-neutrals-7a-8a-85 text-[length:var(--web-body-font-size)] text-left tracking-[var(--web-body-letter-spacing)] leading-[var(--web-body-line-height)] [font-style:var(--web-body-font-style)] placeholder:text-neutrals-7a-8a-85"
          />
        </div>
        <button
          type="submit"
          className="flex items-center justify-center gap-3 px-10 py-5 relative self-stretch w-full flex-[0_0_auto] mb-[-80.00px] bg-greens-2d-6a-4f rounded-[100px]"
        >
          <span className="relative w-fit mt-[-1.00px] font-web-body font-[number:var(--web-body-font-weight)] text-neutralsffffff text-[length:var(--web-body-font-size)] text-center tracking-[var(--web-body-letter-spacing)] leading-[var(--web-body-line-height)] whitespace-nowrap [font-style:var(--web-body-font-style)]">
            Send message
          </span>
          <img
            className="relative w-5 h-5 aspect-[1]"
            alt=""
            src="https://c.animaapp.com/lRTzVt0W/img/iconamoon-send-light.svg"
          />
        </button>
      </form>
      <div className="relative self-stretch w-full h-5 mb-[-80.00px]" />
    </section>
  );
};
