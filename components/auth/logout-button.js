"use client";
import { signOut } from "next-auth/react";

export default function LogoutButton() {
  return (
    <button
      onClick={() => signOut()}
      className="text-background bg-foreground px-4 py-2 rounded-md text-sm font-medium hover:bg-foreground/90 transition-all"
    >
      LogoutButton
    </button>
  );
}
