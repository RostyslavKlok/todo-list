import React, { useState } from "react";
import { ItemButton, ListItemWrapper } from "./ListItem.style";

export const ListItem = ({ resolvedTodo, completedTodo, ...props }) => {
  const [isCompleted, setIsCompleted] = useState(false);

  return (
    <ListItemWrapper>
      <input
        type="checkbox"
        style={{ marginLeft: "15px" }}
        onChange={(e) => {
          setIsCompleted(e.target.checked);
          completedTodo(isCompleted, props.todo);
        }}
      />
      <p style={{ margin: "0px 15px 0px", width: "5%" }}>{props.number}.</p>{" "}
      <p style={{ width: "65%" }}>{props.title}</p>
      <ItemButton onClick={() => resolvedTodo(props.todo)}>Delete</ItemButton>
    </ListItemWrapper>
  );
};
