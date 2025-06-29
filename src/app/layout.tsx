import type { Metadata } from "next";
import { Inter } from "next/font/google";
import SmoothScroll from "../shared/components/SmoothScroll";
import "./globals.css";
import GoogleAnalytics from "../shared/components/GoogleAnalytics";
import { ThemeProvider } from "@/shared/components/theme-provider";
import Navigation from "@/shared/components/Navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ezzeddine Jlassi",
  description:
    "Fullstack developer with 4+ years of experience and a strong focus on frontend development, seeking to use my technical proficiency and creativity to develop engaging user experiences.",
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
    <>
      <SmoothScroll />
      <GoogleAnalytics />
      <html lang="en" suppressHydrationWarning>
        <body className={inter.className}>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <main className={"min-h-svh"}>
              <Navigation />

              <div className="max-w-screen-xl w-full h-full mx-auto grid gap-16 place-content-center md:grid-cols-2">
                {children}
              </div>
            </main>
          </ThemeProvider>
        </body>
      </html>
    </>
  );
}
