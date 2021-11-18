export const movieReducer =(state =[], action)=>{
    switch(action.type){
        case 'MOVIE_ADD':
            return [...state, action.payload];
        case 'MOVIE_DELETE':
            return [...state.filter(el => el.id !== action.payload.id)];
        case 'ACTOR_TO_MOVIE':
            return [...state.map(function(item){return item.id === action.payload.id ? {id: item.id, title: item.title, productionYear: item.productionYear, director: item.director, actors: [...item.actors, action.payload.actor]} : {...item}})]
        case 'REMOVE_ACTOR_FROM_MOVIE':
            return [...state.map(function(item){return item.id === action.payload.id ? {id: item.id, title: item.title, productionYear: item.productionYear, director: item.director, actors: item.actors.filter(el => el !== action.payload.actorId)} : {...item}})]
        default:
            return state;

    }
}