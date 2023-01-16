import "../styles/globals.css";
import { Menu1 } from "../components/menues";
import { Footer1 } from "../components/footer";
import { RxHamburgerMenu } from "react-icons/rx";
import { menuItems, socialMedia } from "../components/menues/config";
import Logo from "../assets/logo.svg";
import { TopLine1 } from "../components/topLine";

function MyApp({ Component, pageProps, dataSetting }) {
    return (
        <>
            <TopLine1 data={dataSetting}></TopLine1>

            <Menu1
                logo={Logo.src}
                menuItems={menuItems}
                socialMedia={socialMedia}
                burgerIcon={<RxHamburgerMenu />}
                onBurgerClick={(e) => {
                    console.log(e);
                }}
            ></Menu1>
            <Component {...pageProps} />
            <Footer1></Footer1>
        </>
    );
}

export async function getStaticProps() {
    const resSetting = await client.fetch(`*[_type == "settings"]`);
    const dataSetting = await resSetting[0];

    const resStart = await client.fetch(`*[_type == "start"]`);
    const dataStart = await resStart[0];

    const resEvent = await client.fetch(`*[_type == "event"]`);
    const dataEvent = await resEvent;
    return {
        props: {
            dataStart,
            dataEvent,
            dataSetting,
        },
    };
}
export default MyApp;
