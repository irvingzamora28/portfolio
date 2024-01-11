import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { RiRadioButtonFill } from "react-icons/ri";
import Header from "../../components/home/Header";
import project1Image from "public/assets/images/project1.png";
import { FaCss3, FaDatabase, FaLaravel, FaReact, FaVial } from "react-icons/fa";
const Project1: React.FC = () => {
    const [theme, setTheme] = useState("light");

    const handleTheme = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    };
    return (
        <div className={`main ${theme === "dark" ? "dark" : ""}`}>
            <Head>
                <title>Lenguan - Language Learning Platform</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header theme={theme} setTheme={handleTheme} isHomePage={false} />
            <div className="w-screen h-[30vh] lg:h-[40vh] relative">
                <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/70 z-10"></div>
                <Image src={project1Image} className="absolute z-1" fill={true} objectFit="cover" alt="Lenguan - Language Learning Platform" />
                <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
                    <h2 className="py-2">Lenguan - Learn Languages with Fun</h2>
                    <h3>Laravel / ReactJS / TypeScript / Socket.io / TailwindCSS / Yarn / MongoDB / Jest</h3>
                </div>
            </div>
            <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-12 gap-8 py-14 px-8 md:px-20 dark:bg-gray-900 dark:text-gray-100">
                <div className="col-span-4 md:col-span-8">
                    <p className="text-3xl md:text-4xl">Lenguan Platform</p>
                    <p className="text-xl md:text-2xl">Overview</p>
                    <p>
                        Lenguan is a unique and engaging way for people of all ages to learn new languages. Utilizing gamification and spaced repetition techniques, our platform makes learning both
                        fun and effective. Interact with others through social learning features, participate in language-based games and challenges, and track your progress with personalized
                        dashboards.
                    </p>
                    <button className="button px-8 py-2 mt-4 mr-8">Demo</button>
                    <Link href="https://github.com/irvingzamora28/lenguan" target="_blank">
                        <button className="button px-8 py-2 mt-4">Code</button>
                    </Link>
                </div>
                <div className="col-span-4 md:col-span-4 shadow-xl shadow-gray-400 dark:shadow-gray-800 rounded-xl p-4">
                    <div className="p-2">
                        <p>Technologies Used</p>
                        <div className="grid grid-cols-2 md:grid-cols-1">
                            <p className="flex items-center text-gray-600 dark:text-gray-400 py-2">
                                <FaLaravel className="mr-2" /> Laravel
                            </p>
                            <p className="flex items-center text-gray-600 dark:text-gray-400 py-2">
                                <FaReact className="mr-2" /> ReactJS
                            </p>
                            <p className="flex items-center text-gray-600 dark:text-gray-400 py-2">
                                <RiRadioButtonFill className="mr-2" /> TypeScript
                            </p>
                            <p className="flex items-center text-gray-600 dark:text-gray-400 py-2">
                                <RiRadioButtonFill className="mr-2" /> Socket.io
                            </p>
                            <p className="flex items-center text-gray-600 dark:text-gray-400 py-2">
                                <FaCss3 className="mr-2" /> TailwindCSS
                            </p>
                            <p className="flex items-center text-gray-600 dark:text-gray-400 py-2">
                                <FaDatabase className="mr-2" /> MongoDB
                            </p>
                            <p className="flex items-center text-gray-600 dark:text-gray-400 py-2">
                                <FaVial className="mr-2" /> Jest
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-12 gap-8 mb-20 md:mb-0 px-8 md:px-20 dark:bg-gray-900 dark:text-gray-100">
                <div className="col-span-12">
                    <Link href={"/#projects"}>
                        <p className="underline cursor-pointer">Back to Projects</p>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Project1;
