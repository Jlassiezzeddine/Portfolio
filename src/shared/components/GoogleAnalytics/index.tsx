"use client";

import { useConsent } from "@/shared/components/CookieConsent/useConsent";
import Script from "next/script";
import { useEffect } from "react";

const MEASUREMENT_ID = process.env.NEXT_PUBLIC_MEASUREMENT_ID;

// Consent Mode v2 "basic": gtag.js is not requested at all until the visitor accepts.
function GoogleAnalytics() {
  const consent = useConsent();

  useEffect(() => {
    if (!MEASUREMENT_ID || consent !== "denied") return;
    // Consent withdrawn after GA loaded during this visit: stop it and remove its cookies.
    const w = window as unknown as Record<string, unknown> & {
      gtag?: (...args: unknown[]) => void;
    };
    w[`ga-disable-${MEASUREMENT_ID}`] = true;
    w.gtag?.("consent", "update", { analytics_storage: "denied" });
    deleteGaCookies();
  }, [consent]);

  if (!MEASUREMENT_ID || consent !== "granted") {
    return null;
  }

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${MEASUREMENT_ID}`}
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          window['ga-disable-${MEASUREMENT_ID}'] = false;
          gtag('consent', 'default', {
            analytics_storage: 'granted',
            ad_storage: 'denied',
            ad_user_data: 'denied',
            ad_personalization: 'denied',
          });
          gtag('js', new Date());
          gtag('config', '${MEASUREMENT_ID}', {
            page_path: window.location.pathname,
          });
        `}
      </Script>
    </>
  );
}

function deleteGaCookies() {
  const host = window.location.hostname;
  const rootDomain = host.split(".").slice(-2).join(".");
  const domains = ["", host, `.${host}`, `.${rootDomain}`];
  for (const cookie of document.cookie.split(";")) {
    const name = cookie.split("=")[0].trim();
    if (name !== "_ga" && !name.startsWith("_ga_")) continue;
    for (const domain of domains) {
      document.cookie = `${name}=; Max-Age=0; path=/${domain ? `; domain=${domain}` : ""}`;
    }
  }
}

export default GoogleAnalytics;
