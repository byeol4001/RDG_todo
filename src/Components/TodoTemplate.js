import React from 'react';
import styled from 'styled-components';

const TodoTemplate = ({ children }) => {
  return (
    <TodoTemplates>
      <div className="app-title">일정관리</div>
      <div className="contents">{children}</div>
    </TodoTemplates>
  );
};

export default TodoTemplate;

const TodoTemplates = styled.div`
  width: 30vw;
  margin: 7rem auto 0;
  border-radius: 10px;
  overflow: hidden;
  background-color: #fff;
  text-align: center;
  .app-title {
    background-color: #4e7fd8;
    height: 3rem;
    font-size: 1.2rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .contents {
    text-align: left;
  }
`;
