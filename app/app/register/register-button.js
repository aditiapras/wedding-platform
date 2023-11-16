"use client";
import { useFormStatus } from "react-dom";

export default function RegisterButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      aria-disabled={pending}
      className="rounded-md text-sm px-4 py-2 bg-zinc-600 text-white font-medium hover:bg-zinc-700 mt-5 transition-all duration-200"
    >
      Create account
    </button>
  );
}
