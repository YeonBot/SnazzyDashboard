import React, {Component} from 'react';

import SideBarCard from "../../../components/Widget/Card";
import TodoAddInput from '../../../components/Widget/TodoAddInput';
import TodoTask from '../../../components/Widget/TodoTask';

import {RootState} from "../../../modules";
import { addTodo } from '../../../modules/todo';

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

        const {dispatchAddTodo} = this.props;

        return (
            <SideBarCard header={"TODO"}>
                <TodoAddInput
                    addTodo={dispatchAddTodo}
                />
                <ul>
                    <TodoTask />
                    <TodoTask />
                </ul>
            </SideBarCard>
        );
    }
}

const mapStateToProps = (state: RootState) => ({

});
const mapDispatchToProps = (dispatch: any) => ({
    dispatchAddTodo: (title: string) => dispatch(addTodo(title)),
});

const statePropTypes = returntypeof(mapStateToProps);
const actionPropTypes = returntypeof(mapDispatchToProps);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Todo);
