import React from "react";

interface Content {
    text: string;
    href: string;
}

interface Props {
    contents: Content[];
}

const Contents: React.FC<Props> = ({ contents }) => {
    return (
        <section className="blog__content">
            <h2 className="blog__content-title">Contents</h2>
            <ul className="blog__content-link-list">
                {contents.map(({ text, href }) => (
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

export default Contents;
