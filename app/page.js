import Banner from "@/Components/CustomComponnents/Banner/Banner";
import ServiceSection from "@/Components/CustomComponnents/ServiceSection/ServiceSection";
import Sponsors from "@/Components/CustomComponnents/Sponsors/Sponsors";
import Review from "@/Components/CustomComponnents/UserReview/Review";
import WhyUs from "@/Components/CustomComponnents/Why US/WhyUs";
import Head from "next/head";



export default function Home() {
  return (
    <>
      <Head>
        <title>home page</title>
      </Head>

      <main>

        <Banner></Banner>

        {/* <Review></Review> */}
        <Review></Review>

        <ServiceSection></ServiceSection>

        <WhyUs></WhyUs>

        <Sponsors></Sponsors>
      </main>
    </>
  );
}
