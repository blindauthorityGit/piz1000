import { useEffect, useLayoutEffect, useState, useRef } from "react";

import Head from "next/head";
import client from "../client";

import { HeroSlider1 } from "../components/HeroSlider";
import { EventSlider1 } from "../components/elementSliders";
import { BlogGrid1 } from "../components/elementGrid";
import { ImgText1 } from "../components/imgText";
import { Stoerer1, StoererLine } from "../components/stoerer";
import { Logos1 } from "../components/logos";

// AOS
import AOS from "aos";
import "aos/dist/aos.css";

// assets
import Siegel from "../assets/siegelBG2.svg";
import Favicon from "../assets/favicon.svg";

//ImageBuilder
import myConfiguredSanityClient from "../client";

import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder(myConfiguredSanityClient);

function urlFor(source) {
    return builder.image(source);
}

export default function Home({ dataStart, dataEvent, dataBlog, dataSetting }) {
    const [siegelWidth, setSiegelWidth] = useState(0);
    const siegelRef = useRef();

    useEffect(() => {
        setTimeout(() => {
            setSiegelWidth(siegelRef.current.clientWidth);
        }, 0);
        AOS.init({
            duration: 1200,
        });
    }, []);

    return (
        <>
            <Head>
                <title>{dataSetting.title}</title>
                <meta name="description" content={dataSetting.seo.mainSEO.description} />
                <meta name="keywords" content={dataSetting.seo.mainSEO.keywords.map((e) => e)} />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <link rel="icon" href={Favicon.src} />
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
            <div data-aos="fade-right" className="w-full bg-white h-full sm:h-auto">
                <HeroSlider1 slides={dataStart.mainSliders}></HeroSlider1>
            </div>
            <div className="divider h-8"></div>

            <EventSlider1 events={dataEvent}></EventSlider1>
            <div className="divider h-6"></div>
            <div data-aos="fade-up" className="w-full bg-white py-6">
                <BlogGrid1 data={dataBlog} alle></BlogGrid1>
            </div>
            <div className="divider h-12"></div>
            <div data-aos="fade-up">
                <ImgText1 data={dataStart.textImageBoxes[0]}>
                    <div
                        ref={siegelRef}
                        // style={{ left: `-${siegelWidth / 2}px` }}
                        className={`absolute right-[16px]`}
                    >
                        <img src={Siegel.src}></img>
                    </div>
                </ImgText1>
            </div>
            <div className="divider h-12 sm:h-12"></div>
            {/* <StoererLine></StoererLine> */}
            <div data-aos="fade-up">
                <div className="w-full bg-white py-12">
                    <ImgText1 data={dataStart.textImageBoxes[1]} order></ImgText1>
                </div>
            </div>
            <div className="divider h-12 sm:h-12"></div>
            <div data-aos="fade-up">
                <ImgText1 data={dataStart.textImageBoxes[2]}></ImgText1>
                <div className="divider h-12 sm:h-24"></div>
            </div>
            <div data-aos="fade-right">
                <Stoerer1 data={dataStart.linkBox}></Stoerer1>
            </div>
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

    const resBlog = await client.fetch(`*[_type == "blog"]`);
    let dataBlog = await resBlog
        .sort((a, b) => {
            return b._createdAt.localeCompare(a._createdAt);
        })
        .slice(0, 3);

    const resEvent = await client.fetch(`*[_type == "event"]`);
    const dataEvent = await resEvent.sort((a, b) => {
        return a.zeit.date.localeCompare(b.zeit.date);
    });
    return {
        props: {
            dataStart,
            dataBlog,
            dataEvent,
            dataSetting,
        },
    };
}
