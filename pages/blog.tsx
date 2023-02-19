import Head from "next/head";
import Image from "next/image";
import BlogCard from "../components/blog/BlogCard";

const posts = [
    { id: "1", created_at: "Fri Feb 10 2023 16:54:35 GMT-0700", title: "Blog post 1", description: "Lorem ipsum dolor sit amet...", type:"Tutorial", slug:"how-to-install-npm-using-nvm", image: "yarn-vs-npm.png", author:"Irving Zamora" },
    { id: "2", created_at: "02/02/2023 16:54:35 GMT-0700", title: "Blog post 2", description: "Consectetur adipiscing elit...", type:"Article", slug:"how-to-install-npm-using-nvm", author:"Irving Zamora" },
    { id: "3", created_at: "01/02/2023 2023 16:54:35 GMT-0700", title: "Blog post 3", description: "Sed sollicitudin augue euismod...", type:"Article", slug:"how-to-install-npm-using-nvm", author:"Irving Zamora" },
];

const Blog = () => {
    return (
        <div className="bg-white p-4 flex flex-col items-center">
            <Head>
                <title>My Blog</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <h1 className="text-2xl font-medium">Welcome to my blog</h1>
            <p className="text-gray-600 text-lg">Here you will find my latest thoughts and musings</p>
            <Image src={"/../public/assets/images/dalle-programming.png"} width={40} height={40} alt="Blog Image" className="mb-4 rounded-lg" />
            <div className="grid grid-cols-2 gap-4">
                {posts.map((post) => (
                    <BlogCard key={post.id} created_at={post.created_at} title={post.title} slug={post.slug} author={post.author} type={post.type} image={post.image} description={post.description} />
                ))}
            </div>
        </div>
    );
};

export default Blog;
