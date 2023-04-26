import Hero from "@/Components/CustomComponnents/Hero/Hero";
import ServiceSection from "@/Components/CustomComponnents/ServiceSection/ServiceSection";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>home page</title>
      </Head>

      <main>
        <div>
          <Hero />
          <ServiceSection />
        </div>
      </main>
    </>
  );
}
