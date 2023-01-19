import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

//ImageBuilder
import myConfiguredSanityClient from "../../client";

import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder(myConfiguredSanityClient);

function urlFor(source) {
    return builder.image(source);
}

const Logos1 = (props) => {
    return (
        <nav className={`w-full bg-white pt-6 ms:pt-0 sm:py-6  font-serif font-semibold text-white ${props.colspan}`}>
            <div className="flex container m-auto h-full items-center flex-wrap  justify-around">
                {props.data.map((e, i) => {
                    return (
                        <Link key={`logoKex${i}`} href={"#"}>
                            <a className="relative block max-w-[40%] mb-6 sm:mb-0">
                                {/* <Image
                                    // {...ImagePropsGallery(i)}
                                    src={urlFor(e.image).url()}
                                    layout="fill"
                                    height={55}
                                    width={100}
                                    loading="lazy"
                                    objectFit="contain"
                                    alt={e.alt}
                                /> */}
                                <img className="max-h-[75px] sm:max-w-[200px]" src={urlFor(e.image).url()} alt="" />
                            </a>
                        </Link>
                    );
                })}
            </div>
        </nav>
    );
};

export default Logos1;
