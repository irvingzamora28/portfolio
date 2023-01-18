import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import { AiOutlineFileText, AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import {BiBriefcaseAlt2, BiImage} from "react-icons/bi"
import { FaTimes } from "react-icons/fa";
import {MdOutlineContactMail} from "react-icons/md"
import {TiThMenuOutline} from "react-icons/ti"
import About from "../components/About";
import Hero from "../components/Hero";

export default function Home() {
    const [showMenu, setShowMenu] = useState(false)

    const toggleNav = () => {
        setShowMenu(!showMenu)
    }
    return (
        <>
            <Head>
                <title>Irving Zamora | Web Developer</title>
                <meta charSet="utf-8"/>
                <meta property="og:site_name" content="Irving Zamora | Web Developer" />
                <meta property="og:title" content="Portfolio Irving Zamora" />
                <meta property="og:description" content="As a web developer, I am passionate about building beautiful, fast, and responsive websites and web applications." />
                <meta property="og:image" itemProp="image" content="/assets/images/logo-removebg.png" />
                <meta property="og:type" content="website" />
                <meta name="description" content="As a web developer, I am passionate about building beautiful, fast, and responsive websites and web applications." />
                <meta name="author" content="Irving Zamora" />
                <meta name="keywords" content="irvingzamora, programming, nextjs, laravel, php, mysql, typescript"/>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <header id="header" className="header">
                <nav className="nav container">
                    <a href={"/"} className="nav__logo mx-6">
                        Irving
                    </a>
                    <div className="nav__buttons mx-6 mt-2">
                      <div className="nav__toggle" id="nav-toggle" onClick={toggleNav}>
                        <TiThMenuOutline /> 
                      </div>
                    </div>
                    <div className={"nav__menu " + (showMenu? "show-menu" : "")} id="nav-menu">
                        <ul className="nav__list grid gap-6">
                            <li className="nav__item">
                                <a href={"/"} className="nav__link flex items-center" onClick={toggleNav}>
                                <AiOutlineHome className="nav__icon" />
                                <div className="pl-1">Home</div>
                                </a>
                            </li>
                            <li className="nav__item">
                                <a href={"/#about"} className="nav__link flex items-center" onClick={toggleNav}>
                                  <AiOutlineUser className="nav__icon" />
                                  <div className="pl-1">About</div>
                                </a>
                            </li>
                            <li className="nav__item">
                                <a href={"/#skills"} className="nav__link flex items-center" onClick={toggleNav}>
                                  <AiOutlineFileText />
                                  <div className="pl-1">Skills</div>
                                </a>
                            </li>
                            <li className="nav__item">
                                <a href={"/#services"} className="nav__link flex items-center" onClick={toggleNav}>
                                  <BiBriefcaseAlt2 />
                                  <div className="pl-1">Services</div>
                                </a>
                            </li>
                            <li className="nav__item">
                                <a href={"/#portfolio"} className="nav__link flex items-center" onClick={toggleNav}>
                                  <BiImage />
                                  <div className="pl-1">Portfolio</div>
                                </a>
                            </li>
                            <li className="nav__item">
                                <a href={"/#contact"} className="nav__link flex items-center" onClick={toggleNav}>
                                  <MdOutlineContactMail />
                                  <div className="pl-1">Contact</div>
                                </a>
                            </li>
                        </ul>
                        <FaTimes className="nav__close" id="nav-close" onClick={toggleNav} />
                    </div>

                </nav>
            </header>

            <main className="main">
                <Hero />
                <About />
            </main>
        </>
    );
}
