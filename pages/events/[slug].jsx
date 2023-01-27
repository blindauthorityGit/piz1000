import client, { getAsset } from "../../client";

import Head from "next/head";
import { useState, useEffect, useRef } from "react";

import { Hero1 } from "../../components/Hero/";
import Breadcrumbs from "../../components/Breadcrumbs";
import { ImgText3 } from "../../components/imgText";
import { Info1 } from "../../components/Info";
import { GallerySlider1 } from "../../components/elementSliders";
import { EventSlider1 } from "../../components/elementSliders";
import SocialShare from "../../components/utils/socialShare";
import Favicon from "../../assets/favicon.svg";

const Event = ({ post, dataAll }) => {
    const [url, setUrl] = useState("");

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
        console.log(post, dataAll);
        setUrl(window.location.href);

        setLinkList((prev) => [...prev, { title: post.title, link: post.slug.current }]);
    }, []);

    return (
        <>
            <Head>
                <title>{post.seo.mainSEO.title}</title>
                <meta name="description" content={post.seo.mainSEO.description} />
                <meta
                    name="keywords"
                    content={post?.seo?.mainSEO?.keywords ? post.seo.mainSEO.keywords.map((e) => e) : ""}
                />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <link rel="icon" href={Favicon.src} />
                <meta property="og:type" content="website" />
                <meta property="og:url" content={url} />
                <meta
                    property="og:title"
                    content={
                        post.seo && post.seo.advancedSEO && post.seo.advancedSEO.ogTitle
                            ? post.seo.advancedSEO.ogTitle
                            : post.seo.mainSEO.title
                    }
                />
                <meta
                    property="og:image"
                    content={
                        post.seo && post.seo.advancedSEO && post.seo.advancedSEO.ogImage
                            ? urlFor(post.seo.advancedSEO.ogImage)
                            : null
                    }
                />
                <meta
                    property="og:description"
                    content={
                        post.seo && post.seo.advancedSEO && post.seo.advancedSEO.ogDescription
                            ? post.seo.advancedSEO.ogDescription
                            : null
                    }
                />
                <meta property="og:site_name" content="PIZ 1000 - Pittner Regionalmuseum" />
                <meta property="og:locale" content="de_DE" />
            </Head>
            <Hero1 height="h-[200px] sm:h-[480px]" bgImage={post.mainImage}></Hero1>
            <Breadcrumbs links={linkList}></Breadcrumbs>
            <ImgText3 data={post}>
                <Info1 data={post} bg="bg-[#F9F9F9]"></Info1>
            </ImgText3>
            {post.gallery ? <GallerySlider1 data={post.gallery}></GallerySlider1> : null}
            <div className="divider h-12"></div>
            <SocialShare
                url={url}
                title={
                    post.seo && post.seo.advancedSEO && post.seo.advancedSEO.ogDescription
                        ? post.seo.advancedSEO.ogDescription
                        : post.title
                }
            />
            <div className="divider h-12 sm:h-24"></div>

            <EventSlider1 nonstart events={dataAll}></EventSlider1>
            <div className="divider h-12 sm:h-24"></div>
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
    const dataAll = await resAll
        .filter((e) => e.slug.current !== slug)
        .sort((a, b) => {
            return a.zeit.date.localeCompare(b.zeit.date);
        });
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
