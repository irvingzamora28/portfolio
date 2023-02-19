import React from "react";

type Props = {
    title: string
}

const PostHeader: React.FC<Props> = (props) => {
    return (
        <>
            <h1 className="blog_title">
                {props.title}
            </h1>
            <div className="text-sm leading-6">
                <dl>
                    <dt className="sr-only">Date</dt>
                    <dd className="absolute top-0 inset-x-0 text-slate-700 dark:text-slate-400">
                        <time dateTime="2022-12-15T15:00:00.000Z">
                            Thursday, December 15, 2022
                        </time>
                    </dd>
                </dl>
            </div>
            <div className="mt-6">
                <ul className="flex flex-wrap text-sm leading-6 -mt-6 -mx-5">
                    <li className="flex items-center font-medium whitespace-nowrap px-5 mt-6">
                        {/* Image */}
                        <div className="text-sm leading-4">
                            <div className="text-slate-900 dark:text-slate-200">
                                Irving Zamora
                            </div>
                            <div className="mt-1">
                                <a
                                    href="mailto:contact@irvingzamora.com"
                                    className="blog__header-contact">
                                    irvingzamora06
                                </a>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </>
    );
};

export default PostHeader;
