import React from 'react';
import { connect } from 'react-redux';
import Clock from '../../../components/Preference/Clock';
import { toggleVisible } from '../../../modules/clock';

type Props = {
  visible: boolean,
  dispatchToggleVisible: () => void,
};

class PrefClock extends React.PureComponent<Props> {
  render() {
    const { visible, dispatchToggleVisible } = this.props;

    return (
      <Clock
        visible={visible}
        toggleVisible={dispatchToggleVisible}
      />
    );
  }
}

const mapStateToProps = (state: any) => ({
  visible: state.clock.visible,
});

const mapDispatchToProps = (dispatch: any) => ({
  dispatchToggleVisible: () => dispatch(toggleVisible()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PrefClock);
