import React from 'react';

import style from './SideBarCard.module.scss';

const SideBarCard = (props: any) => {
    return (
        <div className={style.SideBarCard}>
            {props.children}
        </div>
    );
}

export default SideBarCard;

