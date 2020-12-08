const GITHUB_USERNAME = 'GITHUB_USERNAME';

export const getGithubUserName = () => {
    return localStorage.getItem(GITHUB_USERNAME);
};

export const setGithubUserName = (userName: string) => {
    localStorage.setItem(GITHUB_USERNAME, userName);
}