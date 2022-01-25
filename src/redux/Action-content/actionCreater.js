import { ActionType } from "../Action-type/actionType";

export const addTodo = (list,textarea) => {
    return {
        type: ActionType.ADD_TODO,
        payload: {
            label: list,
            description: textarea,
            id: Math.random().toString(16).slice(2)
        }
    }
}

export const updateTodo = (list,textarea,id) => {
    return{
        type: ActionType.UPDATE_TODO,
        payload: {
            label: list,
            description: textarea,
            id:id
        }
    }
}

export const deleteTodo = (list) => {
    return {
        type: ActionType.DELETE_TODO,
        payload: list
    }
}