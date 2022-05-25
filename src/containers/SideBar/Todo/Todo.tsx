import React, {Component} from 'react';
import GitHubCalendar from 'react-github-calendar';
import {Input, Button} from 'reactstrap';

import SideBarCard from "../../../components/SideBar/Card";

import style from './Github.module.scss';
import {RootState} from "../../../modules";
import {changeUsername} from "../../../modules/github";
import {returntypeof} from "react-redux-typescript";
import {connect} from "react-redux";

type Props = typeof statePropTypes & typeof actionPropTypes & {}
type States = {
    inputUsername: string,
}

class Todo extends Component<Props, States> {

    constructor(props: any) {
        super(props);

        this.state = {
            inputUsername: '',
        }
    }

    render() {

        return (
            <SideBarCard header={"TODO"}>
                todo
            </SideBarCard>
        );
    }
}

const mapStateToProps = (state: RootState) => ({
});
const mapDispatchToProps = (dispatch: any) => ({
});

const statePropTypes = returntypeof(mapStateToProps);
const actionPropTypes = returntypeof(mapDispatchToProps);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Todo);