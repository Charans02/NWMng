import type { Metadata } from "next";
import { Lato, Sora } from "next/font/google";
import { Toaster } from "sonner";

import Header from "@/components/header";
import Footer from "@/components/footer";

import "./globals.css";
import "./custom-toast.css";

const latoSans = Lato({
  weight: ["400", "700"],
  variable: "--font-lato-sans",
  subsets: ["latin"],
});

const soraSans = Sora({
  variable: "--font-sora-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NW Mngmt | Florida's #1 Top Rated Junk Removal Team",
  description: "Florida's #1 Top Rated Junk Removal Team",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${latoSans.variable} ${soraSans.variable} antialiased`}>
        <Header />
        <main className="overflow-hidden">{children}</main>
        <Footer />
        <Toaster
          position="top-right"
          toastOptions={{ style: { zIndex: 1000 } }}
        />
      </body>
    </html>
  );
}
