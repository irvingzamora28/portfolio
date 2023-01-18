import Image from "next/image";
import React from "react";
import { BiDownload } from "react-icons/bi";

const About = () => {
    return (
        <section id="about" className="about section px-6">
            <h2 className="section__title">About Me</h2>
            <span className="section__subtitle">Introduction</span>
            <div className="about__container container grid">
                <Image
                    src={"/assets/images/dalle-programming.png"}
                    className="about__img"
                    alt="Irving Zamora"
                    width={200}
                    height={200}
                />
                <div className="about__data">
                    <p className="about__description">
                        I am a software web developer proficient in a variety of
                        programming languages, including HTML, CSS, JavaScript,
                        and PHP, I have experience with frameworks such as
                        Laravel and Vue.js. I am also familiar with MySQL and
                        MongoDB. I am currently learning React, Next.js, and
                        Kubernetes to further expand my skillset.
                    </p>
                    <div className="about__info">
                        <div>
                            <span className="about__info-title">03+</span>
                            <span className="about__info-name">
                                Years of experience
                            </span>
                        </div>
                        <div>
                            <span className="about__info-title">10+</span>
                            <span className="about__info-name">
                                Projects completed
                            </span>
                        </div>
                        <div>
                            <span className="about__info-title">02+</span>
                            <span className="about__info-name">
                                Companies worked
                            </span>
                        </div>
                    </div>
                    <div className="about__buttons">
                        <a href="" className="button button-flex">
                            Download CV <BiDownload className="button__icon" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
