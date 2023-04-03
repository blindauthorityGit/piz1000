export { default as ElementGrid1 } from "./elementGrid1";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
// animations
import { motion } from "framer-motion";

import { PortableText } from "@portabletext/react";

import BlogTextShorter from "../utils/blogTextShorter";

//ImageBuilder
import myConfiguredSanityClient from "../../client";

import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder(myConfiguredSanityClient);

function urlFor(source) {
    return builder.image(source);
}

const BlogGrid1 = (props) => {
    const [isLoaded, setisLoaded] = useState(false);
    useEffect(() => {
        setisLoaded(true);
    }, []);

    const textMotion = {
        rest: {
            x: -50,
            opacity: 0,

            transition: {
                duration: 0.85,
                type: "tween",
                ease: "easeIn",
            },
        },
        hover: {
            // color: "blue",
            x: 0,
            opacity: 1,

            transition: {
                duration: 0.5,
                type: "tween",
                ease: "easeOut",
            },
        },
    };

    return (
        <div
            className={`${
                isLoaded ? "opacity-100" : "opacity-0"
            } container px-8 sm:px-24 m-auto relative sm:mt-12 sm:mb-6 ${props.colspan}`}
        >
            <div className="grid grid-cols-12 sm:gap-12 ">
                {props.data.map((e, i) => {
                    return (
                        <>
                            <div
                                key={`gridBlogKey${i}`}
                                className="col-span-12 h-64 sm:h-auto md:col-span-6 relative mb-8"
                            >
                                <Link href={`/blog/${e.slug.current}`}>
                                    <div className="cursor-pointer relative h-full overflow-hidden">
                                        <Image
                                            src={urlFor(e.mainImage).url()}
                                            layout="fill"
                                            loading="lazy"
                                            objectFit="cover"
                                            alt="hero"
                                        />
                                    </div>
                                </Link>
                            </div>
                            <div className="col-span-12 md:col-span-6 relative mb-8">
                                {/* <p>{e._createdAt.split("T")[0].split("-").reverse().join(".")}</p> */}
                                <h2 className="font-oswald font-semibold text-2xl mt-2 mb-4">{e.title}</h2>
                                <div>
                                    {" "}
                                    {console.log(e.text)}
                                    <BlogTextShorter blocks={e.text}></BlogTextShorter>
                                    {/* <PortableText value={e.exzerpt} /> */}
                                </div>

                                <Link href={`/blog/${e.slug.current}`}>
                                    <button className=" border  border-black text-black hover-underline-animation  flex items-center justify-center mt-8 py-3 px-6 w-full lg:w-auto min-w-[10rem] lg:max-w-[12rem] font-oswald uppercase rounded-md">
                                        <span className=""> Mehr</span>
                                    </button>
                                </Link>
                            </div>
                        </>
                    );
                })}
            </div>
            <div className={`mehr flex justify-center mt-4 ${props.alle ? "" : "hidden"}`}>
                <Link href="/blog">
                    <a className="font-oswald text-bold hover-underline-animation">
                        {" "}
                        <span>alle anzeigen</span>{" "}
                    </a>
                </Link>
            </div>
            <style jsx>{`
                .hover-underline-animation {
                    transition: all ease-in-out 250ms;
                }
                .hover-underline-animation span {
                    display: inline-block;
                    position: relative;
                    color: #000;
                }

                .hover-underline-animation span::after {
                    content: "";
                    position: absolute;
                    width: 100%;
                    transform: scaleX(0);
                    height: 2px;
                    bottom: 0;
                    left: 0;
                    background-color: black;
                    transform-origin: bottom right;
                    transition: transform 0.25s ease-out;
                    color: white;
                }

                .hover-underline-animation:hover span::after {
                    transform: scaleX(1);
                    transform-origin: bottom left;
                }
                .hover-underline-animation:hover {
                }
                .swiper-pagination-bullet-active {
                    background-color: #000 !important;
                }
            `}</style>
        </div>
    );
};

export default BlogGrid1;
