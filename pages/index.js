import { useEffect, useState } from "react";

import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import MainContainer from "../components/layout/mainContainer";
import Hero from "../components/Hero/hero";
import client from "../client";

import { HeroSlider1 } from "../components/HeroSlider";
import { EventSlider1 } from "../components/elementSliders";
import { ImgText1 } from "../components/imgText";
import { Stoerer1 } from "../components/stoerer";

export default function Home({ dataStart, dataEvent, dataSetting }) {
    useEffect(() => {
        console.log(dataStart, dataSetting);
    }, []);

    return (
        <>
            <Head>
                <title>Site title</title>
            </Head>
            {/* <Menu1
                logo={Logo.src}
                menuItems={menuItems}
                socialMedia={socialMedia}
                burgerIcon={<RxHamburgerMenu />}
                onBurgerClick={(e) => {
                    console.log(e);
                }}
            ></Menu1> */}

            <HeroSlider1 slides={dataStart.mainSliders}></HeroSlider1>
            <div className="divider h-12"></div>

            <EventSlider1 events={dataEvent}></EventSlider1>
            <div className="divider h-12"></div>

            <ImgText1 data={dataStart.textImageBoxes[0]}></ImgText1>
            <div className="divider h-24"></div>

            <ImgText1 data={dataStart.textImageBoxes[1]}></ImgText1>
            <div className="divider h-24"></div>

            <ImgText1 data={dataStart.textImageBoxes[2]}></ImgText1>
            <div className="divider h-24"></div>

            <Stoerer1 data={dataStart.linkBox}></Stoerer1>
            <div className="divider h-24"></div>
        </>
    );
}

export async function getStaticProps() {
    const resSetting = await client.fetch(`*[_type == "settings"]`);
    const dataSetting = await resSetting[0];

    const resStart = await client.fetch(`*[_type == "start"]`);
    const dataStart = await resStart[0];

    const resEvent = await client.fetch(`*[_type == "event"]`);
    const dataEvent = await resEvent;
    return {
        props: {
            dataStart,
            dataEvent,
            dataSetting,
        },
    };
}
