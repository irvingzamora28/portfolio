import React from "react";
import Markdown from "markdown-to-jsx";
import { CopyBlock, dracula } from "react-code-blocks";
import PostTableOfContents from "../post/PostTableOfContents";
import ListItem from "./ListItem";

const BlogContent: React.FC<BlogContentProps> = ({ content, toc }) => {
    return (
        <div>
            <Markdown
                options={{
                    overrides: {
                        h1: {
                            props: {
                                className:
                                    "py-3 text-2xl md:text-3xl lg:text-4xl",
                            },
                        },
                        h2: {
                            props: {
                                className:
                                    "py-3 text-xl md:text-2xl lg:text-3xl",
                            },
                        },
                        ul: {
                            props: {
                                className: "pl-5 py-3 list-disc",
                            },
                        },
                        ol: {
                            props: {
                                className: "pl-5 py-3 list-decimal",
                            },
                        },
                        li: {
                            props: {
                                className: "pl-2 py-3",
                            },
                        },
                        table: {
                            props: {
                                className: "table-auto w-full text-center",
                            },
                        },
                        thead: {
                            props: {
                                className:
                                    "border-b font-medium dark:border-neutral-500",
                            },
                        },
                        tr: {
                            props: {
                                className: "border-b dark:border-neutral-500",
                            },
                        },
                        p: {
                            props: {
                                className: "py-3",
                            },
                        },
                        CopyBlock: {
                            component: CopyBlock,
                            props: {
                                theme: dracula,
                                language: "bash",
                            },
                        },
                        PostTableOfContents: {
                            component: PostTableOfContents,
                            props: {
                                toc: toc,
                            },
                        },
                        ListItem: {
                            component: ListItem
                        },
                        blockquote: {
                            props: {
                                className:
                                    "text-md italic font-normal text-gray-500 dark:text-white",
                            },
                        },
                    },
                }}>
                {content}
            </Markdown>
        </div>
    );
};

export default BlogContent;
