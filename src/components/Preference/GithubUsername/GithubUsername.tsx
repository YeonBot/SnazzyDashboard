import * as React from 'react';
import { Input } from 'reactstrap';
import style from '../Github/Github.module.scss';

type Props = {
  username: string,
  handleChangeUsername: (username: string) => void,
};

function GithubUsername({ username, handleChangeUsername }: Props) {
  return (
    <div className={style.GithubUsername}>
      <Input
        placeholder="Enter your Github name"
        value={username}
        onChange={(e) => handleChangeUsername(e.target.value)}
      />
    </div>
  );
}

export default GithubUsername;
