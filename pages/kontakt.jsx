import { useEffect, useState } from "react";

import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import MainContainer from "../components/layout/mainContainer";
import Breadcrumbs from "../components/Breadcrumbs";
import client from "../client";
import { Hero1 } from "../components/Hero/";

import { Form1 } from "../components/contactForm";
import { EventSlider1 } from "../components/elementSliders";
import { BasicText1 } from "../components/basicComps";
import { BasicText2 } from "../components/basicComps";
import { InfoBox1 } from "../components/infoBoxes";
import { Info2 } from "../components/Info";
import { Map1 } from "../components/maps";
import { Logos1 } from "../components/logos";

export default function Besucher({ dataBesucher, dataEvent, dataSetting, dataInfos }) {
    const [linkList, setLinkList] = useState([
        {
            title: "Home",
            link: "/",
        },
        {
            title: "Kontakt",
            link: "/kontakt",
        },
    ]);
    useEffect(() => {
        console.log(dataBesucher, dataSetting, dataInfos);
    }, []);

    return (
        <>
            <Head>
                <title>PIZ 1000 - Kontakt</title>
            </Head>

            <Breadcrumbs links={linkList}></Breadcrumbs>
            <Form1>
                <Info2 data={dataSetting} bg="bg-[#F9F9F9]"></Info2>
            </Form1>
            <Map1></Map1>
            <div className="divider h-12"></div>

            <BasicText2 title="Wie komme ich nach Pitten?" data={dataSetting.kontakt}></BasicText2>

            <div className="divider h-24"></div>
            <div data-aos="fade-up" className="w-full bg-white py-6">
                <InfoBox1 data={dataInfos.infoBoxes}></InfoBox1>
            </div>
            <div className="divider h-12"></div>
            <BasicText1 data={dataBesucher.basicTexts[0]}></BasicText1>
            <div className="divider h-12"></div>

            <BasicText1 data={dataBesucher.basicTexts[1]}></BasicText1>
            <div className="divider h-24"></div>

            <EventSlider1 events={dataEvent}></EventSlider1>
            <div className="divider h-12 sm:h-12"></div>
            <Logos1 data={dataSetting.logosPartner}></Logos1>
        </>
    );
}

export async function getStaticProps() {
    const resSetting = await client.fetch(`*[_type == "settings"]`);
    const dataSetting = await resSetting[0];

    const resBesucher = await client.fetch(`*[_type == "besucher"]`);
    const dataBesucher = await resBesucher[0];

    const resEvent = await client.fetch(`*[_type == "event"]`);
    const dataEvent = await resEvent.sort((a, b) => {
        return a.zeit.date.localeCompare(b.zeit.date);
    });

    const resInfos = await client.fetch(`*[_type == "infos"]`);
    const dataInfos = await resInfos[0];
    return {
        props: {
            dataBesucher,
            dataEvent,
            dataSetting,
            dataInfos,
        },
        revalidate: 1, // 10 seconds
    };
}
