import { useEffect, useState } from "react";

import Head from "next/head";

import Breadcrumbs from "../components/Breadcrumbs";
import client from "../client";
import Favicon from "../assets/favicon.svg";

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
                <title>{dataSammlungen.seo.mainSEO.title}</title>
                <meta name="description" content={dataSammlungen.seo.mainSEO.description} />
                <meta
                    name="keywords"
                    content={
                        dataSammlungen?.seo?.mainSEO?.keywords ? dataSammlungen.seo.mainSEO.keywords.map((e) => e) : ""
                    }
                />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <link rel="icon" href={Favicon.src} />
                <meta property="og:type" content="website" />
                <meta property="og:url" content={"https://www.piz1000.at/sammlungen"} />
                <meta
                    property="og:image"
                    content={
                        dataSammlungen.seo && dataSammlungen.seo.advancedSEO && dataSammlungen.seo.advancedSEO.ogImage
                            ? urlFor(dataSammlungen.seo.advancedSEO.ogImage)
                            : null
                    }
                />
                <meta
                    property="og:description"
                    content={
                        dataSammlungen.seo &&
                        dataSammlungen.seo.advancedSEO &&
                        dataSammlungen.seo.advancedSEO.ogDescription
                            ? dataSammlungen.seo.advancedSEO.ogDescription
                            : null
                    }
                />
                <meta property="og:site_name" content="PIZ 1000 - Pittner Regionalmuseum" />
                <meta property="og:locale" content="de_DE" />
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
    const dataEvent = await resEvent.sort((a, b) => {
        return a.zeit.date.localeCompare(b.zeit.date);
    });

    const resInfos = await client.fetch(`*[_type == "infos"]`);
    const dataInfos = await resInfos[0];
    return {
        props: {
            dataSammlungen,
            dataEvent,
            dataSetting,
            dataInfos,
        },
        revalidate: 1, // 10 seconds
    };
}
