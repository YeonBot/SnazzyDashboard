import React, {Component} from 'react';

import PreferenceModal from '../../components/Preference/Modal';
import File from "../../components/Bookmark/File";

import style from './FavoriteCard.module.scss';
import DirModal from "../../components/Bookmark/DirModal";

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

class FavoriteCard extends Component {

    constructor(props: any) {
        super(props);

        this.handleClickPreference = this.handleClickPreference.bind(this);
        this.toggle = this.toggle.bind(this);
    }

    state: State = {
        isOpen: false,
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
        return (
            <div className={style.FavoriteCard}>
                {
                    dummySite.map((dummy) => (
                        <File
                            key={dummy.title}
                            title={dummy.title}
                            url={dummy.url}
                        />
                    ))
                }
                <File title="preferences"
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

export default FavoriteCard;