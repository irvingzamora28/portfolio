import React, { forwardRef, Ref, useEffect, useState } from "react";
import { useRouter } from 'next/router';
import { AiOutlineMail } from "react-icons/ai";
import { BiSend, BiMouse, BiDownArrowAlt } from "react-icons/bi";
import { FaGithub, FaLinkedinIn, FaCode, FaLaptopCode, FaRocket } from "react-icons/fa";
import { motion, useAnimation } from "framer-motion";

const Hero = forwardRef((props, ref: Ref<HTMLElement>) => {
    const router = useRouter();
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const controls = useAnimation();
    const [isClient, setIsClient] = useState(false);

    // Handle mouse movement for cursor effect
    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    // Initialize client-side elements
    useEffect(() => {
        setIsClient(true);
    }, []);



    return (
        <motion.section 
            id="hero" 
            className="relative min-h-screen overflow-hidden" 
            ref={ref}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
        >
            {/* Cursor Trail Effect */}
            <motion.div
                className="absolute w-4 h-4 bg-blue-400 dark:bg-blue-300 rounded-full pointer-events-none mix-blend-screen hidden lg:block"
                style={{
                    left: mousePosition.x - 8,
                    top: mousePosition.y - 8,
                }}
                animate={{
                    scale: [1, 1.5, 1],
                }}
                transition={{
                    duration: 0.3,
                    repeat: Infinity,
                }}
            />

            {/* Main Content */}
            <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 h-screen flex items-center">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center w-full">
                    
                    {/* Left Side - Content */}
                    <motion.div
                        className="text-gray-800 dark:text-white order-2 lg:order-1"
                        initial={{ x: -100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        {/* Glitch Effect Title */}
                        <motion.div className="relative mb-4 sm:mb-6">
                            <motion.h1 
                                className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent"
                                animate={{
                                    filter: [
                                        "drop-shadow(0 0 20px rgb(59 130 246 / 0.5))",
                                        "drop-shadow(0 0 40px rgb(139 92 246 / 0.7))",
                                        "drop-shadow(0 0 20px rgb(59 130 246 / 0.5))",
                                    ],
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                }}
                            >
                                IRVING
                            </motion.h1>
                        </motion.div>

                        <motion.div
                            className="mb-6 sm:mb-8"
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                        >
                            <motion.h2 
                                className="text-xl sm:text-2xl lg:text-3xl mb-3 sm:mb-4 text-gray-600 dark:text-gray-400"
                            >
                                Full-Stack Developer
                            </motion.h2>
                            <motion.p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-lg">
                                Crafting digital experiences with cutting-edge technologies. 
                                Passionate about clean code, innovative solutions, and bringing ideas to life.
                            </motion.p>
                        </motion.div>

                        {/* Tech Stack Icons */}
                        <motion.div
                            className="flex gap-3 sm:gap-4 mb-6 sm:mb-8"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                        >
                            {[FaCode, FaLaptopCode, FaRocket].map((Icon, i) => (
                                <motion.div
                                    key={i}
                                    className="p-2 sm:p-3 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm"
                                    whileHover={{ 
                                        scale: 1.1, 
                                        backgroundColor: "rgb(249 250 251)",
                                        borderColor: "rgb(59 130 246)",
                                        boxShadow: "0 0 20px rgb(59 130 246 / 0.3)"
                                    }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <Icon className="text-xl sm:text-2xl text-blue-600 dark:text-blue-400" />
                                </motion.div>
                            ))}
                        </motion.div>

                        {/* CTA Buttons */}
                        <motion.div
                            className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-6 sm:mb-8"
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.8 }}
                        >
                            <motion.a 
                                href="/#contact"
                                className="group relative px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-500 to-purple-600 dark:from-blue-400 dark:to-purple-500 rounded-full font-semibold text-white overflow-hidden text-center"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <motion.div
                                    className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-500 dark:to-pink-500"
                                    initial={{ x: "100%" }}
                                    whileHover={{ x: "0%" }}
                                    transition={{ duration: 0.3 }}
                                />
                                <span className="relative z-10 flex items-center justify-center gap-2">
                                    <span className="text-sm sm:text-base">Let's Work Together</span>
                                    <BiSend className="group-hover:translate-x-1 transition-transform" />
                                </span>
                            </motion.a>
                            
                            <motion.a 
                                href="/#projects"
                                className="px-6 sm:px-8 py-3 sm:py-4 border-2 border-blue-500 dark:border-blue-400 text-blue-600 dark:text-blue-400 rounded-full font-semibold hover:bg-blue-500 dark:hover:bg-blue-400 hover:text-white transition-all duration-300 text-center text-sm sm:text-base"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                View My Work
                            </motion.a>
                        </motion.div>

                        {/* Social Icons */}
                        <motion.div
                            className="flex gap-3 sm:gap-4"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.8, delay: 1 }}
                        >
                            {[
                                { icon: FaLinkedinIn, href: "https://www.linkedin.com/in/irving-zamora-53833b18/", color: "#0077b5" },
                                { icon: FaGithub, href: "https://github.com/irvingzamora28", color: "#333" },
                                { icon: AiOutlineMail, href: "mailto:imzodev@gmail.com", color: "#ea4335" },
                            ].map((social, i) => (
                                <motion.a
                                    key={i}
                                    href={social.href}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="p-2 sm:p-3 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 hover:text-white transition-colors shadow-sm"
                                    whileHover={{ 
                                        scale: 1.1, 
                                        backgroundColor: social.color,
                                        borderColor: social.color,
                                    }}
                                    whileTap={{ scale: 0.95 }}
                                    initial={{ x: -20, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ duration: 0.5, delay: 1 + i * 0.1 }}
                                >
                                    <social.icon className="text-lg sm:text-xl" />
                                </motion.a>
                            ))}
                        </motion.div>
                    </motion.div>

                    {/* Right Side - Profile Image & Modern Visual */}
                    <motion.div
                        className="flex justify-center items-center order-1 lg:order-2"
                        initial={{ x: 100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
                            {/* Animated Background Rings */}
                            <motion.div
                                className="absolute inset-0 rounded-full border-2 border-blue-500/30 dark:border-blue-400/30"
                                animate={{
                                    rotate: [0, 360],
                                }}
                                transition={{
                                    duration: 15,
                                    repeat: Infinity,
                                    ease: "linear",
                                }}
                            />
                            <motion.div
                                className="absolute inset-4 rounded-full border-2 border-purple-500/20 dark:border-purple-400/20"
                                animate={{
                                    rotate: [360, 0],
                                }}
                                transition={{
                                    duration: 20,
                                    repeat: Infinity,
                                    ease: "linear",
                                }}
                            />
                            
                            {/* Profile Image Container */}
                            <motion.div
                                className="absolute inset-8 sm:inset-12 rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900"
                                style={{
                                    boxShadow: "0 25px 50px -12px rgba(59, 130, 246, 0.25)",
                                }}
                                whileHover={{
                                    scale: 1.05,
                                    boxShadow: "0 35px 60px -12px rgba(59, 130, 246, 0.4)",
                                }}
                                transition={{
                                    duration: 0.3,
                                }}
                            >
                                {/* Placeholder for your image - replace with actual image */}
                                {/* <div className="w-full h-full bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 flex items-center justify-center relative overflow-hidden">
                                    <motion.div
                                        className="absolute inset-0 bg-gradient-to-br from-transparent via-white/10 to-transparent"
                                        animate={{
                                            x: ["-100%", "100%"],
                                        }}
                                        transition={{
                                            duration: 3,
                                            repeat: Infinity,
                                            ease: "linear",
                                        }}
                                    />
                                    <div className="text-white text-4xl sm:text-6xl font-bold relative z-10">I</div>
                                </div> */}
                                <img 
                                    src="/assets/images/profile-picture-alt.png" 
                                    alt="Irving Zamora" 
                                    className="w-full h-full object-cover"
                                />
                            </motion.div>

                            {/* Floating Tech Icons */}
                            {[
                                { icon: "{ }", position: { top: "10%", left: "15%" } },
                                { icon: "</>", position: { top: "20%", right: "10%" } },
                                { icon: "( )", position: { bottom: "15%", left: "10%" } },
                                { icon: "[ ]", position: { bottom: "20%", right: "15%" } }
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    className="absolute w-12 h-12 sm:w-14 sm:h-14 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-lg border border-gray-200 dark:border-gray-700 flex items-center justify-center font-mono text-sm sm:text-base font-bold text-gray-700 dark:text-gray-300 shadow-lg"
                                    style={item.position}
                                    animate={{
                                        y: [0, -10, 0],
                                        rotate: [0, 5, 0],
                                    }}
                                    transition={{
                                        duration: 3 + i,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                        delay: i * 0.5,
                                    }}
                                    whileHover={{
                                        scale: 1.1,
                                        backgroundColor: "rgb(59 130 246 / 0.1)",
                                    }}
                                >
                                    {item.icon}
                                </motion.div>
                            ))}

                            {/* Subtle Particles - Moved to main container */}
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 text-gray-600 dark:text-white"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5, duration: 0.5 }}
            >
                <motion.a
                    href="/#about"
                    className="flex flex-col items-center gap-1 sm:gap-2 group"
                    animate={{
                        y: [0, 10, 0],
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                    }}
                >
                    <BiMouse className="text-xl sm:text-2xl group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
                    <span className="text-xs sm:text-sm opacity-70">Scroll to explore</span>
                    <BiDownArrowAlt className="text-lg sm:text-xl group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
                </motion.a>
            </motion.div>
        </motion.section>
    );
});

Hero.displayName = "Hero";

export default Hero;