import React from 'react'
import { Input } from 'reactstrap';

import styles from './TransparencyInput.module.scss';

type TransparencyInputProps = {
    value: string,
    placeholder: string,
    onChange: (event: React.ChangeEvent<HTMLInputElement>)=> void,
    onKeyDown: (event: React.KeyboardEvent<HTMLInputElement>)=> void,
}

function TransparencyInput({value, placeholder, onChange, onKeyDown}: TransparencyInputProps): JSX.Element {
  return (
    <Input
        cssModule={{ 'form-control': styles.TransparencyInput}}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        onKeyDown={onKeyDown}
    />
  )
}

export default TransparencyInput;
