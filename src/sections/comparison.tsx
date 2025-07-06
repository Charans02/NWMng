"use client";
import {
  ReactCompareSlider,
  ReactCompareSliderImage,
  ReactCompareSliderHandle,
} from "react-compare-slider";
import { Text } from "@/components/ui";
import { useState, useEffect } from "react";
// Commented carousel imports for future use
// import { ChevronLeft, ChevronRight } from "lucide-react";
// import useEmblaCarousel from "embla-carousel-react";

// Carousel data saved for future use
/*
const comparisonSets = [
  {
    id: 1,
    before: "/images/before.png",
    after: "/images/after.png",
    title: "Backyard Cleanup",
  },
  {
    id: 2,
    before: "/images/before.png",
    after: "/images/after.png",
    title: "Garage Cleanup",
  },
  {
    id: 3,
    before: "/images/before.png",
    after: "/images/after.png",
    title: "Backyard Cleanup",
  },
];
*/

const Comparison = () => {
  // Single static image data
  const staticComparison = {
    before: "/images/before.png",
    after: "/images/after.png",
    title: "Backyard Cleanup",
  };

  /*
  // Commented carousel code for future use
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    containScroll: false,
    dragFree: true,
  });

  const [selectedIndex, setSelectedIndex] = useState(0);
  */

  const [lineWidth, setLineWidth] = useState("4px");

  // Handle responsive line width
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setLineWidth("12px");
      } else {
        setLineWidth("4px");
      }
    };

    handleResize(); // Set initial value
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  /*
  // Commented carousel navigation functions for future use
  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    onSelect();

    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);
  */

  return (
    <div className="relative">
      <div className="absolute inset-0 bg-[url('/images/bg.png')] bg-cover bg-center blur-[2px]"></div>
      <div className="relative z-10">
        <div className="bg-black/60">
          <section>
            <div className="flex flex-col items-center justify-center px-[20px] md:px-[35px] lg:flex-row lg:px-[60px]">
              <div className="flex flex-col">
                <Text variant="h2" className="text-center text-white">
                  See How We Make Your Junk{" "}
                  <span className="font-extrabold underline">Disappear!</span>
                </Text>
                <p className="mt-4 hidden text-center font-[family-name:var(--font-sora-sans)] text-[25px] leading-[30px] font-semibold text-white/70 sm:block">
                  <span className="font-extrabold">
                    No job is to big for the lions
                  </span>
                  {"  "}
                  we eat your junk for breakfast.
                </p>
              </div>

              {/* Commented carousel navigation buttons for future use
              <div className="mt-4 flex justify-center md:mt-0 md:justify-end">
                <div className="flex space-x-3">
                  <button
                    className="bg-red hover:bg-red/80 flex h-10 w-10 items-center justify-center rounded-full text-white transition-colors"
                    onClick={scrollPrev}
                    aria-label="Previous comparison"
                  >
                    <ChevronLeft size={24} />
                  </button>
                  <button
                    className="bg-red hover:bg-red/80 flex h-10 w-10 items-center justify-center rounded-full text-white transition-colors"
                    onClick={scrollNext}
                    aria-label="Next comparison"
                  >
                    <ChevronRight size={24} />
                  </button>
                </div>
              </div>
              */}
            </div>

            {/* Static Before/After Comparison */}
            <div className="mt-8 md:mt-12">
              <div className="mx-auto max-w-4xl">
                <div className="before-after-container relative h-[300px] w-full overflow-hidden rounded-[20px] md:h-[400px] lg:h-[500px]">
                  <ReactCompareSlider
                    className="h-full w-full"
                    position={50}
                    handle={
                      <ReactCompareSliderHandle
                        buttonStyle={{
                          backgroundColor: "green",
                        }}
                        linesStyle={{
                          width: lineWidth,
                          background: "green",
                        }}
                      />
                    }
                    itemOne={
                      <div className="relative h-full w-full">
                        <ReactCompareSliderImage
                          alt="Before"
                          src={staticComparison.before}
                          style={{
                            height: "100%",
                            objectFit: "cover",
                            objectPosition: "center",
                            imageRendering: "crisp-edges",
                            width: "100%",
                            maxWidth: "100%",
                          }}
                          loading="eager"
                          draggable={false}
                        />
                        <div className="absolute top-4 left-4 rounded-full bg-black px-3 py-1 text-sm text-white">
                          Before
                        </div>
                      </div>
                    }
                    itemTwo={
                      <div className="relative h-full w-full">
                        <ReactCompareSliderImage
                          alt="After"
                          src={staticComparison.after}
                          style={{
                            height: "100%",
                            objectFit: "cover",
                            objectPosition: "center",
                            imageRendering: "crisp-edges",
                            width: "100%",
                            maxWidth: "100%",
                          }}
                          loading="eager"
                          draggable={false}
                        />
                        <div className="bg-green-500 absolute top-4 right-4 rounded-full px-3 py-1 text-sm text-white">
                          After
                        </div>
                      </div>
                    }
                  />
                </div>
              </div>

              {/* Commented slide indicators for future use 
              <div className="mt-6 flex justify-center space-x-2">
                {comparisonSets.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      if (emblaApi) emblaApi.scrollTo(index);
                    }}
                    className={`h-2 w-2 rounded-full transition-all ${
                      index === selectedIndex ? "bg-red" : "bg-white/70"
                    }`}
                    aria-label={`Go to comparison set ${index + 1}`}
                  />
                ))}
              </div>
              */}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Comparison;
