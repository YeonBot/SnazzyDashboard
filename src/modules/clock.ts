export const TOGGLE_VISIBLE = 'TOGGLE_VISIBLE' as const;

export const toggleVisible = () => ({
    type: TOGGLE_VISIBLE,
});

type ClockAction =
    | ReturnType<typeof toggleVisible>

type ClockState = {
    visible: boolean;
}

const initialState: ClockState = {
    visible: true,
};

function clock(state: ClockState = initialState, action: ClockAction) {
    switch (action.type) {
        case TOGGLE_VISIBLE:
            return { visible: !state.visible};
        default:
            return state;
    }
}

export default clock;



