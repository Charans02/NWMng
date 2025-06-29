"use client";

import { Phone, MessageCircle } from "lucide-react";

const StickyFooter = () => {
  const handleCallClick = () => {
    const phoneNumber = "tel:+18135790912";

    // Define redirect logic as a callback
    const redirectToCall = () => {
      window.location.assign(phoneNumber);
    };

    // Push to GTM with eventCallback (ensures GTM processes the event before redirect)
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "client_button_click_calls",
      client: "nwmngmt",
      eventCallback: redirectToCall,
      eventTimeout: 300, // fallback if GTM doesn't respond in time
    });
  };

  const handleScrollToQuote = () => {
    const quoteSection = document.getElementById("quote");
    const headerOffset = 160;

    if (quoteSection) {
      const elementPosition = quoteSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="fixed bottom-0 z-50 w-full">
      <div className="flex flex-col items-center w-full bg-gradient-to-t from-white/70 via-white/30 to-transparent backdrop-blur-md px-4 pb-3 pt-2">
        <div className="flex w-full max-w-md gap-3">
          {/* Call Button */}
          <button
            onClick={handleCallClick}
            className="flex flex-1 items-center justify-center gap-2 rounded-md bg-lime-600 py-3 text-white shadow-md hover:bg-lime-700 transition"
            aria-label="Call Now"
          >
            <Phone size={20} />
            <span className="text-sm font-semibold uppercase">Call Now</span>
          </button>

          {/* Get Quote Button */}
          <button
            onClick={handleScrollToQuote}
            className="flex flex-1 items-center justify-center gap-2 rounded-md bg-lime-600 py-3 text-white shadow-md hover:bg-lime-700 transition"
            aria-label="Get a Quote"
          >
            <MessageCircle size={20} />
            <span className="text-sm font-semibold uppercase">Get a Quote</span>
          </button>
        </div>

        <p className="mt-2 text-l font-bold text-black">
          1 dumpster left for same-day drop off
        </p>
      </div>
    </div>
  );
};

export default StickyFooter;
