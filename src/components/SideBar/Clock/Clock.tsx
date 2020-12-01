import React from 'react';

import {DATE_ARR} from "../../../constants/date";

import style from './Clock.module.scss';

type ClockProps = {
    months: number;
    dates: number;
    dayOfWeek: number;
    hours: number;
    minutes: number;
};

function Clock({
                   months,
                   dates,
                   dayOfWeek,
                   hours,
                   minutes,
               }: ClockProps) {

    const formatMinutes = minutes.toString().length < 2 ? '0' + minutes: minutes;

    return (
        <div>
            <div className={style.Clock__time}>
                {hours}:{formatMinutes}
            </div>
            <div className={style.Clock__date}>
                {months}월 {dates}일 {DATE_ARR[dayOfWeek]}요일
            </div>
        </div>
    );
}

export default Clock;