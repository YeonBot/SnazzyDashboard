import axios from 'axios';

const FAVICON_URL: string = "FAVICON_URL";

export const getFaviconUrlFromDomain = async (domain: string) => {

    const faviconObject = JSON.parse(localStorage.getItem(FAVICON_URL) || '{}');

    if (!faviconObject[domain]) {
        const {data :{
            icons = []
        }} = await axios.get(`https://favicon.run.goorm.io/allicons.json?url=${domain}`);

        let maxHeight:number = 0;
        let tempUrl: string = '';

        icons.forEach((icon: {
            height: number;
            url: string;
            error: any;
        })=>{
            if(!icon.error && icon.height > maxHeight){
                maxHeight = icon.height;
                tempUrl = icon.url
            }
        });

        faviconObject[domain] = tempUrl;

        localStorage.setItem(FAVICON_URL, JSON.stringify(faviconObject));
    }

    return faviconObject[domain];
}