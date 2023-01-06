import Image from "next/image";
import React from "react";

export const About = () => {
    return (
        <div className="flex w-full md:h-screen p-2 items-center py-16">
            <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
                <div className="col-span-2">
                    <p className="uppercase text-xl tracking-widest text-sky-600">About</p>
                    <h2 className="py-4">Who I am</h2>
                    <p className="py-2 text-gray-600">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro culpa, neque aperiam earum cum maxime facilis alias mollitia magnam nemo ex deserunt, qui dolorem facere et, debitis ipsa accusamus rem reiciendis at rerum eveniet eos cumque illo! Ad est iusto modi recusandae eius! Excepturi ullam distinctio, debitis quaerat reiciendis incidunt?</p>
                    <p className="py-2 text-gray-600 underline cursor-pointer">My latests projects</p>
                </div>
                <div className="flex items-center justify-centerw-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl
                p-4 md:hover:scale-110 ease-in duration-300">
                <Image
                    src={"/../public/assets/images/dalle-programming.png"}
                    className="rounded-xl w-full h-48"
                    alt="Irving Zamora"
                    width={200}
                    height={200}
                /></div>
            </div>
        </div>
    );
};
