import React, { forwardRef, Ref } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BiSend, BiMouse, BiDownArrowAlt } from "react-icons/bi";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import ImageBackground from "./ImageBackground";

const Hero = forwardRef((props, ref: Ref<HTMLElement>) => {
    return (
        <section id="hero" className="hero section h-screen" ref={ref}>
            <div className="hero__container container grid">
                <div className="hero__content grid">
                    <div className="hero__social">
                        <a href="https://www.linkedin.com/in/irving-zamora-53833b18/" className="hero__social-icon" target="_blank" rel="noreferrer">
                            <FaLinkedinIn />
                        </a>
                        <a href="https://github.com/irvingzamora28" className="hero__social-icon" target="_blank" rel="noreferrer">
                            <FaGithub />
                        </a>

                        <a href="mailto:irvingzamora06@gmail.com" className="hero__social-icon" target="_blank" rel="noreferrer">
                            <AiOutlineMail />
                        </a>
                    </div>
                    <div className="hero__img">
                        <ImageBackground />
                    </div>
                    <div className="hero__data">
                        <h1 className="hero__title">Hi I am Irving</h1>
                        <h3 className="hero__subtitle">Web Developer</h3>
                        <p className="hero__description">Full-stack web developer passionate about both front-end and back-end technologies</p>
                        <a href={"/#contact"} className="hero__button button">
                            Contact Me <BiSend className="button__icon" />
                        </a>
                    </div>
                </div>
                <div className="hero__scroll">
                    <a href={"/#about"} className="hero__scroll-button button-flex flex">
                        <BiMouse className="hero__scroll-mouse" />
                        <span className="hero__scroll-name">Scroll down</span>
                        <BiDownArrowAlt className="hero__scroll-arrow" />
                    </a>
                </div>
            </div>
        </section>
    );
});
Hero.displayName = "Hero";

export default Hero;
