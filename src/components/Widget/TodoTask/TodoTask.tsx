import React, { useState } from 'react';
import { FormGroup, Label, Input } from 'reactstrap';
import { Todo as TodoType } from '../../../common/type';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTimesCircle } from "@fortawesome/free-regular-svg-icons"

import styles from './TodoTask.module.scss';

type TodoTaskProps = TodoType & {
    updateTodo: (id: number, obj: object) => void,
    deleteTodo: (id: number) => void,
}

export default function TodoTask({ id, title, checked, updateTodo, deleteTodo }: TodoTaskProps) {

    const [isHovering, setHovering] = useState(false);

    const handleUpdateClick = (e: any) => {
        const { checked, dataset: { id } } = e.target;

        if (id && typeof checked === 'boolean') {
            updateTodo(parseInt(id), { checked });
        }
    }

    const handleDeleteClick = (e: any) => {
        const { id } = e.target.closest('svg').dataset;

        deleteTodo(parseInt(id));
    }

    return (
    <li className={styles.todoTask}
        onMouseOver={() => setHovering(true)}
        onMouseLeave={() => setHovering(false)}>
        <FormGroup check>
            <Label check>
                <Input
                    data-id={id}
                    type="checkbox"
                    className={styles.todoTask__checkbox}
                    checked={!!checked}
                    onClick={handleUpdateClick}
                />
            </Label>
        </FormGroup>
        <span className={styles.todoTask__title}>
            {title}
        </span>
        <div className={styles.todoTask__more}>
            {
                isHovering && <FontAwesomeIcon
                    data-id={id}
                    onClick={handleDeleteClick}
                    className={styles.todoTask__delete_btn}
                    icon={faTimesCircle} />
            }
        </div>
    </li>);
}
