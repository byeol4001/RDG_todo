import React from 'react';
import TodoListItem from './TodoListItem';
import styled from 'styled-components';

const TodoList = ({ todos, onRemove }) => {
  return (
    <TodoLists>
      {todos.map((todo) => (
        <TodoListItem todo={todo} key={todo.id} onRemove={onRemove} />
      ))}
    </TodoLists>
  );
};

export default TodoList;

const TodoLists = styled.div`
  min-height: 320px;
  max-height: 513px;
  overflow-y: auto;
`;
