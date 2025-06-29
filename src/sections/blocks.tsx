"use client";
import Image from "next/image";
import { Text } from "@/components/ui";
import { MessageCircle, Phone } from "lucide-react";

const BLOCKS_DATA = [
  { content: 60, more: true, description: "Satisfied Customers" },
  { content: 5, more: true, description: "Years Experience" },
  { content: 3, more: true, description: "Trash Trucks" },
  { content: 6, more: true, description: "Counties We Service" },
];

const Blocks = () => {
  return (
    <div className="bg-[#f3f3f3]">
      <section className="flex flex-col items-center gap-8 px-[80px] py-[60px] xl:flex-row xl:gap-40">
        <div className="relative aspect-[6/7] w-full overflow-hidden rounded-2xl xl:max-w-full order-2">
          <Image
            src="/images/picture.jpg"
            alt="Truck"
            fill
            className="object-cover object-center"
          />
        </div>
        <div className="flex w-full flex-col items-center xl:max-w-full xl:items-start order-1">
          <Text
            variant="h2"
            className="max-w-[467px] text-center md:max-w-full xl:text-left"
          >
            Why Choose,
            <span className="text-lime-700"> NW Mngmt!</span>
          </Text>
          <Text className="mt-6 max-w-[516px] text-center text-[#525252] md:max-w-full xl:text-left">
            Whether you are looking for a small junk removal job or a whole
            house clean-out, NW Mngmt will provide you the best Dumpster. We are open 24/7
            always taking calls and new customers.
          </Text>

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
            className="group bg-lime-500 hover:text-lime-500 mt-6 flex h-[54px] w-full max-w-[348px] cursor-pointer items-center justify-center gap-2.5 rounded-full px-8 py-4 text-white transition-colors hover:bg-[#f3f3f3]"
            aria-label="Scroll to Quote Section"
          >
            <div className="relative">
              <MessageCircle size={24} />
              <Phone
                size={10}
                className="group-hover:fill-lime-500 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 fill-white"
              />
            </div>
            <p className="font-[family-name:var(--font-sora-sans)] text-[16px] leading-[100%] font-semibold uppercase">
              Contact Us
            </p>
          </button>

          <div className="mt-8 grid w-full grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8">
            {BLOCKS_DATA.map((block, index) => (
              <div
                key={index}
                className="flex w-full flex-col items-center justify-center gap-2 rounded-2xl bg-white py-5 shadow md:py-10"
              >
                <Text variant="h2">
                  {block.content}
                  {block.more && <span className="text-lime-600">+</span>}
                </Text>
                <Text variant="body2" className="text-[#525252]">
                  {block.description}
                </Text>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blocks;
