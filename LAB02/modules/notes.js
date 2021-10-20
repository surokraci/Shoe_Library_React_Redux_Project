

export default function notes(state ={todos: [], notes: []}, action){
    console.log(state);
    switch(action.type){
        case 'ADD_NOTE':
            return {...state, notes: [...state.notes, action.payload]}
        case 'DELETE_NOTE':
            return {...state, notes: [...state.notes.filter(x=>x.id !== action.payload.id)]}
        default:
            return state;
    }
}
