import React, { useState } from 'react';
import { FormGroup, Label, Input } from 'reactstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-regular-svg-icons';
import { Todo as TodoType } from '../../../common/type';

import styles from './TodoTask.module.scss';

type TodoTaskProps = TodoType & {
  updateTodo: (id: number, obj: object) => void,
  deleteTodo: (id: number) => void,
}

export default function TodoTask({
  id, title, checked, updateTodo, deleteTodo,
}: TodoTaskProps) {
  const [isHovering, setHovering] = useState(false);

  const handleUpdateClick = (e: any) => {
    const { checked: todoChecked, dataset: { todoId } } = e.target;

    if (id && typeof checked === 'boolean') {
      updateTodo(parseInt(todoId, 10), { checked: todoChecked });
    }
  };

  const handleDeleteClick = (e: any) => {
    const { todoId } = e.target.closest('svg').dataset;

    deleteTodo(parseInt(todoId, 10));
  };

  return (
    <li
      className={styles.todoTask}
      onMouseOver={() => setHovering(true)}
      onFocus={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
      onBlur={() => setHovering(false)}
    >
      <FormGroup check>
        <Label check>
          <Input
            data-todo-id={id}
            type="checkbox"
            className={styles.todoTask__checkbox}
            checked={!!checked}
            onChange={handleUpdateClick}
          />
        </Label>
      </FormGroup>
      <span className={styles.todoTask__title}>
        {title}
      </span>
      <div className={styles.todoTask__more}>
        {
          isHovering && (
            <FontAwesomeIcon
              data-todo-id={id}
              onClick={handleDeleteClick}
              className={styles.todoTask__delete_btn}
              icon={faTimesCircle}
            />
          )
        }
      </div>
    </li>
  );
}
