import React, { useState, useCallback } from 'react';
import { MdAdd } from 'react-icons/md';
import styled from 'styled-components';

const TodoInsert = ({ onInsert }) => {
  const [value, setValue] = useState('');
  onchange = (e) => {
    setValue(e.target.value);
  };

  const onSubmit = useCallback(
    (e) => {
      onInsert(value);
      setValue('');
      e.preventDefault();
    },
    [onInsert, value],
  );

  return (
    <TodoForm onSubmit={onSubmit}>
      <input
        placeholder="할일을 입력하세요"
        value={value}
        onChange={onchange}
      />
      <button type="submit">
        <MdAdd />
      </button>
    </TodoForm>
  );
};

export default TodoInsert;

const TodoForm = styled.form`
  display: flex;
  background-color: #ffffff;
  input {
    border: none;
    background: none;
    outline: none;
    padding: 0.5rem;
    font-size: 1rem;
    line-height: 2rem;
    color: #aaa;
    &::placeholder {
      color: #ddd;
    }
    flex: 1;
  }
  button {
    background: none;
    outline: none;
    border: none;
    background: #999;
    padding: 0 1rem;
    cursor: pointer;
    transition: 0.1s background ease-in;
    &:hover {
      background: #adb6bd;
    }
  }
`;
