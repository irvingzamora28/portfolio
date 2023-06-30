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
    topics?: string[];
    contents: TableOfContent[];
};

type BlogImage = {
    image?: string;
    alt?: string;
    width?: number;
    height?: number;
};

type TableOfContent = {
    text: string;
    href: string;
}

type PostHeaderProps = {
    title: string;
    author: string;
    topics?: string[];
}

type PostSubtitleProps = {
    subtitle: string;
    id: string;
}

type PostListItemProps = {
    class: string;
    text: string;
}

type PostParagraphProps = {
    class: string;
    text: string;
}

type PostContentProps = {
    content: string;
    toc: TableOfContent[]
}

type PostTableOfContentsProps = {
    toc: TableOfContent[]
}

type Blogs = {
    blogs: BlogMeta[];
    isBlogSection: boolean;
};

type FileData = {
    name: string;
    time: number;
};

type FileContentMeta = {
    content: string;
    data: BlogMeta;
};