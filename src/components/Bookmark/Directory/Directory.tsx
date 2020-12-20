import React, {useState, useEffect} from 'react';

import {DEFAULT_URL, getFaviconUrlFromDomain} from '../../../utils/domain';

import style from './Directory.module.scss';
import Avatar from "react-avatar";

type Props = {
    id: number,
    title: string;
    innerDir: Array<any>;
    onClickDir: (key: number) => void;
}

function Directory({title, innerDir, onClickDir, id}: Props) {

    const [srcList, setSrcList] = useState<string[]>([]);

    useEffect(() => {
        setInnerIconToDir();
    }, []);

    const setInnerIconToDir = () => {
        const getSrcPromises = innerDir.filter((dir, idx) => {
            return idx < 16;
        }).map((dir) => {
            if (dir.url) {
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
    }

    return (
        <span onClick={() => onClickDir(id)}>
            <div className={style.Directory}>
                {srcList.map((src, idx) => {
                    return src === DEFAULT_URL
                        ? <Avatar key={`${src}_${idx}`} className={style.Directory__src} size={"0.85rem"} name={title?.charAt(0)}/>
                        : <img key={`${src}_${idx}`} className={style.Directory__src} src={src}/>
                })}
            </div>

            <div className={style.Directory__title}>
                {title}
            </div>
        </span>

    );
}

export default Directory;