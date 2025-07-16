import Link from "next/link";
import React, { useEffect } from "react";
import { BiArrowBack } from "react-icons/bi";
import PostHeader from "../../components/post/PostHeader";
import PostContent from "../../components/post/PostContent";
import path from "path";
import fs from "fs";
import matter from "gray-matter";
import { readBlogContentAndMeta } from "../../utils/blogFileReader";

type BlogPostProps = {
    content: any;
    data: BlogMeta;
};

const BlogPost: React.FC<BlogPostProps> = (props) => {
    useEffect(() => {
        console.log("My function slug component has been rendered");
    }, [props.content]);

    
    

    return (
        <div className="overflow-hidden">
            <div className="max-w-8xl mx-auto">
                <div className="flex px-4 pt-8 pb-10 lg:px-8">
                    <Link
                        href="/blog"
                        className="group flex font-semibold text-sm leading-6 text-slate-700 hover:text-slate-900 dark:text-slate-200 dark:hover:text-white">
                        <BiArrowBack className="self-center mr-2" />
                        Go back
                    </Link>
                </div>
            </div>
            <div className="px-4 sm:px-6 md:px-8">
                <div className="max-w-3xl mx-auto pb-28">
                    <main>
                        <article className="relative pt-10">
                            <PostHeader
                                title={props.data.title}
                                author={props.data.author}
                                topics={props.data.topics}
                                created_at={props.data.created_at}
                            />
                            <PostContent content={props.content} toc={props.data.contents} />
                        </article>
                    </main>
                </div>
            </div>
            {/* Create a div with the classes used by the content blog. (Data is fetched dynamically from the filesystem and classes are not used on build time) */}
            <div className="blog_title blog_subtitle hidden"></div>
        </div>
    );
};

export async function getStaticPaths() {
    // Get the list of post slugs from some data source
    const slugs = [
        "how-to-install-npm-using-nvm",
        "how-to-structure-nextjs-project",
        "benefits-of-continuous-integration-and-deployment",
        "tips-for-scaling-web-applications",
        "building-and-deploying-real-time-react-app-with-typescript-and-socketio",
        "future-of-software-development",
        "getting-started-with-openai-agents",
    ];

    // Generate the paths for each post
    const paths = slugs.map((slug) => ({
        params: { slug },
    }));

    // Return the list of paths
    return { paths, fallback: false };
}

type Params = {
    slug: string;
};

export async function getStaticProps({ params }: { params: Params }) {
    // Read the file contents for the given slug
    try {
        const root = path.join(process.cwd());
        const dirPath = `${root}/content/blog`;
        const filePath = path.join(dirPath, `${params.slug}.mdx`);
        const result = readBlogContentAndMeta(filePath);
        return { props: result };
    } catch (err) {
        console.error(err);
        return { props: { content: [] } };
    }
}

export default BlogPost;
