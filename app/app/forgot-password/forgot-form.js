import React from "react";

export default function ForgotForm() {
  return (
    <form className="flex flex-col gap-5">
      <input
        type="email"
        name="email"
        id="email"
        placeholder="Enter your email"
        className="rounded-md text-sm px-4 py-2 border border-zinc-700 bg-zinc-800 text-white focus:bg-zinc-950 focus:border-zinc-950 focus:outline-none focus-visible:ring-1 focus-visible:ring-blue-500 focus-visible:shadow focus-visible:shadow-blue-400"
      />
      <button
        type="submit"
        className="rounded-md text-sm px-4 py-2 bg-blue-600 text-white font-medium hover:bg-blue-700 w-fit transition-all"
      >
        Reset Password
      </button>
    </form>
  );
}
