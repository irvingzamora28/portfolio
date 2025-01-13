import React, { forwardRef, Ref, useState, useEffect } from "react";
import { ProjectItem } from "./ProjectItem";
import projectImage from "../../public/assets/images/dalle-programming.png";
import projectGithubIssueCreatorImage from "../../public/assets/images/github-issue-creator-theme.png";
import projectLenguanImage from "../../public/assets/images/lenguan-theme.png";
import projectGermanStoriesImage from "../../public/assets/images/german-stories-theme.png";
import projectLessonGeneratorImage from "../../public/assets/images/lesson-generator-theme.png";
import projectLengofyImage from "../../public/assets/images/lengofy-project.png";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { useMediaQuery } from "react-responsive";

const projectData: ProjectItemProps[] = [
    {
        title: "Lenguan",
        description: "Lenguan is a web platform that offers people of all ages a way to learn new languages in an engaging and interactive way.",
        image: projectLenguanImage,
        url: "/projects/lenguan",
        demourl: "https://lenguan.de/",
    },
    {
        title: "Lesson Generator",
        description:
            "An innovative Python command-line application that uses the OpenAI API to automate the creation of educational content in MDX format. Features include dynamic content generation, support for multiple languages, and integration of interactive React components.",
        image: projectLessonGeneratorImage,
        url: "/projects/lesson-generator",
    },
    {
        title: "Listen German Stories",
        description: "A NextJS web app that allows users to listen to German stories for language learners. Features include audio playback, transcripts, translations and vocabulary lists.",
        image: projectGermanStoriesImage,
        url: "/projects/listen-german-stories",
        demourl: "https://listengermanstories.vercel.app/",
    },
    {
        title: "GitIssueCreator",
        description:
            "A Python tool for automating GitHub issue creation from JSON files. It simplifies issue tracking in larger projects with environment variable integration and reliable error handling.",
        image: projectGithubIssueCreatorImage,
        url: "/projects/git-issue-creator",
    },
    {
        title: "Lengofy",
        description: "Lengofy is a comprehensive language learning platform that combines interactive lessons, gamified learning experiences, and real-time practice to help users master new languages.",
        demourl: "https://lengofy.online/",
        image: projectLengofyImage,
        url: "/projects/lengofy",
    }
];

const Projects = forwardRef((props, ref: Ref<HTMLElement>) => {
    const isMobile = useMediaQuery({ maxWidth: 767 });

    const renderProjects = () => projectData.map((project, index) => <ProjectItem key={index} {...project} />);

    const renderSwiperProjects = () =>
        projectData.map((project, index) => (
            <SwiperSlide key={index}>
                <ProjectItem {...project} />
            </SwiperSlide>
        ));

    return (
        <section id="projects" className="projects section min-h-screen bg-white dark:bg-gray-900" ref={ref}>
            <h2 className="section__title">Projects</h2>
            <span className="section__subtitle">Recent work</span>

            <div className="projects__container container">
                {isMobile ? (
                    <div className="projects__container-swiper">
                        <Swiper
                            modules={[Navigation, Pagination, Scrollbar, A11y]}
                            spaceBetween={50}
                            slidesPerView={1}
                            loop={true}
                            navigation
                            pagination={{ clickable: true }}
                            scrollbar={{ draggable: true }}>
                            {renderSwiperProjects()}
                        </Swiper>
                    </div>
                ) : (
                    <div className="grid md:grid-cols-2 lg:grid-cols-3">{renderProjects()}</div>
                )}
            </div>
        </section>
    );
});
Projects.displayName = "Projects";

export default Projects;
