import React from "react";
import BlogCard from "../blog/BlogCard";

const Blogs: React.FC<Blogs> = (props) => {

    return (
        <section id="blogs" className="blogs section px-6 min-h-screen">
            <h2 className="section__title">My Blog</h2>
            <span className="section__subtitle">Exploring Ideas, Insights, and Experiences</span>
            <div className="blogs__container container">
                {props.blogs?.map((blogPost, index) => (
                    <BlogCard key={index} {...blogPost} />
                ))}
            </div>
        </section>
    );
};

export default Blogs;
