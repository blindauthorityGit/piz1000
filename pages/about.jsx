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

export default function About({ dataAbout, dataEvent, dataSetting, dataInfos }) {
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
        console.log(dataAbout, dataSetting, dataInfos);
    }, []);

    return (
        <>
            <Head>
                <title>Site title</title>
            </Head>

            <Breadcrumbs links={linkList}></Breadcrumbs>

            <ImgText1 data={dataAbout.textImageBoxes[0]}></ImgText1>
            <ImgText1 data={dataAbout.textImageBoxes[1]}></ImgText1>
            <ImgText1 data={dataAbout.textImageBoxes[2]}></ImgText1>
            <div className="divider h-24"></div>
            <InfoBox1 data={dataInfos.infoBoxes}></InfoBox1>
            <div className="divider h-24"></div>

            <EventSlider1 events={dataEvent}></EventSlider1>
            <div className="divider h-24"></div>
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

    const resInfos = await client.fetch(`*[_type == "infos"]`);
    const dataInfos = await resInfos[0];
    return {
        props: {
            dataAbout,
            dataEvent,
            dataSetting,
            dataInfos,
        },
    };
}
