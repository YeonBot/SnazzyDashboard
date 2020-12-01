import React from 'react';

import style from './Card.module.scss';

function Card({header,children}: any) {
    return (
        <div className={style.Card}>
            <div className={style.Card__header}>
                {header}
            </div>
            <div className={style.Card__body}>
                {children}
            </div>
        </div>
    );
}

Card.defaultProps = {
    header: 'GITHUB CONTRIBUTE',
}

export default Card;

