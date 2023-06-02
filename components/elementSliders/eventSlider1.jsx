import React, { useState, useEffect } from "react";
import Link from "next/link";
// SWIPER
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, A11y, Navigation } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

//config
import sliderConfig from "./slides/config";

// animations
import { motion } from "framer-motion";

// icons
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

//ImageBuilder
import myConfiguredSanityClient from "../../client";

import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder(myConfiguredSanityClient);

function urlFor(source) {
    return builder.image(source);
}

const EventSlider1 = (props) => {
    const [isLoaded, setisLoaded] = useState(false);
    const [swiper, setSwiper] = useState(null);
    const [isLastSlideLeft, setIsLastSlideLeft] = useState(true);
    const [isLastSlideRight, setIsLastSlideRight] = useState(false);

    const handleNav = () => {
        if (swiper && swiper.activeIndex === 0) {
            setIsLastSlideLeft(true);
        } else if (swiper.activeIndex === swiper.slides.length - 1) {
            setIsLastSlideRight(true);
        } else {
            setIsLastSlideLeft(false);
            setIsLastSlideRight(false);
        }
    };

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
            className={`${isLoaded ? "opacity-100" : "opacity-0"} container px-8 sm:px-24 m-auto relative ${
                props.colspan
            }`}
        >
            <div className="w-full z-50 md:hidden">
                <div
                    onClick={() => {
                        swiper.slidePrev();
                    }}
                    className="absolute top-[30%]  transform -translate-x-1/2 z-30 "
                >
                    <button
                        style={{ opacity: isLastSlideLeft ? 0.5 : 1 }}
                        className=" rounded-full h-8 w-8 flex items-center justify-center"
                    >
                        <FaChevronLeft className="text-black" />
                    </button>
                </div>
                <div
                    onClick={() => {
                        swiper.slideNext();
                    }}
                    className="absolute  top-[30%] right-[-6px] transform -translate-x-1/2  z-30"
                >
                    <button
                        style={{ opacity: isLastSlideRight ? 0.5 : 1 }}
                        className=" rounded-full h-8 w-8 flex items-center justify-center"
                    >
                        <FaChevronRight className="text-black" />
                    </button>
                </div>
            </div>
            {/* {props.nonstart ? (
                <h2 className="font-oswald text-4xl lg:text-6xl font-semibold mb-8 lg:mb-12">
                    Weitere Veranstaltungen:
                </h2>
            ) : null} */}

            <Swiper
                // install Swiper modules
                modules={[Pagination, Navigation, A11y]}
                spaceBetween={50}
                slidesPerView={4}
                pagination={{ clickable: true }}
                onSwiper={(swiper) => {
                    console.log(swiper.params);
                    {
                        setSwiper(swiper);
                    }
                }}
                onSlideChange={() => {
                    console.log("slide change");
                    console.log(swiper.activeIndex);
                    handleNav();
                }}
                className="h-full eventSlider"
                // style={{ paddingBottom: "3.75rem!important" }}
                breakpoints={{
                    // when window width is >= 640px
                    320: {
                        slidesPerView: 1,
                        navigation: true,
                        pagination: false,
                    },
                    768: {
                        slidesPerView: 2,
                        navigation: true,
                    },
                    1024: {
                        slidesPerView: 3,
                        navigation: false,
                    },
                    1280: {
                        slidesPerView: 4,
                        navigation: false,
                    },
                }}
            >
                {props.events.map((e, i) => {
                    return (
                        <SwiperSlide
                            key={`sliderKey${i}`}
                            className="px-6 sm:px-0 relative min-h-[350px!important] sm:min-h-[380px!important]"
                        >
                            <h3
                                onClick={() => {
                                    swiper && swiper.slideNext();
                                }}
                                className="font-oswald text-xl font-semibold"
                            >
                                {e.zeit.date.split("-").reverse().join(".")}
                            </h3>
                            <p className="font-serif text-sm mb-2 mt-1">Beginn: {e.zeit.time}</p>
                            <Link href={`/events/${e.slug.current}`}>
                                <div className="cursor-pointer relative overflow-hidden">
                                    <motion.img
                                        whileHover={{
                                            scale: 1.1,
                                            transition: { duration: 0.3 },
                                        }}
                                        src={urlFor(e.mainImage).width(300).height(160)}
                                        alt={e.title}
                                    />
                                </div>
                            </Link>
                            <div className="text-center sm:text-left">
                                <h2 className="font-oswald font-semibold text-xl mt-3">{e.title}</h2>
                                <p className="font-serif mb-16 mt-2 text-sm">{e.subTitle}</p>
                            </div>
                            <Link href={`/events/${e.slug.current}`}>
                                <button className="  absolute bottom-0 border-black text-black underline hover-underline-animation  flex items-center justify-center mt-8 py-3 px-6  sm:w-full lg:w-auto w-full right-0 left-0 font-oswald uppercase rounded-md">
                                    <span className=""> Mehr</span>
                                </button>
                            </Link>
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
    );
};

export default EventSlider1;
