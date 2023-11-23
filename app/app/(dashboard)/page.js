import { Button } from "@/components/ui/button";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { ExternalLink, Loader2 } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import logo from "../../../public/L.png";

export default async function Page() {
  return (
    <main className="w-full md:w-4/5 lg:w-3/4 mx-auto flex-col px-5 md:px-0 py-10 flex">
      <p className="text-xl font-medium">Overview</p>
      <p className="text-3xl font-medium mt-10">Welcome, User</p>
      <div className="w-full grid lg:grid-cols-2 gap-5 mt-5">
        <div className="flex flex-col gap-5 rounded-2xl p-5 border-[1.5px] bg-white border-indigo-100 hover:bg-indigo-50/50 transition-all duration-200 border-dashed">
          <p className="text-xl font-medium">Create yout first invitation</p>
          <p className="text-sm text-zinc-500">Create yout first invitation</p>
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button className="w-fit bg-indigo-500 hover:bg-indigo-500/90">
                Get Started
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <Image
                  src={logo}
                  alt="logo"
                  width={50}
                  height={50}
                  className="w-10 h-10"
                />
                <AlertDialogTitle className="text-left">
                  Your first invitation
                </AlertDialogTitle>
                <AlertDialogDescription className="text-left">
                  Please fill all the fields to create your first invitation
                </AlertDialogDescription>
              </AlertDialogHeader>
              <div className="flex flex-col gap-5 w-full py-5">
                <div className="grid gap-1 text-sm">
                  <label htmlFor="" className="font-medium">
                    Domain Name
                  </label>
                  <div className="flex items-center">
                    <input
                      type="text"
                      name="domain"
                      id="domain"
                      placeholder="example.lettre.id"
                      className="px-4 py-2 border-l border-t border-b border-indigo-300 rounded-l-md focus-visible:outline-indigo-500 w-full"
                    />
                    <p className="px-4 py-2 border bg-indigo-100 border-indigo-300 rounded-r-md">
                      .lettre.id
                    </p>
                  </div>
                  <div className="flex gap-1 items-center">
                    <Loader2 className="w-3 animate-spin text-indigo-500" />
                    <p className="text-xs text-indigo-500">Checking domain</p>
                  </div>
                </div>
                <div className="grid gap-1 text-sm">
                  <label htmlFor="" className="font-medium">
                    Brides Name
                  </label>
                  <input
                    type="text"
                    name="brides_name"
                    id="brides_name"
                    placeholder="Brides Name"
                    className="px-4 py-2 border border-indigo-300 rounded-md focus-visible:outline-indigo-500 w-full"
                  />
                </div>
                <div className="grid gap-1 text-sm">
                  <label htmlFor="" className="font-medium">
                    Grooms Name
                  </label>
                  <input
                    type="text"
                    name="grooms_name"
                    id="grooms_name"
                    placeholder="Grooms Name"
                    className="px-4 py-2 border border-indigo-300 rounded-md focus-visible:outline-indigo-500 w-full"
                  />
                </div>
                <div className="grid gap-1 text-sm">
                  <label htmlFor="" className="font-medium">
                    Wedding Date
                  </label>
                  <input
                    type="date"
                    name="wedding_date"
                    id="wedding_date"
                    className="px-4 py-2 border border-indigo-300 rounded-md focus-visible:outline-indigo-500 w-full"
                  />
                </div>
              </div>
              <AlertDialogFooter>
                <div className="flex gap-5 items-center w-full justify-end">
                  <AlertDialogCancel asChild>
                    <Button className="w-fit bg-white hover:bg-indigo-100 text-indigo-500 hover:text-indigo-500 border-indigo-200 mt-0">
                      Cancel
                    </Button>
                  </AlertDialogCancel>
                  <AlertDialogAction asChild>
                    <Button className="w-fit bg-indigo-500 hover:bg-indigo-500/90 mt-0">
                      Create Invitation
                    </Button>
                  </AlertDialogAction>
                </div>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
        <div className="flex flex-col gap-5 rounded-2xl p-5 border-[1.5px] bg-white border-indigo-100 hover:bg-indigo-50/50 transition-all duration-200 border-dashed">
          <div className="flex gap-1 items-center">
            <ExternalLink className="w-5 text-indigo-500" />
            <p className="text-xl font-medium hover:underline hover:text-indigo-500 w-fit">
              wedding.lettre.id
            </p>
          </div>
          <p className="text-sm text-zinc-500">Manage your invitation</p>
          <div className="flex gap-5">
            <Button
              className="w-fit bg-indigo-500 hover:bg-indigo-500/90"
              asChild
            >
              <Link href="/wedding">Edit Invitation</Link>
            </Button>
            <Button
              className="w-fit bg-indigo-500 hover:bg-indigo-500/90"
              asChild
            >
              <Link href="/guest">Manage Guest</Link>
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}
