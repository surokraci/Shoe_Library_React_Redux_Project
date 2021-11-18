export const actorReducer =(state =[], action)=>{
    switch(action.type){
        case 'ACTOR_ADD':
            return [...state, action.payload];
        case 'ACTOR_DELETE':
            return [...state.filter(el => el.id !== action.payload.id)];
        case 'ACTOR_ADD_TO_MOVIE':
            return [...state.map(function(item){return item.id === action.payload.actor ? {id: item.id, firstname: item.firstname, lastname: item.lastname, age: item.age, movies: [...item.movies, action.payload.id]} : {...item}})]
        case 'REMOVE_ME_FROM_MOVIE':
            return [...state.map(function(item){return item.id === action.payload.actorId ? {id: item.id, firstname: item.firstname, lastname: item.lastname, age: item.age, movies: item.movies.filter(el => el !== action.payload.id)} : {...item}})]
        default:
            return state;

    }
}