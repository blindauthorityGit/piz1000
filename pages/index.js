import { useEffect } from "react";

import Head from "next/head";
import client from "../client";

import { HeroSlider1 } from "../components/HeroSlider";
import { EventSlider1 } from "../components/elementSliders";
import { ImgText1 } from "../components/imgText";
import { Stoerer1 } from "../components/stoerer";
import { Logos1 } from "../components/logos";

//ImageBuilder
import myConfiguredSanityClient from "../client";

import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder(myConfiguredSanityClient);

function urlFor(source) {
    return builder.image(source);
}

export default function Home({ dataStart, dataEvent, dataSetting }) {
    useEffect(() => {
        console.log(dataSetting.logosPartner);
    }, []);

    return (
        <>
            <Head>
                <title>{dataSetting.title}</title>
                <meta name="description" content={dataSetting.seo.mainSEO.description} />
                <meta name="keywords" content={dataSetting.seo.mainSEO.keywords.map((e) => e)} />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <link rel="icon" href={urlFor(dataSetting.favicon)} />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://www.piz1000.at" />
                <meta
                    property="og:image"
                    content={dataSetting.seo.advancedSEO.ogImage ? urlFor(dataSetting.seo.advancedSEO.ogImage) : null}
                />
                <meta
                    property="og:description"
                    content={
                        dataSetting.seo.advancedSEO.ogDescription ? dataSetting.seo.advancedSEO.ogDescription : null
                    }
                />
                <meta property="og:site_name" content="PIZ 1000 - Pittner Regionalmuseum" />
                <meta property="og:locale" content="de_DE" />
            </Head>

            <HeroSlider1 slides={dataStart.mainSliders}></HeroSlider1>
            <div className="divider h-8"></div>

            <EventSlider1 events={dataEvent}></EventSlider1>
            <div className="divider h-12"></div>

            <ImgText1 data={dataStart.textImageBoxes[0]}></ImgText1>
            <div className="divider h-12 sm:h-12"></div>

            <div className="w-full bg-white py-12">
                <ImgText1 data={dataStart.textImageBoxes[1]} order></ImgText1>
            </div>
            <div className="divider h-12 sm:h-12"></div>

            <ImgText1 data={dataStart.textImageBoxes[2]}></ImgText1>
            <div className="divider h-12 sm:h-24"></div>

            <Stoerer1 data={dataStart.linkBox}></Stoerer1>
            <div className="divider h-12 sm:h-12"></div>
            <Logos1 data={dataSetting.logosPartner}></Logos1>
        </>
    );
}

export async function getStaticProps() {
    const resSetting = await client.fetch(`*[_type == "settings"]`);
    const dataSetting = await resSetting[0];

    const resStart = await client.fetch(`*[_type == "start"]{
        ...,
        mainSliders[]{
          ...,
          links{
            external,
            internal->{
              _id,
              _type,
            slug{
              current
            }
            }
          }
        }
      }`);
    const dataStart = await resStart[0];

    const resEvent = await client.fetch(`*[_type == "event"]`);
    const dataEvent = await resEvent.sort((a, b) => {
        return a.zeit.date.localeCompare(b.zeit.date);
    });
    return {
        props: {
            dataStart,

            dataEvent,
            dataSetting,
        },
    };
}
