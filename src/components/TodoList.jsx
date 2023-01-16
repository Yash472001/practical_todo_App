import React, { useContext } from "react";
import { TodoContext } from "../context/TodoContext";
import Todocomp from "./Todocomp";

const TodoList = () => {
  const { state } = useContext(TodoContext);

  console.log(state);
  return (
    <>
      {state.todos.map((val) => {
        return <Todocomp key={val.id} text={val.todo} />;
      })}
    </>
  );
};

export default TodoList;
