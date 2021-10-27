import { TODO_ADD, TODO_DELETE, TODO_DONE } from "../actions/TodoAction";

export const todoReducer = (state = [], action) =>{
    console.log(action);
    switch(action.type){
        case TODO_ADD:
            return [...state, action.payload];
        case TODO_DELETE:
            return [...state.filter(el => el.id !== action.payload.id)];
        case TODO_DONE:
            return [...state.map(function(item){return item.id === action.payload.id ? {id: item.id, name: item.name, date:item.date,  done:true} : {id: item.id, name: item.name, date:item.date,  done:item.done}})]
        default:
            return state
    }
}