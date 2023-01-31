import { useEffect, useState } from "react";

import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import MainContainer from "../components/layout/mainContainer";
import Breadcrumbs from "../components/Breadcrumbs";
import client from "../client";

import { HeroSlider1 } from "../components/HeroSlider";
import { EventSlider1 } from "../components/elementSliders";
import { ImgText1, ImgText4 } from "../components/imgText";
import { InfoBox1 } from "../components/infoBoxes";
import Favicon from "../assets/favicon.svg";

//ImageBuilder
import myConfiguredSanityClient from "../client";

import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder(myConfiguredSanityClient);

function urlFor(source) {
    return builder.image(source);
}

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
                <title>{dataSetting.title}</title>
                <meta name="description" content={dataAbout.seo.mainSEO.description} />
                <meta
                    name="keywords"
                    content={dataAbout.seo.mainSEO.keywords && dataAbout.seo.mainSEO.keywords.map((e) => e)}
                />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <link rel="icon" href={Favicon.src} />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://www.piz1000.at" />
                <meta
                    property="og:image"
                    content={dataAbout.seo.advancedSEO.ogImage ? urlFor(dataSetting.seo.advancedSEO.ogImage) : null}
                />
                <meta
                    property="og:description"
                    content={dataAbout.seo.advancedSEO.ogDescription ? dataAbout.seo.advancedSEO.ogDescription : null}
                />
                <meta property="og:site_name" content="PIZ 1000 - Pittner Regionalmuseum" />
                <meta property="og:locale" content="de_DE" />
            </Head>

            <Breadcrumbs links={linkList}></Breadcrumbs>

            <ImgText1 data={dataAbout.textImageBoxes[0]}></ImgText1>
            <div className="divider h-12"></div>
            <div className="w-full bg-white py-12">
                <ImgText1 data={dataAbout.textImageBoxes[1]}></ImgText1>
            </div>
            <div className="divider h-12"></div>

            <ImgText4 data={dataAbout.textImageBoxes[2]}></ImgText4>
            <div className="divider h-24"></div>
            <InfoBox1 data={dataInfos.infoBoxes}></InfoBox1>
            <div className="divider h-12"></div>

            <EventSlider1 events={dataEvent}></EventSlider1>
            <div className="divider h-12"></div>
        </>
    );
}

export async function getStaticProps() {
    const resSetting = await client.fetch(`*[_type == "settings"]`);
    const dataSetting = await resSetting[0];

    const resStart = await client.fetch(`*[_type == "about"]`);
    const dataAbout = await resStart[0];

    const resEvent = await client.fetch(`*[_type == "event"]`);
    const dataEvent = await resEvent.sort((a, b) => {
        return a.zeit.date.localeCompare(b.zeit.date);
    });

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
