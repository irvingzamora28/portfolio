import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsFillPersonLinesFill} from "react-icons/bs"

export const Navbar = () => {

	const [nav, setNav] = useState(false)

	const handleNav = () => {
		setNav(!nav)
	}

    return (
        <div className="fixed w-full h-20 shadow-xl z-50">
            <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
                <Image
                    src={"/../public/assets/images/logo-removebg.png"}
                    alt="Irving Zamora"
                    width={125}
                    height={50}
                />
                <div>
                    <ul className="hidden md:flex uppercase text-sm">
                        <Link href={"/"}>
                            <li className="ml-10 hover:border-b">Home</li>
                        </Link>
                        <Link href={"/"}>
                            <li className="ml-10 hover:border-b">About</li>
                        </Link>
                        <Link href={"/"}>
                            <li className="ml-10 hover:border-b">Skill</li>
                        </Link>
                        <Link href={"/"}>
                            <li className="ml-10 hover:border-b">Projects</li>
                        </Link>
                        <Link href={"/"}>
                            <li className="ml-10 hover:border-b">Contact</li>
                        </Link>
                    </ul>
                </div>
                <div onClick={handleNav} className="md:hidden">
                    <AiOutlineMenu size={25} />
                </div>
            </div>

            <div className={ nav ? 'flex fixed left-0 top-0 w-full h-screen bg-black/70 duration-500' : ''}>
                <div className={"fixed top-0 w-3/4 sm:w-3/5 md:w-1/2 h-screen bg-slate-100 p-10 ease-in duration-500 " + (nav ? 'left-0' : '-left-full')}>
                    <div>
                        <div className="flex w-full items-center justify-between">
                            <Image
                                src={
                                    "/../public/assets/images/logo-removebg.png"
                                }
                                alt={"Irving Zamora"}
                                width={85}
                                height={35}
                            />
                            <div onClick={handleNav} className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer">
                                <AiOutlineClose />
                            </div>
                        </div>
                        <div className="flex border-b border-gray-300 my-4 shadow-bottom justify-around">
                            <p className="py-4 text-sm md:text-md">
                                Developers, developers, developers{" "}
                            </p>
                        </div>
                    </div>
                    <div className="flex py-4 flex-col">
                        <ul className="uppercase text-sm">
                            <Link href={"/"}>
                                <li className="py-4 hover:border-b">Home</li>
                            </Link>
                            <Link href={"/"}>
                                <li className="py-4 hover:border-b">About</li>
                            </Link>
                            <Link href={"/"}>
                                <li className="py-4 hover:border-b">Skill</li>
                            </Link>
                            <Link href={"/"}>
                                <li className="py-4 hover:border-b">
                                    Projects
                                </li>
                            </Link>
                            <Link href={"/"}>
                                <li className="py-4 hover:border-b">Contact</li>
                            </Link>
                        </ul>
                        <div className="pt-40">
                            <p className="uppercase tracking-widest text-sky-800">
                                Let's Connect
                            </p>
                            <div className="flex items-center justify-between my-4 w-full sm:w-4/5">
                                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in duration-300">
                                    <FaLinkedinIn />
                                </div>
                                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in duration-300">
                                    <FaGithub />
                                </div>
                                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in duration-300">
                                    <AiOutlineMail />
                                </div>
                                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in duration-300">
                                    <BsFillPersonLinesFill />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};