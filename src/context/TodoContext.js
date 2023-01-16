import React, { useReducer} from "react";
import { TodoReducer } from "./TodoReducer";

export const TodoContext = React.createContext();

const initialState = {
    todos: [
      { id: 1, todo: 'Flower' },
      { id: 2, todo: 'Salary'},
      { id: 3, todo: 'Book'},
      { id: 4, todo: 'Camera'},
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