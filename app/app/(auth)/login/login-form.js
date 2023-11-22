"use client";

import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(true);
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [disabled, setDisabled] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setDisabled(true);
      setTimeout(async () => {
        console.log(email, password);
        const res = await signIn("credentials", {
          email,
          password,
          redirect: false,
        });
        setDisabled(false);
        if (res.error) {
          toast.error("Invalid credentials");
          return;
        }
        router.push(`http://dashboard.${process.env.NEXT_PUBLIC_ROOT_DOMAIN}`);
      }, 2000);
    } catch (error) {
      console.log(error);
      alert("Something went wrong");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5 mt-5">
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
          onChange={(e) => setEmail(e.target.value)}
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
          onChange={(e) => setPassword(e.target.value)}
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
        className="rounded-md text-sm px-4 py-2 bg-zinc-600 text-white font-medium hover:bg-zinc-700 disabled:bg-zinc-600/30 disabled:hover:bg-zinc-600/30 disabled:cursor-not-allowed"
        disabled={disabled}
      >
        {disabled ? "Signing in..." : "Sign in"}
      </button>
    </form>
  );
}
