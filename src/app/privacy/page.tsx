import { CookieSettingsLink } from "@/shared/components/CookieConsent";
import { contacts } from "@/shared/data/contact";
import { site } from "@/shared/data/site";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: `Privacy policy | ${site.name}`,
  description: "How this site uses cookies and analytics.",
  alternates: { canonical: "/privacy" },
};

const LAST_UPDATED = "26 November 2026";

export default function PrivacyPage() {
  return (
    <article className="mx-auto max-w-2xl px-4 py-16 lg:py-24 space-y-6 text-sm leading-relaxed">
      <Link
        href="/"
        className="text-muted-foreground hover:underline underline-offset-4"
      >
        ← Back
      </Link>
      <h1 className="text-2xl font-bold">Privacy policy</h1>
      <p className="text-muted-foreground">Last updated: {LAST_UPDATED}</p>

      <section className="space-y-2">
        <h2 className="text-lg font-semibold">Who is responsible</h2>
        <p>
          This site is run by {site.name}. For any privacy question or request,
          email{" "}
          <a
            className="underline underline-offset-4"
            href={`mailto:${contacts.email}`}
          >
            {contacts.email}
          </a>
          .
        </p>
      </section>

      <section className="space-y-2">
        <h2 className="text-lg font-semibold">
          Analytics (only with your consent)
        </h2>
        <p>
          If you click &quot;Accept&quot; on the cookie banner, the site loads
          Google Analytics 4, provided by Google Ireland Ltd. It measures pages
          viewed, resume downloads, approximate location (country or city), and
          device and browser type. The goal is to understand how visitors use
          the site. The legal basis is your consent (GDPR art. 6(1)(a)).
        </p>
        <p>
          Google Analytics sets the cookies <code>_ga</code> and{" "}
          <code>_ga_&lt;ID&gt;</code>, which last up to 13 months. Advertising
          features and ad personalisation are turned off. Google may process
          data in the United States under the EU-US Data Privacy Framework.
          Analytics data is kept for no more than 14 months.
        </p>
        <p>
          If you click &quot;Reject&quot; or don&apos;t choose, Google Analytics
          is never loaded and no analytics cookies are set.
        </p>
      </section>

      <section className="space-y-2">
        <h2 className="text-lg font-semibold">
          Your choice and how to change it
        </h2>
        <p>
          Your choice is stored in your browser&apos;s local storage (not a
          cookie) for 6 months, after which you&apos;ll be asked again. You can
          change it at any time with{" "}
          <CookieSettingsLink className="cursor-pointer underline underline-offset-4" />
          . Withdrawing consent removes the analytics cookies.
        </p>
      </section>

      <section className="space-y-2">
        <h2 className="text-lg font-semibold">Hosting and performance</h2>
        <p>
          The site is hosted by Vercel Inc., which processes technical request
          data (such as IP addresses) to serve and secure the site. Vercel Speed
          Insights collects anonymous page-performance measurements without
          cookies or identifiers.
        </p>
      </section>

      <section className="space-y-2">
        <h2 className="text-lg font-semibold">Your rights</h2>
        <p>
          You have the right to access, correct or delete your data, and to
          object to or restrict its processing, by contacting the email above.
          You may also lodge a complaint with your data protection authority (in
          France, the CNIL:{" "}
          <a
            className="underline underline-offset-4"
            href="https://www.cnil.fr"
            target="_blank"
            rel="noreferrer"
          >
            cnil.fr
          </a>
          ).
        </p>
      </section>
    </article>
  );
}
