import { FaFacebook, FaInstagram } from "react-icons/fa";

const menuItems = [
    {
        title: "Museum",
        slug: "museum",
        subMenu: true,
        subMenuItems: [
            {
                title: "Über uns",
                slug: "about",
            },
            {
                title: "Sammlung",
                slug: "sammlungen",
            },
            {
                title: "Leitbild",
                slug: "leitbild",
                external: true,
            },
            {
                title: "360° Besuch",
                slug: "https://pitten.panaustria.at/index.html?startpano=pano289",
                external: true,
            },
        ],
    },
    {
        title: "Besuch",
        slug: "besuch",
        subMenu: false,
    },
    {
        title: "Programm",
        slug: "events",
        subMenu: false,
    },
    {
        title: "Kontakt",
        slug: "kontakt",
        subMenu: false,
    },
];
const socialMedia = [
    {
        title: "Facebook",
        link: "http://www.facebook.com",
        icon: <FaFacebook></FaFacebook>,
    },
    {
        title: "Inbstagram",
        link: "http://www.instagram.com",
        icon: <FaInstagram></FaInstagram>,
    },
];

export { menuItems, socialMedia };
