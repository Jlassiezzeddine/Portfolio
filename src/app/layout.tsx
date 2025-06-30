import { ThemeProvider } from "@/shared/components/theme-provider";
import { ThemeToggle } from "@/shared/components/theme-toggle";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import GoogleAnalytics from "../shared/components/GoogleAnalytics";
import SmoothScroll from "../shared/components/SmoothScroll";
import "./globals.css";

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
            <main className={"min-h-svh relative"}>
              <div className="fixed top-4 right-4 lg:top-12 lg:right-12">
                <ThemeToggle />
              </div>
              {children}
            </main>
          </ThemeProvider>
        </body>
      </html>
    </>
  );
}
