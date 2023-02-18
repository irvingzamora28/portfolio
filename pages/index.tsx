import { readdirSync } from "fs";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import Head from "next/head";
import path from "path";
import { useEffect, useState } from "react";
import { BiUpArrowAlt } from "react-icons/bi";
import About from "../components/About";
import Blogs from "../components/Blogs";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Header from "../components/home/Header";
import Projects from "../components/Projects";
import Skills from "../components/Skills";

export const getStaticProps: GetStaticProps<BlogDirectory> = async () => {
    const root = path.join(process.cwd());
    const dirPath = `${root}/content/blog`;
    const fileNames = readdirSync(dirPath);
    const blogNames = fileNames.map((fileName) => {
        const fileNameWOExt = fileName.split(".");
        return fileNameWOExt.length > 1 ? fileNameWOExt[0] : fileName;
    });

    return {
        props: {
            blogNames,
        },
    };
};

const Home = ({ blogNames }: InferGetStaticPropsType<typeof getStaticProps>) => {
    const [showMenu, setShowMenu] = useState(false);
    const [showButton, setShowButton] = useState(false);
    const [theme, setTheme] = useState("light");
    const [activeLink, setActiveLink] = useState("hero");

    useEffect(() => {
        const links = ["hero", "about", "skills", "blogs", "projects", "contact"];
        function handleScroll() {
            if (window.pageYOffset > 250) {
                setShowButton(true);
            } else {
                setShowButton(false);
            }
            const currentSection = links.find((link) => {
                const section = document.getElementById(link);
                return (section?.offsetTop ?? 0) <= window.pageYOffset + 50 && (section?.offsetTop ?? 0) + (section?.clientHeight ?? 0) > window.pageYOffset;
            });
            setActiveLink(currentSection ? currentSection : "hero");
        }

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const toggleNav = () => {
        setShowMenu(!showMenu);
    };

    const handleTheme = (newValue: string) => {
        setTheme(newValue);
    };

    return (
        <>
            <Head>
                <title>Irving Zamora | Web Developer</title>
                <meta charSet="utf-8" />
                <meta property="og:site_name" content="Irving Zamora | Web Developer" />
                <meta property="og:title" content="Portfolio Irving Zamora" />
                <meta property="og:description" content="As a web developer, I am passionate about building beautiful, fast, and responsive websites and web applications." />
                <meta property="og:image" itemProp="image" content="/assets/images/logo-removebg.png" />
                <meta property="og:type" content="website" />
                <meta name="description" content="As a web developer, I am passionate about building beautiful, fast, and responsive websites and web applications." />
                <meta name="author" content="Irving Zamora" />
                <meta name="keywords" content="irvingzamora, programming, nextjs, laravel, php, mysql, typescript" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                <link rel="manifest" href="/site.webmanifest" />
                <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
                <meta name="msapplication-TileColor" content="#da532c" />
                <meta name="theme-color" content="#FFFFFF"></meta>
            </Head>
    
            <Header theme={theme} setTheme={handleTheme} showMenu={showMenu} setShowMenu={toggleNav} activeLink={activeLink} />

            <main className={`main ${theme === "dark" ? "dark" : ""}`}>
                <Hero />
                <About />
                <Skills />
                <Projects />
                <Blogs blogNames={blogNames} />
                <Contact />
                <Footer />
                <a href={"#"} className={`scrollup ${showButton ? "scrollup-show" : ""} ${showMenu ? " scrollup-show-menu" : ""}`} id="scroll-up">
                    <BiUpArrowAlt className="scrollup__icon" />
                </a>
            </main>
        </>
    );
};

export default Home;
