import React, { useState } from 'react';

import TransparencyInput from '@components/common/TransparencyInput';

type TodoAddInputProps = {
  addTodo: (title: string) => void,
}

export default function TodoAddInput({ addTodo }: TodoAddInputProps) {
  const [title, setTitle] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setTitle(value);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const { key } = e;
    if (key === 'Enter' && title) {
      addTodo(title);
      setTitle('');
    }
  };

  return (
    <TransparencyInput
      placeholder=" New todo"
      value={title}
      onChange={handleChange}
      onKeyPress={handleKeyDown}
    />
  );
}
