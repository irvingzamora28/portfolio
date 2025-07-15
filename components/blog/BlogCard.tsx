import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import { FaCalendarAlt, FaUser, FaArrowRight } from "react-icons/fa";

const BlogCard: React.FC<BlogMeta> = (props) => {
    const daysAgo = (() => {
        const diffMs = new Date().getTime() - new Date(props.created_at).getTime();
        const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
        return `${diffDays} day${diffDays === 1 ? "" : "s"} ago`;
    })();
    
    return (
        <motion.article 
            className="h-full bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col"
            whileHover={{ y: -5 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
        >
            {/* Blog Image with Overlay */}
            <div className="relative overflow-hidden">
                {props.image ? (
                    <div className="relative h-48 overflow-hidden">
                        <Image 
                            src={`/assets/images/blog/${props.image}`} 
                            className="w-full h-full object-cover transition-transform duration-700 hover:scale-110" 
                            alt={props.title} 
                            width={600} 
                            height={300}
                            priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                        
                        {/* Type Badge */}
                        <div className="absolute top-4 right-4">
                            <span className="px-3 py-1 text-xs font-medium rounded-full bg-blue-100 dark:bg-blue-900/70 text-blue-800 dark:text-blue-200 backdrop-blur-sm">
                                {props.type}
                            </span>
                        </div>
                    </div>
                ) : (
                    <div className="h-24 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500" />
                )}
            </div>
            
            {/* Content */}
            <div className="p-6 flex-1 flex flex-col">
                {/* Title */}
                <Link href="/blog/[slug]" as={`/blog/${props.slug}`} className="group">
                    <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                        {props.title}
                    </h2>
                </Link>
                
                {/* Meta Info */}
                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-4 space-x-4">
                    <div className="flex items-center">
                        <FaCalendarAlt className="mr-1 text-blue-500 dark:text-blue-400" size={12} />
                        <span>{daysAgo}</span>
                    </div>
                    <div className="flex items-center">
                        <FaUser className="mr-1 text-blue-500 dark:text-blue-400" size={12} />
                        <span>{props.author}</span>
                    </div>
                </div>
                
                {/* Description */}
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-5 flex-1">
                    {props.description.length > 150 ? `${props.description.substring(0, 150)}...` : props.description}
                </p>
                
                {/* Read More Link */}
                <Link 
                    href="/blog/[slug]" 
                    as={`/blog/${props.slug}`} 
                    className="mt-auto inline-flex items-center text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors duration-300"
                >
                    Read More
                    <motion.div 
                        className="ml-1"
                        initial={{ x: 0 }}
                        whileHover={{ x: 3 }}
                        transition={{ duration: 0.2 }}
                    >
                        <FaArrowRight size={12} />
                    </motion.div>
                </Link>
            </div>
        </motion.article>
    );
};

export default BlogCard;
