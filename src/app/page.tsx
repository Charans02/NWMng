import Banner from "@/components/banner";
import {
  Hero,
  // States,
  // Comparison,
  // Services,
  Testimonials,
  Story,
  // WhyChoose,
  Experts,
  // ServiceAreas,
  Contact,
  CTA,
  JunkRemovalQuote,
} from "@/sections";

export default function Home() {
  return (
    <>
      <Hero />
      <div className="mt-[-165px] md:mt-[-70.84px] xl:mt-[-130px] xl:px-[60px]">
        <JunkRemovalQuote />
      </div>
      <Banner />
      {/* <Services /> */}
      {/* <Comparison /> */}
      <Story />
      {/* <States /> */}
      <Testimonials />
      <Banner />
      {/* <WhyChoose /> */}
      <Experts />
      {/* <ServiceAreas /> */}
      <Contact />
      <CTA />
    </>
  );
}
