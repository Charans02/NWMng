import Image from "next/image";
import { PhoneCall } from "lucide-react";
import { CONTACT_INFO } from "@/lib/constants";

const CTA = () => {
  return (
    <div className="bg-white relative">
      {/* ✅ Sticky Button for Mobile */}
      <div className="fixed bottom-4 left-1/2 z-50 -translate-x-1/2 px-4 sm:hidden w-full max-w-sm">
        <a
          href="tel:+18135790912"
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full rounded-full bg-lime-600 px-6 py-4 text-center text-white font-bold shadow-lg hover:bg-lime-700 transition"
        >
          Reserve Your Dumpster
        </a>
      </div>

      {/* 🔽 Main CTA Section */}
      <section className="px-4 sm:px-20 py-10">
        <div className="relative flex w-full flex-col items-center overflow-hidden rounded-3xl bg-lime-600 px-6 py-10 text-white sm:gap-8 lg:px-20 xl:gap-10 xl:px-[100px] xl:py-20">
          {/* Background Image */}
          <Image
            src="/images/cta-pattern.png"
            alt=""
            fill
            className="object-cover object-center z-0"
          />

          {/* Foreground Content */}
          <div className="relative z-10 flex flex-col items-center gap-5 w-full">
            <p className="text-center font-[family-name:var(--font-sora-sans)] text-[24px] leading-[36px] tracking-tighter sm:text-[36px] sm:leading-[45px] xl:text-[56px] xl:leading-[74px]">
              Call for Price <span className="font-semibold underline">Estimates!</span>
            </p>

            <p className="text-center font-[family-name:var(--font-sora-sans)] text-[13px] leading-[20px] tracking-tight font-bold sm:text-[18px] sm:leading-[23px] xl:text-[27px] xl:leading-[38px]">
              Call Now & Save $50 Off Your First Job!
            </p>

            <div className="flex flex-col items-center justify-center gap-5 md:flex-row md:gap-16">
              {/* Phone */}
              <div className="flex items-center gap-4 xl:gap-5">
                <PhoneCall
                  fill="white"
                  stroke="none"
                  className="size-5 sm:size-7 lg:size-8"
                />
                <p className="font-[family-name:var(--font-sora-sans)] text-[13px] leading-[30px] sm:text-[20px] sm:leading-[50px] xl:text-[25px] xl:leading-[63px]">
                  {CONTACT_INFO[1].value}
                </p>
              </div>

              {/* Button for desktop/tablet */}
              <a
                href="tel:+18135790912"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-block rounded-full bg-white px-10 py-5 text-lg font-bold text-lime-600 shadow hover:bg-lime-700 hover:text-white transition"
              >
                Reserve Your Dumpster
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CTA;
