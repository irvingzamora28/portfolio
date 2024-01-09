import React, { forwardRef, Ref } from "react";
import Image from "next/image";
import { BiDownload } from "react-icons/bi";

const About = forwardRef((props, ref: Ref<HTMLElement>) => {
    return (
        <section
            id="about"
            className="about section min-h-screen bg-white dark:bg-gray-900"
            ref={ref}
        >
            <h2 className="section__title">About Me</h2>
            <span className="section__subtitle">Introduction</span>
            <div className="about__container">
                <Image
                    src={"/assets/images/about_profile.jpg"}
                    className="about__img"
                    alt="Irving Zamora"
                    width={300}
                    height={500}
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
});
About.displayName = "About";

export default About;
