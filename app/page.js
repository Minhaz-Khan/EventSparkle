import Banner from "@/Components/CustomComponnents/Banner/Banner";
import Review from "@/Components/CustomComponnents/UserReview/Review";
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
    </main>
    </>
  )
}
