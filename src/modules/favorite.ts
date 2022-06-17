import { getFavoriteList, setFavoriteList, updateFavoriteList } from '../utils/preference';

export const SET_FAVORITE_ITEM = 'SET_FAVORITE_ITEM' as const;
export const DELETE_FAVORITE_ITEM = 'DELETE_FAVORITE_ITEM' as const;

export const setFavoriteItem = (favoriteItem: string) => ({
  type: SET_FAVORITE_ITEM,
  payload: {
    favoriteItem,
  },
});

export const deleteFavoriteItem = (favoriteItem: string) => ({
  type: DELETE_FAVORITE_ITEM,
  payload: {
    favoriteItem,
  },
});

type FavoriteAction =
  | ReturnType<typeof setFavoriteItem>
  | ReturnType<typeof deleteFavoriteItem>

export type FavoriteState = {
  list: Array<string>;
}

const initialState: FavoriteState = {
  list: getFavoriteList(),
};

function clock(state: FavoriteState = initialState, action: FavoriteAction) {
  switch (action.type) {
    case SET_FAVORITE_ITEM: {
      const { favoriteItem } = action.payload;
      setFavoriteList(favoriteItem);
      return {
        ...state,
        list: [...state.list, favoriteItem],
      };
    }
    case DELETE_FAVORITE_ITEM: {
      const { favoriteItem } = action.payload;
      const list = state.list.filter((item) => item !== favoriteItem);
      updateFavoriteList(list);
      return {
        ...state,
        list,
      };
    }
    default:
      return state;
  }
}

export default clock;
