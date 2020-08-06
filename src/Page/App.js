import React, { useState, useRef, useCallback } from 'react';
import TodoTemplate from '../Components/TodoTemplate';
import TodoInsert from '../Components/TodoInsert';
import TodoList from '../Components/TodoList';

const App = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: '리액트의 기초 알아보기',
      checked: true,
    },
    {
      id: 2,
      text: '컴포넌트 스타일링해 보기',
      checked: true,
    },
    {
      id: 3,
      text: '일정 관리 앱 만들어 보기',
      checked: false,
    },
  ]);

  const nexId = useRef(4);

  const onInsert = useCallback(
    (text) => {
      const todo = {
        id: nexId.current,
        text,
        checked: false,
      };
      setTodos(todos.concat(todo));
      nexId.current += 1;
    },
    [todos],
  );

  const onRemove = useCallback(
    (id) => {
      setTodos(todos.filter((todo) => todo.id !== id));
    },
    [todos],
  );

  console.log(todos);
  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert} />
      <TodoList todos={todos} onRemove={onRemove} />
    </TodoTemplate>
  );
};

export default App;
