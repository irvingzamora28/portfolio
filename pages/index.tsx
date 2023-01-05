import Head from "next/head";
import { Inter } from "@next/font/google";
import { Navbar } from "../components/Navbar";
import Hero from "../components/Hero";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Irving Zamora | Web Developer</title>
        <meta name="description" content="Portfolio Irving Zamora" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Hero />
    </>
  );
}
