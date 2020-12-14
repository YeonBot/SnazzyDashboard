import {getFavoriteList, setFavoriteList} from '../utils/preference';

export const SET_FAVORITE_ITEM = 'SET_FAVORITE_ITEM' as const;

export const setFavoriteItem = (favoriteItem:string) => ({
    type: SET_FAVORITE_ITEM,
    payload: {
        favoriteItem,
    }
});

type FavoriteAction =
    | ReturnType<typeof setFavoriteItem>

export type FavoriteState = {
    list: Array<string>;
}

const initialState: FavoriteState = {
    list: getFavoriteList(),
};

function clock(state: FavoriteState = initialState, action: FavoriteAction) {
    switch (action.type) {
        case SET_FAVORITE_ITEM:
            const favoriteItem = action.payload.favoriteItem;
            setFavoriteList(favoriteItem);
            return {
                ...state,
                list: [...state.list, favoriteItem]
            };
        default:
            return state;
    }
}

export default clock;
