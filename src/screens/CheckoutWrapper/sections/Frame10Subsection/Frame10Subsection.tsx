import React, { useId, useState } from "react";

type PaymentFieldConfig = {
  id: string;
  label: string;
  placeholder: string;
  autoComplete?: string;
  inputMode?: React.HTMLAttributes<HTMLInputElement>["inputMode"];
  maxLength?: number;
  value: string;
};

const fieldLabelClassName =
  "relative self-stretch mt-[-1.00px] font-web-small font-[number:var(--web-small-font-weight)] text-blues-0d-2137 text-[length:var(--web-small-font-size)] tracking-[var(--web-small-letter-spacing)] leading-[var(--web-small-line-height)] [font-style:var(--web-small-font-style)]";

const inputWrapperClassName =
  "flex items-center gap-5 px-10 py-5 relative self-stretch w-full flex-[0_0_auto] bg-neutralsfafbfa rounded-[20px] border border-solid border-neutrals-7a-8a-85 focus-within:border-blues-0d-2137";

const inputClassName =
  "relative w-full mt-[-1.00px] font-web-body font-[number:var(--web-body-font-weight)] text-[length:var(--web-body-font-size)] text-blues-0d-2137 tracking-[var(--web-body-letter-spacing)] leading-[var(--web-body-line-height)] [font-style:var(--web-body-font-style)] placeholder:text-neutrals-7a-8a-85";

export const Frame10Subsection = (): JSX.Element => {
  const sectionTitleId = useId();
  const [cardNumber, setCardNumber] = useState("");
  const [expiration, setExpiration] = useState("");
  const [securityCode, setSecurityCode] = useState("");
  const [zipCode, setZipCode] = useState("");

  const formatCardNumber = (value: string) =>
    value
      .replace(/\D/g, "")
      .slice(0, 16)
      .replace(/(.{4})/g, "$1 ")
      .trim();

  const formatExpiration = (value: string) => {
    const digits = value.replace(/\D/g, "").slice(0, 4);
    if (digits.length <= 2) {
      return digits;
    }
    return `${digits.slice(0, 2)}/${digits.slice(2)}`;
  };

  const fields: PaymentFieldConfig[] = [
    {
      id: "card-number",
      label: "CARD NUMBER",
      placeholder: "**** **** **** ****",
      autoComplete: "cc-number",
      inputMode: "numeric",
      maxLength: 19,
      value: cardNumber,
    },
    {
      id: "expiration",
      label: "EXPIRATION",
      placeholder: "MM/YY",
      autoComplete: "cc-exp",
      inputMode: "numeric",
      maxLength: 5,
      value: expiration,
    },
    {
      id: "security-code",
      label: "SECURITY CODE",
      placeholder: "****",
      autoComplete: "cc-csc",
      inputMode: "numeric",
      maxLength: 4,
      value: securityCode,
    },
    {
      id: "zip-code",
      label: "ZIP CODE",
      placeholder: "00000",
      autoComplete: "postal-code",
      inputMode: "numeric",
      maxLength: 10,
      value: zipCode,
    },
  ];

  return (
    <section
      aria-labelledby={sectionTitleId}
      className="flex flex-col items-start gap-10 relative self-stretch w-full flex-[0_0_auto] mb-[-80.00px]"
    >
      <h2
        id={sectionTitleId}
        className="self-stretch font-web-h3 text-[length:var(--web-h3-font-size)] relative mt-[-1.00px] font-[number:var(--web-h3-font-weight)] text-blues-0d-2137 tracking-[var(--web-h3-letter-spacing)] leading-[var(--web-h3-line-height)] [font-style:var(--web-h3-font-style)]"
      >
        Payment Method
      </h2>
      <div className="flex flex-col items-start gap-2 relative self-stretch w-full flex-[0_0_auto]">
        <label htmlFor={fields[0].id} className={fieldLabelClassName}>
          {fields[0].label}
        </label>
        <div className={inputWrapperClassName}>
          <input
            id={fields[0].id}
            name={fields[0].id}
            type="text"
            value={cardNumber}
            onChange={(event) =>
              setCardNumber(formatCardNumber(event.target.value))
            }
            placeholder={fields[0].placeholder}
            autoComplete={fields[0].autoComplete}
            inputMode={fields[0].inputMode}
            maxLength={fields[0].maxLength}
            aria-label={fields[0].label}
            className={inputClassName}
          />
        </div>
      </div>
      <div className="flex items-start gap-10 relative self-stretch w-full flex-[0_0_auto]">
        {fields.slice(1, 3).map((field) => (
          <div
            key={field.id}
            className="flex flex-col items-start gap-2 relative flex-1 grow"
          >
            <label htmlFor={field.id} className={fieldLabelClassName}>
              {field.label}
            </label>
            <div className={inputWrapperClassName}>
              <input
                id={field.id}
                name={field.id}
                type="text"
                value={field.value}
                onChange={(event) => {
                  if (field.id === "expiration") {
                    setExpiration(formatExpiration(event.target.value));
                  } else {
                    setSecurityCode(
                      event.target.value.replace(/\D/g, "").slice(0, 4),
                    );
                  }
                }}
                placeholder={field.placeholder}
                autoComplete={field.autoComplete}
                inputMode={field.inputMode}
                maxLength={field.maxLength}
                aria-label={field.label}
                className={inputClassName}
              />
            </div>
          </div>
        ))}
      </div>
      <div className="flex flex-col items-start gap-2 relative self-stretch w-full flex-[0_0_auto]">
        <label htmlFor={fields[3].id} className={fieldLabelClassName}>
          {fields[3].label}
        </label>
        <div className={inputWrapperClassName}>
          <input
            id={fields[3].id}
            name={fields[3].id}
            type="text"
            value={zipCode}
            onChange={(event) =>
              setZipCode(event.target.value.replace(/[^\d-]/g, "").slice(0, 10))
            }
            placeholder={fields[3].placeholder}
            autoComplete={fields[3].autoComplete}
            inputMode={fields[3].inputMode}
            maxLength={fields[3].maxLength}
            aria-label={fields[3].label}
            className={inputClassName}
          />
        </div>
      </div>
    </section>
  );
};
