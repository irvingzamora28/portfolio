import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import { BiInfoCircle } from "react-icons/bi";
import { BsArrowBarRight } from "react-icons/bs";
import { FaExternalLinkAlt } from "react-icons/fa";
import { ProjectItemProps, ProjectCategory } from "../../types";
export const ProjectItem: React.FC<ProjectItemProps> = ({ title, description, image, url, demourl, category }) => {
    return (
        <motion.div 
            className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col"
            whileHover={{ y: -5 }}
            layout
        >
            {/* Project Image with Overlay */}
            <div className="relative overflow-hidden group">
                <Image 
                    src={image} 
                    alt={title} 
                    className="w-full h-52 object-cover transition-transform duration-700 group-hover:scale-110" 
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <div className="w-full">
                        <motion.div 
                            className="flex gap-2 justify-end"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: 0.1 }}
                        >
                            {demourl && (
                                <Link 
                                    href={demourl} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-2 rounded-full transition-colors duration-300"
                                >
                                    <FaExternalLinkAlt size={14} />
                                </Link>
                            )}
                        </motion.div>
                    </div>
                </div>
            </div>
            
            {/* Content */}
            <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">{title}</h3>
                
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 flex-1">
                    {description.length > 150 ? `${description.substring(0, 150)}...` : description}
                </p>
                
                {/* Tags */}
                {category && (
                    <div className="flex flex-wrap gap-2 mb-4">
                        {category.map((cat: ProjectCategory) => (
                            <span 
                                key={cat}
                                className="text-xs px-2 py-1 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200"
                            >
                                {cat}
                            </span>
                        ))}
                    </div>
                )}
                
                {/* Button */}
                <Link 
                    href={url} 
                    className="mt-auto inline-flex items-center justify-center px-4 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium transition-all duration-300 transform hover:scale-[1.03] text-sm"
                >
                    View Project <BiInfoCircle className="ml-2" />
                </Link>
            </div>
        </motion.div>
    );
};
