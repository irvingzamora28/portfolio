import Image from "next/image";
import React from "react";
import BlogCard from "./blog/BlogCard";

const Blogs = () => {
    return (
        <section id="blogs" className="blogs section px-6 min-h-screen">
            <h2 className="section__title">My Blog</h2>
            <span className="section__subtitle">Exploring Ideas, Insights, and Experiences</span>
            <div className="blogs__container container">
                <BlogCard key={1} id={"1"} title={"Install NPM using NVM"} image={"yarn-vs-npm.png"} url={"how-to-install-npm-using-nvm"} description={"A step-by-step guide to installing Node Package Manager (NPM) using Node Version Manager (NVM). NVM is a tool that allows users to manage multiple versions of Node.js on their system, making it easy to switch between different versions of Node.js as well as NPM."} />
                <BlogCard key={2} id={"2"} title={"My first project with React"} url={"blog1"} description={"Static websites are now used to bootstrap lots of websites and are becoming the basis for a variety of tools that even influence both web designers and developers influence both web designers and developers."} />
            </div>
        </section>
    );
};

export default Blogs;
