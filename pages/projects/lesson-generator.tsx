import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { RiRadioButtonFill } from "react-icons/ri";
import Header from "../../components/home/Header";
import project1Image from "public/assets/images/lesson-generator-theme.png";
import { FaPython } from "react-icons/fa";
import { BsQuestionCircleFill } from "react-icons/bs";
const ProjectLessonGenerator: React.FC = () => {
    return (
        <div className={`main`}>
            <Head>
                <title>Lesson Generator Project</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header isHomePage={false} />
            <div className="w-screen h-[30vh] lg:h-[40vh] relative">
                <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/70 z-10"></div>
                <Image src={project1Image} className="absolute z-1" fill={true} objectFit="cover" alt="Lesson Generator" />
                <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
                    <h2 className="py-2">Lesson Generator</h2>
                    <h3>Python / OpenAI API</h3>
                </div>
            </div>
            <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-12 gap-8 py-14 px-8 md:px-20 dark:bg-gray-900 dark:text-gray-100">
                <div className="col-span-4 md:col-span-8">
                    <p className="text-3xl md:text-4xl">Lesson Generator</p>
                    <p className="text-xl md:text-2xl my-2">Overview</p>
                    <p className="my-5">
                        The Lesson Generator is a Python command-line tool for creating interactive educational lessons. It uses the OpenAI API for dynamic content generation and supports various
                        educational topics and languages. Lessons are formatted in MDX with interactive React components.
                    </p>
                    <Link href="https://github.com/irvingzamora28/lesson-generator" target="_blank">
                        <button className="button px-8 py-2 mt-4">Code</button>
                    </Link>
                </div>
                <div className="col-span-4 md:col-span-4 shadow-xl shadow-gray-400 dark:shadow-gray-800 rounded-xl p-4">
                    <div className="p-2">
                        <p>Technologies Used</p>
                        <div className="grid grid-cols-2 md:grid-cols-1">
                            <p className="flex items-center text-gray-600 dark:text-gray-400 py-2">
                                <FaPython className="mr-2" /> Python
                            </p>
                            <p className="flex items-center text-gray-600 dark:text-gray-400 py-2">
                                <RiRadioButtonFill className="mr-2" /> MDX
                            </p>
                            <p className="flex items-center text-gray-600 dark:text-gray-400 py-2">
                                <RiRadioButtonFill className="mr-2" /> jsonschema
                            </p>
                            <p className="flex items-center text-gray-600 dark:text-gray-400 py-2">
                                <RiRadioButtonFill className="mr-2" /> requests
                            </p>
                            <p className="flex items-center text-gray-600 dark:text-gray-400 py-2">
                                <RiRadioButtonFill className="mr-2" /> python-i18n
                            </p>
                            <p className="flex items-center text-gray-600 dark:text-gray-400 py-2">
                                <BsQuestionCircleFill className="mr-2" /> Questionary
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

export default ProjectLessonGenerator;
