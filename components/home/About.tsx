import React, { forwardRef, Ref, useEffect, useState } from "react";
import Image from "next/image";
import { BiDownload, BiCodeAlt, BiTimeFive, BiBriefcase } from "react-icons/bi";
import { motion } from "framer-motion";

const About = forwardRef((props, ref: Ref<HTMLElement>) => {
    const [isClient, setIsClient] = useState(false);
    
    useEffect(() => {
        setIsClient(true);
    }, []);
    return (
        <motion.section
            id="about"
            className="relative min-h-screen overflow-hidden py-16 sm:py-24"
            ref={ref}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
        >
            {/* Background Elements */}
            {isClient && (
                <>
                    <div className="absolute inset-0 overflow-hidden">
                        
                        {/* Decorative Elements */}
                        {Array.from({ length: 3 }).map((_, i) => {
                            const size = 150 + Math.random() * 200;
                            return (
                                <motion.div
                                    key={i}
                                    className="absolute rounded-full bg-blue-200/20 dark:bg-blue-500/10"
                                    style={{
                                        width: size,
                                        height: size,
                                        left: `${Math.random() * 100}%`,
                                        top: `${Math.random() * 100}%`,
                                    }}
                                    animate={{
                                        x: [0, 30, 0],
                                        y: [0, -30, 0],
                                    }}
                                    transition={{
                                        duration: 10 + Math.random() * 10,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                    }}
                                />
                            );
                        })}
                    </div>
                </>
            )}
            
            {/* Section Header */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-12 sm:mb-16">
                <motion.div 
                    className="text-center"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    <motion.h2 
                        className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent mb-2"
                        animate={{
                            filter: [
                                "drop-shadow(0 0 8px rgb(59 130 246 / 0.3))",
                                "drop-shadow(0 0 16px rgb(139 92 246 / 0.4))",
                                "drop-shadow(0 0 8px rgb(59 130 246 / 0.3))",
                            ],
                        }}
                        transition={{ duration: 3, repeat: Infinity }}
                    >
                        About Me
                    </motion.h2>
                    <motion.div 
                        className="h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mb-4"
                        initial={{ width: 0 }}
                        whileInView={{ width: 80 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    />
                    <motion.p 
                        className="text-gray-600 dark:text-gray-400 text-lg"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        Get to know me better
                    </motion.p>
                </motion.div>
            </div>
            
            {/* Main Content */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    
                    {/* Image Column */}
                    <motion.div 
                        className="relative order-2 lg:order-1"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <div className="relative">
                            {/* Image Frame */}
                            <motion.div 
                                className="absolute inset-0 border-2 border-blue-500/30 dark:border-blue-400/30 rounded-2xl"
                                initial={{ opacity: 0, scale: 1.1 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, delay: 0.3 }}
                                viewport={{ once: true }}
                                style={{ transform: 'translate(15px, 15px)' }}
                            />
                            
                            {/* Image */}
                            <div className="relative overflow-hidden rounded-2xl shadow-xl bg-white dark:bg-gray-800">
                                <motion.div
                                    className="relative w-full h-full"
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <Image
                                        src={"/assets/images/about_profile.jpg"}
                                        className="object-cover"
                                        alt="Irving Zamora"
                                        width={500}
                                        height={600}
                                        style={{ width: '100%', height: 'auto' }}
                                    />
                                    
                                    {/* Overlay Gradient */}
                                    <motion.div 
                                        className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent opacity-50"
                                        initial={{ opacity: 0 }}
                                        whileInView={{ opacity: 0.5 }}
                                        transition={{ duration: 0.5 }}
                                        viewport={{ once: true }}
                                    />
                                </motion.div>
                            </div>
                        </div>
                    </motion.div>
                    
                    {/* Content Column */}
                    <motion.div 
                        className="order-1 lg:order-2"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <motion.h3 
                            className="text-2xl sm:text-3xl font-semibold text-gray-800 dark:text-white mb-6"
                            initial={{ opacity: 0, y: -20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                        >
                            Full-Stack Web Developer
                        </motion.h3>
                        
                        <motion.p 
                            className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            viewport={{ once: true }}
                        >
                            I am a software web developer proficient in a variety of
                            programming languages, including HTML, CSS, JavaScript,
                            and PHP. I have experience with frameworks such as
                            Laravel and Vue.js. I am also familiar with MySQL and
                            MongoDB. I am currently learning React, Next.js, and
                            Kubernetes to further expand my skillset.
                        </motion.p>
                        
                        {/* Stats */}
                        <motion.div 
                            className="grid grid-cols-3 gap-4 mb-8"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            viewport={{ once: true }}
                        >
                            {[
                                { icon: BiTimeFive, title: "03+", subtitle: "Years of experience" },
                                { icon: BiCodeAlt, title: "10+", subtitle: "Projects completed" },
                                { icon: BiBriefcase, title: "02+", subtitle: "Companies worked" }
                            ].map((item, i) => (
                                <motion.div 
                                    key={i}
                                    className="bg-white dark:bg-gray-800 p-4 sm:p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700"
                                    whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.1)" }}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.3, delay: 0.1 * i }}
                                    viewport={{ once: true }}
                                >
                                    <div className="flex flex-col items-center text-center">
                                        <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-full mb-3">
                                            <item.icon className="text-blue-600 dark:text-blue-400 text-xl" />
                                        </div>
                                        <h4 className="text-2xl sm:text-3xl font-bold text-gray-800 dark:text-white mb-1">{item.title}</h4>
                                        <p className="text-sm text-gray-500 dark:text-gray-400">{item.subtitle}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                        
                        {/* CTA Button */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <motion.a 
                                href="/assets/documents/irving_zamora_resume.pdf" 
                                className="group relative inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium py-3 px-6 rounded-full overflow-hidden"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                download
                            >
                                <motion.div
                                    className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600"
                                    initial={{ x: "100%" }}
                                    whileHover={{ x: "0%" }}
                                    transition={{ duration: 0.3 }}
                                />
                                <span className="relative z-10">Download CV</span>
                                <BiDownload className="relative z-10 text-lg group-hover:translate-y-1 transition-transform" />
                            </motion.a>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </motion.section>
    );
});
About.displayName = "About";

export default About;
