import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import { MainWrapper } from "./App.style.js";
import { ListFooter } from "./components/ListFooter/ListFooter.jsx";
import { ListHeader } from "./components/ListHeader/ListHeader.jsx";
import { TodoInformationContext } from "./context/index.js";
import { List } from "./List/List.jsx";
import { GlobalStyle } from "./styledComponents/global.js";
import { myTheme } from "./styledComponents/theme.js";

const App = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "delectus aut autem",
      deleted: false,
      completed: false,
    },
    {
      id: 2,
      title: "quis ut nam facilis et officia qui",
      deleted: false,
      completed: false,
    },
    {
      id: 3,
      title: "fugiat veniam minus",
      deleted: false,
      completed: false,
    },
  ]);

  const addTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  return (
    <TodoInformationContext.Provider value={{ todos, setTodos }}>
      <ThemeProvider theme={myTheme}>
        <GlobalStyle />
        <MainWrapper display="flex" flex-direction="column">
          <ListHeader />
          <List />
          <ListFooter addTodo={addTodo} />
        </MainWrapper>
      </ThemeProvider>
    </TodoInformationContext.Provider>
  );
};

export default App;
