import Image from "next/image";
import { CalendarRange, Truck, Globe } from "lucide-react";
import { Text } from "@/components/ui";
import { CUSTOMERS } from "@/lib/constants";

const Hero = () => {
  return (
    <div className="text-background bg-[url('/images/bg.png')] bg-cover bg-center pt-[58px] md:pt-[92px] xl:pt-[112px]">
      <div className="bg-black-gradient">
        <section className="flex flex-col-reverse gap-5 !pt-[20px] !pb-[190px] md:flex-row md:gap-[32.01px] md:!pt-[35px] md:!pb-[100px] xl:justify-between xl:gap-0 xl:!pb-[200px] 2xl:!pt-[60px] 2xl:gap-20">
          <div className="hidden md:block md:w-5/12 lg:w-5/12 xl:w-5/12 2xl:w-1/2">
            <Image
              src="/images/truck_no_bg.png"
              alt="Trash Lion truck"
              width={653}
              height={837}
              quality={100}
              className="mx-auto w-full max-w-[680px] scale-x-[1] object-contain md:max-w-[740px] lg:max-w-[820px] xl:max-w-[900px]"
              priority
            />
          </div>
          <div className="flex h-fit w-full max-w-[710px] flex-col items-center gap-4 md:w-7/12 md:items-start lg:w-7/12 lg:items-start lg:gap-6 xl:w-7/12 xl:items-start 2xl:w-1/2">
            <Text
              variant="h1"
              className="text-center text-[38px] leading-[50px] sm:text-[28px] sm:leading-[43px] md:text-[34px] md:leading-[43px] lg:text-left xl:text-left xl:text-[55px] xl:leading-[78px]"
            >
              <span className="text-lime-500 font-extrabold">
                15 YARD DUMPSTER
              </span>
              <br />
              12&apos;L X 7.5&apos;L X 5&apos;L
            </Text>
            <Text className="text-center text-[16px] leading-[23px] md:text-left md:text-[18px] lg:text-left lg:text-[21px] lg:leading-[26px] xl:text-left">
              <span className="leading-[33px] font-bold">
                Perfect for Medium Projects, Clean-Outs, and
              </span>
              {/* <br /> */}
              <span className="hidden">From clean outs to residential junk hauling.</span>
              <br />
              Fire/Flood restoration.
            </Text>
            <div
              className="scrollbar-hide flex w-full max-w-full items-center justify-center md:justify-start gap-1.5 overflow-x-auto py-2 whitespace-nowrap sm:gap-2.5 lg:gap-5 lg:py-3"
              style={{ msOverflowStyle: "none", scrollbarWidth: "none" }}
            >
              <div className="flex flex-shrink-0 items-center gap-1.5 sm:gap-2.5">
                <CalendarRange className="size-3 sm:size-3.5 lg:size-4 xl:size-6" />
                <Text className="text-[12px] leading-[12px] font-semibold sm:text-[12px] sm:leading-[13px] md:text-[14px] md:leading-[15px] lg:text-[16px] lg:leading-[24px] xl:text-[17px]">
                  Cleanups
                </Text>
              </div>
              <div className="bg-background h-4 w-px flex-shrink-0 sm:h-5 lg:h-9" />
              <div className="flex flex-shrink-0 items-center gap-1.5 sm:gap-2.5">
                <Truck className="size-3 sm:size-3.5 lg:size-4 xl:size-6" />
                <Text className="text-[12px] leading-[12px] font-semibold sm:text-[12px] sm:leading-[13px] md:text-[14px] md:leading-[15px] lg:text-[16px] lg:leading-[24px] xl:text-[17px]">
                  Move-Outs
                </Text>
              </div>
              <div className="bg-background h-4 w-px flex-shrink-0 sm:h-5 lg:h-9" />
              <div className="flex flex-shrink-0 items-center gap-1.5 sm:gap-2.5">
                <Globe className="size-3 sm:size-3.5 lg:size-4 xl:size-6" />
                <Text className="text-[12px] leading-[12px] font-semibold sm:text-[12px] sm:leading-[13px] md:text-[14px] md:leading-[15px] lg:text-[16px] lg:leading-[24px] xl:text-[17px]">
                  Residential Renovations
                </Text>
              </div>
            </div>
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
            <div className="customers-container flex w-full items-center justify-center md:justify-between gap-3 rounded-full border-none py-2 px-2 sm:w-fit sm:justify-around ">
              <div className="flex items-center gap-0 sm:gap-3 md:gap-1 lg:gap-3">
                {
                  CUSTOMERS.map((customer, index) => (
                    <Image
                      key={customer.id}
                      src={customer.avatar_url}
                      alt={customer.name}
                      width={40}
                      height={40}
                      className={`relative ${index > 0 ? 'ml-[-20px] sm:ml-0' : ''} rounded-full border-2 border-white`}
                    />
                  ))
                }
              </div>
              <div className="flex items-center justify-between gap-2">
                <Text className="text-[18px] leading-[14px] font-semibold md:text-[22px] md:leading-[26px] lg:text-[22px] lg:leading-[26px] xl:text-[28px] xl:leading-[32px]">
                  100+
                </Text>
                <Text className="text-[13px] leading-[11px] font-extrabold md:text-[15px] md:leading-[20px] lg:text-[15px] lg:leading-[20px] xl:text-[15px] xl:leading-[20px]">
                  Happy Customers
                </Text>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Hero;
