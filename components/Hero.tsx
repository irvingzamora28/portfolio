import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const Hero = () => {
    return (
        <div id="hero" className="w-full h-screen text-center">
            <div className="flex max-w-[1240px] w-full h-full mx-auto p-2 justify-center items-center">
                <div>
                    <p className="uppercase text-sm tracking-widest text-gray-600">
                        LET'S START DEVELOPING TOGETHER
                    </p>
                    <h1>
                        Hi, I'm <span className="text-sky-600">Irving</span>
                    </h1>
                    <h1 className="py-4 text-gray-700">A Web Developer</h1>
                    <p className="py-4 text-gray-600 w-4/5 m-auto">
                        I am a software web developer proficient in a variety of
                        programming languages, including HTML, CSS, JavaScript,
                        and PHP, I have experience with frameworks such as
                        Laravel and Vue.js. I am also familiar with MySQL and
                        MongoDB. I am currently learning React, Next.js, and
                        Kubernetes to further expand my skillset.
                    </p>
                    <div className="flex items-center justify-between w-1/2 m-auto py-4">
                    <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-125 ease-in duration-300">
                            <FaLinkedinIn />
                        </div>
                        <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-125 ease-in duration-300">
                            <FaGithub />
                        </div>
                        <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-125 ease-in duration-300">
                            <AiOutlineMail />
                        </div>
                        <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-125 ease-in duration-300">
                            <BsFillPersonLinesFill />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
