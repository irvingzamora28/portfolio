import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
    id: string;
    title: string;
    slug: string;
    image?: string;
    description: string;
    author: string;
};

const BlogCard: React.FC<Props> = (props) => {
    return (
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
            <Link href="/posts/[slug]" as={`/posts/${props.slug}`}> {props.title} </Link>
            </h2>
            <div className="flex flex-col md:flex-row w-full gap-4">
                {props.image && (
                    <Image src={`/assets/images/blog/${props.image}`} className="w-full md:w-1/2 h-40 object-cover object-center rounded-sm" alt="Irving Zamora" width={200} height={200} />
                )}
                <p className={`w-full ${props.image ? 'md:w-1/2' : ''} mb-5 font-light text-gray-500 dark:text-gray-400`}>
                    A step-by-step guide to installing Node Package Manager (NPM) using Node Version Manager (NVM). NVM is a tool that allows users to manage multiple versions of Node.js on their
                    system, making it easy to switch between different versions of Node.js as well as NPM.
                </p>
            </div>
            <div className="flex justify-between items-center">
                <div className="flex items-center space-x-4">
                    <Image src={"/assets/images/about_profile.jpg"} className="blogs__img" alt="Irving Zamora" width={50} height={50} />
                    <span className="blogs__author-text">Irving Zamora</span>
                </div>
                <Link href="/posts/[slug]" as={`/posts/${props.slug}`} className="inline-flex items-center font-medium text-primary-600 dark:text-primary-500 hover:underline">
                    Read More
                    <svg className="ml-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path
                            fillRule="evenodd"
                            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                            clipRule="evenodd"></path>
                    </svg>
                </Link>
            </div>
        </article>
    );
};

export default BlogCard;
