import React from 'react';
import { connect } from 'react-redux';
import { returntypeof } from 'react-redux-typescript';

import Github from '../../../components/Preference/Github';
import { toggleVisible, changeUsername } from '../../../modules/github';

import { RootState } from '../../../modules';

const mapStateToProps = (state: RootState) => ({
  visible: state.github.visible,
  username: state.github.username,
});
const mapDispatchToProps = (dispatch: any) => ({
  dispatchToggleVisible: () => dispatch(toggleVisible()),
  dispatchChangeUsername: (username: string) => dispatch(changeUsername(username)),
});
const statePropTypes = returntypeof(mapStateToProps);
const actionPropTypes = returntypeof(mapDispatchToProps);
type Props = typeof statePropTypes & typeof actionPropTypes

class PrefGithub extends React.PureComponent<Props> {
  render() {
    const {
      visible, dispatchToggleVisible, username, dispatchChangeUsername,
    } = this.props;

    return (
      <Github
        visible={visible}
        toggleVisible={dispatchToggleVisible}
        username={username}
        handleChangeUsername={dispatchChangeUsername}
      />
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PrefGithub);
