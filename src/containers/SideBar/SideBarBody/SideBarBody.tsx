import React, {Component} from 'react';

import SidebarClock from '../SidebarClock';
import Github from '../Github/';

import style from './SideBarBody.module.scss';

class SideBarBody extends Component {
    render() {
        return (
            <div className={style.SideBarBody}>
                <SidebarClock/>
                <Github/>
            </div>
        );
    }
}

export default SideBarBody;