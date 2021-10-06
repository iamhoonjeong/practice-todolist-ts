import React, { useState } from 'react';
import styled from 'styled-components';

import Title from '../components/Title';
import List from '../components/List';
import Input from '../components/Input';

const Container = styled.div`
  width: 420px;
  height: 800px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 0 12px rgba(0, 0, 0, 0.3);
`;

const TodoList = () => {
  const [data, setData] = useState([
    //
    { text: '투두리스트', done: false },
  ]);

  return (
    <Container>
      <Title />
      <List data={data} />
      <Input data={data} setData={setData} />
    </Container>
  );
};

export default TodoList;
