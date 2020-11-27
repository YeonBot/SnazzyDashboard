import React, {Component} from 'react';

import Clock from '../Clock';
import Github from '../Github/';

import style from './SideBarBody.module.scss';

class SideBarBody extends Component {
    render() {
        return (
            <div className={style.SideBarBody}>
                <Clock/>
                <Github/>
            </div>
        );
    }
}

export default SideBarBody;