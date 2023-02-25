import React, { useContext, useState } from "react";
import { TodoInformationContext } from "../../context";
import { FooterButton, FooterInput, FooterWrapper } from "./ListFooter.style";

export const ListFooter = ({ addTodo }) => {
  const { todos } = useContext(TodoInformationContext);
  console.log(todos);

  const uniqueId = () => {
    console.log(123);
    const uniqueNumber = Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
    console.log(uniqueNumber);
    return uniqueNumber;
  };

  const [newTodo, setNewTodo] = useState({
    id: uniqueId(),
    completed: false,
    deleted: false,
    title: "",
  });

  const handleAddTodo = () => {
    addTodo(newTodo);
    setNewTodo({ ...newTodo, title: "", id: uniqueId() });
  };
  return (
    <FooterWrapper>
      <FooterInput
        type="text"
        placeholder="Add new todo.."
        value={newTodo.title}
        onChange={(e) => setNewTodo({ ...newTodo, title: e.target.value })}
      />
      <FooterButton onClick={handleAddTodo}>Add</FooterButton>
    </FooterWrapper>
  );
};
