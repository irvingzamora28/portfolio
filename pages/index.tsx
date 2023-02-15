import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import { AiOutlineFileText, AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { BiImage, BiMoon, BiSun, BiUpArrowAlt } from "react-icons/bi";
import { FaBlog, FaTimes } from "react-icons/fa";
import { MdOutlineContactMail } from "react-icons/md";
import { TiThMenuOutline } from "react-icons/ti";
import About from "../components/About";
import Blogs from "../components/Blogs";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Skills from "../components/Skills";

export default function Home() {
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

    const handleTheme = () => {
        setTheme(theme === "dark" ? "light" : "dark");
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
            <header id="header" className="header">
                <nav className="nav container mx-auto">
                    <a href={"/#"} className="nav__logo mx-6">
                        Irving
                    </a>
                    <div className="nav__buttons">
                        {theme === "dark" ? (
                            <BiSun className="nav__toggle-darktheme" id="button-darktheme" onClick={handleTheme} />
                        ) : (
                            <BiMoon className="nav__toggle-darktheme" id="button-darktheme" onClick={handleTheme} />
                        )}
                        <div className="nav__toggle" id="nav-toggle" onClick={toggleNav}>
                            <TiThMenuOutline />
                        </div>
                    </div>
                    <div className={"nav__menu " + (showMenu ? "show-menu" : "")} id="nav-menu">
                        <ul className="nav__list">
                            <li className="nav__item">
                                <a href={"/#"} className={`nav__link flex items-center ${activeLink === "hero" ? "nav__link-active" : ""}`} onClick={toggleNav}>
                                    <AiOutlineHome className="nav__icon" />
                                    <div className="pl-1">Home</div>
                                </a>
                            </li>
                            <li className="nav__item">
                                <a href={"/#about"} className={`nav__link flex items-center ${activeLink === "about" ? "nav__link-active" : ""}`} onClick={toggleNav}>
                                    <AiOutlineUser className="nav__icon" />
                                    <div className="pl-1">About</div>
                                </a>
                            </li>
                            <li className="nav__item">
                                <a href={"/#skills"} className={`nav__link flex items-center ${activeLink === "skills" ? "nav__link-active" : ""}`} onClick={toggleNav}>
                                    <AiOutlineFileText className="nav__icon" />
                                    <div className="pl-1">Skills</div>
                                </a>
                            </li>
                            <li className="nav__item">
                                <a href={"/#blogs"} className={`nav__link flex items-center ${activeLink === "blogs" ? "nav__link-active" : ""}`} onClick={toggleNav}>
                                    <FaBlog className="nav__icon" />
                                    <div className="pl-1">Blog</div>
                                </a>
                            </li>
                            <li className="nav__item">
                                <a href={"/#projects"} className={`nav__link flex items-center ${activeLink === "projects" ? "nav__link-active" : ""}`} onClick={toggleNav}>
                                    <BiImage className="nav__icon" />
                                    <div className="pl-1">Projects</div>
                                </a>
                            </li>
                            <li className="nav__item">
                                <a href={"/#contact"} className={`nav__link flex items-center ${activeLink === "contact" ? "nav__link-active" : ""}`} onClick={toggleNav}>
                                    <MdOutlineContactMail className="nav__icon" />
                                    <div className="pl-1">Contact</div>
                                </a>
                            </li>
                        </ul>
                        <FaTimes className="nav__close" id="nav-close" onClick={toggleNav} />
                    </div>
                </nav>
            </header>

            <main className={`main ${theme === "dark" ? "dark" : ""}`}>
                <Hero />
                <About />
                <Skills />
                <Projects />
                <Blogs />
                <Contact />
                <Footer />
                <a href={"#"} className={`scrollup ${showButton ? "scrollup-show" : ""} ${showMenu ? " scrollup-show-menu" : ""}`} id="scroll-up">
                    <BiUpArrowAlt className="scrollup__icon" />
                </a>
            </main>
        </>
    );
}
