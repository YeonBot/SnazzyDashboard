import React, {useState, useEffect} from 'react';
import ReactTooltip from 'react-tooltip';

import {getFaviconUrlFromDomain, getTitleFronDomain} from '../../../utils/domain';

import style from './File.module.scss';

type Props = {
    title?: string,
    url?: string,
    src?: string,
    propsTooltip?: string,
    onClickFile?: () => void,
}

function File({title, url, src, propsTooltip, onClickFile}: Props) {

    const [imageSrc, setSrc] = useState<string>('');
    const [tooltip, setTooltip] = useState<string>('');

    useEffect(() => {
        setFileSrc();
        if (url && !title) {
            getTitleFronDomain(url).then((title) => {
                setTooltip(title);
            });
        }
        if(propsTooltip) {
            setTooltip(propsTooltip);
        }
    }, []);

    const setFileSrc = () => {
        if (url) {
            getFaviconUrlFromDomain(url).then((src) => {
                setSrc(src);
            });
        }
        if (src) {
            setSrc(src)
        }
    }

    const tooltipId = `Tooltip-${Math.random().toString(36).substr(2, 5)}`;

    return (
        <span onClick={onClickFile}>
            <a
                className={style.File}
                href={url}
                target="_black"
                rel="noopener"
                data-for={tooltipId}
                data-tip={<span>{tooltip}</span>}>
                    <img className={style.File__img} src={imageSrc}/>
            </a>
            {title &&
            <div className={style.File__title}>
                {title}
            </div>
            }
            {tooltip &&
                <ReactTooltip id={tooltipId}
                              className={style.File__tooltip}
                              data-html={true}
                              effect='solid'
                              offset={{top: 10}}
                >
                    <span className={style.File__tooltip__inner}>{tooltip}</span>
                </ReactTooltip>
            }
        </span>

    );
}

export default File;