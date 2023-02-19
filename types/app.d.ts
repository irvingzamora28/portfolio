type BlogDirectory = {
    blogNames: string[];
};

type BlogMeta = {
    created_at: string;
    title: string;
    description: string;
    image: string;
    slug: string;
};

type Blogs = {
    blogs: BlogMeta[];
};