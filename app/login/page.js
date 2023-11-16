import { Button } from "@/components/ui/button";
import Flower from "lucide-react";

export default function Page() {
  return (
    <main className="flex flex-col min-h-screen items-center justify-center bg-foreground">
      <section className="flex w-1/2 items-center justify-center">
        <div className="w-1/2 flex flex-col gap-5">
          <div className="flex flex-col">
            <p className="text-2xl font-semibold text-background">Sign in</p>
            <p className="text-sm text-zinc-400">
              New to this site?{" "}
              <a href="/register" className="text-blue-400 hover:underline">
                Sign up here.
              </a>
            </p>
          </div>
          <form className="flex flex-col gap-5 mt-5">
            <div className="grid gap-2">
              <label htmlFor="email" className="text-sm font-semibold">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email"
                className="rounded-md text-sm px-4 py-2 border border-zinc-700 bg-zinc-800 text-white focus:bg-zinc-950 focus:border-zinc-950 focus:outline-none focus-visible:ring-1 focus-visible:ring-blue-500 focus-visible:shadow focus-visible:shadow-blue-400"
              />
            </div>
            <div className="grid gap-2">
              <label htmlFor="email" className="text-sm font-semibold">
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Enter your password"
                className="rounded-md text-sm px-4 py-2 border border-zinc-700 bg-zinc-800 text-white focus:bg-zinc-950 focus:border-zinc-950 focus:outline-none focus-visible:ring-1 focus-visible:ring-blue-500 focus-visible:shadow focus-visible:shadow-blue-400"
              />
            </div>
            <a href="" className="text-sm text-zinc-400 hover:underline w-fit">
              Forgot password?
            </a>
            <button
              type="submit"
              className="rounded-md text-sm px-4 py-2 bg-zinc-600 text-white font-medium hover:bg-zinc-700"
            >
              Sign in
            </button>
          </form>
          <hr className="border-zinc-700" />
          <p className="w-full text-center text-zinc-400 text-sm">
            Or sign in with
          </p>
          <div className="grid grid-cols-2 gap-3">
            {/* <button className="rounded-md text-sm px-4 py-2 bg-zinc-900 text-white font-medium hover:bg-zinc-800 border border-zinc-600">
              GitHub
            </button>
            <button className="rounded-md text-sm px-4 py-2 bg-zinc-900 text-white font-medium hover:bg-zinc-800 border border-zinc-600">
              Google
            </button> */}
            <button className="rounded-md text-sm px-4 py-2 bg-zinc-800 text-white font-medium hover:bg-zinc-900">
              GitHub
            </button>
            <button className="rounded-md text-sm px-4 py-2 bg-zinc-800 text-white font-medium hover:bg-zinc-900">
              Google
            </button>
          </div>
          <p className="text-xs text-zinc-400">
            Copyright &copy; 2023, <a href="">Lettre.id</a>
          </p>
        </div>
        <div className="w-1/2 flex items-center justify-center"></div>
      </section>
    </main>
  );
}
