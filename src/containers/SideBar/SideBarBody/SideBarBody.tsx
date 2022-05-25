import React, {Component} from 'react';
import {connect} from "react-redux";
import {returntypeof} from "react-redux-typescript";

import SidebarClock from '../SidebarClock';
import Github from '../Github/';
import Todo from '../Todo';

import style from './SideBarBody.module.scss';

type Props = typeof statePropTypes & {toggleSetSidebarOpen: ()=> void};

class SideBarBody extends Component<Props> {
    render() {

        const {clockVisible, githubVisible} = this.props;

        return (
            <div className={style.SideBarBody}>
                {clockVisible && <SidebarClock/>}
                {githubVisible && <Github/>}
                <Todo />
            </div>
        );
    }
}

const mapStateToProps = (state:any) => ({
    clockVisible: state.clock.visible,
    githubVisible: state.github.visible,
});

const statePropTypes = returntypeof(mapStateToProps)

export default connect<typeof statePropTypes,any,any>(
    mapStateToProps,
    null
)(SideBarBody);