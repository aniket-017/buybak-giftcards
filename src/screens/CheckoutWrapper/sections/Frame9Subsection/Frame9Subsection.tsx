import { useId, useState } from "react";

type FieldConfig = {
  id: string;
  label: string;
  type: "text" | "email" | "tel";
  value: string;
  required?: boolean;
  autoComplete?: string;
  inputMode?: React.HTMLAttributes<HTMLInputElement>["inputMode"];
  ariaLabel: string;
};

export const Frame9Subsection = (): JSX.Element => {
  const baseId = useId();

  const [formData, setFormData] = useState({
    fullName: "John Smith",
    email: "",
    phoneNumber: "(000) 000-0000",
  });

  const fields: FieldConfig[] = [
    {
      id: `${baseId}-full-name`,
      label: "FULL NAME*",
      type: "text",
      value: formData.fullName,
      required: true,
      autoComplete: "name",
      ariaLabel: "Full name",
    },
    {
      id: `${baseId}-email`,
      label: "EMAIL*",
      type: "email",
      value: formData.email,
      required: true,
      autoComplete: "email",
      inputMode: "email",
      ariaLabel: "Email address",
    },
    {
      id: `${baseId}-phone-number`,
      label: "PHONE NUMBER",
      type: "tel",
      value: formData.phoneNumber,
      autoComplete: "tel",
      inputMode: "tel",
      ariaLabel: "Phone number",
    },
  ];

  const handleChange =
    (key: keyof typeof formData) =>
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setFormData((prev) => ({
        ...prev,
        [key]: event.target.value,
      }));
    };

  return (
    <section
      aria-labelledby={`${baseId}-delivery-details-heading`}
      className="flex flex-col items-start gap-10 relative self-stretch w-full flex-[0_0_auto] mb-[-80.00px]"
    >
      <h2
        className="relative self-stretch mt-[-1.00px] font-web-h3 font-[number:var(--web-h3-font-weight)] text-blues-0d-2137 text-[length:var(--web-h3-font-size)] tracking-[var(--web-h3-letter-spacing)] leading-[var(--web-h3-line-height)] [font-style:var(--web-h3-font-style)]"
        id={`${baseId}-delivery-details-heading`}
      >
        Delivery Details
      </h2>
      <form
        className="flex flex-col items-start gap-10 relative self-stretch w-full flex-[0_0_auto]"
        noValidate
      >
        {fields.map((field) => {
          const key =
            field.type === "email"
              ? "email"
              : field.id.includes("full-name")
                ? "fullName"
                : "phoneNumber";

          return (
            <div
              key={field.id}
              className="flex flex-col items-start gap-2 relative self-stretch w-full flex-[0_0_auto]"
            >
              <label
                className="relative self-stretch mt-[-1.00px] font-web-small font-[number:var(--web-small-font-weight)] text-blues-0d-2137 text-[length:var(--web-small-font-size)] tracking-[var(--web-small-letter-spacing)] leading-[var(--web-small-line-height)] [font-style:var(--web-small-font-style)]"
                htmlFor={field.id}
              >
                {field.label}
              </label>
              <input
                aria-label={field.ariaLabel}
                autoComplete={field.autoComplete}
                className="px-10 py-5 relative self-stretch w-full bg-neutralsfafbfa rounded-[20px] border border-solid border-neutrals-7a-8a-85 text-neutrals-7a-8a-85 mt-[-1.00px] font-web-body font-[number:var(--web-body-font-weight)] text-[length:var(--web-body-font-size)] text-center tracking-[var(--web-body-letter-spacing)] leading-[var(--web-body-line-height)] whitespace-nowrap [font-style:var(--web-body-font-style)] placeholder:text-neutrals-7a-8a-85"
                id={field.id}
                inputMode={field.inputMode}
                onChange={handleChange(key)}
                required={field.required}
                type={field.type}
                value={field.value}
              />
            </div>
          );
        })}
      </form>
    </section>
  );
};
