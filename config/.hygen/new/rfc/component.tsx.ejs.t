---
to: <%= absPath %>/<%= Name %>.tsx
---
import React from 'react';
import styles from './Dir.module.css';

type Props = {};

const <%= Name %>: React.FC<Props> = (props) => {
  return <div className={styles.<%= Name %>} data-testid="test" />;
};

export default <%= Name %>;