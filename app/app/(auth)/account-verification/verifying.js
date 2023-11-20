"use client";
import { verifyAccount } from "@/lib/actions";
import { LoaderIcon } from "lucide-react";
import { useEffect, useState } from "react";
const jwt = require("jsonwebtoken");

export default function Verifying({ token }) {
  const [loading, setLoading] = useState(true);
  const [isVerified, setIsVerified] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      const res = verifyAccount(token);
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
      </div>
    </div>
  );
}
