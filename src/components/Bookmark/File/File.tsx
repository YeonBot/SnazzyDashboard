import React, { useState, useEffect } from 'react';
import Avatar from 'react-avatar';
import ReactTooltip from 'react-tooltip';

import { DEFAULT_URL, getFaviconUrlFromDomain, getTitleFronDomain } from '@utils/domain';

import style from './File.module.scss';

type Props = {
  title?: string,
  url?: string,
  src?: string,
  propsTooltip?: string,
  onClickFile?: (e: React.SyntheticEvent) => void,
}

function File({
  title, url, src, propsTooltip, onClickFile,
}: Props) {
  const [imageSrc, setSrc] = useState<string>('');
  const [tooltip, setTooltip] = useState<string>('');

  useEffect(() => {

    if (url) {
      getFaviconUrlFromDomain(url)
        .then((faviconUrl) => {
          setSrc(faviconUrl);
        });
    }
    if (src) {
      setSrc(src);
    }

    if (url && !title) {
      getTitleFronDomain(url).then((serviceTitle) => {
        setTooltip(serviceTitle);
      });
    }
    if (propsTooltip) {
      setTooltip(propsTooltip);
    }
  }, [propsTooltip, src, title, url]);

  const tooltipId = `Tooltip-${Math.random().toString(36).substr(2, 5)}`;

  return (
    <span role="button" tabIndex={0} onClick={onClickFile} onKeyPress={onClickFile}>
      <a
        className={style.File}
        href={url}
        target="_black"
        rel="noopener"
        data-for={tooltipId}
        data-tip={<span>{tooltip}</span>}
      >
        {
          imageSrc === DEFAULT_URL
            ? (
              <Avatar
                className={style.File__img}
                size="2.5rem"
                name={title?.charAt(0)}
              />
            )
            : (
              <img
                className={style.File__img}
                src={imageSrc}
                alt={title}
              />
            )
        }
      </a>
      {title
        && (
          <div className={style.File__title}>
            {title}
          </div>
        )}
      {tooltip
        && (
          <ReactTooltip
            id={tooltipId}
            className={style.File__tooltip}
            data-html
            effect="solid"
            offset={{ top: 10 }}
          >
            <span className={style.File__tooltip__inner}>{tooltip}</span>
          </ReactTooltip>
        )}
    </span>

  );
}

File.defaultProps = {
  title: '',
  url: '',
  src: '',
  propsTooltip: '',
  onClickFile: null,
};

export default File;
