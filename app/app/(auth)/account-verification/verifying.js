"use client";
import { verifyAccount } from "@/lib/actions";
import { LoaderIcon } from "lucide-react";
import { useEffect, useState } from "react";

export default function Verifying({ token }) {
  const [loading, setLoading] = useState(true);
  const [isVerified, setIsVerified] = useState(false);
  const [show, setShow] = useState(false);

  useEffect(() => {
    setTimeout(async () => {
      const res = await verifyAccount(token);

      if (res.isVerified) {
        setIsVerified(true);
      } else {
        setShow(true);
      }
      setLoading(false);
    }, 5000);
  }, []);

  return (
    <div className="flex flex-col w-full items-center justify-center gap-5">
      <p className="text-2xl font-semibold text-background">
        Verifying Account
      </p>

      <div className="text-sm text-zinc-400 flex gap-3 items-center">
        {loading ? (
          <>
            <LoaderIcon className="animate-spin" />
            <p>Please wait while verifyng your account...</p>
          </>
        ) : (
          ""
        )}

        {isVerified && (
          <div className="flex flex-col gap-5 items-center">
            <p>
              Your account has been successfully verified. You can now login
            </p>
            <a
              href={"/login"}
              className="rounded-md text-sm px-4 py-2 bg-indigo-700 text-white font-medium hover:bg-indigo-700/80 w-fit"
            >
              Go to login page
            </a>
          </div>
        )}

        {show && (
          <div className="flex flex-col gap-3 items-center">
            <p>
              Seems like your token is invalid. Resend email verification by
              clicking the button below
            </p>
            <button className="rounded-md text-sm px-4 py-2 bg-indigo-700 text-white font-medium hover:bg-indigo-700/80 w-fit">
              Resend email
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
