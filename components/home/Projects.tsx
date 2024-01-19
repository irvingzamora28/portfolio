import React, { forwardRef, Ref } from "react";
import { ProjectItem } from "./ProjectItem";
import projectImage from "../../public/assets/images/dalle-programming.png";
import projectLenguanImage from "../../public/assets/images/lenguan-theme.png";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Projects = forwardRef((props, ref: Ref<HTMLElement>) => {
    return (
        <section id="projects" className="projects section min-h-screen bg-white dark:bg-gray-900" ref={ref}>
            <h2 className="section__title">Projects</h2>
            <span className="section__subtitle">Recent work</span>

            <div className="projects__container container">
                <div className="projects__container-swiper">
                    <Swiper
                        modules={[Navigation, Pagination, Scrollbar, A11y]}
                        spaceBetween={50}
                        slidesPerView={1}
                        loop={true}
                        navigation
                        pagination={{ clickable: true }}
                        scrollbar={{ draggable: true }}
                        onSwiper={(swiper) => console.log(swiper)}
                        onSlideChange={() => console.log("slide change")}>
                        <SwiperSlide>
                            <ProjectItem
                                title="Lenguan"
                                description="Lenguan is a web that offers people of all ages a way to learn new languages in an engaging and interactive way."
                                image={projectLenguanImage}
                                url="/projects/lenguan"
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <ProjectItem
                                title="Lesson Generator"
                                description="An innovative Python command-line application that uses the OpenAI API to automate the creation of educational content in MDX format. Features include dynamic content generation, support for multiple languages, and integration of interactive React components."
                                image={projectImage}
                                url="/projects/lesson-generator"
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <ProjectItem
                                title="Project Name 3"
                                description="Tempore, illum possimus! Possimus, voluptates Officiis quis inventore alias vel velit maiores quas, sunt explicabo?"
                                image={projectImage}
                                url="/projects/project1"
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <ProjectItem
                                title="Project Name 4"
                                description="Consequatur excepturi sequi ipsa voluptatum Blanditiis hic eligendi voluptatum debitis itaque? Quod dignissimos impedit nulla."
                                image={projectImage}
                                url="/projects/project1"
                            />
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </section>
    );
});
Projects.displayName = "Projects";

export default Projects;
