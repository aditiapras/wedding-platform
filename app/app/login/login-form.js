"use client";

import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(true);

  return (
    <form className="flex flex-col gap-5 mt-5">
      <div className="grid gap-2">
        <label
          htmlFor="email"
          className="text-sm font-semibold text-background"
        >
          Email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          required
          placeholder="Enter your email"
          className="rounded-md text-sm px-4 py-2 border border-zinc-700 bg-zinc-800 text-white focus:bg-zinc-950 focus:border-zinc-950 focus:outline-none focus-visible:ring-1 focus-visible:ring-blue-500 focus-visible:shadow focus-visible:shadow-blue-400"
        />
      </div>
      <div className="grid gap-2">
        <div className="flex justify-between items-center">
          <label
            htmlFor="password"
            className="text-sm font-semibold text-background"
          >
            Password
          </label>
          <button type="button" onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? (
              <Eye className="text-muted-foreground" size={20} />
            ) : (
              <EyeOff className="text-muted-foreground" size={20} />
            )}
          </button>
        </div>
        <input
          type={showPassword ? "password" : "text"}
          name="password"
          id="password"
          required
          placeholder="Enter your password"
          className="rounded-md text-sm px-4 py-2 border border-zinc-700 bg-zinc-800 text-white focus:bg-zinc-950 focus:border-zinc-950 focus:outline-none focus-visible:ring-1 focus-visible:ring-blue-500 focus-visible:shadow focus-visible:shadow-blue-400"
        />
      </div>
      <a
        href="/forgot-password"
        className="text-sm text-zinc-400 hover:underline w-fit hover:text-blue-400"
      >
        Forgot password?
      </a>
      <button
        type="submit"
        className="rounded-md text-sm px-4 py-2 bg-zinc-600 text-white font-medium hover:bg-zinc-700"
      >
        Sign in
      </button>
    </form>
  );
}
