import React, { Component } from 'react';
import GitHubCalendar from 'react-github-calendar';
import { Input, Button } from 'reactstrap';

import { returntypeof } from 'react-redux-typescript';
import { connect } from 'react-redux';
import SideBarCard from '@components/widget/Card';
import { changeUsername } from '@modules/github';
import { RootState } from '@modules/index';

import style from './Github.module.scss';

const mapStateToProps = (state: RootState) => ({
  username: state.github.username,
});
const mapDispatchToProps = (dispatch: any) => ({
  dispatchChangeUsername: (username: string) => dispatch(changeUsername(username)),
});
const statePropTypes = returntypeof(mapStateToProps);
const actionPropTypes = returntypeof(mapDispatchToProps);

type Props = typeof statePropTypes & typeof actionPropTypes
type States = {
  inputUsername: string,
}

const selectLastHalfYear = (contributions: any) => {
  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().getMonth();
  const shownMonths = 6;

  return contributions.filter((day: any) => {
    const date = new Date(day.date);
    const monthOfDay = date.getMonth();

    return (
      date.getFullYear() === currentYear
      && monthOfDay > currentMonth - shownMonths
      && monthOfDay <= currentMonth
    );
  });
};

class Github extends Component<Props, States> {
  static scrollEndPoint() {
    const scrollDiv: HTMLElement | null = window.document.getElementById('scroll');
    if (scrollDiv) {
      scrollDiv.scrollLeft = scrollDiv.scrollWidth;
    }
  }

  constructor(props: any) {
    super(props);

    this.state = {
      inputUsername: '',
    };

    this.setUserName = this.setUserName.bind(this);
    this.onChangeInput = this.onChangeInput.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  componentDidMount() {
    // Github.scrollEndPoint();
  }

  componentDidUpdate() {
    // Github.scrollEndPoint();
  }

  handleKeyPress(e: any) {
    if (e.key === 'Enter') {
      this.setUserName();
    }
  }

  onChangeInput(e: any) {
    const { value: inputUsername } = e.target;

    this.setState(() => ({
      inputUsername,
    }));
  }

  setUserName() {
    const { inputUsername } = this.state;
    const { dispatchChangeUsername } = this.props;
    dispatchChangeUsername(inputUsername);
  }

  render() {
    const { username } = this.props;
    const { inputUsername } = this.state;

    return (
      <SideBarCard header="GITHUB CONTRIBUTE">
        <div id="scroll" className={style.Github__wrapper}>
          {username
            ? (
              <div className={style.Github__scroll}>
                <GitHubCalendar
                  username={username}
                  transformData={selectLastHalfYear}
                  hideTotalCount
                  hideColorLegend
                />
              </div>
            )
            : (
              <div className={style.Github__Input_wrapper}>
                <Input
                  placeholder="Enter Github name"
                  value={inputUsername}
                  onChange={this.onChangeInput}
                  onKeyPress={this.handleKeyPress}
                />
                <Button
                  color="dark"
                  onClick={this.setUserName}
                >
                  Ok
                </Button>
              </div>
            )}
        </div>
      </SideBarCard>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Github);
