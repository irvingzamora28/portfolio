import { GetStaticProps, InferGetStaticPropsType } from "next";
import path from "path";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { BiUpArrowAlt } from "react-icons/bi";
import About from "../components/home/About";
import Blogs from "../components/home/Blogs";
import Contact from "../components/home/Contact";
import Footer from "../components/home/Footer";
import Hero from "../components/home/Hero";
import Header from "../components/home/Header";
import HeadHTML from "../components/home/HeadHTML";
import Projects from "../components/home/Projects";
import Skills from "../components/home/Skills";
import { readBlogsMeta } from "../utils/blogFileReader";

export const getStaticProps: GetStaticProps<Blogs> = async () => {
    const root = path.join(process.cwd());
    const dirPath = `${root}/content/blog`;
    const blogs: BlogMeta[] = readBlogsMeta(dirPath);

    return {
        props: {
            blogs,
            isBlogSection: true,
        },
    };
};

const Home = ({ blogs, isBlogSection }: InferGetStaticPropsType<typeof getStaticProps>) => {
    const [showMenu, setShowMenu] = useState(false);
    const [showButton, setShowButton] = useState(false);

    const [activeLink, setActiveLink] = useState("hero");
    const [floatingShapes, setFloatingShapes] = useState<React.ReactNode[]>([]);
    const [codeSnippetsElements, setCodeSnippetsElements] = useState<React.ReactNode[]>([]);
    const [particlesElements, setParticlesElements] = useState<React.ReactNode[]>([]);
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        const links = ["hero", "about", "skills", "blogs", "projects", "contact"];
        function handleScroll() {
            if (window.pageYOffset > 250) {
                setShowButton(true);
            } else {
                setShowButton(false);
            }
            const currentSection = links.find((link) => {
                const section = document.getElementById(link);
                return (section?.offsetTop ?? 0) <= window.pageYOffset + 50 && (section?.offsetTop ?? 0) + (section?.clientHeight ?? 0) > window.pageYOffset;
            });
            setActiveLink(currentSection ? currentSection : "hero");
        }

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    

    
    // Initialize all client-side elements to prevent hydration mismatch
    useEffect(() => {
        setIsClient(true);
        
        // Generate floating shapes
        const shapes = Array.from({ length: 6 }, (_, i) => {
            const background = `linear-gradient(45deg, ${
                i % 3 === 0 ? '#6366f1, #8b5cf6' : 
                i % 3 === 1 ? '#06b6d4, #3b82f6' : 
                '#10b981, #059669'
            })`;
            const width = `${Math.random() * 150 + 80}px`;
            const height = `${Math.random() * 150 + 80}px`;
            const left = `${Math.random() * 100}%`;
            const top = `${Math.random() * 100}%`;
            const xOffset = Math.random() * 100 - 50;
            const yOffset = Math.random() * 100 - 50;
            const duration = Math.random() * 20 + 20;

            return (
                <motion.div
                    key={i}
                    className="absolute rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-xl opacity-30 dark:opacity-20"
                    style={{ background, width, height, left, top }}
                    animate={{
                        x: [0, xOffset, 0],
                        y: [0, yOffset, 0],
                        scale: [1, 1.1, 1],
                        rotate: [0, 360],
                    }}
                    transition={{
                        duration,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                />
            );
        });
        setFloatingShapes(shapes);
        
        // Code snippets floating animation
        const codeSnippets = [
            "const developer = 'Irving';",
            "function createAwesome() {",
            "return 'Amazing Code';",
            "} // Building the future",
            "npm install creativity",
            "git commit -m 'Magic'",
        ];
        
        // Generate code snippets elements
        const snippetsElements = codeSnippets.map((snippet, i) => {
            const leftPos = `${Math.random() * 80 + 10}%`;
            const topPos = `${Math.random() * 80 + 10}%`;
            const duration = Math.random() * 4 + 6;
            
            return (
                <motion.div
                    key={i}
                    className="absolute text-green-600 dark:text-green-400 font-mono text-xs sm:text-sm opacity-20 pointer-events-none hidden sm:block"
                    style={{
                        left: leftPos,
                        top: topPos,
                    }}
                    animate={{
                        y: [0, -20, 0],
                        opacity: [0.1, 0.3, 0.1],
                        rotate: [0, 5, 0],
                    }}
                    transition={{
                        duration,
                        repeat: Infinity,
                        delay: i * 0.5,
                    }}
                >
                    {snippet}
                </motion.div>
            );
        });
        setCodeSnippetsElements(snippetsElements);
        
        // Generate particles elements
        const particles = Array.from({ length: 8 }, (_, i) => {
            const leftPos = `${Math.random() * 100}%`;
            const topPos = `${Math.random() * 100}%`;
            
            return (
                <motion.div
                    key={i}
                    className="absolute w-2 h-2 bg-blue-400 dark:bg-blue-300 rounded-full opacity-40"
                    style={{
                        left: leftPos,
                        top: topPos,
                    }}
                    animate={{
                        scale: [0, 1, 0],
                        opacity: [0, 0.6, 0],
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: i * 0.3,
                    }}
                />
            );
        });
        setParticlesElements(particles);
    }, []);

    const toggleNav = () => {
        setShowMenu(!showMenu);
    };



    return (
        <>
            <HeadHTML />
            <Header showMenu={showMenu} setShowMenu={toggleNav} activeLink={activeLink} isHomePage={true} />

            <main className="main relative bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 dark:from-gray-900 dark:via-blue-900 dark:to-purple-900">
                {/* Global Background Pattern */}
                <div className="absolute inset-0 opacity-5 dark:opacity-10 pointer-events-none">
                    <div className="w-full h-full" style={{
                        backgroundImage: `radial-gradient(circle at 1px 1px, rgb(0 0 0 / 0.3) 1px, transparent 0)`,
                        backgroundSize: '20px 20px'
                    }}></div>
                </div>
                
                {/* Animated Background Elements */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    {isClient && floatingShapes}
                </div>
                
                {/* Floating Code Snippets */}
                {isClient && codeSnippetsElements}
                
                {/* Subtle Particles */}
                {isClient && particlesElements}
                <Hero />
                <About />
                <Skills />
                <Projects />
                <Blogs blogs={blogs} isBlogSection={isBlogSection} />
                <Contact />
                <Footer />
                <a href={"#"} className={`scrollup ${showButton ? "scrollup-show" : ""} ${showMenu ? " scrollup-show-menu" : ""}`} id="scroll-up">
                    <BiUpArrowAlt className="scrollup__icon" />
                </a>
            </main>
        </>
    );
};

export default Home;
