import { getDarkMode, setDarkMode } from '@utils/preference';

export const TOGGLE_DARK_MODE = 'TOGGLE_DARK_MODE' as const;

export const toggleDarkMode = () => ({
  type: TOGGLE_DARK_MODE,
});

type DarkModeAction =
  | ReturnType<typeof toggleDarkMode>

export type DarkModeState = {
  darkMode: boolean;
}

const initialState: DarkModeState = {
  darkMode: getDarkMode(),
};

function darkMode(state: DarkModeState = initialState, action: DarkModeAction) {
  switch (action.type) {
    case TOGGLE_DARK_MODE: {
      const newDarkMode = !state.darkMode;
      setDarkMode(newDarkMode);
      return {
        ...state,
        darkMode: newDarkMode,
      };
    }
    default:
      return state;
  }
}

export default darkMode;
