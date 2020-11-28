export const SET_TIME = 'SET_TIME' as const;

export const setTime = (months:number,days:number, dayOfWeek:string,hours:number, minutes:number) => ({
    type: SET_TIME,
    payload : {
        months,days, dayOfWeek,hours, minutes
    }
});

type ClockAction =
    | ReturnType<typeof setTime>

type ClockState = {
    months: number;
    days: number;
    dayOfWeek: string;
    hours: number;
    minutes: number;
}

const initialState: ClockState = {
    months: 1,
    days: 1,
    dayOfWeek: '월',
    hours: 0,
    minutes: 0,
};

function clock(state: ClockState = initialState, action: ClockAction) {
    switch (action.type) {
        case SET_TIME:
            return { ...action.payload };
        default:
            return state;
    }
}

export default clock;



