import React, { useContext } from 'react'
import { removeTodoItem } from '../context/Todoactions';
import { TodoContext } from '../context/TodoContext'

const DeleteTodo = () => {

    const {state , dispatch} = useContext(TodoContext);

    const handleDelete = () => {
      dispatch(removeTodoItem());
    }
  
  return (
    <>
      <button onClick={handleDelete} disabled={state.todos.length == 0}> Delete </button>
    </>
  )
}

export default DeleteTodo;