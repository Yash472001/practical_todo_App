import { ADD_TODO_ITEM ,REMOVE_TODO_ITEM,REMOVE_TODO_ITEM_ALL} from "./TodoConstants";


export const TodoReducer = (state,action) => {
    console.log(state);
    console.log("action : ",action.payload);
    switch (action.type) {
        case ADD_TODO_ITEM:
            return {
                ...state,
                todos:[...state.todos,{id:state.todos.length+1,todo:action.payload}]
            };

        case REMOVE_TODO_ITEM:
            return {
                ...state,
                todos:state.todos.filter(
                    todos => todos.id !== action.payload
                )
            };
        
        case REMOVE_TODO_ITEM_ALL:
            return {
                ...state
            };
    
        default:
            return state;
    }
}