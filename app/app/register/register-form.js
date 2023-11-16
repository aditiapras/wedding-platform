"use client";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { register } from "@/lib/actions";
import RegisterButton from "./register-button";

export default function RegisterForm() {
  const [showPassword, setShowPassword] = useState(true);
  const [passwordMatch, setPasswordMatch] = useState(false);
  const [passwordLength, setPasswordLength] = useState(false);
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [disabled, setDisabled] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const body = {
      email,
      password,
    };
    setDisabled(true);
    setTimeout(() => {
      register(body);
      setDisabled(false);
    }, 2000);
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
          required
          placeholder="Enter your email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
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
          placeholder="Enter password"
          onChange={(e) => {
            setPassword(e.target.value);
            setPasswordLength(e.target.value.length >= 8);
          }}
          className="rounded-md text-sm px-4 py-2 border border-zinc-700 bg-zinc-800 text-white focus:bg-zinc-950 focus:border-zinc-950 focus:outline-none focus-visible:ring-1 focus-visible:ring-blue-500 focus-visible:shadow focus-visible:shadow-blue-400"
        />
        {!passwordLength && password != "" && (
          <p className="text-red-400 text-xs">
            Password must be at least 8 characters
          </p>
        )}
      </div>
      <div className="grid gap-2">
        <label
          htmlFor="password_confirmation"
          className="text-sm font-semibold text-background"
        >
          Confirm Password
        </label>
        <input
          type={showPassword ? "password" : "text"}
          name="password_confirmation"
          id="password_confirmation"
          required
          placeholder="Enter password confirmation"
          onChange={(e) => setPasswordMatch(e.target.value)}
          className="rounded-md text-sm px-4 py-2 border border-zinc-700 bg-zinc-800 text-white focus:bg-zinc-950 focus:border-zinc-950 focus:outline-none focus-visible:ring-1 focus-visible:ring-blue-500 focus-visible:shadow focus-visible:shadow-blue-400"
        />
        {passwordMatch != password && passwordMatch != "" && (
          <p className="text-red-400 text-xs">Password did not match</p>
        )}
      </div>
      <button
        type="submit"
        disabled={disabled}
        className="rounded-md text-sm px-4 py-2 bg-zinc-600 text-white font-medium hover:bg-zinc-700 mt-5 transition-all duration-200"
      >
        Create account
      </button>
      {/* <RegisterButton /> */}
    </form>
  );
}
