import Image from "next/image";
import React from "react";

export const Skills = () => {
    return (
        <div id="skills" className="w-full lg:h-screen p-2">
            <div className="flex flex-col justify-center max-w-[1240px] mx-auto h-full">
                <p className="text-xl tracking-widest text-sky-600">Skills</p>
                <h2 className="py-4">What I can do</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="p-2 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="m-auto">
                                <Image
                                    src={
                                        "/assets/images/html5_logo.png"
                                    }
                                    alt="Irving Zamora"
                                    width={128}
                                    height={128}
                                />
                            </div>
                            <div className="flex flex-col items-center justify-center text-gray-800 text-4xl md:text-xl">
                                HTML
                            </div>
                        </div>
                    </div>

                    <div className="p-2 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="m-auto">
                                <Image
                                    src={
                                        "/assets/images/sass_logo.png"
                                    }
                                    alt="Irving Zamora"
                                    width={128}
                                    height={128}
                                />
                            </div>
                            <div className="flex flex-col items-center justify-center text-gray-800 text-4xl md:text-xl">
                                SASS
                            </div>
                        </div>
                    </div>

                    <div className="p-2 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="m-auto">
                                <Image
                                    src={
                                        "/assets/images/typescript_logo.png"
                                    }
                                    alt="Irving Zamora"
                                    width={128}
                                    height={128}
                                />
                            </div>
                            <div className="flex flex-col items-center justify-center text-gray-800 text-4xl md:text-xl">
                                TYPESCRIPT
                            </div>
                        </div>
                    </div>

                    <div className="p-2 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="m-auto">
                                <Image
                                    src={
                                        "/assets/images/nodejs_logo.png"
                                    }
                                    alt="Irving Zamora"
                                    width={128}
                                    height={128}
                                />
                            </div>
                            <div className="flex flex-col items-center justify-center text-gray-800 text-4xl md:text-xl">
                                NODEJS
                            </div>
                        </div>
                    </div>
                    
                    <div className="p-2 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="m-auto">
                                <Image
                                    src={
                                        "/assets/images/vuejs_logo.png"
                                    }
                                    alt="Irving Zamora"
                                    width={128}
                                    height={128}
                                />
                            </div>
                            <div className="flex flex-col items-center justify-center text-gray-800 text-4xl md:text-xl">
                                VUEJS
                            </div>
                        </div>
                    </div>

                    <div className="p-2 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="m-auto">
                                <Image
                                    src={
                                        "/assets/images/laravel_logo.png"
                                    }
                                    alt="Irving Zamora"
                                    width={128}
                                    height={128}
                                />
                            </div>
                            <div className="flex flex-col items-center justify-center text-gray-800 text-4xl md:text-xl">
                                LARAVEL
                            </div>
                        </div>
                    </div>

                    <div className="p-2 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="m-auto">
                                <Image
                                    src={
                                        "/assets/images/mongodb_logo.png"
                                    }
                                    alt="Irving Zamora"
                                    width={128}
                                    height={128}
                                />
                            </div>
                            <div className="flex flex-col items-center justify-center text-gray-800 text-4xl md:text-xl">
                                MONGODB
                            </div>
                        </div>
                    </div>

                    <div className="p-2 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="m-auto">
                                <Image
                                    src={
                                        "/assets/images/git_logo.png"
                                    }
                                    alt="Irving Zamora"
                                    width={128}
                                    height={128}
                                />
                            </div>
                            <div className="flex flex-col items-center justify-center text-gray-800 text-4xl md:text-xl">
                                GIT
                            </div>
                        </div>
                    </div>

                    <div className="p-2 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="m-auto">
                                <Image
                                    src={
                                        "/assets/images/docker_logo.png"
                                    }
                                    alt="Irving Zamora"
                                    width={128}
                                    height={128}
                                />
                            </div>
                            <div className="flex flex-col items-center justify-center text-gray-800 text-4xl md:text-xl">
                                DOCKER
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};
