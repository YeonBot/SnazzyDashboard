import React, { useState, useEffect } from 'react';

import Avatar from 'react-avatar';
import { DEFAULT_URL, getFaviconUrlFromDomain } from '../../../utils/domain';

import style from './Directory.module.scss';

type Props = {
  id: number,
  title: string;
  innerDir: Array<any>;
  onClickDir: (id: number) => void;
}

function Directory({
  title, innerDir, onClickDir, id,
}: Props) {
  const [srcList, setSrcList] = useState<string[]>([]);

  const setInnerIconToDir = () => {
    const getSrcPromises = innerDir.filter((dir, idx) => idx < 16).map((dir) => {
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
    <div role="button" tabIndex={0} onKeyPress={() => onClickDir(id)}>
      <div className={style.Directory}>
        {srcList.map((src) => (src === DEFAULT_URL
          ? <Avatar key={`${src}`} className={style.Directory__src} size="0.85rem" name={title?.charAt(0)} />
          : <img key={`${src}`} className={style.Directory__src} src={src} alt="empty" />))}
      </div>

      <div className={style.Directory__title}>
        {title}
      </div>
    </div>

  );
}

export default Directory;
