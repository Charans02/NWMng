import Banner from "@/components/banner";
import {
  Hero,
  States,
  // Comparison,
  // Services,
  Testimonials,
  Story,
  // WhyChoose,
  Experts,
  ServiceAreas,
  // Contact,
  CTA,
  JunkRemovalQuote,
} from "@/sections";
import Blocks from "@/sections/blocks";

export default function Home() {
  return (
    <>
      <Hero />
      <States />
      <JunkRemovalQuote />
      <Banner />
      {/* <Services /> */}
      {/* <Comparison /> */}
      <Story />
      <Blocks />
      <Testimonials />
      <Banner />
      {/* <WhyChoose /> */}
      <Experts />
      <ServiceAreas />
      {/* <Contact /> */}
      <CTA />
    </>
  );
}
