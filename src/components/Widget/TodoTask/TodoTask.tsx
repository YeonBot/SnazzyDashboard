import React, {useState} from 'react';
import { CustomInput } from 'reactstrap';
import {Todo as TodoType} from '../../../common/type';

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faTimesCircle } from "@fortawesome/free-regular-svg-icons"

import styles from './TodoTask.module.scss';

type TodoTaskProps = TodoType & {
    updateTodo: (id: number, obj: object) => void,
    deleteTodo: (id: number) => void,
}

export default function TodoTask({id, title, checked, updateTodo, deleteTodo}: TodoTaskProps) {

    const [isHovering, setHovering ] = useState(false);

    const handleUpdateClick = (e: any) => {
        const {checked, dataset: {id}} = e.target;

        if(id && typeof checked === 'boolean') {
            updateTodo(parseInt(id), {checked});
        }
    }

    const handleDeleteClick = (e: any) => {
        const { id } = e.target.closest('svg').dataset;
        
        deleteTodo(parseInt(id));
    }

    return <li className={styles.todoTask}
            onMouseEnter={()=> setHovering(true)}
            onMouseLeave={()=> setHovering(false)}>
          <CustomInput 
            id={id}
            data-id={id}
            type="checkbox"
            label={title}
            checked={!!checked} 
            onClick={handleUpdateClick}
            />
            {
                isHovering && <FontAwesomeIcon 
                    data-id={id}
                    onClick={handleDeleteClick}
                    className={styles.todoTask__delete_btn}
                    icon={faTimesCircle}/>
            }
    </li>;
}
