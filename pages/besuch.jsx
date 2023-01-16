import { useEffect, useState } from "react";

import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import MainContainer from "../components/layout/mainContainer";
import Breadcrumbs from "../components/Breadcrumbs";
import client from "../client";
import { Hero1 } from "../components/Hero/";

import { HeroSlider1 } from "../components/HeroSlider";
import { EventSlider1 } from "../components/elementSliders";
import { BasicText1 } from "../components/basicComps";
import { InfoBox1 } from "../components/infoBoxes";
import { Stoerer1 } from "../components/stoerer";

export default function Besucher({ dataBesucher, dataEvent, dataSetting, dataInfos }) {
    const [linkList, setLinkList] = useState([
        {
            title: "Home",
            link: "/",
        },
        {
            title: "Besucher",
            link: "/besucher",
        },
    ]);
    useEffect(() => {
        console.log(dataBesucher, dataSetting, dataInfos);
    }, []);

    return (
        <>
            <Head>
                <title>Site title</title>
            </Head>

            <Breadcrumbs links={linkList}></Breadcrumbs>
            <Hero1 height="h-[480px]" bgImage={dataBesucher.mainImage}></Hero1>

            <div className="divider h-24"></div>
            <InfoBox1 data={dataInfos.infoBoxes}></InfoBox1>
            <div className="divider h-12"></div>
            <BasicText1 data={dataBesucher.basicTexts[0]}></BasicText1>
            <div className="divider h-12"></div>

            <BasicText1 data={dataBesucher.basicTexts[1]}></BasicText1>
            <div className="divider h-24"></div>

            <EventSlider1 events={dataEvent}></EventSlider1>
            <div className="divider h-24"></div>
        </>
    );
}

export async function getStaticProps() {
    const resSetting = await client.fetch(`*[_type == "settings"]`);
    const dataSetting = await resSetting[0];

    const resBesucher = await client.fetch(`*[_type == "besucher"]`);
    const dataBesucher = await resBesucher[0];

    const resEvent = await client.fetch(`*[_type == "event"]`);
    const dataEvent = await resEvent;

    const resInfos = await client.fetch(`*[_type == "infos"]`);
    const dataInfos = await resInfos[0];
    return {
        props: {
            dataBesucher,
            dataEvent,
            dataSetting,
            dataInfos,
        },
    };
}
