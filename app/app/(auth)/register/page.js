import RegisterForm from "./register-form";
import Image from "next/image";
import logo from "../../../../public/L.png";

export default function Page() {
  return (
    <main className="flex flex-col min-h-screen items-center justify-center bg-foreground">
      <section className="flex lg:flex-row flex-col-reverse w-full md:w-2/3 xl:w-1/2 items-center justify-center px-10 lg:px-0">
        <div className="w-full lg:w-1/2 flex flex-col gap-5">
          <div className="flex flex-col">
            <p className="text-2xl font-semibold text-background">Sign up</p>
            <p className="text-sm text-zinc-400">
              Already have an account?{" "}
              <a href="/login" className="text-indigo-400 hover:underline">
                Sign in here.
              </a>
            </p>
          </div>
          <RegisterForm />
          <hr className="border-zinc-700" />
          <p className="w-full text-center text-zinc-400 text-sm">
            Or sign up with
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
        <div className="w-full lg:w-1/2 flex flex-col gap-2 lg:items-end lg:justify-end mb-5 lg:mb-0">
          <div className="w-10 h-10 lg:w-52 lg:h-52">
            <Image src={logo} alt="logo" width={500} height={500} />
          </div>
        </div>
      </section>
    </main>
  );
}
