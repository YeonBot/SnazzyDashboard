export const getTree = () => {
    return new Promise(resolve => {
        window.chrome.bookmarks.getTree(([ tree ]) => resolve(tree));
    })
};