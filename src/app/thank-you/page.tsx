"use client";

import { useEffect } from "react";
import Script from "next/script";

const ThankYouPage = () => {
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get("submitted") === "true" && window.gtag) {
      window.gtag("event", "conversion", {
        send_to: "GTM-5B25RRH6", // 🔁 Replace with your actual Google Ads Conversion ID
      });
    }
  }, []);

  return (
    <>
      {/* ✅ Load gtag.js if not already included globally */}
      <Script
        id="gtag-src"
        src="https://www.googletagmanager.com/gtag/js?id=GTM-5B25RRH6"
        strategy="afterInteractive"
      />
      <Script id="gtag-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'GTM-5B25RRH6'); // Replace with your Google Ads ID
        `}
      </Script>

      <div
        className="flex h-screen items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: "url('/images/bg.png')" }}
      >
        <div className="bg-black bg-opacity-60 px-6 py-4 rounded-xl">
           <h1 className="text-4xl text-white font-semibold text-center">
             Thank you for Reaching Out!
           </h1>
        </div>
      </div>
    </>
  );
};

export default ThankYouPage;
