import Head from "next/head";
import { AiOutlineFileText, AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import {BiBriefcaseAlt2, BiImage} from "react-icons/bi"
import { FaTimes } from "react-icons/fa";
import {MdOutlineContactMail} from "react-icons/md"
import {TiThMenuOutline} from "react-icons/ti"

export default function Home() {
    return (
        <>
            <Head>
                <title>Irving Zamora | Web Developer</title>
                <meta name="description" content="Portfolio Irving Zamora" />
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
                    <div className="nav__menu" id="nav-menu">
                        <ul className="nav__list grid gap-6 mx-6">
                            <li className="nav__item">
                                <a href={"/"} className="nav__link flex items-center">
                                <AiOutlineHome />
                                <div className="pl-1">Home</div>
                                </a>
                            </li>
                            <li className="nav__item">
                                <a href={"/#about"} className="nav__link flex items-center">
                                  <AiOutlineUser />
                                  <div className="pl-1">About</div>
                                </a>
                            </li>
                            <li className="nav__item">
                                <a href={"/#skills"} className="nav__link flex items-center">
                                  <AiOutlineFileText />
                                  <div className="pl-1">Skills</div>
                                </a>
                            </li>
                            <li className="nav__item">
                                <a href={"/#services"} className="nav__link flex items-center">
                                  <BiBriefcaseAlt2 />
                                  <div className="pl-1">Services</div>
                                </a>
                            </li>
                            <li className="nav__item">
                                <a href={"/#portfolio"} className="nav__link flex items-center">
                                  <BiImage />
                                  <div className="pl-1">Portfolio</div>
                                </a>
                            </li>
                            <li className="nav__item">
                                <a href={"/#contact"} className="nav__link flex items-center">
                                  <MdOutlineContactMail />
                                  <div className="pl-1">Contact</div>
                                </a>
                            </li>
                        </ul>
                        <FaTimes className="nav__close mx-6" id="nav-close" />
                    </div>

                    <div className="nav__buttons mx-6 mt-2">
                      <div className="nav__toggle" id="nav-toggle">
                        <TiThMenuOutline /> 
                      </div>
                    </div>
                </nav>
            </header>
        </>
    );
}
