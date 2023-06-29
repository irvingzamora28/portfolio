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

type Blogs = {
    blogs: BlogMeta[];
    isBlogSection: boolean;
};