import React, {Component} from 'react';
import {connect} from "react-redux";

import SidebarClock from '../SidebarClock';
import Github from '../Github/';

import style from './SideBarBody.module.scss';

type StateProps = {
    clockVisible: boolean,
    githubVisible: boolean,
};

class SideBarBody extends Component<StateProps> {
    render() {

        const {clockVisible, githubVisible} =this.props;

        return (
            <div className={style.SideBarBody}>
                {clockVisible && <SidebarClock/>}
                {githubVisible && <Github/>}
            </div>
        );
    }
}

const mapStateToProps = (state:any) => ({
    clockVisible: state.clock.visible,
    githubVisible: state.github.visible,
});

export default connect<StateProps,any,any>(
    mapStateToProps,
    null
)(SideBarBody);