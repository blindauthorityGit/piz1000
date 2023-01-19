import React, { useState, useEffect } from "react";
import Link from "next/link";
// SWIPER
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, A11y } from "swiper";
import Image from "next/image";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

//config
import sliderConfig from "./slides/config";

// animations
import { motion } from "framer-motion";

// textParse
import { PortableText } from "@portabletext/react";

//ImageBuilder
import myConfiguredSanityClient from "../../client";

import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder(myConfiguredSanityClient);

function urlFor(source) {
    return builder.image(source);
}

const SammlungSlider1 = (props) => {
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
        <div className="w-full bg-lightGrey py-6">
            <div
                className={`${isLoaded ? "opacity-100" : "opacity-0"} container px-8 sm:px-12 m-auto relative ${
                    props.colspan
                }`}
            >
                {props.nonstart ? (
                    <h2 className="font-oswald text-4xl lg:text-6xl font-semibold mb-4 lg:mb-12">
                        Weitere Veranstaltungen:
                    </h2>
                ) : null}

                <Swiper
                    // install Swiper modules
                    modules={[Pagination, A11y]}
                    spaceBetween={50}
                    slidesPerView={1}
                    pagination={{ clickable: true }}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log("slide change")}
                    className="h-full eventSlider"
                    style={{ paddingBottom: "3.75rem!important" }}
                >
                    {props.data.map((e, i) => {
                        return (
                            <SwiperSlide key={`sliderKey${i}`} className="relative grid grid-cols-12 gap-6">
                                <div className="col-span-12 sm:col-span-6 sm:pr-16 sm:pt-16 order-last sm:order-first">
                                    <h2 className="font-oswald font-semibold text-4xl mt-3 mb-8">{e.title}</h2>
                                    <div className="font-serif mb-2 mt-1">
                                        {" "}
                                        <PortableText value={e.text} />
                                    </div>
                                </div>
                                <div className="col-span-12 sm:col-span-6 relative min-h-[300px] sm:min-h-[600px]">
                                    <Image
                                        // {...ImagePropsGallery(i)}
                                        src={urlFor(e.image).url()}
                                        layout="fill"
                                        loading="lazy"
                                        objectFit="cover"
                                        alt="hero"
                                    />
                                </div>
                            </SwiperSlide>
                        );
                    })}
                </Swiper>
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
        </div>
    );
};

export default SammlungSlider1;
