import { Flower } from "lucide-react";
import ForgotForm from "./forgot-form";

export default function Page() {
  return (
    <main className="flex flex-col min-h-screen items-center justify-center bg-foreground">
      <section className="flex w-1/2 items-center justify-center">
        <div className="w-1/2 flex flex-col gap-5">
          <div className="flex flex-col mb-5">
            <p className="text-2xl font-semibold text-background">
              Reset your password
            </p>
          </div>
          <ForgotForm />
          <p className="text-xs text-zinc-400">
            Copyright &copy; 2023, <a href="">Lettre.id</a>
          </p>
        </div>
        <div className="w-1/2 flex gap-2 items-center justify-end">
          <Flower className="text-background" size={50} />
          <p className="text-3xl font-medium text-background">lettre</p>
        </div>
      </section>
    </main>
  );
}
