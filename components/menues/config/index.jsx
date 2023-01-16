import { FaFacebook, FaInstagram } from "react-icons/fa";

const menuItems = [
    {
        title: "Museum",
        slug: "museum",
        subMenu: true,
        subMenuItems: [
            {
                title: "Über uns",
                slug: "ueberuns",
            },
            {
                title: "Sammlung",
                slug: "sammlung",
            },
            {
                title: "Leitbild",
                slug: "leitbild",
            },
            {
                title: "360° Besuch",
                slug: "360besuch",
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
        slug: "programm",
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
