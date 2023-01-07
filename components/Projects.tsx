import React from "react";
import { ProjectItem } from "./ProjectItem";
import projectImage from "../public/assets/images/dalle-programming.png"
export const Projects = () => {
    return (
        <div id="projects" className="w-full">
            <div className="max-w-[1240px] mx-auto px-2 py-16">
                <p className="text-xl tracking-widest uppercase text-sky-600">
                    Projects
                </p>
                <h2 className="py-4">What I've Built</h2>
                <div className="grid md:grid-cols-2 gap-8">
                    <ProjectItem title="Project Name" image={projectImage} url="url" />    
                    <ProjectItem title="Project Name" image={projectImage} url="url" />    
                    <ProjectItem title="Project Name" image={projectImage} url="url" />    
                    <ProjectItem title="Project Name" image={projectImage} url="url" />    
                </div>
            </div>
        </div>
    );
};
