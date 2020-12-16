import React, {Component} from 'react';
import Dashboard from "./Dashboard";
import {returntypeof} from "react-redux-typescript";
import {connect} from "react-redux";

type Props = typeof statePropTypes & {};

class App extends Component<Props> {

    render() {
        const {darkMode} = this.props;

        if (darkMode) {
            document.querySelector('body')?.classList.add('dark-mode');
        } else {
            document.querySelector('body')?.classList.remove('dark-mode');
        }


        return (
            <Dashboard/>
        );
    }
}


const mapStateToProps = (state: any) => ({
    darkMode: state.darkMode.darkMode,
});
const statePropTypes = returntypeof(mapStateToProps);

export default connect<typeof statePropTypes, any, any>(
    mapStateToProps,
    null,
)(App);