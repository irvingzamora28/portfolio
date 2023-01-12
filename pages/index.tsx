import Head from "next/head";
import Hero from "../components/Hero";
import { About } from "../components/About";
import { Skills } from "../components/Skills";
import { Projects } from "../components/Projects";
import { Contact } from "../components/Contact";


export default function Home() {
  return (
    <>
      <Head>
        <title>Irving Zamora | Web Developer</title>
        <meta name="description" content="Portfolio Irving Zamora" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
}
