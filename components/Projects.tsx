import React, { forwardRef, Ref } from "react";
import { ProjectItem } from "./ProjectItem";
import projectImage from "../public/assets/images/dalle-programming.png";
import Image from "next/image";
import { BsArrowBarRight } from "react-icons/bs";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import {Swiper, SwiperSlide} from "swiper/react";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Projects = forwardRef((props, ref: Ref<HTMLElement>) => {
    return (
        <section id="projects" className="projects section px-6" ref={ref}>
            <h2 className="section__title">Projects</h2>
            <span className="section__subtitle">Recent work</span>

            <div className="projects__container container">
                <div>
                <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={50}
                slidesPerView={1}
                loop={true}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
                >
                    
                    
                    
                    
                <SwiperSlide><ProjectItem title="Project Name 1" description="Lorem ipsum dolor sit amet Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta, rem?" image={projectImage} url="/project1" /></SwiperSlide>
                <SwiperSlide><ProjectItem title="Project Name 2" description="Non, omnis animi! Libero, eligendi Similique sed porro hic laboriosam repudiandae laudantium molestias voluptates aperiam?" image={projectImage} url="/project1" /></SwiperSlide>
                <SwiperSlide><ProjectItem title="Project Name 3" description="Tempore, illum possimus! Possimus, voluptates Officiis quis inventore alias vel velit maiores quas, sunt explicabo?" image={projectImage} url="/project1" /></SwiperSlide>
                <SwiperSlide><ProjectItem title="Project Name 4" description="Consequatur excepturi sequi ipsa voluptatum Blanditiis hic eligendi voluptatum debitis itaque? Quod dignissimos impedit nulla." image={projectImage} url="/project1" /></SwiperSlide>
            </Swiper>
                </div>
            </div>
            </section>
    );
});
Projects.displayName = "Projects";


export default Projects;
