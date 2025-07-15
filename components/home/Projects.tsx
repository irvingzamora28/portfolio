import React, { forwardRef, Ref, useState, useEffect } from "react";
import { ProjectItem } from "./ProjectItem";
import { motion } from "framer-motion";
import { ProjectItemProps, ProjectCategory } from "../../types";
import projectImage from "../../public/assets/images/dalle-programming.png";
import projectGithubIssueCreatorImage from "../../public/assets/images/github-issue-creator-theme.png";
import projectGermanStoriesImage from "../../public/assets/images/german-stories-theme.png";
import projectLessonGeneratorImage from "../../public/assets/images/lesson-generator-theme.png";
import projectLengofyImage from "../../public/assets/images/lengofy-theme.png";
import projectGetSlidesImage from "../../public/assets/images/getslides-theme.png";
import { Navigation, Pagination, Scrollbar, A11y, EffectCoverflow } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-coverflow";
import { useMediaQuery } from "react-responsive";
import { FaCode, FaLaptopCode, FaMobileAlt, FaRobot, FaLanguage } from "react-icons/fa";

// Use project categories from types

const projectData: (ProjectItemProps & { category: ProjectCategory[] })[] = [
    {
        title: "Lengofy",
        description: "Lengofy is a comprehensive language learning platform that combines interactive lessons, gamified learning experiences, and real-time practice to help users master new languages.",
        demourl: "https://lengofy.online/",
        image: projectLengofyImage,
        url: "/projects/lengofy",
        category: ["web", "language"],
    },
    {
        title: "GetSlides",
        description: "GetSlides is a modern web application that automatically generates beautiful presentations using AI. Built with Nuxt.js and powered by Slidev, it allows users to create professional-looking slides from simple text prompts.",
        demourl: "https://getslides-f3fau.ondigitalocean.app",
        image: projectGetSlidesImage,
        url: "/projects/getslides",
        category: ["web", "ai"],
    },
    {
        title: "Lesson Generator",
        description:
            "An innovative Python command-line application that uses the OpenAI API to automate the creation of educational content in MDX format. Features include dynamic content generation, support for multiple languages, and integration of interactive React components.",
        image: projectLessonGeneratorImage,
        url: "/projects/lesson-generator",
        category: ["ai", "language"],
    },
    {
        title: "Listen German Stories",
        description: "A NextJS web app that allows users to listen to German stories for language learners. Features include audio playback, transcripts, translations and vocabulary lists.",
        image: projectGermanStoriesImage,
        url: "/projects/listen-german-stories",
        demourl: "https://listengermanstories.vercel.app/",
        category: ["web", "language"],
    },
    {
        title: "GitIssueCreator",
        description:
            "A Python tool for automating GitHub issue creation from JSON files. It simplifies issue tracking in larger projects with environment variable integration and reliable error handling.",
        image: projectGithubIssueCreatorImage,
        url: "/projects/git-issue-creator",
        category: ["web"],
    },
];

