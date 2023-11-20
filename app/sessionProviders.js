"use client";
import { SessionProvider } from "next-auth/react";
import { Toaster } from "sonner";

export function AuthProvider({ children }) {
  return (
    <SessionProvider>
      <Toaster closeButton position="top-center" />
      {children}
    </SessionProvider>
  );
}
