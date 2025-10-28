import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { MainNavbar } from "@/components/global";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"]
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"]
});

export const metadata: Metadata = {
  title: "Farhan Nur Hidayat",
  description:
    "An internet home by Farhan Nur Hidayat to showcase some of my projects."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased dark:selection:bg-neutral-50 dark:selection:text-neutral-950 selection:bg-neutral-950 selection:text-neutral-50`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <MainNavbar />

          <main className="h-min mx-auto overflow-x-hidden">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
