import Review from "@/Components/CustomComponnents/UserReview/Review";
import Head from "next/head";

// import dynamic from 'next/dynamic';

// const Review = dynamic(() => import('../Components/CustomComponnents/UserReview/Review.js'), {
//   ssr: false
// });

export default function Home() {
  return (
    <>
    <Head>
        <title>home page</title>
    </Head>
    
    <main>
    
    
    {/* <Review></Review> */}
    <Review></Review>
    </main>
    </>
  )
}
