const CLOCK_VISIBLE = 'CLOCK_VISIBLE';
const GITHUB_USERNAME = 'GITHUB_USERNAME';
const GITHUB_VISIBLE = 'GITHUB_VISIBLE';
const FAVORITE_LIST = 'FAVORITE_LIST';
const DARK_MODE = 'DARK_MODE';

export const getClockVisible = () => {
    const stringVisible: string = localStorage.getItem(CLOCK_VISIBLE) || 'true';
    return JSON.parse(stringVisible);
};

export const setClockVisible = (visible: boolean) => {
    const stringVisible = JSON.stringify(visible);
    localStorage.setItem(CLOCK_VISIBLE, stringVisible);
}

export const getGithubUserName = () => {
    return localStorage.getItem(GITHUB_USERNAME) || '';
};

export const setGithubUserName = (userName: string) => {
    localStorage.setItem(GITHUB_USERNAME, userName);
}

export const getGithubVisible = () => {
    const stringVisible: string = localStorage.getItem(GITHUB_VISIBLE) || 'true';
    return JSON.parse(stringVisible);
};

export const setGithubVisible = (visible: boolean) => {
    const stringVisible = JSON.stringify(visible);
    localStorage.setItem(GITHUB_VISIBLE, stringVisible);
};

export const getFavoriteList = () => {
    const stringFavorite = localStorage.getItem(FAVORITE_LIST) || '[]';
    return JSON.parse(stringFavorite);
};

export const setFavoriteList = (favorite: string) => {
    const stringFavorite = localStorage.getItem(FAVORITE_LIST) || '[]';
    const arrayFavorite = JSON.parse(stringFavorite);
    arrayFavorite.push(favorite);
    localStorage.setItem(FAVORITE_LIST, JSON.stringify(arrayFavorite));
};

export const updateFavoriteList = (favoriteList: Array<string>) => {
    localStorage.setItem(FAVORITE_LIST, JSON.stringify(favoriteList));
};

export const getDarkMode = () => {
    const stringDarkMode: string = localStorage.getItem(DARK_MODE) || 'true';
    return JSON.parse(stringDarkMode);
};

export const setDarkMode = (darkMode: boolean) => {
    const stringDarkMode = JSON.stringify(darkMode);
    localStorage.setItem(DARK_MODE, stringDarkMode);
};
