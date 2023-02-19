type BlogDirectory = {
    blogNames: string[];
};

type BlogMeta = {
    created_at: string;
    title: string;
    description: string;
    type: string;
    image: string;
    slug: string;
    author: string;
};

type Blogs = {
    blogs: BlogMeta[];
};