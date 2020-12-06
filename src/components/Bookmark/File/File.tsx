import React, {useState, useEffect} from 'react';

import {getFaviconUrlFromDomain} from '../../../utils/favicon';

import style from './File.module.scss';

type Props = {
    title: string,
    url: string,
}

function File({title, url}: Props) {

    const [imageSrc, setSrc] = useState<string>('');

    useEffect(() => {
        setFileSrc();
    }, []);

    const setFileSrc = () => {
        getFaviconUrlFromDomain(url).then((src) => {
            setSrc(src);
        });
    }

    return (
        <span>
            <a className={style.File} href={url} target="_black" rel="noopener">
                <img className={style.File__img} src={imageSrc}/>
            </a>
            <div className={style.File__title}>
                {title}
            </div>
        </span>

    );
}

export default File;