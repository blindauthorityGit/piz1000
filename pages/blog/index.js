import client, { getAsset } from "../../client";

import Head from "next/head";
import { useState, useEffect, useRef } from "react";

import { CalenderGrid1 } from "../../components/calenderGrid";
import { BlogGrid1 } from "../../components/elementGrid";

//ImageBuilder
import myConfiguredSanityClient from "../../client";

import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder(myConfiguredSanityClient);

function urlFor(source) {
    return builder.image(source);
}

const Blog = ({ dataAll }) => {
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
                {/* <title>{dataSetting.title}</title>
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
                <meta property="og:locale" content="de_DE" /> */}
            </Head>
            <BlogGrid1 data={dataAll}></BlogGrid1>
        </>
    );
};

export default Blog;

export const getStaticProps = async (context) => {
    const resAll = await client.fetch(`*[_type in ["blog"] ]`);
    const dataAll = await resAll.sort((a, b) => {
        return b._createdAt.localeCompare(a._createdAt);
    });
    // const dataAll = await resAll.sort((a, b) =>
    //     a._createdAt < b._createdAt ? -1 : a._createdAt > b._createdAt ? 1 : 0
    // );

    return {
        props: {
            dataAll,
        },
        revalidate: 1, // 10 seconds

    };
};
