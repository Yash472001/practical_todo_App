import { ADD_TODO_ITEM ,REMOVE_TODO_ITEM,CHANGED_CHECKED_VAL} from "./TodoConstants"

export const addTodoItem = (data) => {
    console.log(data);
    return {
        type:ADD_TODO_ITEM,
        payload:data
    }
}

export const removeTodoItem = () => {
    return {
        type:REMOVE_TODO_ITEM,
    }
}

export const changedCheckedVal = (data) => {
    return {
        type:CHANGED_CHECKED_VAL,
        payload:data
    }
}



