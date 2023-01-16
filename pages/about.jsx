import { useEffect, useState } from "react";

import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import MainContainer from "../components/layout/mainContainer";
import Breadcrumbs from "../components/Breadcrumbs";
import client from "../client";

import { HeroSlider1 } from "../components/HeroSlider";
import { EventSlider1 } from "../components/elementSliders";
import { ImgText1 } from "../components/imgText";
import { InfoBox1 } from "../components/infoBoxes";
import { Stoerer1 } from "../components/stoerer";

export default function About({ dataAbout, dataEvent, dataSetting }) {
    const [linkList, setLinkList] = useState([
        {
            title: "Home",
            link: "/",
        },
        {
            title: "Ueber-uns",
            link: "/about",
        },
    ]);
    useEffect(() => {
        console.log(dataAbout, dataSetting);
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

            <Breadcrumbs links={linkList}></Breadcrumbs>

            <ImgText1 data={dataAbout.textImageBoxes[0]}></ImgText1>
            <ImgText1 data={dataAbout.textImageBoxes[1]}></ImgText1>
            <div className="divider h-24"></div>
            <InfoBox1 data={dataAbout.infoBoxes}></InfoBox1>
            <EventSlider1 events={dataEvent}></EventSlider1>
            <div className="divider h-12"></div>
            {/* <Stoerer1 data={dataStart.linkBox}></Stoerer1> */}
        </>
    );
}

export async function getStaticProps() {
    const resSetting = await client.fetch(`*[_type == "settings"]`);
    const dataSetting = await resSetting[0];

    const resStart = await client.fetch(`*[_type == "about"]`);
    const dataAbout = await resStart[0];

    const resEvent = await client.fetch(`*[_type == "event"]`);
    const dataEvent = await resEvent;
    return {
        props: {
            dataAbout,
            dataEvent,
            dataSetting,
        },
    };
}
