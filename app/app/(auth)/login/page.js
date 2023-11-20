import { Flower } from "lucide-react";
import LoginForm from "./login-form";

export default function Page() {
  return (
    <main className="flex flex-col min-h-screen items-center justify-center bg-foreground">
      <section className="flex w-1/2 items-center justify-center">
        <div className="w-1/2 flex flex-col gap-5">
          <div className="flex flex-col">
            <p className="text-2xl font-semibold text-background">Sign in</p>
            <p className="text-sm text-zinc-400">
              New to lettre.id?{" "}
              <a href="/register" className="text-blue-400 hover:underline">
                Sign up here.
              </a>
            </p>
          </div>
          <LoginForm />
          <hr className="border-zinc-700" />
          <p className="w-full text-center text-zinc-400 text-sm">
            Or sign in with
          </p>
          <div className="grid grid-cols-2 gap-3">
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
        <div className="w-1/2 flex gap-2 items-center justify-end">
          {/* <Flower className="text-background" size={50} /> */}
          {/* <p className="text-3xl font-medium text-background">lettre</p> */}
        </div>
      </section>
    </main>
  );
}
