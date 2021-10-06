import React from 'react';
import styled from 'styled-components';

const Text = styled.h1`
  margin: 0;
  margin-top: 1rem;
  height: fit-content;
`;

const Title = () => {
  return <Text>To-do List</Text>;
};

export default Title;
