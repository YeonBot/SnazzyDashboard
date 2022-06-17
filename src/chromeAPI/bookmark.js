import bookmarksMockData from './stub/bookmarks';

// eslint-disable-next-line import/prefer-default-export
export const getTree = () => new Promise((resolve) => {
  if (process.env.NODE_ENV === 'development') {
    resolve(bookmarksMockData);
  } else {
    window.chrome.bookmarks.getTree(([tree]) => resolve(tree));
  }
});
