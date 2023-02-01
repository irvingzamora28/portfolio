import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
    id: string;
    title: string;
    description: string;
};

const PostCard: React.FC<Props> = (props) => {
    return (
        <div className="rounded-md w-72 border transition-all hover:text-blue-700 hover:shadow-lg hover-scale:105 cursor-pointer">
            <Image
                src={"https://picsum.photos/200/300"}
                className="w-full h-40"
                alt="Irving Zamora"
                width={200}
                height={200}
            />
            <div className="mt-2 p-2">
                <h2 className="font-semibold text-xl">{props.title}</h2>
                <Link href="/posts/[id]" as={`/posts/${props.id}`}>
                    Read More
                </Link>
            </div>
        </div>
    );
};

export default PostCard;
