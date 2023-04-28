import Head from "next/head";
import AboutPage from "@/Components/CustomComponnents/AboutPage/AboutPage";

export default function About() {
  return (
    <>
      <Head>
        <title>About Page</title>
      </Head>

      <main>
        <AboutPage />

      </main >
    </>
  );
}
