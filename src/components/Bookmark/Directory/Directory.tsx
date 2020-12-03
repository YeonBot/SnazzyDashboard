import React from 'react';

import {getFaviconUrlFromDomain} from '../../../utils/favicon';

import style from './Directory.module.scss';

type Props = {
    title: string,
    innerDir: Array<any>,
}

function Directory({title, innerDir}: Props) {

    // console.log(innerDir);

    return (
        <span>
            <div className={style.Directory}>
                {innerDir.filter((dir, idx)=>{
                    return idx < 16;
                }).map(async (dir) => {
                        const src = await getFaviconUrlFromDomain(dir.url);
                        return (<img src={src}/>)
                    }
                )}
            </div>
            <div className={style.Directory__title}>
            {title}
            </div>
        </span>

    );
}

export default Directory;