import Image from "next/image";
import Link from "next/link";
import React from "react";

const BlogImage: React.FC<BlogImage> = (props) => {
  
    return (
        <>
            {props.image && (
                <Image
                    src={`/assets/images/blog/${props.image}`}
                    className="object-cover object-center rounded-sm"
                    alt={`${props.alt}`}
                    width={props.width ? props.width : 200}
                    height={props.height ? props.height : 200}
                />
            )}
        </>
    );
};

export default BlogImage;
