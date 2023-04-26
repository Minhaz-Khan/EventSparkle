import ServiceSection from "@/Components/CustomComponnents/ServiceSection/ServiceSection";
import Sponsors from "@/Components/CustomComponnents/Sponsors/Sponsors";
import WhyUs from "@/Components/CustomComponnents/Why US/WhyUs";
import Head from "next/head";


export default function Home() {
  return (
    <>
      <Head>
        <title>home page</title>
      </Head>

      <main>

        <div>
          <ServiceSection />
          {/* why us section start */}
          <div>
            <WhyUs />
          </div>
          <div>
            <Sponsors></Sponsors>
          </div>
        </div>
      </main>
    </>
  );
}
