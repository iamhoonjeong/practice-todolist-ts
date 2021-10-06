import React from 'react';
import styled from 'styled-components';

const TitleText = styled.h1`
  margin: 0;
  margin-top: 1rem;
  height: fit-content;
`;

const Title = () => {
  return <TitleText>To-do List</TitleText>;
};

export default Title;
