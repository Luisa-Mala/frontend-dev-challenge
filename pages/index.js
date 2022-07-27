import { Aside, BlogBlock, Hero, TextBlock } from "@/components/sections";
import { Layout } from "@/components/sections/Layout";

export default function Home() {
  return (
    <Layout title="Home">
      <Hero />
      <TextBlock />
      <section className="home__blog container">
        <BlogBlock/>
        <Aside
          data={{
            promo: {
              image: {
                url: "/images/promo.png",
                alt: "promo",
              },
            },
          }}
        />
      </section>
    </Layout>
  );
}
