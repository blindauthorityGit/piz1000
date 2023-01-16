import client, { getAsset } from "../../client";

import Head from "next/head";
import { useState, useEffect, useRef } from "react";

import { Hero1 } from "../../components/Hero/";
import Breadcrumbs from "../../components/Breadcrumbs";
import { CalenderGrid1 } from "../../components/calenderGrid";
import { ElementGrid1 } from "../../components/elementGrid";
import { Info1 } from "../../components/info";
import { GallerySlider1 } from "../../components/elementSliders";
import { EventSlider1 } from "../../components/elementSliders";

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
                {/* <title>{post.seo.title}</title>
                <meta name="description" content={post.seo.description} /> */}
            </Head>
            <CalenderGrid1 data={dataAll}></CalenderGrid1>
            <ElementGrid1 data={dataAll}></ElementGrid1>
        </>
    );
};

export default Events;

export const getStaticProps = async (context) => {
    const resAll = await client.fetch(`*[_type in ["event"] ]`);
    const dataAll = await resAll;
    // const dataAll = await resAll.sort((a, b) =>
    //     a._createdAt < b._createdAt ? -1 : a._createdAt > b._createdAt ? 1 : 0
    // );

    return {
        props: {
            dataAll,
        },
    };
};
