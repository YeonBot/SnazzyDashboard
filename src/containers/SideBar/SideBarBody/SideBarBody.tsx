import React, { Component } from 'react';
import { connect } from 'react-redux';
import { returntypeof } from 'react-redux-typescript';

import SidebarClock from '@containers/sideBar/SidebarClock';
import Github from '@containers/sideBar/Github';
import Todo from '@containers/sideBar/Todo';

import style from './SideBarBody.module.scss';

const mapStateToProps = (state: any) => ({
  clockVisible: state.clock.visible,
  githubVisible: state.github.visible,
});

const statePropTypes = returntypeof(mapStateToProps);
type Props = typeof statePropTypes;

// eslint-disable-next-line react/prefer-stateless-function
class SideBarBody extends Component<Props> {
  render() {
    const { clockVisible, githubVisible } = this.props;

    return (
      <div className={style.SideBarBody}>
        {clockVisible && <SidebarClock />}
        {githubVisible && <Github />}
        <Todo />
      </div>
    );
  }
}

export default connect<typeof statePropTypes, any, any>(
  mapStateToProps,
  null,
)(SideBarBody);
