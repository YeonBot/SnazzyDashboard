import React, {Component} from 'react';

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

class FavoriteCard extends Component {
    render() {
        return (
            <div className={style.FavoriteCard}>
                {
                    dummySite.map((dummy)=>(
                        <File
                            key={dummy.title}
                            title={dummy.title}
                            url={dummy.url}
                        />
                    ))
                }
                <File title="preferences"
                      src="/images/preferences.png"
                />
            </div>
        );
    }
}

export default FavoriteCard;