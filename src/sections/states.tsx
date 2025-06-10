import Image from "next/image";
import { Text } from "@/components/ui";
import { CheckCircle } from "lucide-react";

const bulletPoints = [
  "3 Days included, then $19.99/Day",
  "2000LBS Included. Additional Weight Billed @ $0.06/Lb",
  "Great For Medium Projects, Clean-Outs, And Fire/Flood Restoration",
  "Hassle Free Rental, Straight To Your Doorstep",
];

const States = () => {
  return (
    <div className="bg-[#f3f3f3]">
      <section
        id="states"
        className="scroll-mt-[100px] flex flex-col items-center gap-8 px-[80px] py-[60px] xl:flex-row xl:gap-40"
      >
        <div className="relative aspect-[6/7] w-full overflow-hidden rounded-2xl xl:max-w-full order-1">
          <Image
            src="/images/truck.jpg"
            alt="Junk Truck"
            fill
            className="object-cover object-center"
          />
          <div className="absolute bottom-[0px] flex h-[80px] w-full items-center justify-center bg-lime-700">
            <p className="font-[family-name:var(--font-lato-sans)] text-[18px] md:text-[30px] md:leading-[60px] font-semibold text-white">
              15 yards dumpster
            </p>
          </div>
        </div>

        <div className="flex w-full flex-col items-center xl:max-w-full xl:items-start order-2">
          <Text
            variant="h2"
            className="max-w-[467px] text-center md:max-w-full xl:text-left"
          >
            Your Rental Solution,
            <span className="text-lime-500"> NW Mngmt!</span>
          </Text>

          {/* Bullet Points */}
          <ul className="mt-6 space-y-4 text-[#525252]">
            {bulletPoints.map((point, idx) => (
              <li
                key={idx}
                className="flex items-start gap-3 text-[24px] leading-snug xl:text-left"
              >
                <span className="relative top-[2px]">
                  <CheckCircle className="text-lime-600" size={26} />
                </span>
                <span>{point}</span>
              </li>
            ))}
          </ul>

          {/* Button */}
          <div className="w-full mt-10 flex justify-center xl:justify-start">
            <button className="w-92 rounded-full bg-lime-600 px-10 py-5 text-xl font-semibold text-white shadow hover:bg-lime-700 transition">
              ADD TO RENTAL ORDER
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default States;
