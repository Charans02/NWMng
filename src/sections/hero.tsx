// components/hero.tsx
"use client";

import Image from "next/image";
import { MessageCircle, Phone } from "lucide-react";
import { Text } from "@/components/ui";
import { CUSTOMERS } from "@/lib/constants";
// import JunkRemovalQuote2 from "./junk-removal-quote2";
import { SERVICE_AREAS } from "@/lib/constants";
import { MapPinCheckInside } from "lucide-react";

const Hero = () => {
  return (
    <div
      id="hero-section"
      className="text-background bg-[url('/images/bg.png')] bg-cover bg-center pt-[58px] md:pt-[92px] xl:pt-[112px]"
    >
      <div className="bg-black-gradient">
        <section className="flex flex-col-reverse gap-5 !pt-[20px] !pb-[10px] md:flex-row md:gap-[32.01px] md:!pt-[35px] md:!pb-[20px] xl:justify-between xl:gap-0 xl:!pb-[30px] 2xl:!pt-[60px] 2xl:gap-20">
          {/* Desktop Truck Image */}
          <div className="hidden md:block md:w-5/12 m-auto">
            <Image
              src="/images/truck_no_bg.png"
              alt="Trash Lion truck"
              width={653}
              height={837}
              quality={100}
              className="mx-auto w-full max-w-[680px] object-contain md:max-w-[740px] lg:max-w-[820px] xl:max-w-[900px]"
              priority
            />

            {/* Tablet Only: Form Below Truck */}
            {/* <div className="hidden md:block w-full mt-6">
              <JunkRemovalQuote2 />
            </div> */}
          </div>

          {/* Text Content */}
          <div className="flex h-fit w-full max-w-[710px] flex-col items-center gap-4 md:w-7/12 md:items-start lg:w-7/12 xl:w-7/12 2xl:w-1/2">
            <Text
              variant="h1"
              className="text-center text-[38px] leading-[50px] sm:text-[28px] sm:leading-[43px] md:text-[34px] md:leading-[43px] lg:text-left xl:text-left xl:text-[55px] xl:leading-[78px]"
            >
              <span className="text-lime-500 font-extrabold">
                Fast, Reliable 15-YARD DUMPSTER Rentals
              </span>
              <br />
              Delivered Today
            </Text>

            <Text className="text-center text-[16px] leading-[23px] md:text-left md:text-[18px] lg:text-[21px] lg:leading-[26px] xl:text-left">
              <span className="leading-[33px] font-bold">
                Affordable, hassle-free dumpster rentals perfect for
              </span>
              <br />
              cleanouts, renovations, and disaster recovery.
            </Text>

            {/* ✅ Google Review Section */}
            <div className="bg-[#f6f6f6] py-4 px-4 w-full rounded-xl md:px-6 md:max-w-[450px] mt-2">
              <div className="mx-auto flex flex-col items-center justify-center gap-2 text-center md:flex-row md:gap-4 md:text-left">
                <Image
                  src="/images/google-review.png"
                  alt="Google Review Badge"
                  width={50}
                  height={50}
                  className="object-contain"
                />
                <div>
                  <p className="text-base md:text-lg font-semibold text-gray-800">
                    Google Rating <span className="text-yellow-500">5.0</span>
                    <span className="ml-2 text-yellow-400">★ ★ ★ ★ ★</span>
                  </p>
                  <p className="text-sm font-medium text-gray-600">
                    Over <span className="font-bold text-black">60 Reviews</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Benefits */}
            <div className="flex flex-col gap-2 md:gap-1 mt-4">
              <div className="flex items-center justify-center md:justify-start gap-1.5 sm:gap-2.5 lg:gap-5">
                <Text className="text-[15px] font-semibold sm:text-[16px] md:text-[17px] lg:text-[18px] xl:text-[20px]">
                  No Hidden Fees
                </Text>
                <div className="bg-background h-4 w-px sm:h-5 lg:h-9" />
                <Text className="text-[15px] font-semibold sm:text-[16px] md:text-[17px] lg:text-[18px] xl:text-[20px]">
                  Flexible rental times
                </Text>
                <div className="bg-background h-4 w-px sm:h-5 lg:h-9" />
              </div>
              <Text className="text-center md:text-left text-[15px] font-semibold sm:text-[16px] md:text-[17px] lg:text-[18px] xl:text-[20px]">
                Same-day delivery
              </Text>
            </div>

            {/* Mobile Truck Image */}
            <div className="block md:hidden w-full">
              <Image
                src="/images/truck_no_bg.png"
                alt="Trash Lion truck"
                width={753}
                height={937}
                quality={100}
                className="mx-auto w-full max-w-[480px] sm:max-w-[520px] object-contain"
                priority
              />
            </div>

            {/* Happy Customers */}
            <div className="customers-container flex w-full items-center justify-center md:justify-between gap-3 rounded-full border-none py-2 px-2 sm:w-fit sm:justify-around">
              <div className="flex items-center gap-0 sm:gap-3 md:gap-1 lg:gap-3">
                {CUSTOMERS.map((customer, index) => (
                  <Image
                    key={customer.id}
                    src={customer.avatar_url}
                    alt={customer.name}
                    width={40}
                    height={40}
                    className={`relative ${index > 0 ? "ml-[-20px] sm:ml-0" : ""} rounded-full border-2 border-white`}
                  />
                ))}
              </div>
              <div className="flex items-center justify-between gap-2">
                <Text className="text-[18px] font-semibold md:text-[22px] xl:text-[28px]">
                  60+
                </Text>
                <Text className="text-[13px] font-extrabold md:text-[15px]">
                  Happy Customers
                </Text>
              </div>
            </div>

            {/* Areas We Serve */}
            <div className="mt-6 w-full">
              <p className="text-[15px] md:text-[17px] lg:text-[18px] font-semibold text-white uppercase italic text-center md:text-left mb-4">
                Same Day Services Available
              </p>
              <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2">
                {SERVICE_AREAS.map((area, idx) => (
                  <div key={idx} className="flex items-center gap-2.5">
                    <MapPinCheckInside size={28} stroke="white" fill="green" />
                    <Text
                      variant="body2"
                      className="text-foreground font-bold max-w-full text-white text-[16px] md:text-[20px] md:max-w-[360px] xl:max-w-[212px]"
                    >
                      {area}, FL
                    </Text>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <div className="h-8 md:h-10" />
            <button
              onClick={() => {
                const target = document.getElementById("quote");
                if (target) {
                  const headerOffset = 160;
                  const elementPosition = target.getBoundingClientRect().top;
                  const offsetPosition = elementPosition + window.scrollY - headerOffset;
                  window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth",
                  });
                }
              }}
              className="group bg-lime-500 hover:text-lime-600 flex h-[54px] w-full max-w-[348px] items-center justify-center gap-2.5 rounded-full px-8 py-4 text-white transition-colors hover:bg-[#f3f3f3]"
            >
              <div className="relative">
                <MessageCircle size={24} />
                <Phone
                  size={10}
                  className="group-hover:fill-lime-500 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 fill-white"
                />
              </div>
              <p className="text-[16px] font-semibold uppercase">
                Reserve Your Dumpster
              </p>
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Hero;
