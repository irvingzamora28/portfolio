import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BiInfoCircle } from "react-icons/bi";
import { BsArrowBarRight } from "react-icons/bs";
export const ProjectItem: React.FC<ProjectItemProps> = ({ title, description, image, url, demourl }) => {
    return (
        <div className="projects__content transform transition duration-500 md:hover:scale-105 flex flex-col justify-between h-full py-8">
            <div>
                <Link href={url}>
                    <Image src={image} alt={title} className="projects__img self-center w-full h-48 object-cover" />
                </Link>
                <h3 className="projects__title">{title}</h3>
                <p className="projects__description">{description}</p>
            </div>

            <div className="button-container flex flex-col md:flex-row justify-between space-y-6 md:space-y-0">
                <Link href={url} className="button button-flex projects__button justify-between">
                    Learn more <BiInfoCircle className="button__icon" />
                </Link>

                {demourl && (
                    <Link href={demourl} className="button button-flex projects__button justify-between">
                        Demo <BsArrowBarRight className="button__icon" />
                    </Link>
                )}
            </div>
        </div>
    );
};
