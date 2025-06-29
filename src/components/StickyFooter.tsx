"use client";

import { Phone, MessageCircle } from "lucide-react";

const StickyFooter = () => {
  const handleClick = () => {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "client_button_click_calls",
      client: "nwmngmt",
    });
  };

  return (
    <div className="fixed bottom-0 z-50 w-full lg:hidden">
      {/* Background layer */}
      <div className="flex flex-col items-center w-full bg-gradient-to-t from-white/70 via-white/30 to-transparent backdrop-blur-md px-4 pb-3 pt-2">
        <div className="flex w-full max-w-md gap-3">
          {/* Call Button */}
          <a
            href="tel:+18135790912"
            target="_blank"
            onClick={handleClick}
            className="flex flex-1 items-center justify-center gap-2 rounded-md bg-lime-600 py-3 text-white shadow-md hover:bg-lime-700 transition"
          >
            <Phone size={20} />
            <span className="text-sm font-semibold uppercase">Call Now</span>
          </a>

          {/* Get Quote Button */}
          <button
            onClick={() => {
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
            }}
            className="flex flex-1 items-center justify-center gap-2 rounded-md bg-lime-600 py-3 text-white shadow-md hover:bg-lime-700 transition"
          >
            <MessageCircle size={20} />
            <span className="text-sm font-semibold uppercase">Get a Quote</span>
          </button>
        </div>
        <p className="mt-2 text-l font-bold text-black">1 dumpster left for same-day drop off</p>
      </div>
    </div>
  );
};

export default StickyFooter;
