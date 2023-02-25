import React, { useContext } from "react";
import { TodoInformationContext } from "../../context";
import { CommonTotalCounts } from "../TotalCounts";
import { HeaderWrapper } from "./ListHeader.style";

export const ListHeader = () => {
  const { todos } = useContext(TodoInformationContext);
  return (
    <HeaderWrapper>
      <CommonTotalCounts width="50" number={todos.length} text="Tasks" />
      <CommonTotalCounts width="50" number={todos.length} text="Deleted" />
    </HeaderWrapper>
  );
};
