import {combineReducers} from 'redux';
import clock, {ClockState} from './clock';
import github, {GithubState} from './github';
import favorite, {FavoriteState} from './favorite';
import darkMode , {DarkModeState} from './darkmode';
import todo, {TodoState} from './todo';

const rootReducer = combineReducers({
    clock,
    github,
    favorite,
    darkMode,
    todo,
})

export default rootReducer;

export type RootState = {
    clock: ClockState
    github: GithubState
    favorite: FavoriteState,
    darkMode: DarkModeState,
    todo:TodoState,
}
