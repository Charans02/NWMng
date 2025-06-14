// components/cta.tsx
"use client";

import Image from "next/image";
import { PhoneCall } from "lucide-react";
import { CONTACT_INFO } from "@/lib/constants";
import { useEffect, useState } from "react";

const CTA = () => {
  const [showSticky, setShowSticky] = useState(false);

  useEffect(() => {
    const heroEl = document.getElementById("hero-section");

    const handleScroll = () => {
      if (!heroEl) return;
      const heroBottom = heroEl.getBoundingClientRect().bottom;
      setShowSticky(heroBottom < 0);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-white relative">
      {/* Sticky Button appears after Hero scroll */}
      {showSticky && (
        <div className="fixed bottom-4 left-1/2 z-50 -translate-x-1/2 w-full max-w-sm px-4 pb-[env(safe-area-inset-bottom,1rem)]">
          {/* <a
            href="tel:+18135790912"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full rounded-full bg-lime-600 px-6 py-4 text-center text-white font-bold shadow-lg hover:bg-lime-700 transition"
          >
            Reserve Your Dumpster
          </a> */}
        </div>
      )}

      {/* CTA Section */}
      <section className="px-4 sm:px-20 py-10 pb-32 sm:pb-20">
        <div className="relative flex flex-col items-center overflow-hidden rounded-3xl bg-lime-600 px-6 py-10 text-white sm:gap-8 lg:px-20 xl:gap-10 xl:px-[100px] xl:py-20">
          <Image
            src="/images/cta-pattern.png"
            alt=""
            fill
            className="object-cover object-center z-0"
          />
          <div className="relative z-10 flex flex-col items-center gap-5 w-full">
            <p className="text-center text-[24px] sm:text-[36px] xl:text-[56px] leading-[36px] sm:leading-[45px] xl:leading-[74px] tracking-tighter">
              Call for Price <span className="font-semibold underline">Estimates!</span>
            </p>
            <p className="text-center font-bold text-[13px] sm:text-[18px] xl:text-[27px] leading-[20px] sm:leading-[23px] xl:leading-[38px] tracking-tight">
              Call Now & Save $50 Off Your First Job!
            </p>

            <div className="flex flex-col items-center gap-5 md:flex-row md:gap-16">
              <div className="flex items-center gap-4 xl:gap-5">
                <PhoneCall fill="white" stroke="none" className="size-5 sm:size-7 lg:size-8" />
                <p className="text-[13px] sm:text-[20px] xl:text-[25px] leading-[30px] sm:leading-[50px] xl:leading-[63px]">
                  {CONTACT_INFO[1].value}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CTA;
