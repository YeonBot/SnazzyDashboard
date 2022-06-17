import React, { useState, useEffect } from 'react';

import Avatar from 'react-avatar';
import { DEFAULT_URL, getFaviconUrlFromDomain } from '@utils/domain';

import style from './Directory.module.scss';

type Props = {
  id: number,
  title: string;
  innerDir: Array<any>;
  onClickDir: (id: number) => void;
}

function Directory({
  title, innerDir, id, onClickDir,
}: Props) {
  const [srcList, setSrcList] = useState<string[]>([]);

  const setInnerIconToDir = () => {
    const getSrcPromises = innerDir
      .slice(0, 16)
      .map((dir) => {
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
      });
  };

  useEffect(() => {
    setInnerIconToDir();
  }, []);

  return (
    <div role="button" tabIndex={0} onClick={() => onClickDir(id)} onKeyPress={() => onClickDir(id)}>
      <div className={style.Directory}>
        {srcList.map((src, idx) => (src === DEFAULT_URL
          ? <Avatar key={innerDir[idx].id} className={style.Directory__src} size="0.85rem" name={title?.charAt(0)} />
          : <img key={innerDir[idx].id} referrerPolicy="no-referrer" className={style.Directory__src} src={src} alt=" " />))}
      </div>

      <div className={style.Directory__title}>
        {title}
      </div>
    </div>
  );
}

export default Directory;
