import Image from "next/image";
import Link from "next/link";
import React from "react";
import {RiRadioButtonFill} from "react-icons/ri"
const project1 = () => {
    return (
        <div className="w-full">
            <div className="w-screen h-[30vh] lg:h-[40vh] relative">
                <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/70 z-10"></div>
                <Image
                    src={"/assets/images/dalle-programming.png"}
                    className="absolute z-1"
                    fill={true}
                    objectFit="cover"
                    alt="Irving Zamora"
                />
                <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
                    <h2 className="py-2">Project Name 1</h2>
                    <h3>React JS / Tailwind / Firebase</h3>
                </div>
            </div>
            <div className="max-w--[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
              <div className="col-span-4">
                <p>Project</p>
                <h2>Overview</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi sapiente nostrum vel omnis magni aliquam inventore. Similique eius sed pariatur. Sequi eaque, nulla placeat error animi perferendis accusantium tenetur? Repudiandae.</p>
                <button className="px-8 py-2 mt-4 mr-8">Demo</button>
                <button className="px-8 py-2 mt-4">Code</button>
              </div>
              <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4">
                <div className="p-2">
                  <p>Technologies</p>
                  <div className="grid grid-cols-3 md:grid-cols-1">
                    <p className="flex items-center text-gray-600 py-2"><RiRadioButtonFill /> React</p>
                    <p className="flex items-center text-gray-600 py-2"><RiRadioButtonFill /> Tailwindcss</p>
                    <p className="flex items-center text-gray-600 py-2"><RiRadioButtonFill /> Javascript</p>
                    <p className="flex items-center text-gray-600 py-2"><RiRadioButtonFill /> Firebase</p>
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

export default project1;
