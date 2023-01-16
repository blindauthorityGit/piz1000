import client, { getAsset } from "../../client";

import Head from "next/head";
import { useState, useEffect, useRef } from "react";

import { Hero1 } from "../../components/Hero/";
import Breadcrumbs from "../../components/Breadcrumbs";
import { ImgText3 } from "../../components/imgText";
import { Info1 } from "../../components/info";
import { GallerySlider1 } from "../../components/elementSliders";
import { EventSlider1 } from "../../components/elementSliders";

const Event = ({ post, dataAll }) => {
    const [linkList, setLinkList] = useState([
        {
            title: "Home",
            link: "/",
        },
        {
            title: "Events",
            link: "/events",
        },
    ]);

    useEffect(() => {
        console.log(post.gallery, dataAll);
        setLinkList((prev) => [...prev, { title: post.title, link: post.slug.current }]);
    }, []);

    return (
        <>
            <Head>
                <title>{post.seo.title}</title>
                <meta name="description" content={post.seo.description} />
            </Head>
            <Hero1 height="h-[480px]" bgImage={post.mainImage}></Hero1>
            <Breadcrumbs links={linkList}></Breadcrumbs>
            <ImgText3 data={post}>
                <Info1 data={post} bg="bg-[#F9F9F9]"></Info1>
            </ImgText3>
            {post.gallery ? <GallerySlider1 data={post.gallery}></GallerySlider1> : null}

            <div className="divider h-24"></div>

            <EventSlider1 nonstart events={dataAll}></EventSlider1>
            <div className="divider h-24"></div>
        </>
    );
};

export default Event;

export const getStaticPaths = async () => {
    const res = await client.fetch(`*[_type in ["event"] ]`);
    const data = await res;

    const paths = data.map((e) => {
        return {
            params: { slug: e.slug.current },
        };
    });
    return {
        paths,
        fallback: false,
    };
};

export const getStaticProps = async (context) => {
    const slug = context.params.slug;
    const res = await client.fetch(`*[_type == "event" && slug.current == "${slug}"] 
    `);
    const data = await res;

    const resAll = await client.fetch(`*[_type in ["event"] ]`);
    const dataAll = await resAll.filter((e) => e.slug.current !== slug);
    // const dataAll = await resAll.sort((a, b) =>
    //     a._createdAt < b._createdAt ? -1 : a._createdAt > b._createdAt ? 1 : 0
    // );

    return {
        props: {
            post: data[0],
            dataAll,
        },
    };
};
