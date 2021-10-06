import React from 'react';
import styled from 'styled-components';

type ListProps = {
  data: { text: string; done: boolean }[];
};

const Container = styled.div`
  width: 310px;
  height: 100%;
  margin: 2rem 0;
`;

const List = ({ data }: ListProps) => {
  return (
    <Container>
      {data.map((todo) => (
        <>
          <div>{todo.text}</div>
          <hr />
        </>
      ))}
    </Container>
  );
};

export default List;
