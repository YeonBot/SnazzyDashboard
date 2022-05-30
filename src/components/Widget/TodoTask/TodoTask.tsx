import React from 'react';
import { CustomInput } from 'reactstrap';
import {Todo as TodoType} from '../../../common/type';

import styles from './TodoTask.module.scss';

type TodoTaskProps = TodoType & {
    updateTodo: (id: number, obj: object) => void,
}

export default function TodoTask({id, title, checked, updateTodo}: TodoTaskProps) {

    const handleClick = (e: any) => {
        const {checked, dataset: {id}} = e.target;

        if(id && typeof checked === 'boolean') {
            updateTodo(parseInt(id), {checked});
        }
    }

    return <li className={styles.TodoTask}>
          <CustomInput 
            id={id}
            data-id={id}
            type="checkbox"
            label={title}
            checked={!!checked} 
            onClick={handleClick}
            />
    </li>;
}
