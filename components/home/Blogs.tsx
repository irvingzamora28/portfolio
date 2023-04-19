import React from "react";
import BlogCard from "../blog/BlogCard";
import Image from "next/image";

const Blogs: React.FC<Blogs> = (props) => {
    return (
        <section id="blogs" className="blogs section px-6 min-h-screen">
            {props.isBlogSection ? (
                <>
                    <h2 className="section__title">My Blog</h2>
                    <span className="section__subtitle">
                        Exploring Ideas, Insights, and Experiences
                    </span>
                </>
            ) : (
                <div className="text-center mb-8">
                <h1 className="text-2xl font-medium">Welcome to my blog</h1>
                <p className="text-gray-600 text-lg">Here you will find my latest thoughts and articles</p>
                </div>
            )}
            <div className="blogs__container container">
                {props.blogs?.map((blogPost, index) => (
                    <BlogCard key={index} {...blogPost} />
                ))}
            </div>
        </section>
    );
};

export default Blogs;
