import React from "react";

export interface TableOfContentsItem {
    text: string;
    href: string;
}

interface PostTableOfContentsProps {
    toc: TableOfContentsItem[];
}

const PostTableOfContents: React.FC<PostTableOfContentsProps> = ({ toc }) => {
    return (
        <section className="blog__content">
            <h2 className="blog__content-title">Contents</h2>
            <ul className="blog__content-link-list">
                {toc.map(({ text, href }) => (
                    <li key={href} className="blog__content-link-bullet">
                        <a href={href} className="blog__content-link">
                            {text}
                        </a>
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default PostTableOfContents;
