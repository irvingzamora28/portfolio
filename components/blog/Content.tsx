import React, { useEffect } from "react";
import { CopyBlock, dracula } from "react-code-blocks";
import PostTableOfContents from "../post/PostTableOfContents";
import ListItem from "./ListItem";
import Paragraph from "./Paragraph";

type Props = {
    data: {
        element: string;
        text: string;
        language?: string;
        id?: string;
        class?: string;
        src?: string;
    }[];
};

const Content: React.FC<Props> = (props) => {
    const data = props.data;

    const children = data.map((elem: any, index: number) => {
        if (elem.element === "code") {
            return (
                <div key={index} className="py-2">
                    <CopyBlock text={elem.text} language={elem.language} startingLineNumber={1} wrapLines theme={dracula} />
                </div>
            );
        } else if (elem.element === "p") {
            return <Paragraph key={index} class={elem.class} text={elem.text} />;
        } else if (elem.element === "li") {
            return <ListItem key={index} class={elem.class} text={elem.text} />;
        } else if (typeof elem.contents !== "undefined") {
            return <PostTableOfContents key={index} toc={elem.contents} />;
        } else if (typeof elem.meta !== "undefined") {
            // Do not render meta (This is the first element in blog's data)
            return <></>;
        } else {
            return React.createElement(elem.element, { key: index, className: "" + elem.class, id: elem.id, src: elem.src }, elem.text);
        }
    });
    useEffect(() => {
        console.log("Content component has been rendered");
    }, []);
    return <>{children}</>;
};

export default Content;
