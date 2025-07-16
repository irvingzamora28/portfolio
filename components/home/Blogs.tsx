import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import BlogCard from "../blog/BlogCard";
import Image from "next/image";
import { FaSearch } from "react-icons/fa";

type BlogsProps = Blogs & { limit?: number };

const Blogs: React.FC<BlogsProps> = (props) => {
    const [searchTerm, setSearchTerm] = useState<string>("");
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    const allBlogs = props.blogs;
const filteredBlogs =
    searchTerm.trim() === ""
        ? (typeof props.limit === "number" ? allBlogs.slice(0, props.limit) : allBlogs)
        : allBlogs.filter(
              (blog) =>
                  blog.title
                      .toLowerCase()
                      .includes(searchTerm.toLowerCase()) ||
                  blog.description
                      .toLowerCase()
                      .includes(searchTerm.toLowerCase())
          );

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { type: "spring", stiffness: 100 },
        },
    };

    return (
        <motion.section
            id="blogs"
            className="relative min-h-screen py-16 sm:py-24"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {props.isBlogSection ? (
                    <motion.div
                        className="text-center mb-12"
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}>
                        <motion.h2
                            className="text-3xl sm:text-4xl font-bold mb-2 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 dark:from-blue-400 dark:via-indigo-400 dark:to-purple-400 inline-block text-transparent bg-clip-text"
                            animate={{
                                filter: [
                                    "drop-shadow(0 0 0px rgba(59, 130, 246, 0.5))",
                                    "drop-shadow(0 0 5px rgba(59, 130, 246, 0.5))",
                                    "drop-shadow(0 0 0px rgba(59, 130, 246, 0.5))",
                                ],
                            }}
                            transition={{ duration: 3, repeat: Infinity }}>
                            My Blog
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
                            viewport={{ once: true }}>
                            Exploring Ideas, Insights, and Experiences
                        </motion.p>
                    </motion.div>
                ) : (
                    <motion.div
                        className="text-center mb-12"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}>
                        <h1 className="text-3xl sm:text-4xl font-bold mb-2 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 dark:from-blue-400 dark:via-indigo-400 dark:to-purple-400 inline-block text-transparent bg-clip-text">
                            Welcome to my blog
                        </h1>
                        <p className="text-gray-600 dark:text-gray-300 text-lg mt-2">
                            Here you will find my latest thoughts and articles
                        </p>
                    </motion.div>
                )}

                {/* Search Bar */}
                <motion.div
                    className="max-w-md mx-auto mb-10"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    viewport={{ once: true }}>
                    <div className="relative flex items-center">
                        <FaSearch className="absolute left-3 text-gray-400" />
                        <input
                            type="text"
                            placeholder="Search articles..."
                            className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                </motion.div>

                {/* Blog Posts */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}>
                    {(() => {
                        if (props.blogs.length === 0) {
                            return (
                                <motion.div
                                    className="col-span-full text-center py-10"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.5 }}>
                                    <p className="text-gray-500 dark:text-gray-400 text-lg">
                                        No blog posts available.
                                    </p>
                                </motion.div>
                            );
                        }
                        if (filteredBlogs.length > 0) {
                            return filteredBlogs.map((blogPost, index) => {
                                const key = blogPost.slug || index;
                                return (
                                    <motion.div
                                        key={key}
                                        variants={itemVariants}
                                        initial="hidden"
                                        animate="visible">
                                        <BlogCard {...blogPost} />
                                    </motion.div>
                                );
                            });
                        }
                        if (filteredBlogs.length === 0) {
                            return (
                                <motion.div
                                    className="col-span-full text-center py-10"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.5 }}>
                                    <p className="text-gray-500 dark:text-gray-400 text-lg">
                                        No blog posts found matching your
                                        search.
                                    </p>
                                </motion.div>
                            );
                        }
                        return null;
                    })()}
                </motion.div>
            </div>
        </motion.section>
    );
};

export default Blogs;
