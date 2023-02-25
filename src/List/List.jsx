import React, { useContext } from "react";
import { ListItem } from "../components/ListItem";
import { TodoInformationContext } from "../context";
import { ListWrapper } from "./List.style";

export const List = () => {
  const { todos, setTodos } = useContext(TodoInformationContext);

  if (!todos.length)
    return (
      <div
        style={{
          width: "100%",
          height: "30%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "30px",
        }}
      >
        You have no tasks..
      </div>
    );

  const resolvedTodo = (todo) => {
    setTodos(todos.filter((tdParent) => tdParent.id !== todo.id));
  };

  const completedTodo = (isCompleted, todo) => {
    setTodos(
      todos.filter(
        (tdParent) => tdParent.id !== todo.id && isCompleted === todo.completed
      )
    );
  };

  return todos.length ? (
    <ListWrapper>
      {todos.map((todo, index) => (
        <ListItem
          key={todo.id}
          number={index + 1}
          title={todo.title}
          isDeleted={todo.deleted}
          isCompleted={todo.isCompleted}
          todo={todo}
          resolvedTodo={resolvedTodo}
          completedTodo={completedTodo}
        />
      ))}
    </ListWrapper>
  ) : (
    <div
      style={{
        width: "100%",
        height: "320px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "30px",
      }}
    >
      You have no tasks..
    </div>
  );
};
