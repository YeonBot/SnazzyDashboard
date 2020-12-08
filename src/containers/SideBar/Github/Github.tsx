import React, {Component} from 'react';
import GitHubCalendar from 'react-github-calendar';
import {Input, Button} from 'reactstrap';

import SideBarCard from "../../../components/SideBar/Card";
import {getGithubUserName, setGithubUserName} from '../../../utils/github';

import style from './Github.module.scss';

type State = {
    username: string,
    inputUsername: string,
}

class Github extends Component {

    constructor(props: any) {
        super(props);

        this.getUserName = this.getUserName.bind(this);
        this.setUserName = this.setUserName.bind(this);
        this.onChangeInput = this.onChangeInput.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
        this.scrollEndPoint = this.scrollEndPoint.bind(this);
    }

    state: State = {
        username: '',
        inputUsername: '',
    }

    componentDidMount() {
        this.getUserName();
    }

    getUserName() {
        const username = getGithubUserName();
        this.setState(() => ({
            username,
        }), this.scrollEndPoint);
    }

    setUserName() {
        const {inputUsername} = this.state;
        setGithubUserName(inputUsername);
        this.getUserName();
    }

    onChangeInput(e: any) {
        const {value: inputUsername} = e.target;

        this.setState(() => ({
            inputUsername,
        }));
    }

    handleKeyPress(e:any) {
        if(e.key === 'Enter'){
            this.setUserName();
        }
    }

    scrollEndPoint() {
        let scrollDiv: HTMLElement | null = window.document.getElementById('scroll');
        if (scrollDiv) {
            scrollDiv.scrollLeft = scrollDiv.scrollWidth;
        }
    }

    render() {
        const {username, inputUsername} = this.state;

        return (
            <SideBarCard>
                <div id='scroll' className={style.Github__wrapper}>
                    {username
                        ?
                        <div className={style.Github__scroll}>
                            <GitHubCalendar username={username}
                                            fontSize={14}
                                            showTotalCount={false}/>
                        </div>
                        : <div className={style.Github__Input_wrapper}>
                            <Input placeholder="Enter your Github name"
                                   value={inputUsername}
                                   onChange={this.onChangeInput}
                                   onClick={this.setUserName}
                                   onKeyPress={this.handleKeyPress}
                            />
                            <Button color="dark"
                                    onClick={this.setUserName}
                            >Ok</Button>
                        </div>
                    }
                </div>
            </SideBarCard>
        );
    }
}

export default Github;