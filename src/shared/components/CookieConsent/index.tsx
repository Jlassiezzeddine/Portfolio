"use client";

import { Button } from "@/shared/components/ui/button";
import {
  openCookieSettings,
  subscribeOpenSettings,
  writeConsent,
} from "@/shared/lib/consent";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useConsent } from "./useConsent";

export function CookieConsent() {
  const consent = useConsent();
  const [reopened, setReopened] = useState(false);

  useEffect(() => subscribeOpenSettings(() => setReopened(true)), []);

  const visible = consent === "unknown" || reopened;
  if (!visible || consent === "pending") return null;

  const choose = (status: "granted" | "denied") => {
    writeConsent(status);
    setReopened(false);
  };

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Cookie consent"
      className="fixed inset-x-4 bottom-4 z-50 mx-auto max-w-xl rounded-lg border bg-background p-4 shadow-lg sm:p-6"
    >
      <p className="text-sm">
        I&apos;d like to use Google Analytics cookies to see how visitors use
        this site. They&apos;re only set if you accept, and you can change your
        mind at any time.{" "}
        <Link href="/privacy" className="underline underline-offset-4">
          Privacy policy
        </Link>
      </p>
      <div className="mt-4 flex gap-2">
        <Button className="flex-1" onClick={() => choose("denied")}>
          Reject
        </Button>
        <Button className="flex-1" onClick={() => choose("granted")}>
          Accept
        </Button>
      </div>
    </div>
  );
}

export function CookieSettingsLink({ className }: { className?: string }) {
  return (
    <button type="button" className={className} onClick={openCookieSettings}>
      Cookie settings
    </button>
  );
}
