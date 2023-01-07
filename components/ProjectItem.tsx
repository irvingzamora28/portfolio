import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
    title: string;
    image: StaticImageData;
    url: string;
  };
  
export const ProjectItem: React.FC<Props> = (props) => {
    return (
        <div className="flex relative items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-sky-800 to-sky-400">
            <Image
                src={props.image}
                className="rounded-xl group-hover:opacity-10"
                alt="Irving Zamora"
                width={200}
                height={200}
            />
            <div className="hidden group-hover:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <h3 className="text-2xl text-white tracking-wider text-center">
                    {props.title}
                </h3>
                <p className="pb-4 pt-2 text-white text-center">React JS</p>
                <Link href={props.url}>
                    <p className="text-lg text-center py-3 rounded-lg bg-white text-gray font-bold cursor-pointer">
                        More Info
                    </p>
                </Link>
            </div>
        </div>
    );
};
