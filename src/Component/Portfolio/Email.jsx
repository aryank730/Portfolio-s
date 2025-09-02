import React from 'react';
import { AiOutlineSend } from "react-icons/ai";

const Email = () => {
  return (
    <form action="https://formsubmit.co/mikkytenn@gmail.com" method="POST">
      <div className="relative m-6">
        <input
          type="email"
          name="email"
          placeholder="Email address"
          autoComplete="email"
          aria-label="Email address"
          required
          className="block w-full rounded-2xl border border-neutral-300 bg-transparent py-4 pl-6 pr-20 text-base/6 text-neutral-950 ring-4 ring-transparent transition placeholder:text-neutral-500 focus:border-neutral-950 focus:outline-none focus:ring-neutral-950/5"
        />
        <input type="hidden" name="_captcha" value="false" />

        <div className="absolute inset-y-1 right-1 flex justify-end">
          <button
            type="submit"
            aria-label="Submit"
            className="flex aspect-square h-full items-center justify-center rounded-xl bg-neutral-950 text-white transition hover:bg-neutral-800"
          >
            <AiOutlineSend />
          </button>
        </div>
      </div>
    </form>
  );
};

export default Email;
