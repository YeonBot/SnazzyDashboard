import React, {Component} from 'react';
import {connect} from "react-redux";
import {returntypeof} from "react-redux-typescript";

import PreferenceModal from '../../components/Preference/Modal';
import File from "../../components/Bookmark/File";

import style from './FavoriteCard.module.scss';

const dummySite = [
    {
        title: "goormIDE",
        url: 'https://ide.goorm.io/dashboard',
    },
    {
        title: "gmail",
        url: 'https://mail.google.com/',
    },
    {
        title: "Calendar",
        url: 'https://calendar.google.com/',
    },
]

type State = {
    isOpen: boolean,
};

type Props = typeof statePropTypes & {};

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
        const {list} = this.props;
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
                    onClickFile={this.handleClickPreference}
                />
                <PreferenceModal
                    isOpen={isOpen}
                    toggle={this.toggle}/>
            </div>
        );
    }
}

const mapStateToProps = (state: any) => ({
    list: state.favorite.list,
});

const statePropTypes = returntypeof(mapStateToProps);

export default connect<typeof statePropTypes, any, any>(
    mapStateToProps,
    null
)(FavoriteCard);