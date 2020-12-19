import React, {Component} from 'react';
import {connect} from "react-redux";
import {returntypeof} from "react-redux-typescript";

import PreferenceModal from '../../components/Preference/Modal';
import File from "../../components/Bookmark/File";

import style from './FavoriteCard.module.scss';
import {toggleDarkMode} from "../../modules/darkmode";

type State = {
    isOpen: boolean,
};

type Props = typeof statePropTypes & typeof dispacthPropTypes & {};

class FavoriteCard extends Component<Props, State> {

    constructor(props: any) {
        super(props);

        this.state = {
            isOpen: false,
        }

        this.handleClickPreference = this.handleClickPreference.bind(this);
        this.toggle = this.toggle.bind(this);
    }


    handleClickPreference() {
        this.toggle();
    };

    toggle() {
        this.setState((prev: State) => ({
            isOpen: !prev.isOpen,
        }))
    }

    render() {
        const {isOpen} = this.state;
        const {list, darkMode, dispatchToggleDarkMode} = this.props;
        return (
            <div className={style.FavoriteCard}>
                {
                    list.map((item: string) => (
                        <File
                            key={item}
                            url={item}
                        />
                    ))
                }
                <File
                    src="/images/preferences.png"
                    propsTooltip="Preference"
                    onClickFile={this.handleClickPreference}
                />
                <PreferenceModal
                    isOpen={isOpen}
                    toggle={this.toggle}
                    darkMode={darkMode}
                    toggleDarkMode={dispatchToggleDarkMode}/>
            </div>
        );
    }
}

const mapStateToProps = (state: any) => ({
    list: state.favorite.list,
    darkMode: state.darkMode.darkMode,
});
const mapDispatchToProps = (dispatch: any) => ({
    dispatchToggleDarkMode: () => dispatch(toggleDarkMode()),
});

const statePropTypes = returntypeof(mapStateToProps);
const dispacthPropTypes = returntypeof(mapDispatchToProps);

export default connect<typeof statePropTypes, any, any>(
    mapStateToProps,
    mapDispatchToProps
)(FavoriteCard);