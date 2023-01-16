import React, { useState, useEffect } from "react";
import Link from "next/link";
// SWIPER
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, A11y } from "swiper";

import IMG1 from "./assets/1.jpg";
import IMG2 from "./assets/2.jpg";
import IMG3 from "./assets/3.jpg";
import IMG4 from "./assets/4.jpg";
import IMG5 from "./assets/5.jpeg";

import Image from "next/image";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

// animations
import { motion } from "framer-motion";

// icons
import { BsArrowRightShort } from "react-icons/bs";

const ImageGrid1 = (props) => {
    return (
        <div className={`w-full grid grid-cols-12 grid-rows-2 gap-2 h-full  ${props.colspan}`}>
            <div className="col-span-4 relative group">
                <Image
                    // {...ImagePropsGallery(i)}
                    src={IMG1}
                    layout="fill"
                    loading="lazy"
                    objectFit="cover"
                    alt="hero"
                    className="group-hover:scale-110 transition-all duration-500"
                    onClick={props.onClick}
                />
            </div>
            <motion.div className="col-span-4 relative mt-4 group">
                <Image
                    // {...ImagePropsGallery(i)}
                    src={IMG2}
                    layout="fill"
                    loading="lazy"
                    objectFit="cover"
                    alt="hero"
                    className="group-hover:scale-110 transition-all duration-500"
                    onClick={props.onClick}
                />
            </motion.div>
            <div className="col-span-4 row-span-1 relative group">
                <Image
                    // {...ImagePropsGallery(i)}
                    src={IMG3}
                    layout="fill"
                    loading="lazy"
                    objectFit="cover"
                    alt="hero"
                    className="group-hover:scale-110 transition-all duration-500"
                    onClick={props.onClick}
                />
            </div>
            <div className="col-span-8 row-span-1 relative group">
                <Image
                    // {...ImagePropsGallery(i)}
                    src={IMG4}
                    layout="fill"
                    loading="lazy"
                    objectFit="cover"
                    alt="hero"
                    className="group-hover:scale-110 transition-all duration-500"
                    onClick={props.onClick}
                />
            </div>
            <div className="col-span-4 row-span-1 relative group">
                <Image
                    // {...ImagePropsGallery(i)}
                    src={IMG5}
                    layout="fill"
                    loading="lazy"
                    objectFit="cover"
                    alt="hero"
                    className="group-hover:scale-110 transition-all duration-500"
                    onClick={props.onClick}
                />
            </div>
        </div>
    );
};

export default ImageGrid1;
