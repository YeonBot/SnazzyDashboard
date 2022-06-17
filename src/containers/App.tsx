import React, { Component } from 'react';
import { returntypeof } from 'react-redux-typescript';
import { connect } from 'react-redux';
import Dashboard from '@containers/Dashboard';

const mapStateToProps = (state: any) => ({
  darkMode: state.darkMode.darkMode,
});
const statePropTypes = returntypeof(mapStateToProps);

type Props = typeof statePropTypes;

// eslint-disable-next-line react/prefer-stateless-function
class App extends Component<Props> {
  render() {
    const { darkMode } = this.props;

    if (darkMode) {
      document.querySelector('body')?.classList.add('dark-mode');
    } else {
      document.querySelector('body')?.classList.remove('dark-mode');
    }

    return (
      <Dashboard />
    );
  }
}

export default connect<typeof statePropTypes, any, any>(
  mapStateToProps,
  null,
)(App);
