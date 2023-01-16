import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BiSend, BiMouse, BiDownArrowAlt } from "react-icons/bi";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import ImageBackground from "./ImageBackground";

const Hero = () => {
    return (
        <section id="hero" className="hero section">
            <div className="hero__container container grid px-6">
                <div className="hero__content grid">
                    <div className="hero__social">
                        <a href="#" className="hero__social-icon">
                            <FaLinkedinIn />
                        </a>
                        <a href="#" className="hero__social-icon">
                            <FaGithub />
                        </a>

                        <a href="#" className="hero__social-icon">
                            <AiOutlineMail />
                        </a>
                    </div>
                    <div className="hero__img">
                        <ImageBackground />
                    </div>
                    <div className="her__data">
                        <h1 className="hero__title">Hi I an Irving</h1>
                        <h3 className="hero__subtitle">Web Developer</h3>
                        <p className="hero__description">
                            Lorem, ipsum dolor sit amet consectetur adipisicing
                            elit. Sequi facere sit eum assumenda culpa alias
                            voluptate! Odit illo maiores eum, a reiciendis harum
                            dolor. Quaerat.
                        </p>
                        <a href={"/#contact"} className="button button-flex flex">
                            Contact Me <BiSend className="button__icon" />
                        </a>
                    </div>
                </div>
                <div className="hero__scroll">
                    <a
                        href={"/#about"}
                        className="hero__scroll-button button-flex flex">
                            <BiMouse className="hero__scroll-mouse" />
                            <span className="hero__scroll-name">Scroll down</span>
                            <BiDownArrowAlt className="hero__scroll-arrow" />
                        </a>
                </div>
            </div>
        </section>
    );
};

export default Hero;
