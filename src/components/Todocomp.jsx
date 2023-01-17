import React, { useContext, useState } from 'react'
import { changedCheckedVal } from '../context/Todoactions';
import { TodoContext } from '../context/TodoContext'


const Todocomp = ({id,text,checked}) => {

  const {dispatch} = useContext(TodoContext);

  const handleChange = () => {
    dispatch(changedCheckedVal(id));
  }


  return (
    <>
        <input type="checkbox" name="todolist" checked={checked} onChange={handleChange} style={{display:"inline"}}/>
        <label htmlFor="">{text}</label>
    </>
  )
}

export default Todocomp;