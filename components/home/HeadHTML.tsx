import React from "react";
import Head from "next/head";

const HeadHTML = () => {
    return (
        <Head>
            <title>Irving Zamora | Web Developer</title>
            <meta charSet="utf-8" />
            <meta property="og:site_name" content="Irving Zamora | Web Developer" />
            <meta property="og:title" content="Portfolio Irving Zamora" />
            <meta property="og:description" content="As a web developer, I am passionate about building beautiful, fast, and responsive websites and web applications." />
            <meta property="og:image" itemProp="image" content="/assets/images/logo-removebg.png" />
            <meta property="og:type" content="website" />
            <meta name="description" content="As a web developer, I am passionate about building beautiful, fast, and responsive websites and web applications." />
            <meta name="author" content="Irving Zamora" />
            <meta name="keywords" content="irvingzamora, programming, nextjs, laravel, php, mysql, typescript" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
            <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
            <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
            <link rel="manifest" href="/site.webmanifest" />
            <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
            <meta name="msapplication-TileColor" content="#da532c" />
            <meta name="theme-color" content="#FFFFFF"></meta>
        </Head>
    );
};

export default HeadHTML;
