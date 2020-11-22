export const getTree = () => {
    return new Promise(resolve => {
        if (process.env.NODE_ENV === 'development') {
            const tree = require('./stub/bookmarks')
            return resolve(tree);
        }
        window.chrome.bookmarks.getTree(([ tree ]) => resolve(tree));
    })
};