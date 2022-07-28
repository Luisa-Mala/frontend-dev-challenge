import {
  Aside,
  BlogBlock,
  Hero,
  Testimonials,
  TextBlock,
} from "@/components/sections";
import { Accordion } from "@/components/sections/Accordion/Accordion";
import { Layout } from "@/components/sections/Layout";

export default function FAQ() {
  return (
    <Layout title="FAQ">
      <Hero />
      <Accordion/>
    </Layout>
  );
}
