import client, { getAsset } from "../../client";

import Head from "next/head";
import { useState, useEffect, useRef } from "react";

import { Hero1 } from "../../components/Hero/";
import Breadcrumbs from "../../components/Breadcrumbs";
import { ImgText5 } from "../../components/imgText";
import { Info1 } from "../../components/Info";
import { GallerySlider1 } from "../../components/elementSliders";
import { EventSlider1 } from "../../components/elementSliders";

const Blog = ({ post, dataAll }) => {
    const [linkList, setLinkList] = useState([
        {
            title: "Home",
            link: "/",
        },
        {
            title: "Blog",
            link: "/blog",
        },
    ]);

    useEffect(() => {
        console.log(post.gallery, dataAll);
        setLinkList((prev) => [...prev, { title: post.title, link: post.slug.current }]);
    }, []);

    return (
        <>
            <Head>
                {/* <title>{post.seo.title}</title> */}
                {/* <meta name="description" content={post.seo.description} /> */}
            </Head>
            <Hero1 height="h-[480px]" bgImage={post.mainImage}></Hero1>
            <Breadcrumbs links={linkList}></Breadcrumbs>
            <ImgText5 data={post}></ImgText5>
            {post.gallery ? <GallerySlider1 data={post.gallery}></GallerySlider1> : null}

            <div className="divider h-24"></div>

            {/* <EventSlider1 nonstart events={dataAll}></EventSlider1> */}
            <div className="divider h-24"></div>
        </>
    );
};

export default Blog;

export const getStaticPaths = async () => {
    const res = await client.fetch(`*[_type in ["blog"] ]`);
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
    const res = await client.fetch(`*[_type == "blog" && slug.current == "${slug}"] 
    `);
    const data = await res;

    const resAll = await client.fetch(`*[_type in ["blog"] ]`);
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
