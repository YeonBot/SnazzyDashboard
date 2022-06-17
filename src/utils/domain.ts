import axios from 'axios';

const FAVICON_URL = 'FAVICON_URL';
export const DEFAULT_URL = '/images/defaultSiteFIle.png';

export const getTitleFronDomain = async (domain: string) => {
  const forTitle = domain.split('://')[1];
  if (!forTitle) {
    return '';
  }

  const { data } = await axios.get(`https://title.mihir.ch/${forTitle}`);

  return data || forTitle;
};

export const validURLCheck = (domain: string) => {
  try {
    const url = new URL(domain);
    return url.href;
  } catch (err) {
    console.log(err);
  }

  try {
    const url = new URL(`https://${domain}`);
    return url.href;
  } catch (err) {
    console.log(err);
  }

  return '';
};

export const getFaviconUrlFromDomain = async (domain: string) => {
  try {
    let originUrl = '';
    try {
      const url = new URL(domain);
      originUrl = url.origin;
    } catch (e) {
      originUrl = domain;
    }

    const faviconObject = JSON.parse(localStorage.getItem(FAVICON_URL) || '{}');

    if (!faviconObject[originUrl]) {
      const {
        data: {
          icons = [],
        },
      } = await axios.get(`https://faviconico.run.goorm.io/allicons.json?url=${originUrl}`);

      let maxHeight = 0;
      let tempUrl: string = DEFAULT_URL;

      icons.forEach((icon: {
        height: number;
        url: string;
        error: any;
      }) => {
        if (!icon.error && icon.height > maxHeight) {
          maxHeight = icon.height;
          tempUrl = icon.url;
        }
      });

      faviconObject[originUrl] = tempUrl;
      localStorage.setItem(FAVICON_URL, JSON.stringify(faviconObject));
    }
    return faviconObject[originUrl];
  } catch (err) {
    console.log(err);
    return DEFAULT_URL;
  }
};
