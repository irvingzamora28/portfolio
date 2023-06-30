import Head from "next/head";
import Footer from "../components/home/Footer";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import Blogs from "../components/home/Blogs";
import path from "path";
import { useState } from "react";
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
    const [theme, setTheme] = useState("light");

    const handleTheme = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    };

    return (
        <>

        <div className={`main ${theme === "dark" ? "dark" : ""}`}>
            <Head>
                <title>My Blog</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header theme={theme} setTheme={handleTheme} isHomePage={false} />
            
            <Blogs blogs={blogs} isBlogSection={isBlogSection} />

        </div>
            <Footer />
        </>
    );
};

export default Blog;
