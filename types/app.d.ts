type BlogDirectory = {
    blogNames: string[];
};

type BlogMeta = {
    created_at: string;
    title: string;
    description: string;
    type: string;
    image?: string;
    slug: string;
    author: string;
};

type BlogImage = {
    image?: string;
    alt?: string;
    width?: number;
    height?: number;
};

type PostHeaderProps = {
    title: string;
    author: string;
    topics?: string[];
}

type PostSubtitleProps = {
    subtitle: string;
    id: string;
}

type BlogContentProps = {
    content: string;
    toc: [text: string, href: string,][]
}

type Blogs = {
    blogs: BlogMeta[];
    isBlogSection: boolean;
};