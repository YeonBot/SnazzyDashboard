import React, {useState, useEffect} from 'react';

import {getFaviconUrlFromDomain} from '../../../utils/favicon';

import style from './Directory.module.scss';

type Props = {
    title: string,
    innerDir: Array<any>,
}

function Directory({title, innerDir}: Props) {

    const [srcList, setSrcList] = useState<string[]>([]);

    useEffect(() => {
            const getSrcPromises = innerDir.filter((dir, idx) => {
                return idx < 16;
            }).map((dir) => {
                if(dir.url){
                    return getFaviconUrlFromDomain(dir.url);
                }
                // return directory image ..
                return '/images/macGenericFolderIcon.png';
            });

            Promise.all(getSrcPromises)
                .then((srcRet: string[]) => {
                    setSrcList(srcRet);
                })
                .catch((err) => {
                    console.log(err);
                })
        }, [])

    return (
        <span>
            <div className={style.Directory}>
                {srcList.map((src, idx) =>
                    <img key={`${src}_${idx}`} className={style.Directory__src} src={src}/>
                )}
            </div>
            <div className={style.Directory__title}>
            {title}
            </div>
        </span>

    );
}

export default Directory;