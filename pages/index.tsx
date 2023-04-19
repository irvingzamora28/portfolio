import fs from "fs";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import path from "path";
import { useEffect, useState } from "react";
import { BiUpArrowAlt } from "react-icons/bi";
import About from "../components/home/About";
import Blogs from "../components/home/Blogs";
import Contact from "../components/home/Contact";
import Footer from "../components/home/Footer";
import Hero from "../components/home/Hero";
import Header from "../components/home/Header";
import HeadHTML from "../components/home/HeadHTML";
import Projects from "../components/home/Projects";
import Skills from "../components/home/Skills";

export const getStaticProps: GetStaticProps<Blogs> = async () => {
    const root = path.join(process.cwd());
    const dirPath = `${root}/content/blog`;
    const fileNames = fs.readdirSync(dirPath);

    const latestFiles = fileNames
        .map((fileName) => ({
            name: fileName,
            time: fs.statSync(path.join(dirPath, fileName)).mtime.getTime(),
        }))
        .sort((a, b) => b.time - a.time)
        .slice(0, 4)
        .map((file) => file.name);
    const blogs: BlogMeta[] = [];
    latestFiles.map((fileName) => {
        const data = require(`../content/blog/${fileName}`);
        const meta = data.default[0]?.meta;
        if (typeof meta !== "undefined") {
            blogs.push(meta);
        }
    });

    return {
        props: {
            blogs,
            isBlogSection: true,
        },
    };
};

const Home = ({ blogs, isBlogSection }: InferGetStaticPropsType<typeof getStaticProps>) => {
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
            <HeadHTML />
            <Header theme={theme} setTheme={handleTheme} showMenu={showMenu} setShowMenu={toggleNav} activeLink={activeLink} isHomePage={true} />

            <main className={`main ${theme === "dark" ? "dark" : ""}`}>
                <Hero />
                <About />
                <Skills />
                <Projects />
                <Blogs blogs={blogs} isBlogSection={isBlogSection} />
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
