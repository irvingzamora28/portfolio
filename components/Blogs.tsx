import Image from "next/image";
import React from "react";

const Blogs = () => {
    return (
        <section id="blogs" className="blogs section px-6 min-h-screen">
            <h2 className="section__title">My Blog</h2>
            <span className="section__subtitle">Exploring Ideas, Insights, and Experiences</span>
            <div className="blogs__container container">
                <article className="p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                    <div className="flex justify-between items-center mb-5 text-gray-500">
                        <span className="bg-primary-100 text-primary-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-primary-200 dark:text-primary-800">
                            <svg className="mr-1 w-3 h-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path>
                            </svg>
                            Tutorial
                        </span>
                        <span className="text-sm">2 days ago</span>
                    </div>
                    <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        <a href="#">How to quickly deploy a static website</a>
                    </h2>
                    <div className="flex flex-col md:flex-row w-full gap-4">
                        <Image src={"/assets/images/blog/yarn-vs-npm.png"} className="w-full md:w-1/2 h-40 object-cover object-center rounded-sm" alt="Irving Zamora" width={200} height={200} />
                        <p className="w-full md:w-1/2 mb-5 font-light text-gray-500 dark:text-gray-400">
                            Static websites are now used to bootstrap lots of websites and are becoming the basis for a variety of tools that even influence both web designers and developers influence
                            both web designers and developers.
                        </p>
                    </div>
                    <div className="flex justify-between items-center">
                        <div className="flex items-center space-x-4">
                            <Image src={"/assets/images/about_profile.jpg"} className="blogs__img" alt="Irving Zamora" width={50} height={50} />
                            <span className="blogs__author-text">Irving Zamora</span>
                        </div>
                        <a href="#" className="inline-flex items-center font-medium text-primary-600 dark:text-primary-500 hover:underline">
                            Read more
                            <svg className="ml-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    fillRule="evenodd"
                                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                    clip-rule="evenodd"></path>
                            </svg>
                        </a>
                    </div>
                </article>
                <article className="p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                    <div className="flex justify-between items-center mb-5 text-gray-500">
                        <span className="bg-primary-100 text-primary-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-primary-200 dark:text-primary-800">
                            <svg className="mr-1 w-3 h-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z" clip-rule="evenodd"></path>
                                <path d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z"></path>
                            </svg>
                            Article
                        </span>
                        <span className="text-sm">2 days ago</span>
                    </div>
                    <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        <a href="#">My first project with React</a>
                    </h2>
                    <p className="mb-5 font-light text-gray-500 dark:text-gray-400">
                        Static websites are now used to bootstrap lots of websites and are becoming the basis for a variety of tools that even influence both web designers and developers influence
                        both web designers and developers.
                    </p>
                    <div className="flex justify-between items-center">
                        <div className="flex items-center space-x-4">
                            <Image src={"/assets/images/about_profile.jpg"} className="blogs__img" alt="Irving Zamora" width={50} height={50} />
                            <span className="blogs__author-text">Irving Zamora</span>
                        </div>
                        <a href="#" className="inline-flex items-center font-medium text-primary-600 dark:text-primary-500 hover:underline">
                            Read more
                            <svg className="ml-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    fillRule="evenodd"
                                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                    clip-rule="evenodd"></path>
                            </svg>
                        </a>
                    </div>
                </article>
            </div>
        </section>
    );
};

export default Blogs;
