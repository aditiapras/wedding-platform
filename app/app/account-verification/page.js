import React from "react";

export default function AccountVerify() {
  return (
    <main className="flex flex-col min-h-screen items-center justify-center bg-foreground">
      <p className="text-2xl font-semibold text-background">
        Account verification
      </p>
      <p className="text-sm text-zinc-400">
        We&apos;ve sent an verification link to your email. Please check your
        inbox.
      </p>
    </main>
  );
}
