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
  // ServiceAreas,
  // Contact,
  CTA,
  JunkRemovalQuote,
} from "@/sections";

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
      <Testimonials />
      <Banner />
      {/* <WhyChoose /> */}
      <Experts />
      {/* <ServiceAreas /> */}
      {/* <Contact /> */}
      <CTA />
    </>
  );
}
