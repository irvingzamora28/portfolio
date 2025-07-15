import React, { forwardRef, Ref, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaReact, FaHtml5, FaCss3Alt, FaJs, FaNodeJs, FaPhp, FaLaravel, FaGit, FaDocker, FaLinux, FaDatabase } from "react-icons/fa";
import { SiMongodb, SiMysql, SiTailwindcss, SiTypescript } from "react-icons/si";
import { BiCodeCurly } from "react-icons/bi";
import { TbDeviceDesktopAnalytics } from "react-icons/tb";
import { FiServer } from "react-icons/fi";

const Skills = forwardRef((props, ref: Ref<HTMLElement>) => {
    const [activeCategory, setActiveCategory] = useState<string>("frontend");
    const [isClient, setIsClient] = useState(false);
    
    // Initialize client-side elements
    useEffect(() => {
        setIsClient(true);
    }, []);
    
    const handleCategoryChange = (category: string) => {
        // Only change category if we're on the client side
        if (isClient) {
            setActiveCategory(category);
        }
    };

    // Define skill data
    const skillsData = {
        frontend: [
            { name: "HTML", icon: <FaHtml5 />, level: 90, color: "#E44D26" },
            { name: "CSS", icon: <FaCss3Alt />, level: 90, color: "#264DE4" },
            { name: "JavaScript", icon: <FaJs />, level: 90, color: "#F7DF1E" },
            { name: "React", icon: <FaReact />, level: 60, color: "#61DAFB" },
            { name: "TypeScript", icon: <SiTypescript />, level: 75, color: "#3178C6" },
            { name: "Tailwind CSS", icon: <SiTailwindcss />, level: 85, color: "#06B6D4" },
        ],
        backend: [
            { name: "PHP", icon: <FaPhp />, level: 90, color: "#777BB3" },
            { name: "Node.js", icon: <FaNodeJs />, level: 70, color: "#339933" },
            { name: "MySQL", icon: <SiMysql />, level: 80, color: "#4479A1" },
            { name: "Laravel", icon: <FaLaravel />, level: 90, color: "#FF2D20" },
        ],
        other: [
            { name: "Git", icon: <FaGit />, level: 80, color: "#F05032" },
            { name: "Docker", icon: <FaDocker />, level: 20, color: "#2496ED" },
            { name: "Linux", icon: <FaLinux />, level: 70, color: "#FCC624" },
            { name: "MongoDB", icon: <SiMongodb />, level: 70, color: "#47A248" },
        ]
    };
    
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
    
    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: { 
            y: 0, 
            opacity: 1,
            transition: { type: "spring", stiffness: 100 }
        }
    };
    
    return (
        <motion.section 
            id="skills" 
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
                        Technical Skills
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
                        Expertise across various technologies
                    </motion.p>
                </motion.div>
                
                {/* Category Tabs */}
                <motion.div 
                    className="flex justify-center mb-10 space-x-4 sm:space-x-8"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    viewport={{ once: true }}
                >
                    <CategoryButton 
                        active={activeCategory === "frontend"}
                        onClick={() => handleCategoryChange("frontend")}
                        icon={<BiCodeCurly className="mr-2 text-xl" />}
                        label="Frontend"
                    />
                    <CategoryButton 
                        active={activeCategory === "backend"}
                        onClick={() => handleCategoryChange("backend")}
                        icon={<FiServer className="mr-2 text-xl" />}
                        label="Backend"
                    />
                    <CategoryButton 
                        active={activeCategory === "other"}
                        onClick={() => handleCategoryChange("other")}
                        icon={<TbDeviceDesktopAnalytics className="mr-2 text-xl" />}
                        label="Other"
                    />
                </motion.div>
                
                {/* Skills Grid */}
                <motion.div 
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    key={activeCategory} /* Add key to force re-render when category changes */
                >
                    {isClient && skillsData[activeCategory as keyof typeof skillsData].map((skill, index) => (
                        <motion.div 
                            key={skill.name}
                            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                            variants={itemVariants}
                            whileHover={{ y: -5, transition: { duration: 0.2 } }}
                        >
                            <div className="p-6">
                                <div className="flex items-center mb-4">
                                    <div 
                                        className="text-3xl mr-3"
                                        style={{ color: skill.color }}
                                    >
                                        {skill.icon}
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-800 dark:text-white">{skill.name}</h3>
                                </div>
                                
                                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 mb-2">
                                    <motion.div 
                                        className="h-2.5 rounded-full" 
                                        style={{ 
                                            backgroundColor: skill.color,
                                            width: `${skill.level}%` 
                                        }}
                                        initial={{ width: 0 }}
                                        whileInView={{ width: `${skill.level}%` }}
                                        transition={{ duration: 1, delay: index * 0.1 }}
                                        viewport={{ once: true }}
                                    />
                                </div>
                                
                                <div className="flex justify-between text-sm">
                                    <span className="text-gray-500 dark:text-gray-400">Proficiency</span>
                                    <span className="font-medium text-gray-700 dark:text-gray-300">{skill.level}%</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
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
            {icon}
            {label}
        </motion.button>
    );
};

Skills.displayName = "Skills";

export default Skills;