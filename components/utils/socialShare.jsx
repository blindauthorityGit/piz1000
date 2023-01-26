import {
    FacebookShareButton,
    FacebookIcon,
    WhatsappShareButton,
    WhatsappIcon,
    TelegramShareButton,
    TelegramIcon,
    EmailShareButton,
    EmailIcon,
    FacebookMessengerShareButton,
    FacebookMessengerIcon,
} from "next-share";

const SocialShare = ({ url, quote, title, image }) => {
    return (
        <div className="social-share-container container m-auto px-8 md:px-24">
            <h3 className="font-oswald text-xl mb-4 font-bold">Teilen Sie diesen Beitrag</h3>
            <div className="mr-6 inline">
                <FacebookShareButton url={url} quote={quote} className="mr-6">
                    <FacebookIcon size={32} round />
                </FacebookShareButton>
            </div>
            <div className="mr-6 inline">
                <FacebookMessengerShareButton url={url} appId={""}>
                    <FacebookMessengerIcon size={32} round />
                </FacebookMessengerShareButton>
            </div>
            <div className="mr-6 inline">
                <WhatsappShareButton url={url} title={quote} separator=":: ">
                    <WhatsappIcon size={32} round />
                </WhatsappShareButton>
            </div>
            <div className="mr-6 inline">
                <TelegramShareButton url={url} title={quote}>
                    <TelegramIcon size={32} round />
                </TelegramShareButton>
            </div>
            <div className="mr-6 inline">
                <EmailShareButton url={url} subject={title} body={quote}>
                    <EmailIcon size={32} round />
                </EmailShareButton>
            </div>
        </div>
    );
};

export default SocialShare;
