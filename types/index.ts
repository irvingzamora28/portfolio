import { StaticImageData } from 'next/image';

export type ProjectCategory = "web" | "mobile" | "ai" | "language" | "all";

export interface ProjectItemProps {
    title: string;
    description: string;
    image: StaticImageData;
    url: string;
    demourl?: string;
    category?: ProjectCategory[];
}
