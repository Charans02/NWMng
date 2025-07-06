import Banner from "@/components/banner";
import {
  Hero,
  States,
  Comparison,
  Services,
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
      <Services />
      <Blocks />
      <States />
      <Comparison />
      <br />
      <br />
      <JunkRemovalQuote />
      <Banner />
      <Testimonials />
      <Story />
      <Banner />
      {/* <WhyChoose /> */}
      <Experts />
      <ServiceAreas />
      {/* <Contact /> */}
      <CTA />
    </>
  );
}
