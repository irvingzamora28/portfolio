import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

const posts = [
    { id: 1, title: 'Blog post 1', content: 'Lorem ipsum dolor sit amet...' },
    { id: 2, title: 'Blog post 2', content: 'Consectetur adipiscing elit...' },
    { id: 3, title: 'Blog post 3', content: 'Sed sollicitudin augue euismod...' },
    // ...
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
      <Image
            src={"/../public/assets/images/dalle-programming.png"}
            width={40}
            height={40}
            alt="Blog Image" className="mb-4 rounded-lg" />
      <div className="grid grid-cols-2 gap-4">
        {posts.map((post) => (
          <div className="bg-gray-200 p-4 rounded-lg" key={post.id}>
            <h2 className="text-lg font-medium">{post.title}</h2>
            <p className="text-gray-600">{post.content}</p>
            <Link href="/posts/[id]" as={`/posts/${post.id}`}>
              Read More
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;

