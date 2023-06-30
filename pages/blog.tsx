import Head from "next/head";
import Footer from "../components/home/Footer";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import Blogs from "../components/home/Blogs";
import path from "path";
import fs from "fs";
import { useState } from "react";
import Header from "../components/home/Header";
import matter from "gray-matter";

export const getStaticProps: GetStaticProps<Blogs> = async () => {
    
    const root = path.join(process.cwd());
    const dirPath = `${root}/content/blog`;
    const fileNames = fs.readdirSync(dirPath);

    const latestFiles = fileNames
        .map((fileName) => ({
            name: fileName,
            time: fs.statSync(path.join(dirPath, fileName)).mtime.getTime(),
        }))
        .sort((a, b) => b.time - a.time)
        .slice(0, 4)
        .map((file) => file.name);
    const blogs: BlogMeta[] = [];
    latestFiles.map((fileName) => {
        const fileContents = fs.readFileSync(path.join(dirPath, fileName), "utf8");
        const { data } = matter(fileContents);
        if (typeof data !== "undefined") {
            blogs.push(data as BlogMeta);
        }
    });

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
