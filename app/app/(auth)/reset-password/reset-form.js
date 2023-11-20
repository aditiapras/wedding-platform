"use client";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";

export default function ResetForm() {
  const [showPassword, setShowPassword] = useState(true);
  const [passwordMatch, setPasswordMatch] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordLength, setPasswordLength] = useState(false);

  return (
    <form className="flex flex-col gap-5">
      <button
        type="button"
        className="self-end -mb-4"
        onClick={() => setShowPassword(!showPassword)}
      >
        {showPassword ? (
          <Eye className="text-background" size={20} />
        ) : (
          <EyeOff className="text-background" size={20} />
        )}
      </button>
      <input
        type={showPassword ? "password" : "text"}
        name="password"
        id="password"
        placeholder="Enter your new password"
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
      <input
        type={showPassword ? "password" : "text"}
        name="retype-password"
        id="retype-password"
        placeholder="Re-type your password"
        onChange={(e) => setPasswordMatch(e.target.value)}
        className="rounded-md text-sm px-4 py-2 border border-zinc-700 bg-zinc-800 text-white focus:bg-zinc-950 focus:border-zinc-950 focus:outline-none focus-visible:ring-1 focus-visible:ring-blue-500 focus-visible:shadow focus-visible:shadow-blue-400"
      />
      {passwordMatch != password && passwordMatch != "" && (
        <p className="text-red-400 text-xs">Password did not match</p>
      )}
      <button
        type="submit"
        className="rounded-md text-sm px-4 py-2 bg-blue-600 text-white font-medium hover:bg-blue-700 w-fit transition-all"
      >
        Change password
      </button>
    </form>
  );
}
