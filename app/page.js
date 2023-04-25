import Branding from "@/Components/CustomComponnents/Why US/Branding";
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
        {/* why us section start */}
        <div>
          <WhyUs/>
        </div>
        {/* Branding section start */}
        <div>
          <Branding/>
        </div>
      </div>
    <h1>home content</h1>
    </main>
    </>
  )
}
