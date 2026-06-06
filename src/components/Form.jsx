import React, { useRef, useState } from "react";

import hashEmail from "@utils/hashEmail.js";

import Button from "@components/Button";

const FormControl = ({ children }) => (
  <div className="flex flex-wrap">{children}</div>
);

const Form = () => {
  const formRef = useRef();
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formRef.current) return;

    const formData = new FormData(formRef.current);

    const payload = {
      name: formData.get("name"),
      email: formData.get("_replyto"),
      message: formData.get("message"),
    };

    await fetch("https://formspree.io/f/xrgdkzoy", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(payload),
    });

    setSubmitted(true);

    if (window.gtag) {
      window.gtag("set", "user_data", {
        sha256_email_address: hashEmail(payload.email),
      });

      window.gtag("event", "conversion", {
        send_to: "AW-3065573427/PaEmCMWRma0ZEPWpo9Y9",
        value: 1.0,
        currency: "GBP",
      });
    }
  };

  return (
    <section
      id="contact"
      className="bg-white p-4 rounded-2xl flex flex-wrap gap-y-8 scroll-mt-6 md:gap-x-12"
    >
      <div className="bg-black text-white p-8 rounded-2xl basis-full overflow-hidden relative md:basis-6/12 md:p-12">
        <h2 className="py-8 font-bold text-3xl md:text-4xl lg:text-5xl md:py-0 md:max-w-xs lg:max-w-sm lg:leading-[55px]">
          Let's work together
        </h2>
        <span className="absolute rounded-[100%] border-white border-[30px] h-80 w-80 left-3/4 top-4 md:h-[289px] md:w-[289px] md:-left-40 md:top-3/4"></span>
        <span className="absolute rounded-[100%] border-white/15 border-[20px] h-80 w-80 right-1/4 -top-12 md:border-[40px] md:h-[479px] md:w-[479px] md:-right-2/3 md:top-1/4"></span>
      </div>
      <div className="basis-full md:min-h-96 md:basis-5/12 md:py-28">
        {submitted ? (
          <div>
            <svg
              xmlns="http://w3.org"
              viewBox="0 0 25 25"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide lucide-circle-check h-16 mb-2 opacity-40 text-green-600"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="m9 12 2 2 4-4" />
            </svg>
            <h2 className="font-bold text-2xl mb-2">Speak soon!</h2>
            <p>
              Your message has been sent successfully. I will get back to you
              within 48 hours.
            </p>
          </div>
        ) : (
          <form
            name="input"
            className="space-y-4"
            ref={formRef}
            onSubmit={handleSubmit}
          >
            <FormControl>
              <label className="text-sm mb-2" htmlFor="name">
                Name
              </label>
              <input
                className="border w-full border-[#D9D9D9] rounded basis-full py-1.5 px-2"
                type="text"
                name="name"
                required
              />
            </FormControl>
            <FormControl>
              <label className="text-sm mb-2" htmlFor="email">
                Email
              </label>
              <input
                className="border w-full border-[#D9D9D9] rounded basis-full py-1.5 px-2"
                type="email"
                name="_replyto"
                required
              />
            </FormControl>
            <FormControl>
              <label className="text-sm mb-2" htmlFor="message">
                Message
              </label>
              <textarea
                className="border w-full border-[#D9D9D9] rounded basis-full py-1.5 px-2"
                name="message"
                required
              ></textarea>
            </FormControl>
            <Button>
              <button className="w-full" type="submit">
                Send message
              </button>
            </Button>
            <input type="hidden" name="_next" value="thanks" />
          </form>
        )}
      </div>
    </section>
  );
};

export default Form;