const Projects = forwardRef((props, ref: Ref<HTMLElement>) => {
    const isMobile = useMediaQuery({ maxWidth: 767 });
    const [activeCategory, setActiveCategory] = useState<ProjectCategory>("all");
    const [isClient, setIsClient] = useState(false);
    
    // Initialize client-side elements
    useEffect(() => {
        setIsClient(true);
    }, []);
    
    const handleCategoryChange = (category: ProjectCategory) => {
        if (isClient) {
            setActiveCategory(category);
        }
    };
    
    const filteredProjects = activeCategory === "all" 
        ? projectData 
        : projectData.filter(project => project.category.includes(activeCategory));
    
    const renderProjects = () => filteredProjects.map((project, index) => (
        <motion.div 
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            exit={{ opacity: 0, y: -20 }}
            layout
        >
            <ProjectItem {...project} />
        </motion.div>
    ));

    const renderSwiperProjects = () =>
        filteredProjects.map((project, index) => (
            <SwiperSlide key={project.title}>
                <ProjectItem {...project} />
            </SwiperSlide>
        ));

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { 
            opacity: 1,
            transition: { 
                staggerChildren: 0.1
            }
        }
    };
    
    // Category data with icons
    const categories = [
        { id: "all", name: "All Projects", icon: <FaLaptopCode /> },
        { id: "web", name: "Web Apps", icon: <FaCode /> },
        { id: "mobile", name: "Mobile Apps", icon: <FaMobileAlt /> },
        { id: "ai", name: "AI Projects", icon: <FaRobot /> },
        { id: "language", name: "Language Tools", icon: <FaLanguage /> },
    ];
    
    return (
        <motion.section 
            id="projects" 
            className="relative min-h-screen py-16 sm:py-24"
            ref={ref}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
        >
            {/* Section Header */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div 
                    className="text-center mb-12"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    <motion.h2 
                        className="text-3xl sm:text-4xl font-bold mb-2 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 dark:from-blue-400 dark:via-indigo-400 dark:to-purple-400 inline-block text-transparent bg-clip-text"
                        animate={{
                            filter: [
                                'drop-shadow(0 0 0px rgba(59, 130, 246, 0.5))',
                                'drop-shadow(0 0 5px rgba(59, 130, 246, 0.5))',
                                'drop-shadow(0 0 0px rgba(59, 130, 246, 0.5))'
                            ]
                        }}
                        transition={{ duration: 3, repeat: Infinity }}
                    >
                        Featured Projects
                    </motion.h2>
                    <motion.div 
                        className="h-1 w-20 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 mx-auto rounded-full mb-4"
                        initial={{ width: 0 }}
                        whileInView={{ width: 80 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    />
                    <motion.p 
                        className="text-gray-600 dark:text-gray-300 text-lg"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        Showcasing my recent work and creations
                    </motion.p>
                </motion.div>
                
                {/* Category Filters */}
                <motion.div 
                    className="flex flex-wrap justify-center mb-10 gap-2 sm:gap-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    viewport={{ once: true }}
                >
                    {categories.map(category => (
                        <CategoryButton 
                            key={category.id}
                            active={activeCategory === category.id}
                            onClick={() => handleCategoryChange(category.id as ProjectCategory)}
                            icon={category.icon}
                            label={category.name}
                        />
                    ))}
                </motion.div>
                
                {/* Projects Display */}
                <div className="projects__container">
                    {isMobile ? (
                        <motion.div 
                            className="projects__container-swiper"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5 }}
                        >
                            <Swiper
                                modules={[Navigation, Pagination, Scrollbar, A11y, EffectCoverflow]}
                                effect="coverflow"
                                coverflowEffect={{
                                    rotate: 50,
                                    stretch: 0,
                                    depth: 100,
                                    modifier: 1,
                                    slideShadows: true,
                                }}
                                spaceBetween={30}
                                slidesPerView={1}
                                loop={true}
                                navigation
                                pagination={{ clickable: true }}
                                className="rounded-xl overflow-visible py-10"
                            >
                                {isClient && renderSwiperProjects()}
                            </Swiper>
                        </motion.div>
                    ) : (
                        <motion.div 
                            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            layout
                        >
                            {isClient && renderProjects()}
                        </motion.div>
                    )}
                </div>
            </div>
        </motion.section>
    );
});

// Category Button Component
interface CategoryButtonProps {
    active: boolean;
    onClick: () => void;
    icon: React.ReactNode;
    label: string;
}

const CategoryButton: React.FC<CategoryButtonProps> = ({ active, onClick, icon, label }) => {
    return (
        <motion.button
            className={`flex items-center px-4 py-2 rounded-full text-sm sm:text-base font-medium transition-all duration-300 ${active ? 
                'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg' : 
                'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300'}`}
            onClick={onClick}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
        >
            <span className="mr-2">{icon}</span>
            {label}
        </motion.button>
    );
};

Projects.displayName = "Projects";

export default Projects;
