import React from 'react';
import { AiOutlineSend } from "react-icons/ai";

const Email = () => {
  return (
    <form action="https://formsubmit.co/aryanktr730@gmail.com" method="POST">
      <div className="relative">
        <input
          type="email"
          name="email"
          placeholder="Email address"
          autoComplete="email"
          aria-label="Email address"
          required
          className="block w-full rounded-sm border border-line bg-ink py-4 pl-5 pr-16 text-base text-text placeholder:text-muted focus:border-accent focus:outline-none transition"
        />
        <input type="hidden" name="_captcha" value="false" />

        <div className="absolute inset-y-1 right-1 flex justify-end">
          <button
            type="submit"
            aria-label="Submit"
            className="flex aspect-square h-full items-center justify-center rounded-sm bg-accent text-ink transition hover:brightness-110"
          >
            <AiOutlineSend />
          </button>
        </div>
      </div>
    </form>
  );
};

export default Email;