import React, { useEffect } from "react";
import { CopyBlock, dracula } from "react-code-blocks";

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

    console.log("elem");
    console.log(data);
    const children = data.map((elem: any, index: number) => {
        if (elem.element === "code") {
            return (
                <div key={index} className="py-2">
                    <CopyBlock
                        text={elem.text}
                        language={elem.language}
                        showLineNumbers={true}
                        startingLineNumber={1}
                        wrapLines
                        theme={dracula}
                    />
                </div>
            );
        } else {
            return React.createElement(
                elem.element,
                { key: index, className: "py-2 " + elem.class, id: elem.id, src: elem.src },
                elem.text
            );
        }
    });
    useEffect(() => {
        console.log("Content component has been rendered");
    }, [{props}]);
    return <>{children}</>;
};

export default Content;
