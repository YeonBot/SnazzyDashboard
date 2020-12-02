import React from 'react';

import style from './Directory.module.scss';

type Props = {
    title: string,
    innerDir: Array<any>,
}

function Directory({title,innerDir}: Props) {

    console.log(innerDir);

    return (
        <span>
            <div className={style.Directory}>
                {innerDir.map((dir)=>(
                    <img src={`chrome://favicon/${dir.url}`}/>
                ))}
            </div>
            <div className={style.Directory__title}>
            {title}
            </div>
        </span>

    );
}

export default Directory;