"use client";
import Image from "next/image";
import { MessageCircle, Phone } from "lucide-react";
import { Text } from "@/components/ui";
//import { JUNK_REMOVAL_IMAGES } from "@/lib/constants";
import { CUSTOMERS } from "@/lib/constants";

const Story = () => {
  return (
    <section
      id="story"
      className="flex flex-col items-center px-[80px] py-[60px]"
    >
      <Text variant="h2">
        <span className="text-lime-600">Our</span> Story!
      </Text>
      <Text className="mt-8 hidden max-w-[702px] text-center text-[#525252]">
        For 10 + years Trash Lion has been dedicated to keeping Philadelphia a
        cleaner place for both you and those around you
      </Text>
      <div className="mt-8 xl:mt-15 flex w-full max-w-[768px] flex-col items-center gap-8 md:gap-20 xl:max-w-full xl:flex-row xl:gap-30">
        <div className="relative mx-auto min-h-[393px] w-full xl:max-w-[550px] overflow-hidden rounded-2xl bg-white shadow">
          <Image
            src="/images/company_logo.png"
            alt=""
            fill
            className="object-contain"
          />
        </div>
        <div className="flex w-full flex-col items-center gap-8">
          <p className="text-center font-[family-name:var(--font-sora-sans)] text-[28px] leading-[44px] font-normal uppercase lg:text-left">
            <span className="text-lime-500 font-extrabold">NW Mngmt, </span>
            Best and Reliable Service
          </p>
          <p className="text-center font-[family-name:var(--font-lato-sans)] text-[18px] leading-[34px] font-normal lg:text-left">
            <span className="font-bold text-[#6B8E23]">
              Keeping Your Demands sattisfied.
            </span>
            <br />
            <br />
            <span>
              Need a reliable dumpster for your next project? NW Mngmt offers 15-yard dumpster rentals — perfect for cleanouts, renovations, move-outs, and disaster recovery.
            </span>
            {/* <div className="mx-auto flex flex-row items-center justify-center gap-2 py-5">
              {JUNK_REMOVAL_IMAGES.map((item) => (
                <Image
                  key={item.id}
                  src={item.img_url}
                  alt={item.img_name}
                  width={120}
                  height={120}
                  className="w-[90px] h-[90px] sm:w-[120px] sm:h-[120px]"
                />
              ))}
            </div> */}
            {/* Happy Customers */}
            <div className="relative w-full flex justify-center mt-6">
              <div
                className="flex flex-wrap items-center justify-center w-full max-w-[700px] px-4 py-3"
                style={{
                  background: "linear-gradient(to right, transparent, #000, transparent)"
                }}
              >
                <div className="flex items-center gap-1 sm:gap-3 md:gap-2 lg:gap-3 flex-shrink-0">
                  {CUSTOMERS.map((customer, index) => (
                    <Image
                      key={customer.id}
                      src={customer.avatar_url}
                      alt={customer.name}
                      width={40}
                      height={40}
                      className={`relative ${
                        index > 0 ? "ml-[-20px] sm:ml-0" : ""
                      } rounded-full border-2 border-white`}
                    />
                  ))}
                </div>
                <div className="flex items-center gap-2 flex-shrink-0 text-white pl-4">
                  <Text className="text-[18px] font-semibold md:text-[22px] xl:text-[28px]">
                    60+
                  </Text>
                  <Text className="text-[13px] font-extrabold md:text-[15px] whitespace-nowrap">
                    Happy Customers
                  </Text>
                </div>
              </div>
            </div>
            <span>
              With dimensions of 14&apos; x 7.5&apos; x 4.5&apos;, it&apos;s ideal for medium-sized jobs. Each rental includes 3 days and 1000lbs of disposal — with additional days at just $19.99/day and excess weight billed at $0.06/lb. Enjoy a hassle-free experience with fast delivery, flexible terms, and friendly service — right at your doorstep.
            </span>
          </p>
          {/* <a
            href="tel:+18135790912"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-lime-500 hover:text-lime-600 flex h-[54px] w-full max-w-[348px] cursor-pointer items-center justify-center gap-2.5 rounded-full px-8 py-4 text-white transition-colors hover:bg-[#f3f3f3]"
          > */}
          <button
            onClick={() => {
              const target = document.getElementById("quote");
              if (target) {
                const headerOffset = 160; // Adjust if needed
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.scrollY - headerOffset;

                window.scrollTo({
                  top: offsetPosition,
                  behavior: "smooth",
                });
              }

              // Optional: Track with GTM
              // window.dataLayer = window.dataLayer || [];
              // window.dataLayer.push({
              //   event: "hero_cta_click",
              //   section: "hero",
              // });
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
            <p className="font-[family-name:var(--font-sora-sans)] text-[16px] leading-[100%] font-semibold uppercase">
              Reserve Your Dumpster
            </p>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Story;
