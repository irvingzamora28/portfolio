import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { RiRadioButtonFill } from "react-icons/ri";
import Header from "../../components/home/Header";
const Project1: React.FC = () => {
    const [theme, setTheme] = useState("light");

    const handleTheme = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    };
    return (
        <div className={`main ${theme === "dark" ? "dark" : ""}`}>
            <Head>
                <title>My Project</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header theme={theme} setTheme={handleTheme} isHomePage={false} />
            <div className="w-screen h-[30vh] lg:h-[40vh] relative">
                <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/70 z-10"></div>
                <Image src={"/assets/images/dalle-programming.png"} className="absolute z-1" fill={true} objectFit="cover" alt="Irving Zamora" />
                <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
                    <h2 className="py-2">Project Name 1</h2>
                    <h3>React JS / Tailwind / Firebase</h3>
                </div>
            </div>
            <div className="max-w--[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-14 px-8 md:px-20 dark:bg-gray-900 dark:text-gray-100">
                <div className="col-span-4">
                    <p>Project</p>
                    <h2>Overview</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi sapiente nostrum vel omnis magni aliquam inventore. Similique eius sed pariatur. Sequi eaque, nulla placeat
                        error animi perferendis accusantium tenetur? Repudiandae.
                    </p>
                    <button className="button px-8 py-2 mt-4 mr-8">Demo</button>
                    <button className="button px-8 py-2 mt-4">Code</button>
                </div>
                <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 dark:shadow-gray-800 rounded-xl p-4">
                    <div className="p-2">
                        <p>Technologies used</p>
                        <div className="grid grid-cols-2 md:grid-cols-1">
                            <p className="flex items-center text-gray-600 dark:text-gray-400 py-2">
                                <RiRadioButtonFill /> React
                            </p>
                            <p className="flex items-center text-gray-600 dark:text-gray-400 py-2">
                                <RiRadioButtonFill /> Tailwindcss
                            </p>
                            <p className="flex items-center text-gray-600 dark:text-gray-400 py-2">
                                <RiRadioButtonFill /> Javascript
                            </p>
                            <p className="flex items-center text-gray-600 dark:text-gray-400 py-2">
                                <RiRadioButtonFill /> Firebase
                            </p>
                        </div>
                    </div>
                </div>
                <Link href={"/#projects"}>
                    <p className="underline cursor-pointer">Back</p>
                </Link>
            </div>
        </div>
    );
};

export default Project1;
