import React from "react";

interface PostHeaderProps {
    title: string;
    author: string;
    topics?: string[];
    created_at: string;
}

const PostHeader: React.FC<PostHeaderProps> = (props) => {
    const date = new Date(props.created_at);
    const formattedDate = date.toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    return (
        <div className="flex flex-col mt-6 mb-10 items-center justify-center text-center">
            <h1 className="blog_title">{props.title}</h1>
            <div className="text-sm leading-6">
                <dl>
                    <dt className="sr-only">Date</dt>
                    <dd className="absolute top-0 inset-x-0 text-slate-700 dark:text-slate-400">
                        <time dateTime={props.created_at}>
                            {formattedDate}
                        </time>
                    </dd>
                </dl>
            </div>
            <div className="mt-6">
                <ul className="flex flex-wrap text-sm leading-6 -mt-6 -mx-5">
                    <li className="flex items-center font-medium whitespace-nowrap px-5 mt-6">
                        {/* Image */}
                        <div className="text-sm leading-4">
                            <p className="text-md text-gray-500">
                                By {props.author}
                            </p>
                            {/* topics */}
                            <div className="flex flex-wrap gap-2 mt-4">
                                {props.topics?.map((topic) => (
                                    <span
                                        key={topic}
                                        className="text-sm text-gray-500 bg-gray-200 rounded-full px-2 py-1">
                                        {topic.slice(0, 1).toUpperCase() +
                                            topic.slice(1)}
                                    </span>
                                ))}
                            </div>
                            <div className="mt-1">
                                <a
                                    href="mailto:imzodev@gmail.com"
                                    className="blog__header-contact">
                                    imzodev
                                </a>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default PostHeader;
