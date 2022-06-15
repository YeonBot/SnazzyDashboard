import * as React from 'react';
import {Input} from "reactstrap";

import GithubUsername from '../GithubUsername';

import style from './Github.module.scss';

type Props = {
    visible: boolean,
    toggleVisible: () => void,
    username: string,
    handleChangeUsername: (username: string) => void,
};

function Github({visible, toggleVisible, username, handleChangeUsername}: Props) {
    return (
        <div>
            Visible
            <Input type="switch" id="githubVisibleSwitch" name="customSwitch"
                         checked={visible}
                         onChange={toggleVisible}/>
            Username
            <GithubUsername
                username={username}
                handleChangeUsername={handleChangeUsername}
            />
        </div>
    );
}

export default Github;