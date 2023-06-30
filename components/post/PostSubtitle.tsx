import React from "react";

const PostSubtitle: React.FC<PostSubtitleProps> = (props) => {
    return (
        <>
            <h3 className="blog_subtitle" id={props.id}>{props.subtitle}</h3>
        </>
    );
}

export default PostSubtitle