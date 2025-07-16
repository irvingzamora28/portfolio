import Head from "next/head";
import Footer from "../components/home/Footer";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import Blogs from "../components/home/Blogs";
import path from "path";
import Header from "../components/home/Header";
import { readBlogsMeta } from "../utils/blogFileReader";

export const getStaticProps: GetStaticProps<Blogs> = async () => {
    
    const root = path.join(process.cwd());
    const dirPath = `${root}/content/blog`;
    const blogs: BlogMeta[] = readBlogsMeta(dirPath);

    return {
        props: {
            blogs,
            isBlogSection: false,
        },
    };
};

const Blog = ({ blogs, isBlogSection }: InferGetStaticPropsType<typeof getStaticProps>) => {
    
    return (
        <>

        <div className="main bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 dark:from-gray-900 dark:via-blue-900 dark:to-purple-900 min-h-screen text-slate-800 dark:text-slate-100">
            <Head>
                <title>My Blog</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header isHomePage={false} />
            <Blogs blogs={blogs} isBlogSection={isBlogSection} />
        </div>
            <Footer />
        </>
    );
};

export default Blog;
