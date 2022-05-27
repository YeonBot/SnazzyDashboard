import React from 'react';
import { FormGroup, CustomInput } from 'reactstrap';

import styles from './TodoTask.module.scss';

type TodoTaskProps = {
    todoId: number,
    title: string,
}

export default function TodoTask({todoId, title}: TodoTaskProps) {

    const handleClick = (e: any) => {
        console.log(e.target.checked);
    }

    return <li className={styles.TodoTask}>
          <CustomInput 
            id="temp_id"
            type="checkbox"
            label={title}
            checked={true} 
            onClick={handleClick}
            />
    </li>;
}
