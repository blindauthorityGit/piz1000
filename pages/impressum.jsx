import { useEffect, useState } from "react";

import Head from "next/head";

import Breadcrumbs from "../components/Breadcrumbs";
import client from "../client";

import { Logos1 } from "../components/logos";
import { PortableText } from "@portabletext/react";

export default function Besucher({ dataImpressum, dataEvent, dataSetting, dataInfos }) {
    const [linkList, setLinkList] = useState([
        {
            title: "Home",
            link: "/",
        },
        {
            title: "Impressum",
            link: "/impressum",
        },
    ]);
    useEffect(() => {
        console.log(dataImpressum);
    }, []);

    return (
        <>
            <Head>
                <title>PIZ 1000 - Impressum</title>
            </Head>

            <Breadcrumbs links={linkList}></Breadcrumbs>
            <div className="container m-auto grid grid-cols-12 mb-12 mt-8">
                <div className="col-span-12 px-8 sm:px-16">
                    <h2 className="font-oswald font-bold text-3xl mb-6">Impressum </h2>
                    <PortableText value={dataImpressum.content} />
                </div>
            </div>
            <Logos1 data={dataSetting[0].logosPartner}></Logos1>
        </>
    );
}

export async function getStaticProps() {
    const resImpressum = await client.fetch(`*[_type == "impressum"]`);
    const dataImpressum = await resImpressum[0];

    const resSetting = await client.fetch(`*[_type == "settings"]`);
    const dataSetting = await resSetting;

    const resEvent = await client.fetch(`*[_type == "event"]`);
    const dataEvent = await resEvent.sort((a, b) => {
        return a.zeit.date.localeCompare(b.zeit.date);
    });

    const resInfos = await client.fetch(`*[_type == "infos"]`);
    const dataInfos = await resInfos[0];
    return {
        props: {
            dataImpressum,
            dataSetting,
        },
    };
}
