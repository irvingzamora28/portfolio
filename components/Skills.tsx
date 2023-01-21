import Image from "next/image";
import React, { forwardRef, Ref, useState } from "react";
import { TbDeviceDesktopAnalytics } from "react-icons/tb";
import { BiCodeCurly } from "react-icons/bi";
import { FaAngleDown, FaServer } from "react-icons/fa";

const Skills = forwardRef((props, ref: Ref<HTMLElement>) => {
    const [open, setOpen] = useState<boolean[]>([true, false, false])

    const handleOpen = (index: number) => {
        setOpen(prevOpened => {
      const newOpened = [...prevOpened];
      newOpened[index] = !newOpened[index];
      return newOpened;
    });
  };

    return (
        <section id="skills" className="skills section px-6" ref={ref}>
            <h2 className="section__title">Skills</h2>
            <span className="section__subtitle">My technical level</span>

            <div className="skills__container container grid">
                <div>
                    {/* Skill 1 */}
                    <div className={"skills__content " + (open[0] ? "skills__open" : "skills__close")}>
                        <div className="skills__header" onClick={() => handleOpen(0)}>
                            <BiCodeCurly className="skills__icon" />
                            <div>
                                <h1 className="skills__header-title">Frontend developer</h1>
                                <span className="skills_header-subtitle">More than 5 years</span>
                            </div>
                            <FaAngleDown className="skills__down-arrow" />
                        </div>
                        <div className="skills__list grid">
                        <div className="skills_data">
                                <div className="skills__title">
                                    <h3 className="skills__name">HTML</h3>
                                    <span className="skills__number">90%</span>
                                </div>
                                <div className="skills__bar">
                                    <span className="skills__percentage skills__html"></span>
                                </div>
                            </div>
                            <div className="skills_data">
                                <div className="skills__title">
                                    <h3 className="skills__name">CSS</h3>
                                    <span className="skills__number">90%</span>
                                </div>
                                <div className="skills__bar">
                                    <span className="skills__percentage skills__css"></span>
                                </div>
                            </div>
                            <div className="skills_data">
                                <div className="skills__title">
                                    <h3 className="skills__name">Javascript</h3>
                                    <span className="skills__number">90%</span>
                                </div>
                                <div className="skills__bar">
                                    <span className="skills__percentage skills__js"></span>
                                </div>
                            </div>
                            <div className="skills_data">
                                <div className="skills__title">
                                    <h3 className="skills__name">ReactJS</h3>
                                    <span className="skills__number">60%</span>
                                </div>
                                <div className="skills__bar">
                                    <span className="skills__percentage skills__reactjs"></span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Skill 2 */}
                    <div className={"skills__content " + (open[1] ? "skills__open" : "skills__close")}>
                        <div className="skills__header" onClick={() => handleOpen(1)}>
                            <FaServer className="skills__icon" />
                            <div>
                                <h1 className="skills__header-title">Backend developer</h1>
                                <span className="skills_header-subtitle">More than 5 years</span>
                            </div>
                            <FaAngleDown className="skills__down-arrow" />
                        </div>
                        <div className="skills__list grid">
                        <div className="skills_data">
                                <div className="skills__title">
                                    <h3 className="skills__name">PHP</h3>
                                    <span className="skills__number">90%</span>
                                </div>
                                <div className="skills__bar">
                                    <span className="skills__percentage skills__php"></span>
                                </div>
                            </div>
                            <div className="skills_data">
                                <div className="skills__title">
                                    <h3 className="skills__name">Node Js</h3>
                                    <span className="skills__number">70%</span>
                                </div>
                                <div className="skills__bar">
                                    <span className="skills__percentage skills__node"></span>
                                </div>
                            </div>
                            <div className="skills_data">
                                <div className="skills__title">
                                    <h3 className="skills__name">MySQL</h3>
                                    <span className="skills__number">80%</span>
                                </div>
                                <div className="skills__bar">
                                    <span className="skills__percentage skills__mysql"></span>
                                </div>
                            </div>
                            <div className="skills_data">
                                <div className="skills__title">
                                    <h3 className="skills__name">Laravel</h3>
                                    <span className="skills__number">90%</span>
                                </div>
                                <div className="skills__bar">
                                    <span className="skills__percentage skills__laravel"></span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Skill 3 */}
                    <div className={"skills__content " + (open[2] ? "skills__open" : "skills__close")}>
                        <div className="skills__header" onClick={() => handleOpen(2)}>
                            <TbDeviceDesktopAnalytics className="skills__icon" />
                            <div>
                                <h1 className="skills__header-title">Other</h1>
                                <span className="skills_header-subtitle">More than 5 years</span>
                            </div>
                            <FaAngleDown className="skills__down-arrow" />
                        </div>
                        <div className="skills__list grid">
                        <div className="skills_data">
                                <div className="skills__title">
                                    <h3 className="skills__name">Git</h3>
                                    <span className="skills__number">80%</span>
                                </div>
                                <div className="skills__bar">
                                    <span className="skills__percentage skills__git"></span>
                                </div>
                            </div>
                            <div className="skills_data">
                                <div className="skills__title">
                                    <h3 className="skills__name">Docker</h3>
                                    <span className="skills__number">20%</span>
                                </div>
                                <div className="skills__bar">
                                    <span className="skills__percentage skills__docker"></span>
                                </div>
                            </div>
                            <div className="skills_data">
                                <div className="skills__title">
                                    <h3 className="skills__name">Linux</h3>
                                    <span className="skills__number">70%</span>
                                </div>
                                <div className="skills__bar">
                                    <span className="skills__percentage skills__linux"></span>
                                </div>
                            </div>
                            <div className="skills_data">
                                <div className="skills__title">
                                    <h3 className="skills__name">MongoDB</h3>
                                    <span className="skills__number">70%</span>
                                </div>
                                <div className="skills__bar">
                                    <span className="skills__percentage skills__mongo"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
});
Skills.displayName = "Skills";

export default Skills;