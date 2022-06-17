import * as React from 'react';
import { Input, FormGroup } from 'reactstrap';

import GithubUsername from '@components/preference/GithubUsername';

type Props = {
  visible: boolean,
  toggleVisible: () => void,
  username: string,
  handleChangeUsername: (username: string) => void,
};

function Github({
  visible, toggleVisible, username, handleChangeUsername,
}: Props) {
  return (
    <div>
      Visible
      <FormGroup switch>
        <Input
          type="switch"
          id="githubVisibleSwitch"
          name="customSwitch"
          checked={visible}
          onChange={toggleVisible}
        />
      </FormGroup>
      Username
      <GithubUsername
        username={username}
        handleChangeUsername={handleChangeUsername}
      />
    </div>
  );
}

export default Github;
