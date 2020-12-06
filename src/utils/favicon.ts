import axios from 'axios';

const FAVICON_URL: string = "FAVICON_URL";

export const getFaviconUrlFromDomain = async (domain: string) => {

    const url = new URL(domain);
    const originUrl = url.origin;

    try {
        const faviconObject = JSON.parse(localStorage.getItem(FAVICON_URL) || '{}');

        if (!faviconObject[originUrl]) {
            const {
                data: {
                    icons = [],
                    error
                }
            } = await axios.get(`https://favicon.run.goorm.io/allicons.json?url=${originUrl}`);

            let maxHeight: number = 0;
            let tempUrl: string = '/images/defaultSiteFIle.png';

            icons.forEach((icon: {
                height: number;
                url: string;
                error: any;
            }) => {
                if (!icon.error && icon.height > maxHeight) {
                    maxHeight = icon.height;
                    tempUrl = icon.url
                }
            });

            faviconObject[originUrl] = tempUrl;

            localStorage.setItem(FAVICON_URL, JSON.stringify(faviconObject));
        }
        return faviconObject[originUrl];
    }catch(err){
        //
        return '/images/defaultSiteFIle.png';
    }


}