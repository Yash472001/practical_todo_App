import React, { useReducer} from "react";
import { TodoReducer } from "./TodoReducer";

export const TodoContext = React.createContext();

const initialState = {
    todos: [
      { id: 1, todo: 'Reading Books' ,checked:false},
      { id: 2, todo: 'Listening the podcast',checked:false},
      { id: 3, todo: 'More actionable',checked:false},
      { id: 4, todo: 'Start conversation with one person',checked:false}
    ],
  };

export default function TodoContextProvider ({children})  {
    const [state,dispatch] = useReducer(TodoReducer,initialState); 

    return (
        <TodoContext.Provider value={{state,dispatch}}>
            {children}
        </TodoContext.Provider>
    )
}