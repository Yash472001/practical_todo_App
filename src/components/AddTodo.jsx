import React, { useContext, useRef } from 'react'
import { addTodoItem } from '../context/Todoactions';
import { TodoContext } from '../context/TodoContext';

const AddTodo = () => {

  const {dispatch}  = useContext(TodoContext);

  const todoRef = useRef();
  
  const handleSubmit = () => {
    let todo = todoRef.current.value;
    dispatch(addTodoItem(todo))
  }

  return (
    <>
        <input type="text" ref={todoRef} />
        <button type="submit" onClick={handleSubmit}> Add Todo </button>
    </>
  )
}

export default AddTodo