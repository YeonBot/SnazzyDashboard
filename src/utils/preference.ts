import { Todo as TodoType } from '../common/type';

const CLOCK_VISIBLE = 'CLOCK_VISIBLE';
const GITHUB_USERNAME = 'GITHUB_USERNAME';
const GITHUB_VISIBLE = 'GITHUB_VISIBLE';
const FAVORITE_LIST = 'FAVORITE_LIST';
const DARK_MODE = 'DARK_MODE';
const TODO_LIST = 'TODO_LIST';

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
    const daroModeJson: string = localStorage.getItem(DARK_MODE) || 'true';
    return JSON.parse(daroModeJson);
};

export const setDarkMode = (isDarkMode: boolean) => {
    const daroModeJson = JSON.stringify(isDarkMode);
    localStorage.setItem(DARK_MODE, daroModeJson);
};

export const getTodoList = () => {
    const todoJson = localStorage.getItem(TODO_LIST) || '[]';
    return JSON.parse(todoJson);
}

export const addTodoList = (todo: TodoType) => {
    const todoJson = localStorage.getItem(TODO_LIST) || '[]';
    const todoList = JSON.parse(todoJson);
    todoList.push(todo);
    localStorage.setItem(TODO_LIST, JSON.stringify(todoList));
}