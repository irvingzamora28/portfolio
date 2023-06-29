import { MDXProvider } from "@mdx-js/react";
import Link from "next/link";
import { BiArrowBack } from "react-icons/bi";
import PostHeader from "../post/PostHeader";
import { Heading } from "../mdx/Heading";

const components = {
    h1: Heading.H1,
    h2: Heading.H2,
  };

interface LayoutProps {
    children: React.ReactNode;
    meta: { author: string; title: string; slug: string; topics: string[] };
}

function BlogLayout({ children, ...props }: LayoutProps) {
    return (
        <MDXProvider components={components}>
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
                                    title={props.meta.title}
                                    author={props.meta.author}
                                    topics={props.meta.topics}
                                />
                                {children}
                            </article>
                        </main>
                    </div>
                </div>
                {/* Create a div with the classes used by the content blog. (Data is fetched dynamically from the filesystem and classes are not used on build time) */}
                <div className="blog_title blog_subtitle hidden"></div>
            </div>
        </MDXProvider>
    );
}

export default BlogLayout;
