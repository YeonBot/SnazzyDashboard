import React, { Component } from 'react';

import Clock from '@components/widget/Clock';

type Props = {};
type State = {
  months: number;
  dates: number;
  dayOfWeek: number;
  hours: number;
  minutes: number;
}

class SidebarClock extends Component<Props, State> {
  private timerID = 0;

  constructor(props: any) {
    super(props);

    this.state = {
      months: 0,
      dates: 0,
      dayOfWeek: 0,
      hours: 0,
      minutes: 0,
    };
  }

  componentDidMount() {
    this.tick();
    this.timerID = window.setInterval(
      () => this.tick(),
      1000,
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick = () => {
    const now = new Date();
    const { minutes } = this.state;
    if (minutes !== now.getMinutes()) {
      this.setState({
        months: now.getMonth() + 1,
        dates: now.getDate(),
        dayOfWeek: now.getDay(),
        hours: now.getHours() === 0 ? 12 : now.getHours(),
        minutes: now.getMinutes(),
      });
    }
  };

  render() {
    const {
      months, dates, dayOfWeek, hours, minutes,
    } = this.state;

    return (
      <Clock
        months={months}
        dates={dates}
        dayOfWeek={dayOfWeek}
        hours={hours}
        minutes={minutes}
      />
    );
  }
}

export default SidebarClock;
