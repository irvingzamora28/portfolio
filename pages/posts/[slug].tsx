import Link from "next/link";
import React, { useEffect } from "react";
import { BiArrowBack } from "react-icons/bi";
import Content from "../../components/Content";
import PostHeader from "../../components/post/PostHeader";
import { data } from "../../content/blog/blog1";

const Post = () => {
    useEffect(() => {
        console.log("My function slug component has been rendered");
    }, [data]);
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
                        <PostHeader title="Title of the post" />
                        <Content data={data} />

                        <div className="mt-12 prose prose-slate dark:prose-dark">
                            <p className="py-2">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Necessitatibus nobis
                                laudantium exercitationem, distinctio sunt
                                excepturi temporibus suscipit dolorum minus
                                provident nostrum consectetur officia vero
                                incidunt iste voluptates a! Necessitatibus,
                                atque!
                            </p>
                            <div className="my-8">
                                <a href="https://tailwindui.com/templates/protocol">
                                    <div className="relative rounded-md shadow-sm">
                                        {/* Image */}
                                    </div>
                                </a>
                            </div>
                            <p className="py-2">
                                Lorem ipsum, dolor sit amet consectetur
                                adipisicing elit. Aut maiores, dolores
                                debitis repudiandae ducimus harum vitae
                                doloribus enim eligendi culpa laborum eos
                                eius dolore est excepturi officia ut
                                delectus dolorum! Consectetur deleniti
                                labore dolorum natus! Eum magnam ex officia
                                soluta illo atque unde nam incidunt
                                reprehenderit repudiandae cum tempora
                                similique voluptate enim magnam minus totam
                                non voluptates amet accusantium delectus
                                facere qui, nobis quam. Hic.
                            </p>
                            <p className="py-2">
                                Lorem doloremque est voluptates eaque
                                expedita culpa tempora iure voluptatum velit
                                sint non reprehenderit optio. Suscipit
                                ducimus atque earum fuga porro nulla itaque
                                omnis quaerat optio in autem doloremque
                                obcaecati iste assumenda odit tempore
                                accusamus eius, soluta maiores sed ab! Vel,
                                optio. Ullam quos eligendi hic porro alias
                                quis libero eos vitae officia, repudiandae
                                dolore veniam minus, laborum exercitationem
                                sit, labore itaque! Quas ab facilis modi!
                                Praesentium fugit exercitationem corporis
                                explicabo!
                            </p>
                        </div>
                    </article>
                </main>
            </div>
        </div>
    </div>
    );
};

export default Post;