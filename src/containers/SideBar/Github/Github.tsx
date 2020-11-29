import React, {Component} from 'react';
import GitHubCalendar from 'react-github-calendar';

import SideBarCard from "../../../components/SideBar/Card";

import style from './Github.module.scss';

class Github extends Component {

    componentDidMount() {
        let scrollDiv:HTMLElement|null = window.document.getElementById('scroll');
        // scrollDiv.scrollLeft = scrollDiv.width;
        if(scrollDiv){
            scrollDiv.scrollLeft = scrollDiv.scrollWidth;
            console.log(scrollDiv.scrollWidth);
        }
    }

    render() {

        let scrollDiv:HTMLElement|null = window.document.getElementById('scroll');
        // scrollDiv.scrollLeft = scrollDiv.width;
        if(scrollDiv){
            scrollDiv.scrollLeft = scrollDiv.scrollWidth;
            console.log(scrollDiv.scrollWidth);
        }

        return (
            <SideBarCard>
                <div id='scroll' className={style.Github__wrapper}>
                    <div className={style.Github__scroll}>
                    <GitHubCalendar username="yeonbot"
                                    fontSize={14}
                                    showTotalCount={false}/>
                    </div>
                </div>
            </SideBarCard>
        );
    }
}

export default Github;