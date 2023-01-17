import { ADD_TODO_ITEM ,REMOVE_TODO_ITEM,CHANGED_CHECKED_VAL} from "./TodoConstants";


export const TodoReducer = (state,action) => {
    console.log(state);
    
    switch (action.type) {
        case ADD_TODO_ITEM:
            return {
                ...state,
                todos:[...state.todos,{id:Date.now(),todo:action.payload,checked:false}]
            };

        case REMOVE_TODO_ITEM:
            return {
                ...state,
                todos:state.todos.filter(
                    todos => !todos.checked
                ),
            };

        
        case CHANGED_CHECKED_VAL:
            return {
                ...state,
                todos:state.todos.map((val) => {
                    if(val.id == action.payload){
                        console.log("val : ",val);
                        return {...val,checked:!val.checked}
                    }
                    return {...val}
                    
                })
            };
    
        default:
            return state;
    }
}