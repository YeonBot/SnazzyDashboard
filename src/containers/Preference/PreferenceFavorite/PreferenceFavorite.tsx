import React from 'react';
import { connect } from 'react-redux';
import { returntypeof } from 'react-redux-typescript'

import Favorite from '../../../components/Preference/Favorite';
import {toggleVisible,changeUsername} from "../../../modules/github";

import {RootState} from '../../../modules';

type Props = typeof statePropTypes & typeof actionPropTypes & {}

class PreferenceFavorite extends React.PureComponent<Props> {

    render() {

        const {visible, dispatchToggleVisible} = this.props

        return (
            <Favorite
                visible={visible}
                toggleVisible={dispatchToggleVisible}
            />
        )
    }
}

const mapStateToProps = (state:RootState) => ({
    visible: state.github.visible,
    username: state.github.username,
});
const mapDispatchToProps = (dispatch:any) => ({
    dispatchToggleVisible: () => dispatch(toggleVisible()),
    dispatchChangeUsername: (username:string) => dispatch(changeUsername(username)),
});
const statePropTypes = returntypeof(mapStateToProps);
const actionPropTypes = returntypeof(mapDispatchToProps);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PreferenceFavorite);