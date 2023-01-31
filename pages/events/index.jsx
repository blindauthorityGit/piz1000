import client, { getAsset } from "../../client";

import Head from "next/head";
import { useState, useEffect, useRef } from "react";

import { CalenderGrid1 } from "../../components/calenderGrid";
import { ElementGrid1 } from "../../components/elementGrid";

//ImageBuilder
import myConfiguredSanityClient from "../../client";

import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder(myConfiguredSanityClient);

function urlFor(source) {
    return builder.image(source);
}

const Events = ({ dataAll }) => {
    const [linkList, setLinkList] = useState([
        {
            title: "Home",
            link: "/",
        },
        {
            title: "Events",
            link: "./events",
        },
    ]);

    useEffect(() => {
        console.log(dataAll);
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
                <link rel="icon" href={urlFor(dataSetting.favicon)} />
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
            <CalenderGrid1 data={dataAll}></CalenderGrid1>
            <ElementGrid1 data={dataAll}></ElementGrid1>
        </>
    );
};

export default Events;

export const getStaticProps = async (context) => {
    const resAll = await client.fetch(`*[_type in ["event"] ]`);
    const dataAll = await resAll.sort((a, b) => {
        return a.zeit.date.localeCompare(b.zeit.date);
    });
    // const dataAll = await resAll.sort((a, b) =>
    //     a._createdAt < b._createdAt ? -1 : a._createdAt > b._createdAt ? 1 : 0
    // );

    return {
        props: {
            dataAll,
        },
    };
};
