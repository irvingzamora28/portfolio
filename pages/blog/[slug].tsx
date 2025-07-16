import Link from "next/link";
import React, { useEffect } from "react";
import Head from "next/head";
import { BiArrowBack } from "react-icons/bi";
import PostHeader from "../../components/post/PostHeader";
import PostContent from "../../components/post/PostContent";
import path from "path";
import fs from "fs";
import matter from "gray-matter";
import { readBlogContentAndMeta } from "../../utils/blogFileReader";
import { SITE_URL } from "../../config/site";

type BlogPostProps = {
    content: any;
    data: BlogMeta;
};

const BlogPost: React.FC<BlogPostProps & { prevPost?: { slug: string, title: string }, nextPost?: { slug: string, title: string } }> = (props) => {
    // SEO meta tags and structured data
    const {
        title,
        description,
        author,
        created_at,
        image,
        topics = []
    } = props.data;
    // Fallbacks
    const metaDescription = description || `Read ${title} by ${author}`;
    const siteUrl = SITE_URL;
    const slug = typeof window !== 'undefined' ? window.location.pathname.split('/').pop() : '';
    const canonicalUrl = `${siteUrl}/blog/${props.data.slug || slug}`;
    // Build image path: if image is just a filename, prepend '/assets/images/blog/'
    let imagePath = image;
    if (image) {
        if (image.startsWith('http')) {
            imagePath = image;
        } else if (image.startsWith('/')) {
            imagePath = image;
        } else {
            imagePath = `/assets/images/blog/${image}`;
        }
    }
    const defaultOgImage = "/assets/images/og_image.png";
    const imageUrl = imagePath
        ? (imagePath.startsWith('http') ? imagePath : `${siteUrl}${imagePath}`)
        : `${siteUrl}${defaultOgImage}`;
    const publishedTime = new Date(created_at).toISOString();
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": title,
        "description": metaDescription,
        "image": imageUrl,
        "author": {
            "@type": "Person",
            "name": author
        },
        "datePublished": publishedTime,
        "dateModified": publishedTime,
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": canonicalUrl
        },
        "keywords": topics.join(', ')
    };

    useEffect(() => {
        console.log("My function slug component has been rendered");
    }, [props.content]);

    
    

    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="description" content={metaDescription} />
                <link rel="canonical" href={canonicalUrl} />

                {/* Open Graph */}
                <meta property="og:title" content={title} />
                <meta property="og:description" content={metaDescription} />
                <meta property="og:type" content="article" />
                <meta property="og:url" content={canonicalUrl} />
                <meta property="og:image" content={imageUrl} />
                <meta property="og:site_name" content="Irving Zamora Blog" />
                <meta property="article:published_time" content={publishedTime} />
                <meta property="article:author" content={author} />
                {topics.map((topic) => (
                    <meta property="article:tag" content={topic} key={topic} />
                ))}

                {/* Twitter Card */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={title} />
                <meta name="twitter:description" content={metaDescription} />
                <meta name="twitter:image" content={imageUrl} />
                <meta name="twitter:creator" content="@imzodev" />

                {/* Structured Data */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />
            </Head>
            <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
                {/* Hero section with back button */}
                <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5 dark:from-blue-400/5 dark:to-purple-400/5"></div>
                    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex items-center justify-between py-6">
                            <Link
                                href="/blog"
                                className="group inline-flex items-center px-4 py-2 text-sm font-medium text-slate-700 bg-white/80 backdrop-blur-sm border border-slate-200 rounded-lg shadow-sm hover:bg-white hover:shadow-md hover:border-slate-300 dark:text-slate-200 dark:bg-slate-800/80 dark:border-slate-700 dark:hover:bg-slate-800 dark:hover:border-slate-600 transition-all duration-200">
                                <BiArrowBack className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
                                Back to Blog
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Main content */}
                <div className="relative">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
                        <main className="blog__content">
                            <article className="relative">
                                {/* Article header with enhanced styling */}
                                <div className="mb-12">
                                    <PostHeader
                                        title={props.data.title}
                                        author={props.data.author}
                                        topics={props.data.topics}
                                        created_at={props.data.created_at}
                                    />
                                </div>

                                {/* Article content with better typography */}
                                <div className="prose prose-lg prose-slate max-w-none dark:prose-invert prose-headings:scroll-mt-28 prose-headings:font-display prose-headings:font-normal lg:prose-headings:scroll-mt-[8.5rem] prose-lead:text-slate-500 dark:prose-lead:text-slate-400 prose-a:font-semibold dark:prose-a:text-sky-400 prose-a:no-underline prose-a:shadow-[inset_0_-2px_0_0_var(--tw-prose-background,#fff),inset_0_calc(-1*(var(--tw-prose-underline-size,4px)+2px))_0_0_var(--tw-prose-underline,theme(colors.sky.300))] hover:prose-a:[--tw-prose-underline-size:6px] dark:[--tw-prose-background:theme(colors.slate.900)] dark:prose-a:shadow-[inset_0_calc(-1*var(--tw-prose-underline-size,2px))_0_0_var(--tw-prose-underline,theme(colors.sky.800))] dark:hover:prose-a:[--tw-prose-underline-size:6px] prose-pre:rounded-xl prose-pre:bg-slate-900 prose-pre:shadow-lg dark:prose-pre:bg-slate-800/60 dark:prose-pre:shadow-none dark:prose-pre:ring-1 dark:prose-pre:ring-slate-300/10 prose-hr:border-slate-200 dark:prose-hr:border-slate-800">
                                    <PostContent content={props.content} toc={props.data.contents} />
                                </div>

                                {/* Enhanced Previous/Next post navigation */}
                                <div className="mt-16 pt-8 border-t border-slate-200 dark:border-slate-800">
                                    <nav className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-8">
                                        {props.prevPost && (
                                            <Link 
                                                href={`/blog/${props.prevPost.slug}`} 
                                                className="group relative flex flex-col p-6 bg-white/60 backdrop-blur-sm border border-slate-200 rounded-xl shadow-sm hover:shadow-md hover:bg-white dark:bg-slate-800/60 dark:border-slate-700 dark:hover:bg-slate-800 transition-all duration-200"
                                            >
                                                <div className="flex items-center text-sm font-medium text-slate-500 dark:text-slate-400 mb-2">
                                                    <BiArrowBack className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
                                                    Previous Post
                                                </div>
                                                <div className="text-slate-900 dark:text-slate-100 font-semibold group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                                    {props.prevPost.title}
                                                </div>
                                            </Link>
                                        )}
                                        {props.nextPost && (
                                            <Link 
                                                href={`/blog/${props.nextPost.slug}`} 
                                                className="group relative flex flex-col p-6 bg-white/60 backdrop-blur-sm border border-slate-200 rounded-xl shadow-sm hover:shadow-md hover:bg-white dark:bg-slate-800/60 dark:border-slate-700 dark:hover:bg-slate-800 transition-all duration-200 sm:text-right"
                                            >
                                                <div className="flex items-center justify-end text-sm font-medium text-slate-500 dark:text-slate-400 mb-2">
                                                    Next Post
                                                    <BiArrowBack className="ml-2 h-4 w-4 rotate-180 transition-transform group-hover:translate-x-1" />
                                                </div>
                                                <div className="text-slate-900 dark:text-slate-100 font-semibold group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                                    {props.nextPost.title}
                                                </div>
                                            </Link>
                                        )}
                                    </nav>
                                </div>
                            </article>
                        </main>
                    </div>
                </div>
                
                {/* Create a div with the classes used by the content blog. (Data is fetched dynamically from the filesystem and classes are not used on build time) */}
                <div className="blog_title blog_subtitle hidden"></div>
            </div>
        </>
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
        "using-openai-agents-with-other-llms"
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
    try {
        const root = path.join(process.cwd());
        const dirPath = `${root}/content/blog`;
        const filePath = path.join(dirPath, `${params.slug}.mdx`);
        const result = readBlogContentAndMeta(filePath);
        // Get all blog files sorted by date
        const { getFilesSortedByDate, getFileContent, getBlogMeta } = await import("../../utils/blogFileReader");
        const files = getFilesSortedByDate(dirPath);
        const slugs = files.map(f => f.name.replace(/\.mdx?$/, ""));
        const currentIndex = slugs.findIndex(slug => slug === params.slug);
        let prevPost = null;
        let nextPost = null;
        if (currentIndex > 0) {
            const prevSlug = slugs[currentIndex - 1];
            const prevMeta = getBlogMeta(getFileContent(path.join(dirPath, `${prevSlug}.mdx`)));
            if (prevMeta) prevPost = { slug: prevSlug, title: prevMeta.title };
        }
        if (currentIndex < slugs.length - 1) {
            const nextSlug = slugs[currentIndex + 1];
            const nextMeta = getBlogMeta(getFileContent(path.join(dirPath, `${nextSlug}.mdx`)));
            if (nextMeta) nextPost = { slug: nextSlug, title: nextMeta.title };
        }
        return { props: { ...result, prevPost, nextPost } };
    } catch (err) {
        console.error(err);
        return { props: { content: [] } };
    }
}

export default BlogPost;
