import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";

export const Contact = () => {
    return (
        <div id="contact" className="w-full lg:h-screen">
            <div className="max-w-[1240px] mx-auto px-2 py-16 w-full">
                <p className="text-xl tracking-widest uppercase text-sky-600">
                    Contact
                </p>
                <h2 className="py-4">Get In Touch</h2>
                <div className="grid lg:grid-cols-5 gap-8">
                    <div className="w-full h-full col-span-3 lg:col-span-2 shadow-xl shadow-gray-400 rounded-xl p-4">
                        <div className="h-full lg:p-4">
                            <div>
                                <Image
                                    src={"/../public/assets/images/contact.png"}
                                    className="rounded-xl hover:scale-105 ease-in duration-300 h-56 w-56 lg:w-full"
                                    alt="Irving Zamora"
                                    width={100}
                                    height={200}
                                />
                            </div>
                            <div>
                                <h2 className="py-2">Irving Zamora</h2>
                                <p className="Web Developer"></p>
                                <p className="py-4">
                                    Hello! I am a web developer with a passion
                                    for creating intuitive and engaging
                                    websites. I am constantly learning and
                                    improving my skills to deliver the best
                                    possible experience for users.
                                </p>
                            </div>
                            <div>
                                <p className="uppercase pt-8">
                                    Connect with Me
                                </p>
                                <div className="flex items-center justify-between py-4">
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

                    <div className="w-full col-span-3 h-auto shadow-xl shadow-gray-400 rounded-xl lg:pt-4">
                        <div className="p-4">
                            <form action="">
                                <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                                    <div className="flex flex-col">
                                        <label
                                            htmlFor="name"
                                            className="uppercase text-sm py-2">
                                            Name
                                        </label>
                                        <input
                                            type="text"
                                            name="name"
                                            className="flex p-3 border-2 rounded-lg border-gray-300"
                                        />
                                    </div>
                                    <div className="flex flex-col">
                                        <label
                                            htmlFor="phone"
                                            className="uppercase text-sm py-2">
                                            Phone
                                        </label>
                                        <input
                                            type="text"
                                            name="phone"
                                            className="flex p-3 border-2 rounded-lg border-gray-300"
                                        />
                                    </div>
                                </div>
                                <div className="flex flex-col py-2">
                                    <label
                                        htmlFor="email"
                                        className="uppercase text-sm py-2">
                                        Email
                                    </label>
                                    <input
                                        type="text"
                                        name="email"
                                        className="flex p-3 border-2 rounded-lg border-gray-300"
                                    />
                                </div>
                                <div className="flex flex-col py-2">
                                    <label
                                        htmlFor="subject"
                                        className="uppercase text-sm py-2">
                                        Subject
                                    </label>
                                    <input
                                        type="text"
                                        name="subject"
                                        className="flex p-3 border-2 rounded-lg border-gray-300"
                                    />
                                </div>
                                <div className="flex flex-col py-2">
                                    <label
                                        htmlFor="subject"
                                        className="uppercase text-sm py-2">
                                        Subject
                                    </label>
                                    <textarea
                                        name="message"
                                        id="message"
                                        className="border-2 rounded-lg border-gray-300 p-3"
                                        cols={30}
                                        rows={10}></textarea>
                                </div>
                                <button className="w-full p-4 text-gray-100 mt-4">
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </div>
                </div>

                <div className="flex justify-center py-12">
                    <Link href={"/"}>
                        <div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-105 ease-in duration-300">
                            <HiOutlineChevronDoubleUp className="text-sky-600" size={30} />
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
};
