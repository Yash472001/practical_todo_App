import { ADD_TODO_ITEM ,REMOVE_TODO_ITEM,REMOVE_TODO_ITEM_ALL} from "./TodoConstants"



export const addTodoItem = (data) => {
    console.log(data);
    return {
        type:ADD_TODO_ITEM,
        payload:data
    }
}

export const removeTodoItem = (data) => {
    return {
        type:REMOVE_TODO_ITEM,
        payload:data
    }
}

export const removeTodoAllItem = (data) => {
    return {
        type:REMOVE_TODO_ITEM_ALL,
        payload:data
    }
}



