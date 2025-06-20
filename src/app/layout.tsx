import type { Metadata } from "next";
import { Lato, Sora } from "next/font/google";
import { Toaster } from "sonner";
import Script from "next/script";

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
  title: "NW Mngmt | 15 YARD DUMPSTER Rental",
  description: "15 YARD DUMPSTER Rental",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${latoSans.variable} ${soraSans.variable} antialiased`}>
        {/* Google Tag Manager */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-B9JNR106TQ"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-B9JNR106TQ');
          `}
        </Script>

        {/* ✅ Add this helper to track and then redirect */}
        <Script id="gtag-helper" strategy="afterInteractive">
          {`
            window.gtagSendEvent = function(url) {
              var callback = function () {
                if (typeof url === 'string') {
                  window.location.href = url;
                }
              };
              if (window.gtag) {
                window.gtag('event', 'ads_conversion_phone_call_lead2', {
                  event_callback: callback,
                  event_timeout: 2000
                });
              } else {
                callback(); // fallback if gtag not loaded
              }
            };
          `}
        </Script>

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
