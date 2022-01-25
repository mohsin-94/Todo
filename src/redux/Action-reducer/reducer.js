import { ActionType } from "../Action-type/actionType";

const initialState = {
    taskList: []
}

const reducer = (state = initialState, {type,payload}) => {
    switch(type){
        case ActionType.ADD_TODO: return {
            ...state,
            taskList: [...state.taskList,payload ]
        }
        case ActionType.UPDATE_TODO: return{
            ...state,
            taskList: state.taskList.map(listIt => listIt.id === payload.id ? payload : listIt)
        }
        case ActionType.DELETE_TODO: return {
            ...state,
            taskList: state.taskList.filter(list => list.id !== payload)
        }
        default: return state
    }
}

export default reducer;