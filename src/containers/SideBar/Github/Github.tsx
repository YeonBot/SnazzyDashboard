import React, {Component} from 'react';
import GitHubCalendar from 'react-github-calendar';
import {Input, Button} from 'reactstrap';

import SideBarCard from "../../../components/SideBar/Card";
import {getGithubUserName, setGithubUserName} from '../../../utils/preference';

import style from './Github.module.scss';
import {RootState} from "../../../modules";
import {changeUsername} from "../../../modules/github";
import {returntypeof} from "react-redux-typescript";
import {connect} from "react-redux";

type Props = typeof statePropTypes & typeof actionPropTypes & {}
type States = {
    inputUsername: string,
}

class Github extends Component<Props, States> {

    constructor(props: any) {
        super(props);

        this.state = {
            inputUsername: '',
        }

        this.setUserName = this.setUserName.bind(this);
        this.onChangeInput = this.onChangeInput.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
        this.scrollEndPoint = this.scrollEndPoint.bind(this);
    }

    componentDidMount() {
        this.scrollEndPoint();
    }

    setUserName() {
        const {inputUsername} = this.state;
        const {dispatchChangeUsername} = this.props;
        dispatchChangeUsername(inputUsername);
        this.scrollEndPoint();
    }

    onChangeInput(e: any) {
        const {value: inputUsername} = e.target;

        this.setState(() => ({
            inputUsername,
        }));
    }

    handleKeyPress(e: any) {
        if (e.key === 'Enter') {
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
        const {username} = this.props
        const {inputUsername} = this.state;

        return (
            <SideBarCard header='GITHUB CONTRIBUTE'>
                <div id='scroll' className={style.Github__wrapper}>
                    {username
                        ?
                        <div className={style.Github__scroll}>
                            <GitHubCalendar username={username}
                                            fontSize={14}
                                            showTotalCount={false}/>
                        </div>
                        : <div className={style.Github__Input_wrapper}>
                            <Input placeholder="Enter Github name"
                                   value={inputUsername}
                                   onChange={this.onChangeInput}
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

const mapStateToProps = (state: RootState) => ({
    username: state.github.username,
});
const mapDispatchToProps = (dispatch: any) => ({
    dispatchChangeUsername: (username: string) => dispatch(changeUsername(username)),
});
const statePropTypes = returntypeof(mapStateToProps);
const actionPropTypes = returntypeof(mapDispatchToProps);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Github);