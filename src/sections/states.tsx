import Image from "next/image";
import { Text } from "@/components/ui";

const States = () => {
  return (
    <div className="bg-[#f3f3f3]">
      <section
        id="states"
        className="scroll-mt-[100px] flex flex-col items-center gap-8 px-[80px] py-[60px] xl:flex-row xl:gap-40"
      >
        <div className="relative aspect-[6/7] w-full overflow-hidden rounded-2xl xl:max-w-full order-2">
          <Image
            src="/images/truck.jpg"
            alt="Junk Truck"
            fill
            className="object-cover object-center"
          />
          <div className="absolute bottom-[0px] flex h-[80px] w-full items-center justify-center bg-lime-700">
            <p className="font-[family-name:var(--font-lato-sans)] text-[18px] md:text-[30px] md:leading-[60px] font-semibold text-white">
              15 foot dumpster
            </p>
          </div>
        </div>
        <div className="flex w-full flex-col items-center xl:max-w-full xl:items-start order-1">
          <Text
            variant="h2"
            className="max-w-[467px] text-center md:max-w-full xl:text-left"
          >
            Your Junk Removal Solution,
            <span className="text-lime-500"> NW Mngmt!</span>
          </Text>
          <Text className="mt-6 max-w-[516px] text-center text-[#525252] md:max-w-full xl:text-left">
            Whether you are looking for a small junk removal job or a whole
            house clean-out, NW Mngmt can get it done. We are open 24/7 always
            taking call and new customers.
          </Text>

          {/* Big Centered Hire Us Button */}
          <div className="w-full mt-10 flex justify-center xl:justify-start">
            <button className="w-72 rounded-full bg-lime-600 px-10 py-5 text-xl font-semibold text-white shadow hover:bg-lime-700 transition">
              Rent Our Dumpster
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default States;
