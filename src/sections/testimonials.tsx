"use client";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { Text } from "@/components/ui";
import { TESTIMONIALS } from "@/lib/constants";
import { TestimonialType } from "@/lib/types";
import useEmblaCarousel from "embla-carousel-react";
import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import React from "react";

const Testimonials = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    containScroll: false,
    align: "center",
    skipSnaps: false,
  });

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [cardHeight, setCardHeight] = useState(0);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  const onSettle = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollTo(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  // Handle card heights
  useEffect(() => {
    if (!cardRefs.current.length) return;
    const handleResize = () => {
      cardRefs.current.forEach(ref => {
        if (ref) ref.style.height = "auto";
      });
      setTimeout(() => {
        let maxHeight = 0;
        cardRefs.current.forEach(ref => {
          if (ref && ref.offsetHeight > maxHeight) maxHeight = ref.offsetHeight;
        });
        setCardHeight(maxHeight);
        cardRefs.current.forEach(ref => {
          if (ref) ref.style.height = `${maxHeight}px`;
        });
      }, 50);
    };
    handleResize();
    let resizeTimer: NodeJS.Timeout;
    const debouncedResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(handleResize, 100);
    };
    window.addEventListener("resize", debouncedResize);
    return () => {
      window.removeEventListener("resize", debouncedResize);
      clearTimeout(resizeTimer);
    };
  }, []);

  // Update height on slide settle
  useEffect(() => {
    if (!emblaApi) return;

    const handleSlideSelect = () => {
      setTimeout(() => {
        let maxHeight = 0;
        cardRefs.current.forEach(ref => {
          if (ref && ref.offsetHeight > maxHeight) maxHeight = ref.offsetHeight;
        });
        setCardHeight(maxHeight);
        cardRefs.current.forEach(ref => {
          if (ref) ref.style.height = `${maxHeight}px`;
        });
      }, 300);
    };

    emblaApi.on("settle", handleSlideSelect);
    return () => {
      emblaApi.off("settle", handleSlideSelect);
    };
  }, [emblaApi]);

  // Listen to select and settle
  useEffect(() => {
    if (!emblaApi) return;

    emblaApi.on("select", onSelect);
    emblaApi.on("settle", onSettle);
    onSelect();

    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("settle", onSettle);
    };
  }, [emblaApi, onSelect, onSettle]);

  return (
    <div className="relative">
      {/* Background */}
      <div className="absolute inset-0 bg-black bg-[url(/images/review_bg.png)] bg-cover bg-center blur-[2px]" />

      {/* Desktop badge */}
      <div className="hidden lg:block absolute top-24 right-34 z-20">
        <GoogleReviewBadge />
      </div>

      <div className="relative z-10 text-white">
        <section id="testimonials" className="flex flex-col items-center lg:items-start">
          <div className="w-full flex flex-col justify-center lg:flex-row xl:items-end xl:justify-start gap-2 lg:gap-10">
            <div className="space-y-6 text-center lg:text-left">
              <Text variant="h2">
                Read what our
                <br />
                <span className="text-lime-500"> customers are saying!</span>
              </Text>
              <Text
                variant="body1"
                className="hidden text-[16px] md:text-[18px] lg:text-[20px]"
              >
                Philadelphia has been trusting Trash Lion for 10+ years and our work quality speaks for itself — see what customers are saying!
              </Text>
            </div>
            <div className="sm:mt-0 flex sm:my-auto mx-auto lg:mx-0 lg:mt-5 xl:mt-13 sm:mr-auto mb-8">
              <div className="mt-4 flex space-x-6">
                <button
                  className="bg-lime-500 hover:bg-lime-600/80 flex h-10 w-10 items-center justify-center rounded-full text-white transition-colors"
                  onClick={scrollPrev}
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft size={24} />
                </button>
                <button
                  className="bg-lime-500 hover:bg-lime-600/80 flex h-10 w-10 items-center justify-center rounded-full text-white transition-colors"
                  onClick={scrollNext}
                  aria-label="Next testimonial"
                >
                  <ChevronRight size={24} />
                </button>
              </div>
            </div>
          </div>

          {/* Mobile badge below arrows */}
          <div className="lg:hidden mt-4 w-full flex justify-center">
            <GoogleReviewBadge />
          </div>

          <div className="mt-10 w-full">
            <div className="carousel-container relative">
              <div className="embla overflow-hidden" ref={emblaRef}>
                <div className="embla__container flex">
                  {TESTIMONIALS.map((t, idx) => (
                    <div
                      key={idx}
                      className="embla__slide relative mx-0 flex-[0_0_100%] md:flex-[0_0_55%]"
                    >
                      <div
                        className={`origin-center transform transition-all duration-500 ease-in-out ${
                          selectedIndex === idx ? "scale-100" : "scale-90"
                        }`}
                      >
                        <TestimonialCard
                          t={t}
                          ref={(el) => { cardRefs.current[idx] = el; }}
                          height={cardHeight}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-6 flex justify-center space-x-2">
              {TESTIMONIALS.map((_, index) => (
                <button
                  key={index}
                  onClick={() => emblaApi?.scrollTo(index)}
                  className={`h-2 w-2 rounded-full transition-all ${
                    index === selectedIndex ? "bg-lime-500" : "bg-white/70"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Testimonials;

// Reusable Google badge
const GoogleReviewBadge = () => (
  <div className="bg-[#f6f6f6] py-4 px-4 rounded-xl w-full max-w-[450px]">
    <div className="flex items-center gap-3">
      <Image
        src="/images/google-review.png"
        alt="Google Review Badge"
        width={90}
        height={90}
        className="object-contain"
      />
      <div>
        <p className="text-base font-semibold text-gray-800">
          Google Rating <span className="text-yellow-500">5.0</span>
          <span className="ml-2 text-yellow-400">★ ★ ★ ★ ★</span>
        </p>
        <p className="text-sm font-medium text-gray-600">
          Over <span className="font-bold text-black">60 Reviews</span>
        </p>
      </div>
    </div>
  </div>
);

// TestimonialCard
const TestimonialCard = React.forwardRef<
  HTMLDivElement,
  { t: TestimonialType; height: number }
>(({ t, height }, ref) => (
  <div className="relative min-w-[211px] p-4 md:min-w-[523px] lg:min-w-[625px]">
    <div className="absolute inset-0 bg-black/10 rounded-2xl"></div>
    <div className="absolute inset-0 bg-black/20 opacity-30 rounded-2xl"></div>
    <div
      ref={ref}
      className="relative flex w-full flex-col items-center overflow-hidden rounded-2xl px-[14px] py-[11px] backdrop-blur-[10px] md:px-[24px] md:py-[21px] lg:px-[30px] lg:py-[24px]"
      style={{ height: height ? `${height}px` : "auto", minHeight: "100%" }}
    >
      <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-white/50 to-transparent"></div>
      <div className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-transparent via-white/50 to-transparent"></div>
      <div className="mb-4 flex w-full flex-col items-center justify-between space-y-3 md:flex-row md:space-y-0">
        <div className="flex flex-col items-center gap-4 md:flex-row">
          <div className="relative flex h-[45px] w-[45px] items-center justify-center overflow-hidden rounded-full bg-[#2B6023] text-4xl font-bold text-white md:h-[72px] md:w-[72px]">
            {t.avatar ? (
              <Image
                src={t.avatar}
                alt={`${t.name}'s testimonial`}
                fill
                className="object-cover"
              />
            ) : (
              <span>{t.name.charAt(0)}</span>
            )}
          </div>
          <p className="text-lime-500 text-center font-[family-name:var(--font-lato-sans)] text-[16px] leading-[28px] font-semibold md:text-left md:text-[21px] lg:text-[26px]">
            {t.name}
          </p>
        </div>
        <div className="flex gap-2">
          {Array.from({ length: 5 }).map((_, index) => (
            <Star
              key={index}
              size={16}
              className="lg:h-[20px] lg:w-[20px]"
              fill={index < t.rating ? "#ffbe40" : "#f3f3f3"}
              stroke="none"
            />
          ))}
        </div>
      </div>
      <div className="w-full overflow-y-auto">
        <Text className="overflow-auto text-center text-[14px] leading-[1.5] text-white md:text-[16px] md:leading-[1.6] lg:text-[18px] lg:leading-[1.8]">
          {t.content}
        </Text>
      </div>
    </div>
  </div>
));
TestimonialCard.displayName = "TestimonialCard";
