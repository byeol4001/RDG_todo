import React from 'react';
import {
  MdCheckBoxOutlineBlank,
  MdCheckBox,
  MdRemoveCircleOutline,
} from 'react-icons/md';
import styled from 'styled-components';

const TodoListItem = ({ todo, onRemove }) => {
  const { id, text, checked } = todo;

  return (
    <TodoListItems>
      <div
        className={checked ? 'checked' : 'checkbox'}
        onClick={() => ontoggle(id)}
      >
        {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
        <div className="text">{text}</div>
      </div>
      <div className="remove" onClick={() => onRemove(id)}>
        <MdRemoveCircleOutline />
      </div>
    </TodoListItems>
  );
};

export default TodoListItem;

const TodoListItems = styled.div`
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  &:nth-child(even) {
    background: #eee;
  }

  .checkbox {
    display: flex;
    cursor: pointer;
    align-items: center;
    flex: 1;
    svg {
      font-size: 1.5rem;
    }
    .text {
      margin-left: 0.5rem;
      flex: 1;
    }
  }

  .checked {
    display: flex;
    cursor: pointer;
    align-items: center;
    svg {
      font-size: 1.5rem;
      color: #22b8cf;
    }
    .text {
      margin-left: 0.5rem;
      flex: 1;
      color: #abd5bd;
      text-decoration: line-through;
    }
  }

  .remove {
    display: flex;
    align-items: center;
    font-size: 1.5rem;
    color: #ff6b6b;
    cursor: pointer;
    &:hover {
      color: #f58f8f;
    }
  }
  & + & {
    border-top: 1px solid #dee2e6;
  }
`;
