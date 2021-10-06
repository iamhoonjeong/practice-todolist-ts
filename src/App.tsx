import React from 'react';
import GlobalStyle from './styles/GlobalStyle';

import TodoList from './containers/TodoList';

function App() {
  return (
    <>
      <GlobalStyle />
      <TodoList />
    </>
  );
}

export default App;
