import {
  getGithubVisible, setGithubVisible, getGithubUserName, setGithubUserName,
} from '../utils/preference';

export const TOGGLE_GITHUB_VISIBLE = 'TOGGLE_GITHUB_VISIBLE' as const;
export const CHANGE_GITHUB_USERNAME = 'CHANGE_GITHUB_USERNAME' as const;

export const toggleVisible = () => ({
  type: TOGGLE_GITHUB_VISIBLE,
});

export const changeUsername = (username: string) => ({
  type: CHANGE_GITHUB_USERNAME,
  payload: {
    username,
  },
});

type GithubAction =
  | ReturnType<typeof toggleVisible>
  | ReturnType<typeof changeUsername>

export type GithubState = {
  visible: boolean;
  username: string;
}

const initialState: GithubState = {
  visible: getGithubVisible(),
  username: getGithubUserName(),
};

function clock(state: GithubState = initialState, action: GithubAction) {
  switch (action.type) {
    case TOGGLE_GITHUB_VISIBLE:
      setGithubVisible(!state.visible);
      return {
        ...state,
        visible: !state.visible,
      };
    case CHANGE_GITHUB_USERNAME:
      setGithubUserName(action.payload.username);
      return {
        ...state,
        username: action.payload.username,
      };
    default:
      return state;
  }
}

export default clock;
