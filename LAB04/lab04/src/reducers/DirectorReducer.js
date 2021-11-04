export const directorReducer = (state=[], action)=>{
    switch(action.type){
        case 'DIRECTOR_ADD':
            return [...state, action.payload];
        case 'DIRECTOR_EDIT':
            return [...state.map(function(item){return item.id === action.payload.id ? {id: item.id, firstname: action.payload.firstname, lastname: action.payload.lastname, age: action.payload.age, } : {...item}})]
        default:
            return state;
    }
}