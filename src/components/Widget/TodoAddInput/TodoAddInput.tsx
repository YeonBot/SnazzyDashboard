import React, {useState} from 'react';
import { Input } from 'reactstrap';

import TransparencyInput from '../../common/TransparencyInput';
// import styles from './TodoAddInput.module.scss';

type TodoAddInputProps = {
    addTodo: (title: string) => void,
}

export default function TodoAddInput({addTodo}: TodoAddInputProps) {

    const [value, setValue] = useState('');

    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        const {value} = e.target;
        setValue(value);
    }

    const handleKeyDown = (e:React.KeyboardEvent<HTMLInputElement>) => {
        const {key} = e;
        if(key === 'Enter') {
            addTodo(value);
        }
    }

    return <TransparencyInput
            placeholder=" New todo"
            value={value}
            onChange={handleChange} 
            onKeyDown={handleKeyDown}
        />;
}
