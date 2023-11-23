import { getSesions } from "@/lib/actions";
import Navbar from "@/components/ui/navbar";

export default async function Layout({ children }) {
  const session = await getSesions();
  return (
    <main className="w-full min-h-screen flex flex-col">
      <Navbar session={session} />
      {children}
    </main>
  );
}
