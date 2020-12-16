import {getClockVisible,setClockVisible} from '../utils/preference';

export const TOGGLE_CLOCK_VISIBLE = 'TOGGLE_CLOCK_VISIBLE' as const;

export const toggleVisible = () => ({
    type: TOGGLE_CLOCK_VISIBLE,
});

type ClockAction =
    | ReturnType<typeof toggleVisible>

export type ClockState = {
    visible: boolean;
}

const initialState: ClockState = {
    visible: getClockVisible(),
};

function clock(state: ClockState = initialState, action: ClockAction) {
    switch (action.type) {
        case TOGGLE_CLOCK_VISIBLE:
            const newVisible = !state.visible;
            setClockVisible(newVisible);
            return {
                ...state,
                visible: newVisible
            };
        default:
            return state;
    }
}

export default clock;
