import { useEffect, useState } from "react";

import Head from "next/head";

import Breadcrumbs from "../components/Breadcrumbs";
import client from "../client";

import { EventSlider1 } from "../components/elementSliders";
import { SammlungSlider1 } from "../components/elementSliders";
import { ImgText2 } from "../components/imgText";

export default function Sammlungen({ dataSammlungen, dataEvent, dataSetting, dataInfos }) {
    const [linkList, setLinkList] = useState([
        {
            title: "Home",
            link: "/",
        },
        {
            title: "Sammlungen",
            link: "/sammlungen",
        },
    ]);
    useEffect(() => {
        console.log(dataSammlungen, dataSetting, dataInfos);
    }, []);

    return (
        <>
            <Head>
                <title>Site title</title>
            </Head>

            <Breadcrumbs links={linkList}></Breadcrumbs>
            <SammlungSlider1 data={dataSammlungen.sammlungenArray}></SammlungSlider1>
            <div className="divider h-12"></div>

            <ImgText2 data={dataSammlungen}></ImgText2>
            <div className="divider h-24"></div>

            <EventSlider1 events={dataEvent}></EventSlider1>
            <div className="divider h-24"></div>
        </>
    );
}

export async function getStaticProps() {
    const resSetting = await client.fetch(`*[_type == "settings"]`);
    const dataSetting = await resSetting[0];

    const resSammlungen = await client.fetch(`*[_type == "sammlungen"]`);
    const dataSammlungen = await resSammlungen[0];

    const resEvent = await client.fetch(`*[_type == "event"]`);
    const dataEvent = await resEvent;

    const resInfos = await client.fetch(`*[_type == "infos"]`);
    const dataInfos = await resInfos[0];
    return {
        props: {
            dataSammlungen,
            dataEvent,
            dataSetting,
            dataInfos,
        },
    };
}
