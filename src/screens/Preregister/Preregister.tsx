import { FormEvent, useId, useState } from "react";
import { Link } from "react-router-dom";

export const Preregister = (): JSX.Element => {
  const emailId = useId();
  const inviteId = useId();

  const [email, setEmail] = useState("");
  const [friends, setFriends] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <main
      className="flex min-h-screen w-full items-center justify-center bg-[#f7f7f7] px-4 py-4"
      data-model-id="259:28630"
    >
      <section
        aria-labelledby="preregister-heading"
        className="flex h-[900px] min-w-[671px] flex-col items-center justify-between rounded-[20px] border border-solid border-neutralse-8ebe-9 bg-[linear-gradient(117deg,rgba(240,247,244,1)_0%,rgba(242,248,246,1)_8%,rgba(245,250,248,1)_17%,rgba(247,251,249,1)_25%,rgba(250,252,251,1)_33%,rgba(252,254,253,1)_42%,rgba(255,255,255,1)_50%,rgba(252,253,254,1)_60%,rgba(249,252,253,1)_70%,rgba(246,250,251,1)_80%,rgba(243,249,250,1)_90%,rgba(240,247,249,1)_100%)] p-20 shadow-card-shadow"
      >
        <div className="flex w-full flex-[0_0_auto] items-center justify-between self-stretch">
          <div className="inline-flex flex-[0_0_auto] items-center gap-2">
            <div className="relative h-11 w-[63.22px] bg-[url(https://c.animaapp.com/lRTzVt0W/img/image--buybak--21@2x.png)] bg-cover bg-[50%_50%] opacity-75" />
            <h1
              className="relative mt-[-1.00px] w-fit font-web-h2 text-[length:var(--web-h2-font-size)] font-[number:var(--web-h2-font-weight)] leading-[var(--web-h2-line-height)] tracking-[var(--web-h2-letter-spacing)] text-greens-1b-4332 [font-style:var(--web-h2-font-style)]"
              id="preregister-heading"
            >
              Join the Club
            </h1>
          </div>
          <Link
            aria-label="Close preregistration"
            className="flex h-10 w-10 items-center justify-center"
            to="/"
          >
            <img
              alt=""
              aria-hidden="true"
              className="relative h-10 w-10 aspect-[1]"
              src="https://c.animaapp.com/lRTzVt0W/img/iconamoon-close-3.svg"
            />
          </Link>
        </div>
        <form
          className="flex w-full flex-1 flex-col justify-between"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col items-start gap-10 self-stretch">
            <div className="flex flex-col items-start gap-2 self-stretch">
              <label
                className="relative mt-[-1.00px] self-stretch font-web-small text-[length:var(--web-small-font-size)] font-[number:var(--web-small-font-weight)] leading-[var(--web-small-line-height)] tracking-[var(--web-small-letter-spacing)] text-greens-1b-4332 [font-style:var(--web-small-font-style)]"
                htmlFor={emailId}
              >
                EMAIL*
              </label>
              <div className="relative flex w-full flex-[0_0_auto] items-center gap-5 self-stretch rounded-[20px] border border-solid border-neutrals-7a-8a-85 bg-neutralsfafbfa px-10 py-5">
                <img
                  alt=""
                  aria-hidden="true"
                  className="relative h-6 w-6 aspect-[1] flex-shrink-0"
                  src="https://c.animaapp.com/lRTzVt0W/img/iconamoon-email-light-1.svg"
                />
                <input
                  required
                  aria-required="true"
                  autoComplete="email"
                  className="relative mt-[-1.00px] w-full min-w-0 bg-transparent p-0 font-web-body text-[length:var(--web-body-font-size)] font-[number:var(--web-body-font-weight)] leading-[var(--web-body-line-height)] tracking-[var(--web-body-letter-spacing)] text-neutrals-7a-8a-85 [font-style:var(--web-body-font-style)] placeholder:text-neutrals-7a-8a-85"
                  id={emailId}
                  name="email"
                  placeholder="your@email.com"
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                />
              </div>
            </div>
            <div className="flex flex-col items-end justify-end gap-2 self-stretch">
              <label
                className="relative mt-[-1.00px] self-stretch font-web-small text-[length:var(--web-small-font-size)] font-[number:var(--web-small-font-weight)] leading-[var(--web-small-line-height)] tracking-[var(--web-small-letter-spacing)] text-greens-1b-4332 [font-style:var(--web-small-font-style)]"
                htmlFor={inviteId}
              >
                INVITE YOUR FRIENDS
              </label>
              <div className="relative flex w-full flex-[0_0_auto] items-center gap-5 self-stretch rounded-[20px] border border-solid border-neutrals-7a-8a-85 bg-neutralsfafbfa px-10 py-5">
                <img
                  alt=""
                  aria-hidden="true"
                  className="relative h-6 w-6 aspect-[1] flex-shrink-0"
                  src="https://c.animaapp.com/lRTzVt0W/img/iconamoon-email-light-1.svg"
                />
                <input
                  autoComplete="off"
                  className="relative mt-[-1.00px] w-full min-w-0 bg-transparent p-0 font-web-body text-[length:var(--web-body-font-size)] font-[number:var(--web-body-font-weight)] leading-[var(--web-body-line-height)] tracking-[var(--web-body-letter-spacing)] text-neutrals-7a-8a-85 [font-style:var(--web-body-font-style)] placeholder:text-neutrals-7a-8a-85"
                  id={inviteId}
                  name="friends"
                  placeholder="friend1@email.com, friend2@email.com"
                  type="text"
                  value={friends}
                  onChange={(event) => setFriends(event.target.value)}
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start gap-5 self-stretch">
            <Link
              className="flex w-full flex-[0_0_auto] items-center justify-center self-stretch rounded-[100px] bg-greens-2d-6a-4f px-10 py-5"
              to="/preregisteru47success"
            >
              <span className="relative mt-[-1.00px] w-fit whitespace-nowrap font-web-body text-[length:var(--web-body-font-size)] font-[number:var(--web-body-font-weight)] leading-[var(--web-body-line-height)] tracking-[var(--web-body-letter-spacing)] text-neutralsffffff [font-style:var(--web-body-font-style)]">
                Pre-Register Now
              </span>
            </Link>
          </div>
        </form>
      </section>
    </main>
  );
};
