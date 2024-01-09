import React from "react";
import Markdown from "markdown-to-jsx";
import { CopyBlock, dracula } from "react-code-blocks";
import PostTableOfContents from "./PostTableOfContents";
import PostListItem from "./PostListItem";

const CopyBlockWrapper = ({ children, ...props }: { children: React.ReactNode }) => <CopyBlock text={children} theme={dracula} {...props} />;

const PostContent: React.FC<PostContentProps> = ({ content, toc }) => {
    return (
        <div>
            <Markdown
                options={{
                    overrides: {
                        h1: {
                            props: {
                                className: "py-3 text-2xl md:text-3xl lg:text-4xl",
                            },
                        },
                        h2: {
                            props: {
                                className: "py-3 text-xl md:text-2xl lg:text-3xl",
                            },
                        },
                        h3: {
                            props: {
                                className: "py-3 text-lg md:text-xl lg:text-2xl",
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
                        code: {
                            props: {
                                className: "bg-rose-400 rounded-sm p-0.5 text-white",
                            },
                        },
                        table: {
                            props: {
                                className: "table-auto w-full text-center",
                            },
                        },
                        thead: {
                            props: {
                                className: "border-b font-medium dark:border-neutral-500",
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
                        CopyBlockWrapper: {
                            component: CopyBlockWrapper,
                        },
                        PostTableOfContents: {
                            component: PostTableOfContents,
                            props: {
                                toc: toc,
                            },
                        },
                        PostListItem: {
                            component: PostListItem,
                        },
                        blockquote: {
                            props: {
                                className: "text-md italic font-normal text-gray-500 dark:text-white",
                            },
                        },
                    },
                }}>
                {content}
            </Markdown>
        </div>
    );
};

export default PostContent;
