

export default function to_do(state ={todos: [], notes: []}, action){
    console.log(state);
    switch(action.type){
        case 'ADD_TODO':
            return {...state, todos: [...state.todos, action.payload]};
        case 'DELETE_TODO':
            return {...state, todos: [...state.todos.filter(x=>x.id !== action.payload.id)]};
        case 'UPDATE_TODO':
            return {...state, todos:[...state.todos.map(function(item){return item.id == action.payload.id ? {id: item.id, title: action.payload.title ,done: item.done} : {id: item.id, title: item.title, done: item.done} })]}
        case 'FINISH_TODO':
            return {...state, todos:[...state.todos.map(function(item){return item.id == action.payload.id ? {id: item.id, title: item.title, done:true} : {id: item.id, title: item.title, done: false} })]}
        default:
            return state;
    }
}

