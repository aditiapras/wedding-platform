import Verifying from "./verifying";

export default function AccountVerify({ searchParams }) {
  const token = searchParams.token;

  return (
    <main className="flex flex-col min-h-screen items-center justify-center bg-foreground">
      {!token ? (
        <div className="flex flex-col w-full items-center justify-center">
          <p className="text-2xl font-semibold text-background">
            Account verification
          </p>
          <p className="text-sm text-zinc-400">
            We&apos;ve sent a verification link to your email. Please check your
            inbox.
          </p>
        </div>
      ) : (
        <Verifying token={token} />
      )}
    </main>
  );
}
