import React, { useState, CSSProperties } from "react";
import Link from "next/link";

import Image from "next/image";
import { PortableText } from "@portabletext/react";
import ClipLoader from "react-spinners/ClipLoader";

//ImageBuilder
import myConfiguredSanityClient from "../../client";

import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder(myConfiguredSanityClient);

function urlFor(source) {
    return builder.image(source);
}

// const CSSProperties = {
//     display: "block",
//     margin: "0 auto",
//     borderColor: "red",
// };

const TextImg1 = (props) => {
    const [loading, setLoading] = useState(true);

    return (
        <div className={`w-full container  sm:px-24 m-auto lg:gap-16 grid grid-cols-12  ${props.colspan}`}>
            <div
                className={`left col-span-12 lg:col-span-6 relative h-64 lg:h-auto ${
                    props.data.order ? "lg:order-last" : "lg:order-first"
                }`}
            >
                <div className="spinner z-50 w-full flex justify-center">
                    <ClipLoader
                        color={"#a22010"}
                        loading={loading}
                        size={150}
                        aria-label="Loading Spinner"
                        data-testid="loader"
                    />
                </div>
                <Image
                    // {...ImagePropsGallery(i)}
                    src={urlFor(props.data.image).url()}
                    layout="fill"
                    loading="lazy"
                    objectFit="cover"
                    alt="hero"
                    onLoad={() => {
                        console.log("LOADING");
                        setLoading(false);
                    }}
                />
                {props.children}
            </div>
            <div className="right px-8 sm:px-0 col-span-12 lg:col-span-6 flex flex-col justify-center ">
                <p className="font-serif uppercase mt-4 lg:mt-0 text-base lg:text-lg mb-4">{props.data.topTitle}</p>
                <h2
                    className={`font-oswald text-4xl lg:text-6xl font-semibold ${
                        props.data.subLine ? "mb-1 lg:mb-4" : "mb-8 lg:mb-12"
                    }`}
                >
                    {props.data.title}
                </h2>
                {props.data.subLine ? (
                    <p className="font-serif uppercase mt-4 lg:mt-0 text-base lg:text-lg mb-8">{props.data.subLine}</p>
                ) : null}
                <div className="text text-sm leading-relaxed font-serif">
                    <PortableText value={props.data.text} />
                </div>
                {props.data.link ? (
                    <Link href={props.data.link}>
                        <button className=" border border-black text-black hover-underline-animation  flex items-center justify-center text-white mt-8 py-3 px-6 w-full lg:w-auto min-w-[10rem] lg:max-w-[12rem] font-oswald uppercase rounded-md">
                            <span className=""> Mehr</span>
                        </button>
                    </Link>
                ) : null}
            </div>
            <style jsx>{`
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
                }

                .hover-underline-animation:hover span::after {
                    transform: scaleX(1);
                    transform-origin: bottom left;
          
            `}</style>
        </div>
    );
};

export default TextImg1;
