import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
// SWIPER
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, A11y } from "swiper";

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
import { BsArrowRightShort } from "react-icons/bs";

//ImageBuilder
import myConfiguredSanityClient from "../../client";

import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder(myConfiguredSanityClient);

function urlFor(source) {
    return builder.image(source);
}

// Overlay
import Overlay from "../modal/overlay";
// Modal
import Modal from "../modal/modal";

const GallerySlider1 = (props) => {
    const [isLoaded, setisLoaded] = useState(false);
    const [showOverlay, setShowOverlay] = useState(false);
    const [activeImg, setActiveImg] = useState(null);

    const swiperRef = useRef();

    useEffect(() => {
        setisLoaded(true);
        console.log(swiperRef.current);
        swiperRef.current.style.paddingBottom = "3.75rem!important";
    }, []);

    useEffect(() => {
        swiperRef.current.style.paddingBottom = "3.75rem!important";
    }, [swiperRef.current]);

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
        <>
            {showOverlay ? <Overlay onClick={(e) => setShowOverlay(false)}></Overlay> : null}
            {showOverlay ? (
                <Modal onClick={(e) => setShowOverlay(false)}>
                    <Image
                        // {...ImagePropsGallery(i)}
                        src={activeImg}
                        layout="fill"
                        loading="lazy"
                        objectFit="cover"
                        alt="hero"
                    />
                </Modal>
            ) : null}
            <div
                className={`${isLoaded ? "opacity-100" : "opacity-0"} container mt-8 px-8 sm:px-24 m-auto relative ${
                    props.colspan
                }`}
            >
                <Swiper
                    // install Swiper modules
                    modules={[Pagination, A11y]}
                    spaceBetween={50}
                    slidesPerView={4}
                    ref={swiperRef}
                    pagination={{ clickable: true }}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log("slide change")}
                    className="h-full eventSlider pb-[3.75rem!important]"
                    style={{ paddingBottom: "3.75rem!important" }}
                    breakpoints={{
                        // when window width is >= 640px
                        320: {
                            slidesPerView: 1,
                        },
                        768: {
                            slidesPerView: 2,
                        },
                        1024: {
                            slidesPerView: 3,
                        },
                        1280: {
                            slidesPerView: 3,
                        },
                    }}
                >
                    {props.data.map((e, i) => {
                        return (
                            <SwiperSlide key={`galleryKey${i}`} className="">
                                <div className="cursor-pointer relative overflow-hidden">
                                    <motion.img
                                        whileHover={{
                                            scale: 1.1,
                                            transition: { duration: 0.3 },
                                        }}
                                        src={urlFor(e.image).width(400).height(300)}
                                        onClick={(e) => {
                                            setShowOverlay(true);
                                            setActiveImg(urlFor(props.data[i].image).url());
                                            console.log(props.data[i]);
                                        }}
                                        // alt={e.title}
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
        </>
    );
};

export default GallerySlider1;
