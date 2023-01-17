import React, { useContext, useRef } from 'react'
import { addTodoItem } from '../context/Todoactions';
import { TodoContext } from '../context/TodoContext';

const AddTodo = () => {

  const {dispatch}  = useContext(TodoContext);

  const todoRef = useRef();
  
  const handleSubmit = () => {
    let todo = todoRef.current.value;
    if(todo == ""){
      alert("INPUT BOX CAN NOT BE EMPTY");
      return
    }
    dispatch(addTodoItem(todo))
    todoRef.current.value = "";
  }

  return (
    <>
        <input type="text" ref={todoRef} />
        <button type="submit" onClick={handleSubmit}> Add Todo </button>
    </>
  )
}

export default AddTodo