import React, { useState, useEffect } from "react";
import Link from "next/link";
// SWIPER
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

// hooks
import useViewportHeight from "../utils/useViewportHeight";

//config
import sliderConfig from "./slides/config";

// animations
import { motion } from "framer-motion";

// icons
import { BsArrowRightShort } from "react-icons/bs";

//ImageBuilder
import myConfiguredSanityClient from "../../client";

import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder(myConfiguredSanityClient);

function urlFor(source) {
    return builder.image(source);
}

const HeroSlider1 = (props) => {
    const height = useViewportHeight();
    const [heroHeight, setHeroHeight] = useState(0);
    const [isMobile, setIsMobile] = useState(false);

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

    useEffect(() => {
        console.log(height);
        setHeroHeight(height);
    }, [height, props]);

    useEffect(() => {
        console.log(window.innerWidth);
        if (typeof window !== "undefined") {
            // detect window screen width function
            setIsMobile(window.innerWidth <= 576);
        }
        console.log(window.innerWidth <= 576);
    }, []);

    return (
        <div className={`h-[100%] sm:h-[560px] container m-auto relative ${props.colspan}`}>
            <Swiper
                // install Swiper modules
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={0}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log("slide change")}
                className="h-full "
                autoplay={{ delay: 3000, disableOnInteraction: false, stopOnLast: true }}
            >
                {props.slides.map((e, i) => {
                    return (
                        <SwiperSlide
                            className="bg-cover bg-center grid grid-cols-12 bg-no-repeat"
                            style={{
                                backgroundImage: `url(${urlFor(
                                    isMobile
                                        ? typeof e.imageMobile !== "undefined"
                                            ? e.imageMobile
                                            : e.image
                                        : e.image
                                )})`,
                            }}
                            key={`slide${i}`}
                        >
                            {console.log(
                                e.links.external === undefined ? e.links.internal.slug.current : e.links.external
                            )}
                            <div className="textBox z-40 px-16 sm:px-36 lg:px-48 col-span-12 lg:col-span-10 xl:col-span-8 flex flex-col justify-center items-center sm:items-start">
                                <p className="subLine text text-white font-oswald mb-4 text-lg  tracking-wide text-center sm:text-left">
                                    {e.topline}
                                </p>
                                <h1 className="text-white text-4xl sm:text-6xl font-oswald uppercase font-bold text-center sm:text-left">
                                    {e.title}
                                </h1>
                                <p className="subLine hidden sm:block text text-white font-serif mt-6 ">{e.excerpt}</p>
                                <Link
                                    href={
                                        e.links.external === undefined
                                            ? e.links.internal._type == "event"
                                                ? "/events/" + e.links.internal.slug.current
                                                : "/blog/" + e.links.internal.slug.current
                                            : e.links.external
                                    }
                                >
                                    <button className="bg-primary hover-underline-animation  flex items-center justify-center text-white mt-8 py-3 px-6 min-w-[10rem] max-w-[12rem] font-oswald uppercase rounded-md">
                                        <span className="">Mehr</span>
                                    </button>
                                </Link>
                            </div>
                            <div className="absolute w-full h-full bg-darkGreen top-0 opacity-50"></div>
                            {/* <img src={e.image} alt="" /> */}
                        </SwiperSlide>
                    );
                })}
            </Swiper>
            <style jsx>{`
                .hover-underline-animation span {
                    display: inline-block;
                    position: relative;
                    color: #fff;
                }

                .hover-underline-animation span::after {
                    content: "";
                    position: absolute;
                    width: 100%;
                    transform: scaleX(0);
                    height: 2px;
                    bottom: 0;
                    left: 0;
                    background-color: white;
                    transform-origin: bottom right;
                    transition: transform 0.25s ease-out;
                }

                .hover-underline-animation:hover span::after {
                    transform: scaleX(1);
                    transform-origin: bottom left;
                }
                .swiper-pagination-bullet {
                    background-color: #fff !important;
                }
            `}</style>
        </div>
    );
};

export default HeroSlider1;
