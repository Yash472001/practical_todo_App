import React, { useContext } from "react";
import { TodoContext } from "../context/TodoContext";
import Todocomp from "./Todocomp";
import DeleteTodo from "./DeleteTodo";

const TodoList = () => {
  const { state } = useContext(TodoContext);

  return (
    <div style={{display:"flex",flexDirection:"column"}}>
      {state.todos.map((val) => {
        return <Todocomp key={val.id} text={val.todo} checked={val.checked} id={val.id} />;
      })}
      
    </div>
  );
};

export default TodoList;
