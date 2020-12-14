import {combineReducers} from 'redux';
import clock, {ClockState} from './clock';
import github, {GithubState} from './github';
import favorite, {FavoriteState} from './favorite';

const rootReducer = combineReducers({
    clock,
    github,
    favorite,
})

export default rootReducer;

export type RootState = {
    clock: ClockState
    github: GithubState
    favorite: FavoriteState
}
