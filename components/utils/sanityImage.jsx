import Image from "next/image";
//ImageBuilder
import myConfiguredSanityClient from "../../client";

import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder(myConfiguredSanityClient);

function urlFor(source) {
    return builder.image(source);
}

const SanityImage = ({ asset }) => {
    const imageProps = urlFor(asset);

    if (!imageProps) return null;

    return <Image src={urlFor(asset.url())} layout="responsive" sizes="(max-width: 800px) 100vw, 800px" />;
};

export default SanityImage;
