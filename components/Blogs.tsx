import React from "react";
import BlogCard from "./blog/BlogCard";

const Blogs: React.FC<BlogDirectory> = (props) => {
    const blogPosts = props.blogNames?.map((blogName, index) => ({
        id: String(index + 1),
        title: blogName,
        url: blogName.replace(/\.md$/, ""),
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et leo neque. Maecenas ultricies diam vel justo bibendum, sit amet laoreet diam bibendum.",
        image: "yarn-vs-npm.png",
    }));

    return (
        <section id="blogs" className="blogs section px-6 min-h-screen">
            <h2 className="section__title">My Blog</h2>
            <span className="section__subtitle">Exploring Ideas, Insights, and Experiences</span>
            <div className="blogs__container container">
                {blogPosts?.map((blogPost) => (
                    <BlogCard key={blogPost.id} {...blogPost} />
                ))}
            </div>
        </section>
    );
};

export default Blogs;
