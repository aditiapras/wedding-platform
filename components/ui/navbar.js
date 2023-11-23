"use client";
import LogoutButton from "@/components/auth/logout-button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  ArrowLeftCircleIcon,
  CreditCard,
  LogOut,
  UserCog2,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import logo from "../../public/L.png";
import Image from "next/image";
import { signOut } from "next-auth/react";

export default function Navbar({ session }) {
  const path = usePathname();
  return (
    <>
      <nav className="w-full h-20 border-b px-5 md:px-10 flex items-center justify-between bg-white z-10">
        <div className="flex gap-10 items-center">
          <Link
            href="/"
            className="text-2xl font-semibold flex gap-2 items-center"
          >
            <Image
              src={logo}
              alt="logo"
              width={50}
              height={50}
              className="w-10 h-10"
            />
          </Link>
          {/* <Link href="/" className="flex gap-2 items-center">
            <ArrowLeftCircleIcon className="w-5 text-sky-500" />
            <p className="text-sm px-4 py-1 bg-sky-100 text-sky-500 rounded-full">
              back
            </p>
          </Link> */}
        </div>
        <div className="flex gap-3 items-center">
          <p className="font-normal text-sm">{session?.user?.name}</p>
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-fit">
              <DropdownMenuLabel>
                <p className="text-xs font-normal text-zinc-500">
                  {session?.user?.email}
                </p>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <div className="flex items-center justify-between w-full">
                  Settings
                  <UserCog2 className="w-4" />
                </div>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <div className="flex items-center justify-between w-full">
                  Subscriptions
                  <CreditCard className="w-4" />
                </div>
              </DropdownMenuItem>
              <DropdownMenuItem className="focus:bg-indigo-200 focus:text-indigo-500">
                <button
                  onClick={() => signOut()}
                  className="flex items-center justify-between w-full"
                >
                  Sign out
                  <LogOut className="w-4" />
                </button>
                {/* <LogoutButton /> */}
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </nav>
      <div className="px-5 md:px-10 h-10 flex items-center border-b border-zinc-300 gap-10 bg-white z-10">
        <Link
          href={"/"}
          className={`
            ${
              path === "/"
                ? `underline underline-offset-[14px] decoration-2 decoration-indigo-500 text-indigo-500 font-medium`
                : `text-zinc-500 hover:text-zinc-700`
            } text-sm`}
        >
          Overview
        </Link>
        <Link
          href={"/wedding"}
          className={`
            ${
              path === "/wedding"
                ? `underline underline-offset-[14px] decoration-2 decoration-indigo-500 text-indigo-500 font-medium`
                : `text-zinc-500 hover:text-zinc-700`
            } text-sm`}
        >
          Wedding
        </Link>
        <Link
          href={"/guest"}
          className={`
            ${
              path === "/guest"
                ? `underline underline-offset-[14px] decoration-2 decoration-indigo-500 text-indigo-500 font-medium`
                : `text-zinc-500 hover:text-zinc-700`
            } text-sm`}
        >
          Guest
        </Link>
      </div>
    </>
  );
}
