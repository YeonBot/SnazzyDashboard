import React from 'react';
import { FormGroup, CustomInput } from 'reactstrap';

import styles from './TodoTask.module.scss';

export default function TodoTask() {

    const handleClick = (e: any) => {
        console.log(e.target.checked);
    }

    return <li className={styles.TodoTask}>
        <FormGroup check>
          <CustomInput 
            id="temp_id"
            type="checkbox"
            label="Check this custom checkbox"
            checked={true} 
            onClick={handleClick}
            />
        </FormGroup>
    </li>;
}
