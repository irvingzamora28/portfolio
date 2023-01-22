import React from 'react';

interface Props {
    title: string;
    date: string;
    author: string;
    content: string;
}

const BlogPost: React.FC<Props> = (props: Props) => {
    const { title, date, author, content } = props;
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-medium">{title}</h1>
            <div className="text-sm text-gray-600">
                {date} by {author}
            </div>
            <div className="my-4">
                <p className="text-lg leading-relaxed">{content}</p>
            </div>
        </div>
    );
};

export default BlogPost;
