import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { PortableText } from "@portabletext/react";
import { motion, useAnimation } from "framer-motion";
import Logo from "../../assets/logo.svg";

const Mobile1 = (props) => {
    const [showMenu, setShowMenu] = useState(props.showMenu);

    const burgerRef = useRef();

    function clicker(e) {
        console.log("Clicked");
    }

    const boxMotion = {
        rest: {
            opacity: 0,
            display: "none",
            ease: "easeOut",
            duration: 0.2,
            type: "spring",
            transition: {
                duration: 0.5,
                type: "tween",
                ease: "easeIn",
            },
        },

        end: {
            opacity: 1,
            display: "block",
            transition: {
                duration: 0.4,
                type: "spring",
                ease: "easeIn",
            },
        },
    };

    return (
        <>
            <motion.nav
                variants={boxMotion}
                className={`navbar slide-in-right ${props.klasse} 
                 w-full h-screen bg-white fixed z-40 `}
            >
                <div className="container h-screen py-16 px-16 font-europa tracking-wider">
                    <div className="middle">
                        <Link href="/start">
                            <a>
                                <img src={Logo.src} width="230" alt="Logo" />
                            </a>
                        </Link>
                    </div>
                    <div className="MenuItems text-2xl sm:text-4xl pt-8 font-oswald font-bold">
                        <ul className="">
                            <li className="mb-4">
                                <div className="wrap dropdown bg-white  ">
                                    <a className="text-text block my-4 subNav relative hover:text-primaryColor cursor-pointer">
                                        Museum
                                        <ul className="pl-8 mt-6 mb-6">
                                            <Link href="/about">
                                                <li className="mb-4">Über uns</li>
                                            </Link>
                                            <Link href="/sammlungen">
                                                <li className="mb-4">Sammlungen</li>
                                            </Link>
                                            <Link href="/leitbild">
                                                <li className="mb-4">Leitbild</li>
                                            </Link>
                                            <Link href="/kontakt">
                                                <li className="mb-4">Kontakt</li>
                                            </Link>
                                        </ul>
                                    </a>

                                    <Link href="./besuch">
                                        <a className="text-text block my-4 subNav relative mt-4 hover:text-primaryColor cursor-pointer">
                                            Besuch
                                        </a>
                                    </Link>
                                </div>
                            </li>
                            <li className="mr-8 hover:text-primaryColor hover:underline mb-4">
                                <Link href="/events">
                                    <a>Programm</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/kontakt">
                                    <a>Kontakt</a>
                                </Link>
                            </li>
                        </ul>
                        <hr className="mt-6" />
                        <ul className="">
                            <li className="mb-4 mt-8 text-sm">
                                <div className="wrap dropdown bg-white  ">
                                    <Link href="/impressum">
                                        <a className="text-text block my-4 subNav relative hover:text-primaryColor cursor-pointer">
                                            Impressum
                                        </a>
                                    </Link>

                                    <Link href="/datenschutz">
                                        <a className="text-text block my-4 subNav relative mt-4 hover:text-primaryColor cursor-pointer">
                                            Datenschutzerklärung
                                        </a>
                                    </Link>
                                </div>
                            </li>
                        </ul>
                    </div>

                    {/* <div className="Kontakt flex mt-10">
                        <div className="left w-1/2">
                            <H4>Kontakt</H4>
                            <div className="content text-xs leading-relaxed">
                                <div> {props.strasse}</div>
                                <div> {props.ort}</div>
                                <div className="mt-4">{props.phone}</div>
                                <div>
                                    {" "}
                                    <a href="mailto:contacts@german-aesthetics.de"> {props.email}</a>
                                </div>
                            </div>
                        </div>
                        <div className="right w-1/2">
                            <H4>Praxiszeiten</H4>

                            <div className="wrapper flex  text-xs leading-relaxed">
                                <div className="left mr-6 text-left ">
                                    Mo
                                    <br />
                                    Di
                                    <br />
                                    Mi
                                    <br />
                                    Do
                                    <br />
                                    Fr
                                    <br />
                                </div>
                                <div className="right text-left">
                                    <PortableText value={props.value} />
                                </div>
                            </div>
                        </div>
                    </div> */}
                </div>
            </motion.nav>
        </>
    );
};

export default Mobile1;
