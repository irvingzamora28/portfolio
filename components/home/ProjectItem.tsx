import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";
import { BsArrowBarRight } from "react-icons/bs";

type Props = {
    title: string;
    image: StaticImageData;
    description: string;
    url: string;
};

export const ProjectItem: React.FC<Props> = (props) => {
    return (
        <div className="projects__content grid">
            <Image src={props.image} className="projects__img" alt="Irving Zamora" width={200} height={200} />
            <div className="projects__data">
                <h3 className="projects__title">{props.title}</h3>
                <p className="projects__description">{props.description}</p>
                <Link href={props.url} className="button button-flex button--small projects__button">
                    Demo <BsArrowBarRight className="button__icon" />
                </Link>
            </div>
        </div>
    );
};
