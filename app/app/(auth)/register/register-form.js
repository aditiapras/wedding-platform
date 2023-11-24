"use client";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { registerUser } from "@/lib/actions";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export default function RegisterForm() {
  const [showPassword, setShowPassword] = useState(true);
  const [passwordLength, setPasswordLength] = useState(false);
  const [passwordMatch, setPasswordMatch] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [disabled, setDisabled] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (passwordLength && passwordMatch === password) {
      setDisabled(true);
      setTimeout(async () => {
        const res = await registerUser({
          email,
          username,
          password,
        });
        if (res.isRegistered) {
          setEmail("");
          setPassword("");
          setPasswordMatch("");
          router.push(`/account-verification?section=register`);
        } else {
          toast.error("User with this email already exists");
        }
        setDisabled(false);
      }, 2000);
    } else {
      toast.error("Password must be at least 8 characters");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5 mt-5">
      <div className="grid gap-2">
        <label
          htmlFor="username"
          className="text-sm font-semibold text-background"
        >
          Full Name
        </label>
        <input
          type="text"
          name="username"
          id="username"
          required
          placeholder="Enter your name"
          onChange={(e) => {
            setUsername(e.target.value);
          }}
          className="rounded-md text-sm px-4 py-2 border border-zinc-700 bg-zinc-800 text-white focus:bg-zinc-950 focus:border-zinc-950 focus:outline-none focus-visible:ring-1 focus-visible:ring-indigo-500 focus-visible:shadow focus-visible:shadow-indigo-400"
        />
      </div>
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
          pattern="^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
          required
          placeholder="Enter your email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          className="rounded-md text-sm px-4 py-2 border border-zinc-700 bg-zinc-800 text-white focus:bg-zinc-950 focus:border-zinc-950 focus:outline-none focus-visible:ring-1 focus-visible:ring-indigo-500 focus-visible:shadow focus-visible:shadow-indigo-400"
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
          pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$"
          title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
          placeholder="Enter password"
          onChange={(e) => {
            setPassword(e.target.value);
            setPasswordLength(e.target.value.length >= 8);
          }}
          className="rounded-md text-sm px-4 py-2 border border-zinc-700 bg-zinc-800 text-white focus:bg-zinc-950 focus:border-zinc-950 focus:outline-none focus-visible:ring-1 focus-visible:ring-indigo-500 focus-visible:shadow focus-visible:shadow-indigo-400"
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
          className="rounded-md text-sm px-4 py-2 border border-zinc-700 bg-zinc-800 text-white focus:bg-zinc-950 focus:border-zinc-950 focus:outline-none focus-visible:ring-1 focus-visible:ring-indigo-500 focus-visible:shadow focus-visible:shadow-indigo-400"
        />
        {passwordMatch != password && passwordMatch != "" && (
          <p className="text-red-400 text-xs">Password did not match</p>
        )}
      </div>

      <button
        type="submit"
        disabled={disabled}
        className="rounded-md text-sm px-4 py-2 bg-indigo-600 text-white font-medium hover:bg-indigo-700 mt-5 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {disabled ? "Creating your account" : "Create account"}
      </button>
    </form>
  );
}
