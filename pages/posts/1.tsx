import Link from "next/link";
import React from "react";
import { BiArrowBack } from "react-icons/bi";

interface Props {
    title: string;
    date: string;
    author: string;
    content: string;
}

const BlogPost: React.FC<Props> = (props: Props) => {
    const { title, date, author, content } = props;
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
                            <h1 className="text-2xl font-extrabold tracking-tight text-slate-900 dark:text-slate-200 md:text-3xl">
                                Title of the blog
                            </h1>
                            <div className="text-sm leading-6">
                                <dl>
                                    <dt className="sr-only">Date</dt>
                                    <dd className="absolute top-0 inset-x-0 text-slate-700 dark:text-slate-400">
                                        <time dateTime="2022-12-15T15:00:00.000Z">
                                            Thursday, December 15, 2022
                                        </time>
                                    </dd>
                                </dl>
                            </div>
                            <div className="mt-6">
                                <ul className="flex flex-wrap text-sm leading-6 -mt-6 -mx-5">
                                    <li className="flex items-center font-medium whitespace-nowrap px-5 mt-6">
                                        {/* Image */}
                                        <div className="text-sm leading-4">
                                            <div className="text-slate-900 dark:text-slate-200">
                                                Irving Zamora
                                            </div>
                                            <div className="mt-1">
                                                <a
                                                    href="mailto:elcorreoquequieres@correo.com"
                                                    className="text-sky-500 hover:text-sky-600 dark:text-sky-400">
                                                    irvingzamora06
                                                </a>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
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

export default BlogPost;
