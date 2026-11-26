import { CookieConsent } from "@/shared/components/CookieConsent";
import { ThemeProvider } from "@/shared/components/theme-provider";
import { ThemeToggle } from "@/shared/components/theme-toggle";
import { site } from "@/shared/data/site";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import GoogleAnalytics from "../shared/components/GoogleAnalytics";
import SmoothScroll from "../shared/components/SmoothScroll";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: site.name,
  description: site.description,
  alternates: { canonical: "/" },
  openGraph: {
    type: "profile",
    url: "/",
    siteName: site.name,
    title: site.title,
    description: site.description,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.description,
  },
  keywords: [
    "fullstack",
    "ReactJS",
    "NextJS",
    "Tailwind",
    "Redux",
    "zustand",
    ".NET",
    "node.js",
  ],
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <SmoothScroll />
        <GoogleAnalytics />
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <main className={"min-h-svh relative"}>
            <div className="fixed top-4 right-4 lg:top-12 lg:right-12">
              <ThemeToggle />
            </div>
            {children}
          </main>
          <CookieConsent />
        </ThemeProvider>
        <SpeedInsights />
      </body>
    </html>
  );
}
