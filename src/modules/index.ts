import {combineReducers} from 'redux';
import clock, {ClockState} from './clock';
import github, {GithubState} from './github';

const rootReducer = combineReducers({
    clock,
    github,
})

export default rootReducer;

export type RootState = {
    clock: ClockState
    github: GithubState
}
